# Role-Based Access Control (RBAC)

## Overview

The Role-Based Access Control (RBAC) is a full-stack application built with Java Spring Boot for the backend and Angular for the frontend. 
This application provides an admin dashboard to efficiently manage users, roles, and permissions. 
It ensures a secure and user-friendly interface for administrators to control access dynamically.

## Features

**User Management:**

Add, edit, and delete users.
Assign roles to users.
Manage user statuses (Active/Inactive).

**Role Management:**

Create, view, and edit roles.
Assign permissions (Read, Write, Delete) to roles.

**Dynamic Permissions:**

Modify permissions for roles dynamically.
Clear and interactive permission display.

## Technologies Used

**Backend:**

- Java
- Spring Boot
- Hibernate
- JPA Repository
- MySQL Database

**Frontend:**

- HTML
- CSS
- JavaScript
- Angular

## Installation

**Prerequisites**

- JDK 11 or higher
- MySQL Database
- Angular 16 and npm

**Clone the Repository**

- git clone https://github.com/Nikhilslohar543/RBAC-Project.git
- cd Role Based Access Control (RBAC)

## 1.Backend Setup

**1. Navigate to the backend directory:**

- cd RBAC-Application(Backend)
  
**2. Update the application.properties file with your MySQL database credentials:**

- spring.datasource.url=jdbc:mysql://localhost:3306/yourdbname
- spring.datasource.username=yourusername
- spring.datasource.password=yourpassword

**3. Build and run the Spring Boot application**

- ./mvnw clean install
- ./mvnw spring-boot:run

## 2.Frontend Setup

**1. Navigate to the frontend directory:**

- cd RBAC-Application

**2. Install the required dependencies:**

- npm install

**3. Start the Angular application:**

- ng serve

**4. Open your browser and go to: http://localhost:4200**

## Usage

- **User creation:** Create a new user.
- **Manage Users:** Add, update, delete users, assign roles, and toggle statuses.
- **Manage Roles:** Define roles and dynamically assign permissions.

## Acknowledgments

- Inspired by modern admin dashboards.
- Thanks to the community for open-source tools and frameworks.
