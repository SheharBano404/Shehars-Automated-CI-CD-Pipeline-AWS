const triggerBtn = document.getElementById('trigger-btn');
const logsDiv = document.getElementById('logs');
const statusBadge = document.querySelector('.status-badge');

const updateStatus = (text, color) => {
    statusBadge.innerText = text;
    statusBadge.style.color = color;

    statusBadge.style.background = color + "20"; 
    statusBadge.style.boxShadow = `0 0 10px ${color}40`; 
};

triggerBtn.addEventListener('click', () => {
    logsDiv.innerHTML = '';
    
    triggerBtn.disabled = true;
    triggerBtn.querySelector('.btn-text').innerText = "RUNNING...";
    
    updateStatus("Initializing...", "#94a3b8"); 

    const getTime = () => {
        const d = new Date();
        return `[${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}:${d.getSeconds().toString().padStart(2, '0')}]`;
    };

    const addLog = (msg, isSuccess) => {
        const p = document.createElement('p');
        p.classList.add('log-entry');
        if(isSuccess) p.classList.add('success-text');
        
        p.innerHTML = `<span class="timestamp">${getTime()}</span> ${msg}`;
        logsDiv.appendChild(p);
        logsDiv.scrollTop = logsDiv.scrollHeight;
    };

    addLog("Pipeline triggered by user...");

    fetch('/api/trigger-pipeline')
        .then(res => res.json())
        .then(data => {
            let i = 0;
            const interval = setInterval(() => {
                if (i < data.steps.length) {
                    const currentStep = data.steps[i];
                    addLog(currentStep);

                    if (currentStep.includes("SonarQube")) {
                        updateStatus("Testing...", "#eab308"); 
                    } 
                    else if (currentStep.includes("Docker")) {
                        updateStatus("Building...", "#f97316"); 
                    } 
                    else if (currentStep.includes("Deploying")) {
                        updateStatus("Deploying...", "#a855f7"); 
                    }
                    else if (currentStep.includes("Jenkins")) {
                        updateStatus("Orchestrating...", "#3b82f6"); 
                    }

                    i++;
                } else {
                    clearInterval(interval);
                    addLog(data.finalMessage, true);
                    
                    updateStatus("Success", "#22c55e"); 
                    setTimeout(() => {
                        triggerBtn.disabled = false;
                        triggerBtn.querySelector('.btn-text').innerText = "INITIATE_BUILD";
                        
                        statusBadge.innerText = "Idle";
                        statusBadge.style.color = "#fff";
                        statusBadge.style.background = "rgba(255,255,255,0.05)";
                        statusBadge.style.boxShadow = "none";
                    }, 3000);
                }
            }, 1000);
        })
        .catch(err => {
            addLog("Error: Connection Failed.", false);
            triggerBtn.disabled = false;
            triggerBtn.querySelector('.btn-text').innerText = "RETRY";
            updateStatus("Failed", "#ef4444"); 
        });
});