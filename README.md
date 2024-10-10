# DCP (Role-Based Access Control) - TypeScript

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

## Description

Le projet **DCP (Role-Based Access Control)** est une application API construite avec **Node.js**, **Express.js**, et **TypeScript** qui met en place un système de contrôle d'accès basé sur les rôles (RBAC). L'application gère les utilisateurs, les rôles, et les autorisations d'accès, permettant des actions spécifiques pour chaque rôle comme **ADMIN**, **BLOGGER**, et **USER**. 

## Fonctionnalités

- Enregistrement des utilisateurs.
- Authentification via JWT.
- Gestion des rôles d'utilisateur (Admin, Blogger, User).
- Contrôle d'accès basé sur les rôles (RBAC).
- Création, modification et suppression des utilisateurs, blogs, et entreprises.
- Intégration avec **MySQL** pour la gestion des données.
- Utilisation de **Docker** pour la base de données MySQL.

## Installation

### Prérequis

- [Node.js](https://nodejs.org/en/) >= v14
- [MySQL](https://www.mysql.com/) ou [Docker](https://www.docker.com/) pour MySQL
- [Postman](https://www.postman.com/) ou un outil similaire pour tester l'API

### Étapes d'installation

1. Clonez le dépôt GitHub :

```bash
git clone https://github.com/username/dcp-ts.git
