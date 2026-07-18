# HarlequinsCC

This repository contains the Harlequins Cricket Club application, built using a microservices architecture with a Spring Boot backend and an Angular frontend.

## Current Technology Stack

This section outlines the current stack and versions used in this project to assist with future upgrades, maintenance, and onboarding.

### Backend (Microservices)
- **Java**: 17
- **Spring Boot**: 3.1.1
- **Spring Cloud**: 2022.0.3
- **Build Tool**: Gradle
- **Database**: MySQL (Connector version 8.0.33)
- **Key Libraries/Dependencies**:
  - Spring Security (with JWT - `io.jsonwebtoken` 0.12.3)
  - Spring Data JPA
  - Lombok (1.18.28)
  - ModelMapper (3.1.1)

#### Microservices Overview
- `config-server`: Centralized configuration management using Spring Cloud Config.
- `eureka-server`: Service discovery and registry using Netflix Eureka.
- `api-gateway`: API Gateway for routing and filtering.
- `members-service`: Core service managing member-related data and operations.
- `parking-service`: Core service managing parking-related operations.

### Frontend (`quinscc-app`)
- **Framework**: Angular 16.1.0
- **Angular CLI**: ~16.1.4
- **TypeScript**: ~5.1.3
- **UI Components**: Angular Material (`@angular/material` 16.1.4)
- **Node.js**: Ensure compatibility with Angular 16.

## Features

This application includes the following features (some currently in development):

- **Club Website**: Public-facing pages including a dynamic news carousel, video highlights, and squad/staff profiles.
- **Member Management**: Registration and login system using JWT-based authentication with secure password hashing.
- **Parking Management**: A backend microservice for stadium parking management.
- **Robust Architecture**: Built with centralized configuration, API Gateway routing, and Netflix Eureka service discovery for a scalable microservices foundation.

