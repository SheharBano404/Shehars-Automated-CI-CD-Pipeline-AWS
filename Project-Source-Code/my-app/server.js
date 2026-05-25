const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/trigger-pipeline', (req, res) => {

    setTimeout(() => {
        res.json({
            id: "BUILD-" + Math.floor(Math.random() * 10000),
            status: "Success",
            steps: [
                "⬇️ Fetching source code from GitHub. ..",
                "📦 Installing dependencies (npm install). ..",
                "🐳 Building Docker Image. ..",
                "✅ Running Unit Tests (Pass). ..",
                "🚀 Deploying to Production Server. .."
            ],
            finalMessage: "Yahoo! Pipeline execution successful! My Website is live."
        });
    }, 1000);
});

app.listen(port, () => {
    console.log(`DevOps Server running at http://localhost:${port}`);
});