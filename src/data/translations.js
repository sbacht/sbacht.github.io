export const translations = {
  en: {
    downloadCV: "Download CV",
    email: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
    personalSite: "Personal Site",
    careerHighlights: "Career Highlights",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    core: "Core",
    complementary: "Complementary",
    education: "Education",
    certifications: "Certifications",
    githubActivity: "GitHub Activity",
    liveGithubData: "Live GitHub Data",
    viewProfile: "View Profile →",
    microsoftCertifications: "Microsoft Certifications",
    view: "View",
    light: "Light",
    dark: "Dark",
    about: "About",
    blog: "Blog",
  },
  de: {
    downloadCV: "Lebenslauf herunterladen",
    email: "E-Mail",
    linkedin: "LinkedIn",
    github: "GitHub",
    personalSite: "Persönliche Website",
    careerHighlights: "Karrierehöhepunkte",
    experience: "Berufserfahrung",
    projects: "Projekte",
    skills: "Fähigkeiten",
    core: "Kernkompetenzen",
    complementary: "Zusätzlich",
    education: "Bildung",
    certifications: "Zertifizierungen",
    githubActivity: "GitHub-Aktivität",
    liveGithubData: "Live GitHub-Daten",
    viewProfile: "Profil anzeigen →",
    microsoftCertifications: "Microsoft-Zertifizierungen",
    view: "Anzeigen",
    light: "Hell",
    dark: "Dunkel",
    about: "Über mich",
    blog: "Blog",
  },
};

