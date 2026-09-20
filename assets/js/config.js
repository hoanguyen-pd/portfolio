/* =====================================================================
   CONFIG.JS — Single source of truth for all content on this site.
   Edit anything in this file to change text, images, links, projects,
   experience, or skills WITHOUT touching any HTML/CSS.

   Images live in /assets/images/... — swap a file in place (same name)
   or point a path below to a new file.
   ===================================================================== */

const SITE = {

  /* ---------------------------------------------------------------
     PROFILE — hero, nav, footer basics
     --------------------------------------------------------------- */
  profile: {
    name: "Hoa",
    fullName: "Nguyen Thi Hoa",
    logoText: "Hoa.",
    role: "Senior UI/UX & Product Designer",
    tagline: "Senior UI/UX &",
    taglineHighlight: "Product Designer",
    heroKicker: "Senior UI/UX & Product Designer",
    heroDescription:
      "Nearly 9 years of experience designing web and mobile products, from research to high-fidelity UI, with a focus on creating intuitive and impactful digital experiences.",
    portrait: "assets/images/profile/hoa-portrait.jpg",
    stats: [
      { number: "8+", label: "Years Experience" },
      { number: "40+", label: "Products Shipped" },
      { number: "5", label: "Companies" },
    ],
    floatingBadges: [
      { icon: "users", text: "User-centered Design" },
      { icon: "layers", text: "Design Systems" },
      { icon: "bar-chart", text: "From research to impact" },
    ],
    location: "Ha Noi, Viet Nam",
    email: "hoanguyen23122@gmail.com",
    phone: "+84 966 024 082",
    linkedin: "http://www.linkedin.com/in/hoa231",
    behance: "https://www.behance.net/hoa231",
    cvFile: "assets/files/Hoa-Nguyen-CV.pdf",
  },

  /* ---------------------------------------------------------------
     NAVIGATION
     --------------------------------------------------------------- */
  nav: [
    { label: "Home", href: "index.html#hero" },
    { label: "About", href: "index.html#about" },
    { label: "Projects", href: "index.html#projects" },
    { label: "Experience", href: "index.html#experience" },
    { label: "Contact", href: "index.html#contact" },
  ],

  /* ---------------------------------------------------------------
     SELECTED PROJECTS (homepage highlight cards)
     ---------------------------------------------------------------
     Every card links straight to its REAL, published Behance project
     in a new tab. "thumbnail" is the actual cover image pulled from
     Behance's own CDN for that project — verified against
     https://www.behance.net/hoa231 before being added here.

     To ADD a project: copy one object and fill in the fields with a
     real Behance URL + cover image.
     To REMOVE a project: delete its object from this array.
     To REORDER: change the order of objects in this array.
     --------------------------------------------------------------- */
  featuredProjects: [
    {
      category: "AI Product",
      title: "Personalized Medical Support",
      description:
        "A healthcare platform designed to support users in managing and improving their health.",
      thumbnail:
        "https://mir-s3-cdn-cf.behance.net/projects/404/6a1d80255953427.Y3JvcCwxMjAzLDk0MSwyMzUsMA.png",
      tags: ["Healthcare", "AI Chatbot", "Multi Platform"],
      link: "https://www.behance.net/gallery/255953427/PMS",
    },
    {
      category: "Enterprise",
      title: "Z113 - Personnel Management",
      description:
        "App for connecting managers and workers quickly across the Z113 factory floor.",
      thumbnail:
        "https://mir-s3-cdn-cf.behance.net/projects/404/9271b7204900983.Y3JvcCwxMzgwLDEwODAsNjQsMA.jpg",
      tags: ["Factory", "Internal System", "Desktop & Mobile"],
      link: "https://www.behance.net/gallery/204900983/Z113-Project",
    },
    {
      category: "Mobile App",
      title: "MB Laos Bank",
      description:
        "Mobile banking app with expense tracking, a digital wallet, and stronger financial security.",
      thumbnail:
        "https://mir-s3-cdn-cf.behance.net/projects/404/7e21d0198996851.Y3JvcCwyNTU2LDIwMDAsMjQ2LDA.jpg",
      tags: ["Banking", "Digital Wallet", "Financial Services"],
      link: "https://www.behance.net/gallery/198996851/MB-Laos-bank",
    },
  ],

  /* ---------------------------------------------------------------
     MORE PROJECTS — secondary strip, all verified, real, published
     Behance projects (pulled from your live profile). Covers are
     hotlinked straight from Behance's own CDN.
     --------------------------------------------------------------- */
  moreProjects: [
    {
      title: "University Mobile App (MyVinUni)",
      thumbnail:
        "https://mir-s3-cdn-cf.behance.net/projects/404/3aab3a198996493.Y3JvcCwzNjAwLDI4MTUsMCw4OQ.jpg",
      link: "https://www.behance.net/gallery/198996493/University-mobile-app",
    },
    {
      title: "Dream Job — Recruitment Platform",
      thumbnail:
        "https://mir-s3-cdn-cf.behance.net/projects/404/01a8f7198996901.Y3JvcCwzMDY4LDI0MDAsNjMwLDA.jpg",
      link: "https://www.behance.net/gallery/198996901/Dream-Job",
    },
    {
      title: "U2 PC — Remote PC Admin",
      thumbnail:
        "https://mir-s3-cdn-cf.behance.net/projects/404/0347c0145631677.Y3JvcCwzMDY4LDI0MDAsNDYzLDA.jpg",
      link: "https://www.behance.net/gallery/145631677/U2-PC",
    },
    {
      title: "Remote PC App",
      thumbnail:
        "https://mir-s3-cdn-cf.behance.net/projects/404/1a4616145708555.Y3JvcCwzMTk2LDI0OTksNTM3LDA.jpg",
      link: "https://www.behance.net/gallery/145708555/Remote-PC-App",
    },
    {
      title: "Carrier Smart App",
      thumbnail:
        "https://mir-s3-cdn-cf.behance.net/projects/404/c653c7145633999.Y3JvcCwzMTk2LDI0OTksMTY2OSww.jpg",
      link: "https://www.behance.net/gallery/145633999/Carrier-App",
    },
    {
      title: "Woorimall Website",
      thumbnail:
        "https://mir-s3-cdn-cf.behance.net/projects/404/b68a95145704985.645e5cd91c2e5.jpg",
      link: "https://www.behance.net/gallery/145704985/Woorimall-Website",
    },
    {
      title: "Cloud U2 Website",
      thumbnail:
        "https://mir-s3-cdn-cf.behance.net/projects/404/8ec8cd145706867.Y3JvcCwyOTY3LDIzMjEsMCwxOTE.jpg",
      link: "https://www.behance.net/gallery/145706867/Cloud-U2-website",
    },
    {
      title: "TUZ App",
      thumbnail:
        "https://mir-s3-cdn-cf.behance.net/projects/404/e721eb145709219.Y3JvcCwzODM1LDMwMDAsNTc5LDA.jpg",
      link: "https://www.behance.net/gallery/145709219/TUZ-App",
    },
  ],

  /* ---------------------------------------------------------------
     PROCESS — "From Insight to Impact"
     --------------------------------------------------------------- */
  process: {
    kicker: "My Design Process",
    title: "From Insight to Impact",
    subtitle:
      "A structured, user-centered approach to turn complex problems into simple and meaningful solutions.",
    steps: [
      {
        number: "01",
        icon: "search",
        title: "Understand",
        description: "Research, analyze user needs, and define problems.",
      },
      {
        number: "02",
        icon: "share-2",
        title: "Structure",
        description:
          "Sitemap, user flow, information architecture and wireframes.",
      },
      {
        number: "03",
        icon: "pen-tool",
        title: "Design",
        description:
          "High-fidelity UI, design system and interactive prototype.",
      },
      {
        number: "04",
        icon: "bar-chart-2",
        title: "Validate",
        description:
          "UI testing, stakeholder feedback, and continuous improvement.",
      },
    ],
  },

  /* ---------------------------------------------------------------
     BEHIND THE INTERFACE
     ---------------------------------------------------------------
     Each of the 5 cards is clickable and opens a lightbox gallery
     built from the "gallery" array below (all real uploaded images —
     no generated/fake UI). Add or remove images freely; the lightbox
     Prev/Next automatically adapts to however many you list.
     The card's own "image" is just the small preview shown on the
     card face — usually gallery[0].
     --------------------------------------------------------------- */
  behindInterface: {
    kicker: "Selected Examples",
    title: "Behind the Interface",
    subtitle:
      "A closer look at my UX and UI process — examples pulled from different projects at different stages.",
    steps: [
      {
        number: "01",
        title: "User Flow",
        caption: "Mapped key user flows to define structure and screen relationships.",
        image: "assets/images/gallery/userflow/userflow-new.jpg",
        gallery: [
          { src: "assets/images/gallery/userflow/userflow-new.jpg", caption: "Employee records — user flow" },
        ],
      },
      {
        number: "02",
        title: "Low-fidelity Wireframe",
        caption: "Explored layouts and interactions through low-fidelity wireframes.",
        image: "assets/images/gallery/lofi/lofi-employee-list.jpg",
        gallery: [
          { src: "assets/images/gallery/lofi/lofi-employee-list.jpg", caption: "01. Employee List" },
          { src: "assets/images/gallery/lofi/lofi-employee-detail.jpg", caption: "02. Employee Detail" },
          { src: "assets/images/gallery/lofi/lofi-edit-information.jpg", caption: "03. Edit Information" },
          { src: "assets/images/gallery/lofi/lofi-confirmation-modal.jpg", caption: "04. Confirmation Modal" },
        ],
      },
      {
        number: "03",
        title: "High-fidelity Wireframe",
        caption: "Refined structure and interactions with high-fidelity screens.",
        image: "assets/images/gallery/hifi/hifi-employee-list.jpg",
        gallery: [
          { src: "assets/images/gallery/hifi/hifi-employee-list.jpg", caption: "01. Employee List" },
          { src: "assets/images/gallery/hifi/hifi-employee-detail.jpg", caption: "02. Employee Detail" },
          { src: "assets/images/gallery/hifi/hifi-edit-information.jpg", caption: "03. Edit Information" },
          { src: "assets/images/gallery/hifi/hifi-confirmation-modal.jpg", caption: "04. Confirmation Modal" },
        ],
      },
      {
        number: "04",
        title: "Design System",
        caption: "Built a scalable design system with consistent components, colors and typography.",
        image: "assets/images/gallery/design-system/design-1-colors.jpg",
        gallery: [
          { src: "assets/images/gallery/design-system/design-1-colors.jpg", caption: "Color palette" },
          { src: "assets/images/gallery/design-system/design-2-buttons.jpg", caption: "Button states & variants" },
          { src: "assets/images/gallery/design-system/design-3-typography.jpg", caption: "Typography scale" },
          { src: "assets/images/gallery/design-system/design-4-input.jpg", caption: "Input components" },
          { src: "assets/images/gallery/design-system/design-5-header.jpg", caption: "Header components" },
        ],
      },
      {
        number: "05",
        title: "Final UI",
        caption: "Delivered clean, intuitive interfaces with improved usability and efficiency.",
        image: "assets/images/gallery/final-ui/final-list-view.jpg",
        gallery: [
          { src: "assets/images/gallery/final-ui/final-list-view.jpg", caption: "Employee records — list view" },
          { src: "assets/images/gallery/final-ui/final-add-new.jpg", caption: "Employee records — add new" },
          { src: "assets/images/gallery/final-ui/final-column-settings.jpg", caption: "Employee records — column settings" },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------
     ABOUT
     --------------------------------------------------------------- */
  about: {
    kicker: "About Me",
    title: "A Little Bit About Me",
    paragraphs: [
      "With nearly a decade of experience designing enterprise products, I approach every project as a product problem first. I've designed across the full spectrum — from zero-to-one mobile apps to complex multi-module enterprise platforms — with a focus on intuitive, user-centered experiences.",
      "I enjoy working closely with cross-functional teams, turning complex requirements into simple and meaningful solutions that create real impact.",
    ],
  },

  /* ---------------------------------------------------------------
     SKILLS
     --------------------------------------------------------------- */
  skills: {
    kicker: "Core Skills",
    groups: [
      {
        title: "UX & Product",
        icon: "user",
        items: [
          "User Research",
          "Persona",
          "Sitemap",
          "User Flow",
          "Wireframing",
          "Prototyping",
        ],
      },
      {
        title: "UI & Visual Design",
        icon: "pen-tool",
        items: [
          "UI Design",
          "Responsive Design",
          "Design System",
          "Component Library",
          "Interaction Design",
          "UI Testing / Design QA",
        ],
      },
      {
        title: "Tools",
        icon: "tool",
        items: [
          "Figma",
          "Adobe Photoshop",
          "Adobe Illustrator",
          "After Effects",
          "Lottie",
          "AI Tools",
        ],
      },
      {
        title: "Collaboration",
        icon: "users",
        items: [
          "Product Thinking",
          "Requirements Analysis",
          "Working with BA",
          "Developer Handoff",
          "Cross-functional Team",
          "Agile / Scrum",
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------
     EXPERIENCE — pulled directly from CV
     ---------------------------------------------------------------
     Rendered as a left-hand compact timeline (company + dates) next
     to a detail panel on the right. Clicking a timeline item swaps
     the detail panel. "current: true" opens selected by default.
     To add/remove a role, add/remove an object from this array.
     --------------------------------------------------------------- */
  experience: {
    kicker: "My Journey",
    title: "Experience",
    roles: [
      {
        company: "LG CNS",
        role: "UI/UX Designer",
        period: "04/2025 – Present",
        current: true,
        link: "",
        bullets: [
          "Design end-to-end UI/UX for web and mobile products, from research and user flows to high-fidelity UI and prototypes.",
          "Build and maintain Design Systems and reusable components.",
          "Collaborate with BA, developers and stakeholders throughout design and implementation.",
          "Conduct UI Testing / Design QA to ensure usability and visual consistency.",
        ],
      },
      {
        company: "CMC Global",
        role: "UI/UX Designer",
        period: "12/2023 – 03/2025",
        current: false,
        link: "",
        bullets: [
          "Created personas, sitemaps, user flows, wireframes and high-fidelity UI.",
          "Built Design Systems, style guides and reusable components.",
          "Designed web/mobile products and supported developers during implementation.",
        ],
      },
      {
        company: "With-Is Vina",
        role: "UI/UX Designer",
        period: "04/2020 – 11/2023",
        current: false,
        link: "",
        bullets: [
          "Designed user flows, wireframes, prototypes and UI for web/mobile products.",
          "Built Design Systems and supported UI implementation with HTML/CSS.",
        ],
      },
      {
        company: "Titan Group",
        role: "UI/UX Designer",
        period: "03/2019 – 03/2020",
        current: false,
        link: "",
        bullets: ["Designed websites and landing pages.", "Designed branding materials."],
      },
      {
        company: "Sky Realty",
        role: "Graphic Designer",
        period: "02/2018 – 02/2019",
        current: false,
        link: "",
        bullets: [
          "Designed logos, branding, brochures, catalogues, banners, and standees.",
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------
     CONTACT / FOOTER
     --------------------------------------------------------------- */
  contact: {
    kicker: "Let's Work Together",
    title: "Let's Design Something Great",
    subtitle:
      "Open to senior product designer roles, design leadership positions, and long-term enterprise product collaborations.",
    emailPlaceholder: "Enter your email",
    ctaLabel: "Contact Me",
  },

  footer: {
    role: "Senior Product Designer",
    location: "Ha Noi, Vietnam",
    year: "2026",
  },
};
