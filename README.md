# WarrantBuddy: AI-Powered Digital Warrant Management System

**WarrantBuddy** is an innovative platform designed to streamline and modernize the warrant management process. The project integrates cutting-edge technologies like AI-powered chatbots, secure authentication, and role-based access control to ensure a seamless and efficient experience for all stakeholders involved in warrant processing.

It enhances transparency and reduces the inefficiencies of traditional warrant processing systems. This application caters to multiple user roles, including Judges, Police Officers, Lawyers, and Citizens, providing them with dedicated dashboards and functionalities like issuing, viewing, and managing warrants digitally.  
The **SuperUser** role is responsible for assigning roles (other than Citizen) to users, ensuring that only legitimate profiles are created on the platform.

---
AWS Deployement Working Prototype Video Link - https://github.com/user-attachments/assets/b87288c7-4f94-4990-8314-cea9c9be4122

## Key Highlights
- **AI-powered chatbot** for user interaction.
- **Secure authentication** and role-based access control.
- Reduction in paperwork and processing time by over **50%**.
- Easy integration with external systems using APIs.
- **Digital signatures** for legal authenticity.
- Validated **warrant copy download** for offline use.

---

## Role-Based Functionalities

### Citizen
- View warrants issued against you and your close relatives.
- Track warrants using your **Aadhar Card**.
- Stay informed about **fraudulent calls** and **spam messages** threatening legal actions.
- **username:** User@gmail.com  
- **password:** superpassword

### Lawyer
- Submit **bail applications**.
- Assist clients with legal processes via the dashboard.
- **username:** Lawyer@gmail.com  
- **password:** superpassword

### Police
- Access warrants issued for your respective **Police Station**.
- Track real-time data and take actions accordingly.
- Process bail requests forwarded to your Police Station.
- **username:** Police@gmail.com  
- **password:** superpassword

### Judge
- Issue warrants against an accused.
- Approve or reject bail requests.
- Digitally sign documents and provide an authorized copy to beneficiaries.
- **username:** Judge@gmail.com  
- **password:** superpassword

### SuperUser
- Manage users and system configurations.
- Create, delete, and update user roles for platform users.
- **username:** superuser@gmail.com  
- **password:** superpassword

---

## Technology Stack

### Frontend
- **Framework:** Next.js
- **UI Library:** Tailwind CSS

### Backend
- **Framework:** Node.js with Express.js
- **Database:** MongoDB (using Mongoose ORM)
- **Authentication:** NextAuth.js for secure login and session management

### Additional Features
- **AI-Powered Chatbot:** Gemini PRO API for dynamic PDF generation and chatbot assistance.
- **PDF Management:** React PDF Libraries for digital signatures.

---

## How to Run the Project

### Prerequisites
- **Node.js** installed (v16 or later).
- **MongoDB Atlas** account or a local MongoDB server.
- **Clone this Repo, then "npm i", and then "npm run dev" . 