export const getTranslatedData = (language) => {
  const isGerman = language === 'de';
  
  return {
    title: isGerman ? "Softwareingenieur" : "Software Engineer",
    location: isGerman ? "München, Deutschland" : "Munich, Germany",
    summary: isGerman
      ? "Softwareingenieur mit Übergang von über 10 Jahren Software-Entwicklung und Architektur. Erfahren im Aufbau skalierbarer, Cloud-nativer Plattformen und jetzt konzentriert auf Bereitstellung, Überwachung und Automatisierung von Machine-Learning-Systemen in der Produktion."
      : "Software Engineer transitioning from 10+ years in software engineering and architecture. Experienced in building scalable, cloud-native platforms and now focused on deploying, monitoring, and automating machine learning systems in production.",
    
    highlights: [
      isGerman 
        ? "Architektierte und lieferte Microservices-Plattformen in Versicherungs- und Automobilbereich" 
        : "Architected and delivered microservices platforms in insurance and automotive domains",
      isGerman 
        ? "Praktische Erfahrung mit ML-Pipelines (MLflow, Airflow) und Big Data (Apache Spark)" 
        : "Hands-on experience with ML pipelines (MLflow, Airflow) and big data (Apache Spark)",
      isGerman 
        ? "Erstellte CI/CD-Pipelines auf Azure DevOps, um Deployment-Zeit zu reduzieren und Qualität zu verbessern" 
        : "Built CI/CD pipelines on Azure DevOps to cut deployment time and improve quality",
      isGerman 
        ? "Versiert in Containerisierung (Docker, Kubernetes) und Cloud IaC (Terraform, AWS, GCP)" 
        : "Skilled in containerization (Docker, Kubernetes) and cloud IaC (Terraform, AWS, GCP)",
      isGerman 
        ? "Mentorierte Teams, trieb Best Practices voran und lieferte komplexe Enterprise-Lösungen" 
        : "Mentored teams, drove best practices, and delivered complex enterprise-grade solutions"
    ],
    
    experience: [
      {
        company: "Ascent",
        role: isGerman ? "Senior Software Engineer" : "Senior Software Engineer",
        period: "Jul 2019 – Jun 2025",
        location: isGerman ? "München, Deutschland" : "Munich, Germany",
        bullets: [
          isGerman
            ? "Architektierte und entwickelte eine skalierbare, auf Microservices basierende Plattform für Rückversicherung."
            : "Architected and developed a scalable, microservices-based platform for Re-Insurance.",
          isGerman
            ? "Leitete ein funktionsübergreifendes Team zur Bereitstellung von Angular-basierten Webanwendungen, die mit Azure-Diensten integriert sind."
            : "Led a cross-functional team to deliver Angular-based web applications integrated with Azure services.",
          isGerman
            ? "Implementierte CI/CD-Pipelines mit Azure DevOps, reduzierte Deployment-Zeiten und verbesserte die Qualität."
            : "Implemented CI/CD pipelines with Azure DevOps, reducing deployment times and improving quality.",
          isGerman
            ? "Zusammenarbeit mit Stakeholdern, um Spezifikationen zu definieren und Geschäftsziele mit technischen Lösungen auszurichten."
            : "Collaborated with stakeholders to define specs and align business objectives with technical solutions.",
          isGerman
            ? "Mentorierte Junior-Entwickler und förderte Best Practices in der Softwareentwicklung."
            : "Mentored junior developers and promoted engineering best practices.",
        ],
      },
      {
        company: "IF-Blueprint AG",
        role: isGerman ? "IT-Berater / Senior Full Stack Developer" : "IT Consultant / Senior Full Stack Developer",
        period: "Jul 2017 – Jun 2019",
        location: isGerman ? "München, Deutschland" : "Munich, Germany",
        bullets: [
          isGerman
            ? "Entworfen und entwickelt Cloud-native Anwendungen für Automobil- und Versicherungsclients."
            : "Designed and developed cloud-native applications for automotive and insurance clients.",
          isGerman
            ? "Lieferte optimierte, skalierbare Full-Stack-Lösungen."
            : "Delivered optimized, scalable full-stack solutions.",
        ],
      },
      {
        company: "Tieto",
        role: isGerman ? "Senior Software Developer" : "Senior Software Developer",
        period: "2015 – 2017",
        location: isGerman ? "St. Petersburg, Russland" : "St. Petersburg, Russia",
        bullets: [
          isGerman
            ? "Entwickelte SharePoint Farm-Lösungen für IKEA Russland."
            : "Developed SharePoint Farm Solutions for IKEA Russia.",
          isGerman
            ? "Migrierte 10.000 externe Benutzer zu Active Directory und SharePoint 2013."
            : "Migrated 10,000 external users to Active Directory and SharePoint 2013.",
          isGerman
            ? "Verbesserte Benutzererfahrung durch Ersatz von jQuery durch Knockout.js."
            : "Improved user experience by replacing jQuery with Knockout.js.",
        ],
      },
      {
        company: "Astrosoft-Development",
        role: isGerman ? "Software Developer" : "Software Developer",
        period: "2013 – Okt 2015",
        location: isGerman ? "St. Petersburg, Russland" : "St. Petersburg, Russia",
        bullets: [
          isGerman
            ? "Full-Stack-Entwicklung für OpusCapita webbasierte Rechnungsverarbeitung und Archivierungssysteme."
            : "Full-stack development for OpusCapita web-based invoice handling and archival systems.",
          isGerman
            ? "Erstellte ASP.NET-Anwendungen, SQL Server-Zugriffssichten und AngularJS-Frontends."
            : "Built ASP.NET applications, SQL Server access layers, and AngularJS frontends.",
        ],
      },
      {
        company: "IT-GRAD (CloudMTS)",
        role: isGerman ? "Systemadministrator" : "System Administrator",
        period: "2013",
        location: isGerman ? "St. Petersburg, Russland" : "St. Petersburg, Russia",
        bullets: [
          isGerman
            ? "Unterstützte VMware und Active Directory bei einem Cloud-Virtualisierungsanbieter."
            : "Supported VMware and Active Directory in a cloud virtualization provider.",
          isGerman
            ? "Bereitstellung von L2-Support, Fehlerbehebung und Systemschulung für Support-Personal."
            : "Provided L2 support, troubleshooting, and system training for support staff.",
        ],
      },
    ],
    
    education: [
      {
        school: isGerman
          ? "St. Petersburger Staatsuniversität für Telekommunikation benannt nach Prof. M.A. Bonch-Bruevich"
          : "St. Petersburg State University of Telecommunications named after prof. M.A. Bonch-Bruevich",
        degree: isGerman
          ? "Bachelor's Degree, Kommunikationssysteme und Netzwerke (FCSN)"
          : "Bachelor's Degree, Communications Systems and Networks (FCSN)",
        period: "2011 - 2015",
        highlights: [isGerman ? "Fakultät für Infokommunikationssysteme" : "Department of Infocommunication Systems"],
      },
    ],
    
    certifications: [
      { 
        name: isGerman ? "Microsoft Certified: DevOps Engineer Expert" : "Microsoft Certified: DevOps Engineer Expert", 
        issuer: "Microsoft",
        year: "2021"
      },
      { 
        name: isGerman ? "Exam AZ-204: Developing Solutions for Microsoft Azure" : "Exam AZ-204: Developing Solutions for Microsoft Azure", 
        issuer: "Microsoft",
        year: "2021"
      },
      { 
        name: isGerman ? "Exam AZ-400: Designing and Implementing Microsoft DevOps Solutions" : "Exam AZ-400: Designing and Implementing Microsoft DevOps Solutions", 
        issuer: "Microsoft",
        year: "2021"
      },
      { 
        name: "MCSA: Web Applications", 
        issuer: "Microsoft",
        year: "2018"
      },
      { 
        name: isGerman ? "70-486: Developing ASP.NET MVC Web Applications" : "70-486: Developing ASP.NET MVC Web Applications", 
        issuer: "Microsoft",
        year: "2018"
      },
      { 
        name: isGerman ? "70-480: Programming in HTML5 with JavaScript and CSS3" : "70-480: Programming in HTML5 with JavaScript and CSS3", 
        issuer: "Microsoft",
        year: "2018"
      },
      { 
        name: "MCSD: App Builder", 
        issuer: "Microsoft",
        year: "2018"
      },
      { 
        name: isGerman ? "70-410: Installing and Configuring Windows Server 2012" : "70-410: Installing and Configuring Windows Server 2012", 
        issuer: "Microsoft",
        year: "2018"
      },
      { 
        name: isGerman ? "70-487: Developing Microsoft Azure and Web Services" : "70-487: Developing Microsoft Azure and Web Services", 
        issuer: "Microsoft",
        year: "2018"
      },
      { 
        name: isGerman ? "70-488: Developing Microsoft SharePoint Server 2013 Core Solutions" : "70-488: Developing Microsoft SharePoint Server 2013 Core Solutions", 
        issuer: "Microsoft",
        year: "2018"
      },
      { 
        name: isGerman ? "74-409: Server Virtualization with Windows Server Hyper-V and System Center" : "74-409: Server Virtualization with Windows Server Hyper-V and System Center", 
        issuer: "Microsoft",
        year: "2018"
      },
    ],
    
    projects: [
      {
        name: "SmartYachtMonitor",
        description: isGerman
          ? "Vollständiges MLOps-Zyklus-Demonstrationsprojekt mit ML-Pipelines, Datenverarbeitung mit Spark und Modell-Deployment-Pipelines mit Docker & Kubernetes."
          : "Full MLOps cycle demonstration project implementing ML pipelines, data processing with Spark, and model deployment pipelines with Docker & Kubernetes.",
      },
      {
        name: "SAX Stock Pattern Detection",
        description: isGerman
          ? "Aktienindex-Mustererkennung mit SAX-Algorithmus und API-Datenabruf für Finanzzeit-Reihenanalyse."
          : "Stock market index pattern detection with SAX algorithm and API data fetching for financial time series analysis.",
      },
      {
        name: "Insurance Microservices Platform",
        description: isGerman
          ? "Architektierte Microservices-Plattform für Re-Insurance-Bereich; Angular Front-End + Azure Cloud-Integrationen."
          : "Architected microservices platform for re-insurance domain; Angular front-end + Azure cloud integrations.",
      },
    ],
  };
};
