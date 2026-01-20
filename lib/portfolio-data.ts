export interface PortfolioItem {
  id: string
  title: string
  description: string
  category: string
  highlightKeyword?: string
  image: string
  technologies: string[]
  demoUrl?: string
  githubUrl?: string
  completionDate?: string
  longDescription?: string
  features?: string[]
  process?: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    "id": "apps-design-1", 
    "title": "Financial Apps UI/UX Design", 
    "description": "A sleek and intuitive UI/UX design crafted for a financial application, focusing on user-friendly data visualization, account management, and real-time insights.", 
    "category": "apps-design",
    "highlightKeyword": "Financial Apps", 
    "image": "/design/app-design-1.png", 
    "technologies": ["Figma", "Figjam", "Photoshop", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "apps-design-2", 
    "title": "iBanking Apps UI/UX Design", 
    "description": "An intuitive iBanking UI/UX for seamless account management, secure transactions, and clear financial insights.", 
    "category": "apps-design",
    "highlightKeyword": "iBanking Apps", 
    "image": "/design/app-design-2.png", 
    "technologies": ["Figma", "Figjam", "Photoshop", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "December 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "apps-design-3", 
    "title": "Fitness Apps UI/UX Design", 
    "description": "An intuitive UI/UX design for a fitness app focused on workout tracking, progress insights, and user-friendly navigation.", 
    "category": "apps-design",
    "highlightKeyword": "Fitness Apps", 
    "image": "/design/app-design-3.png", 
    "technologies": ["Figma", "Figjam", "Photoshop", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "apps-design-4", 
    "title": "E-commerce Apps UI/UX Design", 
    "description": "Clean and modern UI/UX for an e-commerce app, ensuring smooth browsing, easy checkout, and personalized shopping experience.", 
    "category": "apps-design",
    "highlightKeyword": "E-commerce Apps", 
    "image": "/design/app-design-4.png", 
    "technologies": ["Figma", "Figjam", "Photoshop", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "apps-design-5", 
    "title": "Finance Apps UI/UX Design", 
    "description": "Sleek UI/UX for a financial app with clear visuals, easy account management, and real-time insights.", 
    "category": "apps-design",
    "highlightKeyword": "Finance Apps", 
    "image": "/design/app-design-5.png", 
    "technologies": ["Figma", "Figjam", "Photoshop", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "apps-design-6", 
    "title": "Chatbot Apps UI/UX Design", 
    "description": "Smart and simple UI/UX for a chatbot app, enabling smooth conversations and quick user support.", 
    "category": "apps-design",
    "highlightKeyword": "Chatbot Apps", 
    "image": "/design/app-design-6.png", 
    "technologies": ["Figma", "Figjam", "Photoshop", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "apps-design-7", 
    "title": "Fitness Tracking Apps UI/UX Design", 
    "description": "Clean UI/UX for a fitness app with workout tracking, progress monitoring, and goal setting.", 
    "category": "apps-design",
    "highlightKeyword": "Fitness Tracking Apps", 
    "image": "/design/app-design-7.png", 
    "technologies": ["Figma", "Figjam", "Photoshop", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "apps-design-8", 
    "title": "Mental Health Apps UI/UX Design", 
    "description": "Calm and thoughtful UI/UX for a mental health app, supporting mood tracking, journaling, and guided sessions.", 
    "category": "apps-design",
    "highlightKeyword": "Mental Health Apps", 
    "image": "/design/app-design-8.png", 
    "technologies": ["Figma", "Figjam", "Photoshop", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "website-design-1", 
    "title": "Foxbridge Golf Club Website Design", 
    "description": "An elegant and sophisticated website design for Foxbridge Golf Club, featuring course information, membership details, and online booking system with a premium feel.", 
    "category": "web-design",
    "highlightKeyword": "Golf Club", 
    "image": "/design/web-design-1.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Figjam", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "website-design-2", 
    "title": "Search Force Automation – Medical Solutions", 
    "description": "Advanced automation solutions for the medical industry, streamlining search processes and data management to enhance efficiency and accuracy in healthcare systems.", 
    "category": "web-design",
    "highlightKeyword": "Fitness Center", 
    "image": "/design/web-design-2.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Figjam", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "website-design-3", 
    "title": "AI VoiceHealth – Revolutionizing Healthcare with Voice Technology", 
    "description": "Cutting-edge AI-driven voice technology designed to enhance patient care, enable voice-based health monitoring, and provide seamless communication for healthcare providers.", 
    "category": "web-design",
    "highlightKeyword": "Tech Hub", 
    "image": "/design/web-design-3.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Figjam", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "website-design-4", 
    "title": "Gym Video Library – Your Fitness Resource Hub", 
    "description": "A comprehensive video library for gyms, offering a variety of workout routines, fitness tips, and instructional videos to guide members in their fitness journey.", 
    "category": "web-design",
    "highlightKeyword": "Organic Market", 
    "image": "/design/web-design-4.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Figjam", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "website-design-5", 
    "title": "Corporate Website Theme – Professional & Modern", 
    "description": "A sleek and professional corporate website theme designed to enhance brand presence, streamline business communications, and create a polished online identity.", 
    "category": "web-design",
    "highlightKeyword": "Art Gallery", 
    "image": "/design/web-design-5.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Figjam", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "website-design-6", 
    "title": "SaaS Landing Page – Converting Visitors into Customers", 
    "description": "A clean and impactful SaaS landing page design focused on showcasing product features, driving conversions, and providing a seamless user experience.", 
    "category": "web-design",
    "highlightKeyword": "Travel Agency", 
    "image": "/design/web-design-6.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Figjam", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "website-design-7", 
    "title": "Medical Message Template – Clear & Compassionate Communication", 
    "description": "A professional and empathetic message template for medical practices, designed to deliver appointment reminders, test results, and important health updates.", 
    "category": "web-design",
    "highlightKeyword": "Smart Home", 
    "image": "/design/web-design-7.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Figjam", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "website-design-8", 
    "title": "Store Solution – Optimized for Retail Success", 
    "description": "A comprehensive store solution designed to streamline inventory management, enhance customer experience, and drive sales with easy-to-use tools and features.", 
    "category": "web-design",
    "highlightKeyword": "Medical Center", 
    "image": "/design/web-design-8.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Figjam", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "website-design-9", 
    "title": "Tylor Alumni – Connecting Graduates, Building Networks", 
    "description": "A dynamic platform for Tylor Alumni, designed to foster connections, share opportunities, and keep graduates engaged with events, news, and networking.", 
    "category": "web-design",
    "highlightKeyword": "Education", 
    "image": "/design/web-design-9.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Figjam", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "website-design-10", 
    "title": "Nirmansource – Building the Future with Quality Materials", 
    "description": "A reliable platform for Nirmansource, offering high-quality construction materials, innovative solutions, and resources to support builders and developers.", 
    "category": "web-design",
    "highlightKeyword": "Restaurant", 
    "image": "/design/web-design-10.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Figjam", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "website-design-11", 
    "title": "IT Company – Driving Innovation and Technology", 
    "description": "A forward-thinking IT company providing cutting-edge solutions, software development, and technology services to help businesses stay ahead in the digital world.", 
    "category": "web-design",
    "highlightKeyword": "Fashion Boutique", 
    "image": "/design/web-design-11.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Figjam", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "website-design-12", 
    "title": "Group of Companies – Diversified Business Excellence", 
    "description": "A dynamic group of companies offering a wide range of services across various industries, committed to innovation, quality, and sustainable growth.", 
    "category": "web-design",
    "highlightKeyword": "Auto Service", 
    "image": "/design/web-design-12.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Figjam", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "website-design-13", 
    "title": "Waywise Job Opportunity – Join Our Innovative Team", 
    "description": "Exciting career opportunity at Waywise Tech! We are looking for skilled professionals to help drive innovation and success in our growing IT company.", 
    "category": "web-design",
    "highlightKeyword": "Veterinary Clinic", 
    "image": "/design/web-design-13.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Figjam", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "website-design-14", 
    "title": "Air Ticket Solutions - Seamless Travel Booking Platform",
    "description": "A comprehensive air ticket booking platform providing convenient flight search, secure reservations, and travel management tools for a hassle-free booking experience.",
    "category": "web-design",
    "highlightKeyword": "Landscaping", 
    "image": "/design/web-design-14.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Figjam", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "website-design-15", 
    "title": "Plant – Nurturing Growth and Sustainability", 
    "description": "A green-focused platform offering a variety of plants, gardening tips, and sustainable solutions to help you create a thriving, eco-friendly environment.", 
    "category": "web-design",
    "highlightKeyword": "Tech Repair", 
    "image": "/design/web-design-15.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Figjam", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "website-design-16", 
    "title": "Financial Website – Secure and Insightful Financial Solutions", 
    "description": "A user-friendly financial website offering comprehensive tools, resources, and expert insights to help individuals and businesses manage their finances effectively.", 
    "category": "web-design",
    "highlightKeyword": "Music Academy", 
    "image": "/design/web-design-16.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Figjam", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "branding-1", 
    "title": "Divo Branding – Bold Identity Design", 
    "description": "Creative and cohesive branding for Divo, featuring a bold visual identity, modern typography, and versatile logo applications across digital and print.", 
    "category": "branding",
    "highlightKeyword": "Logo Design", 
    "image": "/design/branding-1.png", 
    "technologies": ["Illustrator", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "branding-2", 
    "title": "FifthSip Coffee Shop – Warm & Inviting Branding", 
    "description": "Charming and cozy branding for FifthSip Coffee Shop, featuring a warm color palette, hand-crafted logo, and a welcoming atmosphere for coffee lovers.", 
    "category": "branding",
    "highlightKeyword": "Logo Design", 
    "image": "/design/branding-2.png", 
    "technologies": ["Illustrator", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "branding-3", 
    "title": "NTREX AI Connection – Cutting-Edge AI Solutions", 
    "description": "Innovative and powerful branding for NTREX AI Connection, showcasing advanced AI-driven technologies that connect businesses with intelligent automation and data insights.", 
    "category": "branding",
    "highlightKeyword": "Brand Guideline", 
    "image": "/design/branding-3.png", 
    "technologies": ["Illustrator", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "branding-4", 
    "title": "Matrixa Health – Empowering Wellness through Technology", 
    "description": "Modern and sleek branding for Matrixa Health, blending technology with wellness to provide innovative health solutions, personalized care, and real-time health monitoring.", 
    "category": "branding",
    "highlightKeyword": "Medical Logo", 
    "image": "/design/branding-4.png", 
    "technologies": ["Illustrator", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "email-template-1", 
    "title": "Helping Australia – Supportive Email Template", 
    "description": "A simple and impactful email template for Helping Australia, designed to engage and inspire support for local causes.", 
    "category": "email-template",
    "highlightKeyword": "Sass Email Template", 
    "image": "/design/email-template-1.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "email-template-2", 
    "title": "HR Email Template – Streamlining Communication", 
    "description": "A polished and efficient HR email template designed to simplify recruitment, onboarding, and employee updates.", 
    "category": "email-template",
    "highlightKeyword": "HR Email Template", 
    "image": "/design/email-template-2.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "email-template-3", 
    "title": "Event Management Email Template", 
    "description": "A professional and engaging email template for event management, designed to streamline communication, invite attendees, and manage event details.", 
    "category": "email-template",
    "highlightKeyword": "Event Management", 
    "image": "/design/email-template-3.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "email-template-4", 
    "title": "Yoga Email Template – Tranquil and Inviting", 
    "description": "A calming and welcoming email template for yoga studios, designed to promote classes, events, and wellness tips with a peaceful tone.", 
    "category": "email-template",
    "highlightKeyword": "Yoga", 
    "image": "/design/email-template-4.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "email-template-5", 
    "title": "Community Email Template – Building Connections", 
    "description": "A warm and engaging email template designed to foster communication, promote local events, and strengthen community bonds.", 
    "category": "email-template",
    "highlightKeyword": "Community", 
    "image": "/design/email-template-5.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "email-template-6", 
    "title": "Blink Email Build – Fast and Effective Communication", 
    "description": "A sleek and responsive email template for Blink, designed to deliver quick updates, announcements, and notifications with ease.", 
    "category": "email-template",
    "highlightKeyword": "Email Build", 
    "image": "/design/email-template-6.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "apps-design-9",
    "title": "Food Delivery Apps UI/UX Design",
    "description": "Modern and intuitive food delivery app design featuring seamless ordering, real-time tracking, and personalized restaurant recommendations.",
    "category": "apps-design",
    "highlightKeyword": "Food Delivery Apps",
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    "technologies": ["Figma", "Sketch", "Adobe XD", "Principle"],
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "January 2024",
    "features": [
      "Real-time order tracking",
      "Smart restaurant recommendations",
      "Multiple payment options",
      "Loyalty rewards system"
    ]
  },
  {
    "id": "apps-design-10",
    "title": "Travel Booking Apps UI/UX Design",
    "description": "Comprehensive travel booking app with flight, hotel, and activity reservations, featuring interactive maps and itinerary planning.",
    "category": "apps-design",
    "highlightKeyword": "Travel Booking Apps",
    "image": "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
    "technologies": ["Figma", "Figjam", "Photoshop", "InVision"],
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "February 2024",
    "features": [
      "Multi-destination booking",
      "Interactive travel maps",
      "Price comparison tools",
      "Offline itinerary access"
    ]
  },
  {
    "id": "apps-design-11",
    "title": "Music Streaming Apps UI/UX Design",
    "description": "Elegant music streaming app design with personalized playlists, social sharing features, and high-quality audio controls.",
    "category": "apps-design",
    "highlightKeyword": "Music Streaming Apps",
    "image": "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    "technologies": ["Figma", "Sketch", "Photoshop", "After Effects"],
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "March 2024",
    "features": [
      "AI-powered recommendations",
      "Collaborative playlists",
      "Lyrics integration",
      "Cross-device synchronization"
    ]
  },
  {
    "id": "apps-design-12",
    "title": "Language Learning Apps UI/UX Design",
    "description": "Interactive language learning app with gamified lessons, speech recognition, and progress tracking for effective language acquisition.",
    "category": "apps-design",
    "highlightKeyword": "Language Learning Apps",
    "image": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80",
    "technologies": ["Figma", "Adobe XD", "Illustrator", "Principle"],
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "April 2024",
    "features": [
      "Gamified learning modules",
      "Speech recognition practice",
      "Cultural context lessons",
      "Daily streak tracking"
    ]
  },
  {
    "id": "apps-design-13",
    "title": "Smart Home Control Apps UI/UX Design",
    "description": "Intuitive smart home control app for managing IoT devices, automation schedules, and energy monitoring from a single interface.",
    "category": "apps-design",
    "highlightKeyword": "Smart Home Apps",
    "image": "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
    "technologies": ["Figma", "Sketch", "Photoshop", "Framer"],
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "May 2024",
    "features": [
      "Multi-device control",
      "Automation scheduling",
      "Energy usage analytics",
      "Voice command integration"
    ]
  },
  {
    "id": "apps-design-14",
    "title": "Meditation & Mindfulness Apps UI/UX Design",
    "description": "Calming meditation app design with guided sessions, breathing exercises, and sleep stories for mental wellness.",
    "category": "apps-design",
    "highlightKeyword": "Meditation Apps",
    "image": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    "technologies": ["Figma", "Adobe XD", "Photoshop", "Principle"],
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "June 2024",
    "features": [
      "Guided meditation sessions",
      "Breathing exercise timers",
      "Sleep story library",
      "Mood tracking journal"
    ]
  },
  {
    "id": "web-design-17",
    "title": "Real Estate Platform – Modern Property Showcase",
    "description": "A sophisticated real estate platform featuring advanced property search, virtual tours, and comprehensive listing management for buyers and sellers.",
    "category": "web-design",
    "highlightKeyword": "Real Estate",
    "image": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    "technologies": ["Figma", "Illustrator", "Photoshop", "Webflow"],
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "January 2024",
    "features": [
      "Advanced property filters",
      "Virtual tour integration",
      "Mortgage calculator",
      "Neighborhood insights"
    ]
  },
  {
    "id": "web-design-18",
    "title": "Online Learning Platform – Education Reimagined",
    "description": "A comprehensive e-learning platform with interactive courses, live sessions, progress tracking, and certification programs.",
    "category": "web-design",
    "highlightKeyword": "E-Learning",
    "image": "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    "technologies": ["Figma", "Adobe XD", "Photoshop", "Sketch"],
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "February 2024",
    "features": [
      "Interactive video lessons",
      "Live instructor sessions",
      "Progress dashboards",
      "Digital certification"
    ]
  },
  {
    "id": "web-design-19",
    "title": "Cryptocurrency Exchange – Secure Trading Platform",
    "description": "A professional cryptocurrency exchange platform with real-time trading, advanced charts, and secure wallet integration.",
    "category": "web-design",
    "highlightKeyword": "Crypto Exchange",
    "image": "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80",
    "technologies": ["Figma", "Sketch", "Illustrator", "Photoshop"],
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "March 2024",
    "features": [
      "Real-time price charts",
      "Multi-currency support",
      "Two-factor authentication",
      "Trading analytics dashboard"
    ]
  },
  {
    "id": "web-design-20",
    "title": "Recipe & Cooking Blog – Culinary Inspiration Hub",
    "description": "A beautifully designed recipe blog featuring step-by-step cooking guides, ingredient calculators, and community recipe sharing.",
    "category": "web-design",
    "highlightKeyword": "Food Blog",
    "image": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
    "technologies": ["Figma", "Photoshop", "Illustrator", "WordPress"],
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "April 2024",
    "features": [
      "Recipe search filters",
      "Ingredient scaling",
      "Cooking timers",
      "User recipe submissions"
    ]
  },
  {
    "id": "web-design-21",
    "title": "Nonprofit Organization – Making a Difference Together",
    "description": "An inspiring nonprofit website designed to showcase impact stories, facilitate donations, and engage volunteers in meaningful causes.",
    "category": "web-design",
    "highlightKeyword": "Nonprofit",
    "image": "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
    "technologies": ["Figma", "Adobe XD", "Photoshop", "Webflow"],
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "May 2024",
    "features": [
      "Impact story showcase",
      "Donation management",
      "Volunteer registration",
      "Event calendar"
    ]
  },
  {
    "id": "web-design-22",
    "title": "Photography Portfolio – Visual Storytelling",
    "description": "A stunning photography portfolio website with full-screen galleries, client proofing, and booking system for professional photographers.",
    "category": "web-design",
    "highlightKeyword": "Photography",
    "image": "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80",
    "technologies": ["Figma", "Photoshop", "Illustrator", "Squarespace"],
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "June 2024",
    "features": [
      "Full-screen galleries",
      "Client proofing system",
      "Online booking",
      "Print shop integration"
    ]
  },
  {
    "id": "web-design-23",
    "title": "Coworking Space – Collaborative Work Environment",
    "description": "A modern coworking space website featuring desk booking, community events, and membership management for flexible workspaces.",
    "category": "web-design",
    "highlightKeyword": "Coworking",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    "technologies": ["Figma", "Sketch", "Photoshop", "Webflow"],
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "July 2024",
    "features": [
      "Desk booking system",
      "Member directory",
      "Event management",
      "Virtual office tours"
    ]
  },
  {
    "id": "web-design-24",
    "title": "Pet Care Services – Love & Care for Your Pets",
    "description": "A friendly pet care website offering grooming, boarding, and veterinary services with online appointment scheduling.",
    "category": "web-design",
    "highlightKeyword": "Pet Care",
    "image": "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&q=80",
    "technologies": ["Figma", "Adobe XD", "Photoshop", "WordPress"],
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "August 2024",
    "features": [
      "Online appointment booking",
      "Service packages",
      "Pet health records",
      "Customer testimonials"
    ]
  },
  {
    "id": "branding-5",
    "title": "EcoGreen Solutions – Sustainable Brand Identity",
    "description": "Eco-friendly branding for EcoGreen Solutions, featuring organic shapes, earth tones, and a commitment to environmental sustainability.",
    "category": "branding",
    "highlightKeyword": "Eco Branding",
    "image": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    "technologies": ["Illustrator", "Photoshop", "InDesign"],
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "January 2024",
    "features": [
      "Sustainable design principles",
      "Organic visual elements",
      "Eco-friendly color palette",
      "Recyclable packaging design"
    ]
  },
  {
    "id": "branding-6",
    "title": "TechNova Startup – Innovative Tech Branding",
    "description": "Bold and futuristic branding for TechNova, a cutting-edge tech startup with a focus on innovation, scalability, and modern aesthetics.",
    "category": "branding",
    "highlightKeyword": "Tech Startup",
    "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    "technologies": ["Illustrator", "Photoshop", "After Effects"],
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "February 2024",
    "features": [
      "Modern logo design",
      "Tech-inspired color scheme",
      "Scalable brand assets",
      "Motion graphics elements"
    ]
  },
  {
    "id": "branding-7",
    "title": "Artisan Bakery – Handcrafted Brand Experience",
    "description": "Warm and inviting branding for Artisan Bakery, celebrating traditional baking with rustic typography and artisanal design elements.",
    "category": "branding",
    "highlightKeyword": "Bakery Branding",
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    "technologies": ["Illustrator", "Photoshop", "InDesign"],
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "March 2024",
    "features": [
      "Handcrafted logo design",
      "Rustic typography",
      "Packaging design",
      "Brand storytelling"
    ]
  },
  {
    "id": "branding-8",
    "title": "Luxury Spa Retreat – Premium Wellness Branding",
    "description": "Elegant and sophisticated branding for a luxury spa retreat, featuring calming colors, refined typography, and premium materials.",
    "category": "branding",
    "highlightKeyword": "Spa Branding",
    "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
    "technologies": ["Illustrator", "Photoshop", "InDesign"],
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "April 2024",
    "features": [
      "Luxury brand identity",
      "Calming color palette",
      "Premium stationery",
      "Spa menu design"
    ]
  },
  {
    "id": "branding-9",
    "title": "Urban Streetwear – Bold Fashion Identity",
    "description": "Edgy and contemporary branding for Urban Streetwear, capturing the essence of street culture with bold graphics and urban aesthetics.",
    "category": "branding",
    "highlightKeyword": "Fashion Branding",
    "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&q=80",
    "technologies": ["Illustrator", "Photoshop", "After Effects"],
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "May 2024",
    "features": [
      "Street-inspired graphics",
      "Bold typography",
      "Apparel mockups",
      "Social media templates"
    ]
  },
  {
    "id": "email-template-7",
    "title": "E-commerce Newsletter – Boost Your Sales",
    "description": "A conversion-focused e-commerce newsletter template featuring product showcases, promotional banners, and clear call-to-action buttons.",
    "category": "email-template",
    "highlightKeyword": "E-commerce Newsletter",
    "image": "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    "technologies": ["Figma", "HTML", "CSS", "Mailchimp"],
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "January 2024",
    "features": [
      "Product showcase grid",
      "Promotional banners",
      "Mobile-responsive design",
      "Clear CTA buttons"
    ]
  },
  {
    "id": "email-template-8",
    "title": "Corporate Newsletter – Professional Updates",
    "description": "A clean and professional corporate newsletter template for company updates, industry news, and employee highlights.",
    "category": "email-template",
    "highlightKeyword": "Corporate Newsletter",
    "image": "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
    "technologies": ["Figma", "HTML", "CSS", "Campaign Monitor"],
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "February 2024",
    "features": [
      "News section layout",
      "Employee spotlights",
      "Event announcements",
      "Social media integration"
    ]
  },
  {
    "id": "email-template-9",
    "title": "Welcome Email Series – Onboarding Made Easy",
    "description": "A friendly welcome email series template designed to onboard new users, introduce features, and drive engagement.",
    "category": "email-template",
    "highlightKeyword": "Welcome Series",
    "image": "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80",
    "technologies": ["Figma", "HTML", "CSS", "SendGrid"],
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "March 2024",
    "features": [
      "Multi-step onboarding",
      "Feature highlights",
      "Getting started guide",
      "Support resources"
    ]
  },
  {
    "id": "email-template-10",
    "title": "Seasonal Campaign – Holiday Promotions",
    "description": "A festive seasonal email template perfect for holiday campaigns, special offers, and limited-time promotions.",
    "category": "email-template",
    "highlightKeyword": "Seasonal Campaign",
    "image": "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&q=80",
    "technologies": ["Figma", "HTML", "CSS", "Klaviyo"],
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "April 2024",
    "features": [
      "Festive design elements",
      "Countdown timers",
      "Gift guide sections",
      "Discount code display"
    ]
  },
  
]


export const sectionInfo = {
  "apps-design": {
    "title": "Apps Design",
    "description": "Explore my apps design projects with a focus on user experience and design."
  },
  "web-design": {
    "title": "Web Design",
    "description": "Discover my web design projects showcasing modern, responsive websites and digital experiences."
  },
  "branding": {
    "title": "Branding",
    "description": "Discover my branding projects with a range of features and capabilities."
  },
  "email-template": {
    "title": "Email Template",
    "description": "Check out my email template projects with a focus on user experience and design."
  },
}
