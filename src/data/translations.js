export const translations = {
  en: {
    downloadCV: "Download CV",
    downloadCVde: "Lebenslauf (DE)",
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
    company: "Company",
    role: "Role",
    projectGoal: "Project Goal",
    mainTasks: "Key Tasks",
    techStack: "Technology Stack",
    focusAreas: "Focus Areas",
  },
  de: {
    downloadCV: "Lebenslauf herunterladen",
    downloadCVde: "CV (EN)",
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
    company: "Unternehmen",
    role: "Rolle",
    projectGoal: "Projektziel",
    mainTasks: "Hauptaufgaben",
    techStack: "Technologie-Stack",
    focusAreas: "Schwerpunkte",
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

    projectsHistory: [
      {
        period: isGerman ? "01/2026 – heute" : "01/2026 – present",
        title: isGerman ? "AI-gestützte EBM-Abrechnungsoptimierung" : "AI-Powered EBM Billing Optimization",
        company: isGerman ? "Freiberuflich, München" : "Freelance, Munich",
        role: isGerman ? "Technischer Berater & Lead Developer (AI & Full Stack)" : "Technical Consultant & Lead Developer (AI & Full Stack)",
        goal: isGerman
          ? "Entwicklung eines intelligenten Assistenzsystems für Arztpraxen zur automatisierten Ermittlung und Validierung von EBM-Abrechnungsziffern. Das System nutzt KI, um aus Behandlungsdokumentationen präzise Abrechnungsvorschläge zu generieren und Fehlerquoten zu senken."
          : "Development of an intelligent assistant system for medical practices to automate the identification and validation of EBM billing codes. The system uses AI to generate precise billing suggestions from treatment documentation, reducing error rates.",
        tasks: isGerman
          ? [
              "RAG-Architektur: Implementierung einer Retrieval-Augmented-Generation-Struktur, um medizinisches Fachwissen und EBM-Regelwerke sicher und datenschutzkonform abzufragen.",
              "Backend-Entwicklung: Aufbau einer performanten API-Schicht in Python zur Verarbeitung von Patientendaten.",
              "Frontend: Entwicklung eines intuitiven Dashboards in Angular für Ärzte zur Überprüfung und Freigabe der AI-Vorschläge.",
            ]
          : [
              "RAG Architecture: Implementation of a Retrieval-Augmented Generation structure to query medical knowledge and EBM rule sets securely in compliance with data protection regulations.",
              "Backend Development: Building a high-performance API layer in Python for processing patient data.",
              "Frontend: Development of an intuitive Angular dashboard for doctors to review and approve AI suggestions.",
            ],
        stack: [
          { category: "AI & LLM", items: ["Python", "RAG", "OpenAI API"] },
          { category: "Vector Store", items: ["PGVector (PostgreSQL)"] },
          { category: "Frontend", items: ["Angular 22", "RxJS", "Tailwind CSS"] },
          { category: "Backend & DB", items: ["FastAPI", "PostgreSQL"] },
        ],
        type: "project",
      },
      {
        period: "06/2025 – 01/2026",
        title: isGerman ? "Berufliche Auszeit (Sabbatical)" : "Sabbatical",
        company: "",
        role: isGerman ? "Weiterbildung & Neuorientierung" : "Professional Development & Reorientation",
        goal: isGerman
          ? "Gezielte Auszeit nach über 10 Jahren intensiver Tätigkeit in der Softwareberatung."
          : "A deliberate break after more than 10 years of intensive work in software consulting.",
        tasks: isGerman
          ? [
              "Internationale Reiseerfahrung",
              "Adaption moderner KI-gestützter Entwicklungsmethoden",
              "Vertiefung von Cloud-Native-Architekturen",
              "Strategische Vorbereitung auf eine Schlüsselrolle in einem produktfokussierten Unternehmen",
            ]
          : [
              "International travel experience",
              "Adoption of modern AI-assisted development methods",
              "Deep dive into Cloud-Native architectures",
              "Strategic preparation for a key role in a product-focused company",
            ],
        stack: [],
        type: "sabbatical",
      },
      {
        period: "01/2024 – 05/2025",
        title: "Global Reinsurance Accounting & Bordereaux Management",
        company: isGerman ? "Tekaris GmbH (Kunde: Globaler Rückversicherer, München)" : "Tekaris GmbH (Client: Global Reinsurer, Munich)",
        role: "Senior Software Engineer / Lead Developer (MVP to Production)",
        goal: isGerman
          ? "Neugestaltung und Automatisierung der globalen Bordereaux-Datenaufnahme für das Life & Health (L&H) Rückversicherungsgeschäft. Ziel war die Konsolidierung weltweiter Datenformate, automatisierte Compliance-Prüfungen (Sanctions Screening) sowie die Bereitstellung aggregierter Daten für SAP."
          : "Redesign and automation of global Bordereaux data ingestion for the Life & Health (L&H) reinsurance business. Goal: consolidating worldwide data formats, automated compliance checks (Sanctions Screening), and providing aggregated data for SAP.",
        tasks: isGerman
          ? [
              "Architektur-Redesign: Neukonzeption der Prozessarchitektur zur Steigerung der Operational Excellence im globalen Rechnungswesen.",
              "Global Data Ingestion: Aufbau einer skalierbaren Pipeline zur Erfassung und Validierung heterogener Bordereaux-Daten aus internationalen Märkten.",
              "Compliance & Analyse: Implementierung automatisierter Workflows für Sanctions Screening und versicherungsmathematische Vorverarbeitung.",
              "Go-Live Management: Verantwortung für die Zusammenführung der MVP-Komponenten und die Überführung in den produktiven Betrieb.",
              "SAP-Integration: Entwicklung der Schnittstellen zur Übergabe der konsolidierten Finanzdaten an SAP-Systeme.",
            ]
          : [
              "Architecture Redesign: Reconceptualization of the process architecture to increase Operational Excellence in global accounting.",
              "Global Data Ingestion: Building a scalable pipeline for capturing and validating heterogeneous Bordereaux data from international markets.",
              "Compliance & Analysis: Implementation of automated workflows for Sanctions Screening and actuarial data preprocessing.",
              "Go-Live Management: Responsible for merging MVP components and transitioning to productive live operation.",
              "SAP Integration: Development of interfaces for transferring consolidated financial data to SAP systems.",
            ],
        stack: [
          { category: "Cloud Infrastructure", items: ["Azure Data Factory", "Azure Synapse Analytics", "Azure Functions", "Azure Batch Account"] },
          { category: "Data Science & Logic", items: ["Python", "R-Script", ".NET Core"] },
          { category: "Frontend & UX", items: ["Angular"] },
          { category: "DevOps", items: ["CI/CD Pipelines (YAML)", "Automated Deployment"] },
          { category: isGerman ? "Datenbanken" : "Databases", items: ["Azure Cosmos DB", "MS SQL Server"] },
        ],
        type: "project",
      },
      {
        period: "07/2022 – 07/2023",
        title: "Global Natural Hazard Risk Visualizer",
        company: isGerman ? "Tekaris GmbH (Kunde: Rückversicherungs-Sektor)" : "Tekaris GmbH (Client: Reinsurance Sector)",
        role: "Senior Software & Infrastructure Engineer",
        goal: isGerman
          ? "Entwicklung und Wartung einer hochverfügbaren Plattform zur Visualisierung globaler Naturgefahren (Erdbeben, Überschwemmungen, Waldbrände). Versicherungsanalysten konnten standortbezogene Risikokalkulationen auf Basis geologischer Echtzeitdaten durchführen."
          : "Development and maintenance of a highly available platform for visualizing global natural hazards (earthquakes, floods, wildfires). Insurance analysts could perform location-based risk calculations based on real-time geological data.",
        tasks: isGerman
          ? [
              "Infrastruktur-Support: Sicherstellung der Skalierbarkeit der Cloud-Infrastruktur in Azure für rechenintensive Analyseprozesse.",
              "Backend & API: Wartung und Optimierung von Microservices auf .NET-Basis zur Aggregation und Bereitstellung von Risikoscores.",
              "Frontend & GIS: Weiterentwicklung der kartenbasierten Benutzeroberfläche in Angular mit modernen Web-Mapping-Technologien.",
              "Service-Monitoring: Implementierung von Monitoring-Lösungen zur Systemgesundheit und Performance-Optimierung.",
            ]
          : [
              "Infrastructure Support: Ensuring scalability of Azure cloud infrastructure for compute-intensive analysis processes.",
              "Backend & API: Maintenance and optimization of .NET-based microservices for aggregation and delivery of risk scores.",
              "Frontend & GIS: Enhancement of the map-based UI in Angular using modern web mapping technologies.",
              "Service Monitoring: Implementation of monitoring solutions for system health and performance optimization.",
            ],
        stack: [
          { category: "Cloud & Infrastructure", items: ["Azure App Services", "Function Apps", "Key Vault", "Application Insights", "Azure DevOps", "Terraform"] },
          { category: "Backend", items: [".NET 6/7", "ASP.NET Core Web API", "Entity Framework Core"] },
          { category: "Frontend", items: ["Angular 14+", "RxJS", "Angular Material"] },
          { category: isGerman ? "Datenbanken" : "Databases", items: ["Azure SQL Database"] },
        ],
        type: "project",
      },
      {
        period: "05/2020 – 07/2022",
        title: isGerman ? "Cloud-Native CIAM Plattform" : "Cloud-Native CIAM Platform",
        company: isGerman ? "Tekaris GmbH (Kunde: Globaler Rückversicherer, München)" : "Tekaris GmbH (Client: Global Reinsurer, Munich)",
        role: "Senior Software Engineer",
        goal: isGerman
          ? "Entwicklung einer hochsicheren CIAM-Lösung zur Verwaltung von Millionen von Kundenidentitäten, Consent-Management und nahtlosem SSO über Web- und Mobile-Kanäle."
          : "Development of a highly secure Customer Identity and Access Management (CIAM) solution for managing millions of customer identities, consent management, and seamless SSO across web and mobile channels.",
        tasks: isGerman
          ? [
              "Implementierung von Authentifizierungs-Flows (MFA, OAuth2).",
              "Integration von Azure B2C Custom Policies.",
              "Aufbau der Infrastruktur als Code (IaC) mit Terraform.",
            ]
          : [
              "Implementation of authentication flows (MFA, OAuth2).",
              "Integration of Azure B2C Custom Policies.",
              "Building Infrastructure as Code (IaC) with Terraform.",
            ],
        stack: [
          { category: "Core", items: [".NET Core 6/8", "Angular 12+", "Azure AD B2C"] },
          { category: "Identity & Security", items: ["OAuth 2.0", "OpenID Connect (OIDC)", "SAML 2.0", "JWT", "MFA"] },
          { category: "Infrastructure & DevOps", items: ["Terraform (HCL)", "Azure DevOps Pipelines", "Azure App Service Environment", "Azure Service Bus"] },
          { category: "Data & Storage", items: ["MS SQL Server", "Cosmos DB (SQL API)", "Azure Key Vault"] },
        ],
        type: "project",
      },
      {
        period: "07/2019 – 05/2020",
        title: "AI-Driven Underwriting Engine",
        company: isGerman ? "Tekaris GmbH (Kunde: Rückversicherungs-Sektor, München)" : "Tekaris GmbH (Client: Reinsurance Sector, Munich)",
        role: "Software Engineer",
        goal: isGerman
          ? "Automatisierung komplexer Underwriting-Entscheidungen durch Kombination aktuarieller Logik mit Machine-Learning-Modellen, zugänglich über hochverfügbare APIs."
          : "Automation of complex underwriting decisions by combining actuarial logic with machine learning models, accessible via highly available APIs.",
        tasks: isGerman
          ? [
              "Entwicklung der API-Schicht.",
              "Containerisierung der Microservices.",
              "Orchestrierung via Kubernetes.",
            ]
          : [
              "Development of the API layer.",
              "Containerization of microservices.",
              "Orchestration via Kubernetes.",
            ],
        stack: [
          { category: "Core", items: ["Node.js", "TypeScript", "JavaScript (ES6+)"] },
          { category: isGerman ? "Containerisierung" : "Containerization", items: ["Docker", "Kubernetes (AKS)", "Helm Charts"] },
          { category: "Data", items: ["Azure Cosmos DB (NoSQL)", "Redis Cache"] },
          { category: "CI/CD", items: ["Azure DevOps", "Container Registry", "Jest"] },
        ],
        type: "project",
      },
      {
        period: "07/2018 – 01/2019",
        title: isGerman ? "Risiko-Analyse & Simulations-Plattform" : "Risk Analysis & Simulation Platform",
        company: isGerman ? "IF-Blueprint AG (Kunde: Rückversicherung, München)" : "IF-Blueprint AG (Client: Reinsurance, Munich)",
        role: isGerman ? "Senior Entwickler" : "Senior Developer",
        goal: isGerman
          ? "Erstellung eines webbasierten Simulationstools zur Risikobewertung, das Jahrzehnte an historischen Daten nutzt, um zukünftige Schadensszenarien visuell darzustellen."
          : "Creation of a web-based simulation tool for risk assessment, utilizing decades of historical data to visually represent future damage scenarios.",
        tasks: isGerman
          ? [
              "Entwicklung komplexer Datenvisualisierungen.",
              "Entwicklung mathematischer Modelle im Backend.",
            ]
          : [
              "Development of complex data visualizations.",
              "Development of mathematical models in the backend.",
            ],
        stack: [
          { category: "Frontend", items: ["Angular 7+", "Angular Material", "D3.js", "RxJS"] },
          { category: "Backend", items: ["ASP.NET Core 2.1", "RESTful Web APIs"] },
          { category: isGerman ? "Persistenz" : "Persistence", items: ["Microsoft SQL Server"] },
        ],
        type: "project",
      },
      {
        period: "07/2017 – 07/2018",
        title: isGerman ? "Automotive Portfolio-Management-Tool" : "Automotive Portfolio Management Tool",
        company: isGerman ? "IF-Blueprint AG (Kunde: Globaler Automotive Konzern, München)" : "IF-Blueprint AG (Client: Global Automotive Group, Munich)",
        role: isGerman ? "Senior Entwickler" : "Senior Developer",
        goal: isGerman
          ? "Neuentwicklung eines Portfoliomanagement-Tools für HR und Unternehmenskommunikation mit Fokus auf Skalierbarkeit und zukünftige Cloud-Migration."
          : "New development of a portfolio management tool for HR and corporate communications, focusing on scalability and future cloud migration.",
        tasks: isGerman
          ? [
              "Architektur-Entscheidung für Angular.",
              "Einführung von Domain-Driven Design (DDD).",
              "Entwicklung eines PnP-PowerShell-Provisionierungs-Tools.",
            ]
          : [
              "Architectural decision for Angular.",
              "Introduction of Domain-Driven Design (DDD).",
              "Development of a PnP PowerShell provisioning tool.",
            ],
        stack: [
          { category: "Frontend", items: ["Angular (SPA)", "TypeScript", "Lazy Loading", "Redux/NgRx"] },
          { category: "Backend & Cloud", items: ["Office 365", "SharePoint Online", "SharePoint 2013", "CSOM"] },
          { category: isGerman ? "Automatisierung" : "Automation", items: ["PnP PowerShell", "Git"] },
        ],
        type: "project",
      },
      {
        period: "10/2015 – 05/2017",
        title: isGerman ? 'Mieter-Portal "MEGA-IKEA"' : '"MEGA-IKEA" Tenant Portal',
        company: isGerman ? "Tieto / MEGA-IKEA (Sankt Petersburg)" : "Tieto / MEGA-IKEA (St. Petersburg)",
        role: isGerman ? "Senior Software Entwickler" : "Senior Software Developer",
        goal: isGerman
          ? "Digitalisierung des Zustimmungs- und Verwaltungsprozesses für externe Mieter in IKEA-Einkaufszentren."
          : "Digitalization of the approval and management process for external tenants in IKEA shopping centers.",
        tasks: isGerman
          ? [
              "Entwicklung von SharePoint Farm Solutions.",
              "Modernisierung von Legacy-UIs.",
            ]
          : [
              "Development of SharePoint Farm Solutions.",
              "Modernization of Legacy UIs.",
            ],
        stack: [
          { category: "SharePoint", items: ["SharePoint 2013 Farm Solutions", "Event Receivers", "Timer Jobs"] },
          { category: "Frontend", items: ["Knockout.js", "JavaScript", "HTML5", "CSS3"] },
          { category: "Backend", items: [".NET Framework 4.5", "C#", "CAML Query"] },
        ],
        type: "project",
      },
      {
        period: "03/2015 – 10/2015",
        title: isGerman ? "SaaS Finanzlösung (Migration)" : "SaaS Financial Solution (Migration)",
        company: isGerman ? "Astrosoft / OpusCapita (Sankt Petersburg)" : "Astrosoft / OpusCapita (St. Petersburg)",
        role: isGerman ? "Software Entwickler" : "Software Developer",
        goal: isGerman
          ? "Migration einer Finanzapplikation von Silverlight auf eine moderne JavaScript-Architektur und Implementierung neuer Business-Komponenten."
          : "Migration of a financial application from Silverlight to a modern JavaScript architecture and implementation of new business components.",
        tasks: isGerman
          ? [
              "Migration von Silverlight auf AngularJS.",
              "Implementierung neuer Business-Komponenten.",
            ]
          : [
              "Migration from Silverlight to AngularJS.",
              "Implementation of new business components.",
            ],
        stack: [
          { category: "Core", items: [".NET Framework 4.5", "C#", "Entity Framework (EF)"] },
          { category: "Frontend", items: ["AngularJS (1.x)", "Kendo UI", "TypeScript"] },
          { category: "Testing", items: ["NUnit", "Automated Unit Tests"] },
        ],
        type: "project",
      },
      {
        period: "08/2012 – 03/2015",
        title: isGerman ? "Cloud- & Infrastruktur-Administration" : "Cloud & Infrastructure Administration",
        company: isGerman ? "IT-GRAD / Beratungsunternehmen (Sankt Petersburg)" : "IT-GRAD / Consulting (St. Petersburg)",
        role: "System Administrator / System Engineer",
        goal: isGerman
          ? "Aufbau und Wartung von Virtualisierungsumgebungen und MS SharePoint Infrastrukturen für externe Kunden."
          : "Setup and maintenance of virtualization environments and MS SharePoint infrastructure for external clients.",
        tasks: isGerman
          ? [
              "Verwaltung von VMware- und Hyper-V-Umgebungen.",
              "Administration von Windows Server, Active Directory und Exchange.",
              "SharePoint-Migrationen und Berechtigungsstrukturen.",
            ]
          : [
              "Management of VMware and Hyper-V environments.",
              "Administration of Windows Server, Active Directory, and Exchange.",
              "SharePoint migrations and permissions management.",
            ],
        stack: [
          { category: isGerman ? "Virtualisierung" : "Virtualization", items: ["VMware ESXi", "Hyper-V", "Veeam Backup"] },
          { category: "Infrastructure", items: ["Windows Server 2008/2012", "Active Directory", "Exchange 2013", "Cisco IOS"] },
          { category: "SharePoint Admin", items: ["Migrations", "Permissions", "Managed Metadata"] },
        ],
        type: "project",
      },
    ],
  };
};
