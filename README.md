# 🚀 Automated CI/CD Pipeline: Code-to-Cloud

[![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/your-username/your-repo/blob/main/LICENSE)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]()
[![Docker](https://img.shields.io/badge/docker-containerized-blue.svg)]()
[![Jenkins](https://img.shields.io/badge/jenkins-orchestrated-red.svg)]()
[![SonarQube](https://img.shields.io/badge/sonarqube-quality_gate-yellow.svg)]()
[![AWS](https://img.shields.io/badge/aws-ec2_deployed-orange.svg)]()

This project demonstrates a robust **CI/CD (Continuous Integration & Continuous Deployment)** workflow. [cite_start]The goal is to standardize the delivery process, ensuring every code change is automatically built, tested for quality, and deployed without manual intervention[cite: 24, 25].

---

## 🏗 Workflow Architecture
![Workflow Diagram](<img width="1535" height="861" alt="image" src="https://github.com/user-attachments/assets/dc989269-35f6-480a-911b-bdd635e124ba" />)

### **The Pipeline Process:**
* [cite_start]**Code Push**: Developer pushes code to GitHub[cite: 33].
* [cite_start]**Webhook Trigger**: GitHub notifies Jenkins automatically[cite: 35].
* [cite_start]**Automated Audit**: SonarQube scans code for bugs and security vulnerabilities[cite: 39].
* [cite_start]**Environment Cleanup**: Jenkins removes old containers to prevent port conflicts[cite: 42, 43].
* [cite_start]**Containerization**: Docker builds a fresh image for the updated application[cite: 45].
* [cite_start]**Deployment**: The new container runs live on AWS EC2[cite: 48].

---

## 💻 Tech Stack & Tools
![GitHub](https://img.shields.io/badge/GITHUB-181717?style=for-the-badge&logo=github&logoColor=white)
![Jenkins](https://img.shields.io/badge/JENKINS-D24939?style=for-the-badge&logo=jenkins&logoColor=white)
![SonarQube](https://img.shields.io/badge/SONARQUBE-4E9BCD?style=for-the-badge&logo=sonarqube&logoColor=white)
![Docker](https://img.shields.io/badge/DOCKER-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Ubuntu](https://img.shields.io/badge/UBUNTU-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)
![SSH](https://img.shields.io/badge/SSH-666666?style=for-the-badge&logo=ssh&logoColor=white)

---

## 🛡 Resource Cleanup
To prevent unnecessary AWS billing, ensure you perform these steps:
* 🛑 **Terminate** EC2 Instances.
* 🗑 **Delete** Security Groups.
* 🌐 **Release** all reserved Elastic IPs.
* 🔑 **Delete** SSH Key Pairs.

---

## 👨‍💻 Author
**Shehar Bano**
*Passionate about DevOps, Cloud Automation, and Clean Code.*

## 📄 License
This project is licensed under the **MIT License**.

---
*May your builds be green and your latency low!*(✿◡‿◡)
---
