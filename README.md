# 🚀 Automated CI/CD Pipeline: Code-to-Cloud

[![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/your-username/your-repo/blob/main/LICENSE)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]()
[![Docker](https://img.shields.io/badge/docker-containerized-blue.svg)]()
[![Jenkins](https://img.shields.io/badge/jenkins-orchestrated-red.svg)]()
[![SonarQube](https://img.shields.io/badge/sonarqube-quality_gate-yellow.svg)]()
[![AWS](https://img.shields.io/badge/aws-ec2_deployed-orange.svg)]()
[![Automation](https://img.shields.io/badge/automation-fully_enabled-green.svg)]()
[![Reliability](https://img.shields.io/badge/reliability-99.9%25_uptime-blue.svg)]()
[![Scalability](https://img.shields.io/badge/scalability-cloud_native-purple.svg)]()

This project demonstrates a robust **CI/CD (Continuous Integration & Continuous Deployment)** workflow. The goal is to standardize the delivery process, ensuring every code change is automatically built, tested for quality, and deployed without manual intervention.

---

## 🏗 Workflow
<img width="1535" height="861" alt="image" src="https://github.com/user-attachments/assets/dc989269-35f6-480a-911b-bdd635e124ba" />

### **The Pipeline Process:**
* **Code Push**: Developer pushes code to GitHub.
* **Webhook Trigger**: GitHub notifies Jenkins automatically.
* **Automated Audit**: SonarQube scans code for bugs and security vulnerabilities.
* **Environment Cleanup**: Jenkins removes old containers to prevent port conflicts.
* **Containerization**: Docker builds a fresh image for the updated application.
* **Deployment**: The new container runs live on AWS EC2.

---

## 💻 Tech Stack & Tools
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/NODE.JS-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_CODE-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)
![GitHub](https://img.shields.io/badge/GITHUB-181717?style=for-the-badge&logo=github&logoColor=white)
![Jenkins](https://img.shields.io/badge/JENKINS-D24939?style=for-the-badge&logo=jenkins&logoColor=white)
![SonarQube](https://img.shields.io/badge/SONARQUBE-4E9BCD?style=for-the-badge&logo=sonarqube&logoColor=white)
![Ubuntu](https://img.shields.io/badge/UBUNTU-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)
![SSH](https://img.shields.io/badge/SSH-666666?style=for-the-badge&logo=ssh&logoColor=white)
![Docker](https://img.shields.io/badge/DOCKER-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)

---

## 📂 Project Assets
Everything you need to replicate or review this project is included in this repository:

* 📄 **Full Implementation Guide**: Step-by-step documentation for the CI/CD workflow.
* 🖥 **Setup & Pipeline Commands:**: Essential scripts for configuring the automation.
* 🎥 **Demo Walkthrough**: A complete video guide demonstrating the end-to-end pipeline procedure.
* 🛠 **Project Source Code**: The application code and configuration files used for deployment.

---

## 🛡 Resource Cleanup
To prevent unnecessary AWS billing, ensure you perform these steps:
* 🛑 **Terminate** EC2 Instances.
* 🗑 **Delete** Security Groups.
* 🌐 **Release** all reserved Elastic IPs.
* 🔑 **Delete** SSH Key Pairs.

---

## 👩‍💻 Author
**Shehar Bano**
*Passionate about DevOps, Cloud Automation, and Clean Code.*

## 📄 License
This project is licensed under the **MIT License**.

---
*May your builds be green and your latency low!* (✿◡‿◡)

