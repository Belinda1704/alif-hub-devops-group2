# Alif Mentorship Hub

> A comprehensive mentorship and learning platform designed to empower Somali high school students through career guidance, mentorship programs, technology training, and access to higher education opportunities.

## Mission

Alif Mentorship Hub is designed to empower Somali high school students (ages 15-20) through career guidance, mentorship programs, and technology training. We connect students with professionals in software engineering, business, and education to help them discover their potential and access higher education opportunities.

## African Context

In many Somali communities, high school students face significant barriers to accessing mentorship and career guidance resources. Limited infrastructure, geographical isolation, and lack of connections to professional networks prevent talented students from realizing their full potential. Alif Hub addresses this critical gap by creating a digital platform that democratizes access to mentorship, breaking down geographical and socioeconomic barriers. This platform empowers Somali youth to connect with professionals who understand their cultural context and can provide relevant, meaningful guidance for their educational and career journeys. By leveraging technology, we can transform mentorship from a privilege accessible only to a few into a right available to all motivated students.

## Team Members

- Belinda Larose - Team Lead & Frontend Developer
- Amelie Umutoni - Frontend Developer  
- Khaalid Abdillahi - Backend Developer & DevOps Engineer

## Project Overview

Alif Mentorship Hub is a comprehensive mentorship and learning platform designed to empower Somali high school students through career guidance, mentorship programs, technology training, and access to higher education opportunities. The application connects students (ages 15-20) with professionals in software engineering, business, and education to help them discover their potential and access higher education opportunities.

The platform provides secure authentication, application management for mentorship programs, career consultation sessions, technology training workshops, an information hub for scholarships and career paths, and community event participation. Built with modern technologies including React, Django REST Framework, and TailwindCSS, ensuring a scalable, secure, and user-friendly experience.

### Target Users

- **Primary Users**: Somali high school students (ages 15-20), especially from underserved areas, seeking career guidance and mentorship opportunities
- **Secondary Users**: Teachers, mentors, NGOs, parents, and institutions supporting youth development and education

### Core Features

🎯 **Career Consultation Sessions**: One-on-one and group guidance sessions to help students discover their career path and make informed decisions about their future.

👨‍🎓 **Mentorship Program**: Connect students with professionals in software engineering, business, and education who can guide them toward their goals and share valuable insights.

💻 **Technology Training**: Workshops on coding, digital literacy, and innovation skills to prepare students for the digital future and tech careers.

📚 **Information Hub**: Access online resources sharing scholarships, career paths, and university opportunities tailored for Somali students.

🌐 **Community Events**: Participate in school visits, awareness campaigns, and workshops that build community and expand networks.

📋 **Application Management**: Students can submit mentorship applications with required documents (certificates, transcripts, passport photos, recommendation letters).

🔐 **User Authentication**: Secure login system for both students and mentors with role-based access control.

## Technology Stack

### Backend
- **Framework**: Django 5.2.7
- **API**: Django REST Framework 3.16.1
- **Authentication**: JWT (SimpleJWT)
- **Database**: SQLite (development), MySQL (production)
- **File Storage**: Local media files
- **CORS**: django-cors-headers

### Frontend
- **Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Styling**: TailwindCSS 4.1.15
- **Animations**: Framer Motion 12.23.24
- **HTTP Client**: Axios 1.12.2
- **Routing**: React Router DOM 7.9.4

## Getting Started

### Prerequisites
- Python 3.9+
- Node.js 16+
- npm or yarn
- MySQL (for production)

### Installation

1. Clone the repository
```bash
git clone https://github.com/Belinda1704/alif-hub-devops-group2.git
cd alif-hub-devops-group2
```

2. Set up the backend (Django)
```bash
cd alif-hub/backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

3. Set up the frontend (React)
```bash
cd ../frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173` and backend at `http://localhost:8000`

### Usage

1. **For Students**: Sign up as a student, complete your profile, and browse available mentorship programs. Submit your application with required documents (certificates, transcripts, passport photos, and recommendation letters). Book career consultation sessions and join community events
2. **For Mentors**: Sign up as a mentor, create your professional profile, and start guiding students in software engineering, business, or education fields
3. **Career Guidance**: Access one-on-one or group consultation sessions to discover career paths and make informed decisions
4. **Technology Training**: Participate in coding workshops, digital literacy sessions, and innovation skills training
5. **Information Hub**: Explore scholarships, career paths, and university opportunities tailored for Somali students
6. **Community Events**: Join school visits, awareness campaigns, and networking workshops

## Project Structure
```
alif-hub/
├── frontend/              # React application
│   ├── public/
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API services
│   │   ├── context/       # React context providers
│   │   └── utils/         # Utility functions
│   ├── package.json
│   └── vite.config.js
├── backend/                # Django application
│   ├── alifhub/           # Main project settings
│   ├── accounts/          # User authentication
│   ├── mentorship/       # Core mentorship features
│   ├── messaging/        # Messaging functionality
│   └── manage.py
├── .github/
│   └── CODEOWNERS
├── README.md
├── LICENSE
└── .gitignore
```

## Links

- [GitHub Repository](https://github.com/Belinda1704/alif-hub-devops-group2)
- [Project Board](https://github.com/Belinda1704/alif-hub-devops-group2/projects)
- [Issues](https://github.com/Belinda1704/alif-hub-devops-group2/issues)

## License

MIT License - see [LICENSE](LICENSE) file for details
