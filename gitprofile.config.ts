// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'JulianGarcia00', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 2, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['JulianGarcia00/Microbiometutorial', 'JulianGarcia00/Genometest'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Parasitology- Giardia lamblia',
          description: 
            'Taxonomy, History, Morphology, Life Cycle, Epidemiology, Pathogeneis, Diagnostic tools, Treatment, Prevention, Control, and case studies.',
          imageUrl:
            'https://github.com/JulianGarcia00/JulianGarcia00.github.io/raw/main/555C20D0-945D-4E30-8CE0-3B9B8746E88E.jpeg',
          link: 'https://github.com/JulianGarcia00/JulianGarcia00.github.io/raw/main/Giarda%20lamblia.pdf',
        },
        {
          title: 'Biochemistry: Pyruvate Dehydrogenase Complex Deficiency',
          description:
            'Pyruvate Dehydrogenase Complex background, PDCD, diagnostic tools, symptoms, treatment, and disorders associated',
          imageUrl:
            'https://github.com/JulianGarcia00/JulianGarcia00.github.io/raw/main/EA3D6E79-459E-4193-A98F-7505D8843E18.jpeg',
          link: 'https://github.com/JulianGarcia00/JulianGarcia00.github.io/raw/main/Pyruvate%20Dehydrogenase%20Complex%20Deficiency%20(PDCD).pdf',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Julian Garcia',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://JulianGarcia00.github.io',
    phone: '',
    email: 'garcia_julian94@yahoo.com',
  },
  resume: {
    fileUrl:
      'https://github.com/JulianGarcia00/JulianGarcia00.github.io/raw/main/CV.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Bioinformatics',
    'Clincal and Technical',
    'Critical Thinking',
    'Problem Solving',
    'Client Communication',
    'Teamwork',
    'Leadership',
    'Time Management',
    'Git',
  ],
  experiences: [
    {
      company: 'American Pet Clinic',
      position: 'Veterinary Technician',
      from: 'October 2019',
      to: 'April 2022',
    },
    {
      company: 'Standiford Veterinary Emergency Hospital',
      position: 'Emergency Veterinary Technician',
      from: 'April 2022',
      to: 'Present',
    },
    {
      company: 'California State University, Stanislaus',
      position: 'Peer Tutor',
      from: 'August 2024',
      to: 'Present',
    }
  ],
  certifications: [
    {
      name: '',
      body: '',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'California State University, Stanislaus',
      degree: 'Bachelors of Biological Sciences',
      from: '2023',
      to: '2025',
    },
    {
      institution: 'Modesto Juniior College',
      degree: 'Associates of Arts in Biological Sciences',
      from: '2018',
      to: '2023',
     },
     {
      institution: 'Modesto Juniior College',
      degree: 'Associates of Science in Biological Sciences',
      from: '2018',
      to: '2023',
     },
    ],
  publications: [
    {
      title: 'Genomic Insights into Elizabethkingia miricola DSM 14571: Virulence, Resistance, and Zoonotic Potential',
      conferenceName: '',
      journalName: 'Microbiology Resource Announcements',
      authors: 'Lillyanna Azevedo, Julian Garica, Priscilla Garcia, Taylor Hedley',
      link: 'https://github.com/JulianGarcia00/JulianGarcia00.github.io/raw/main/MRA.pdf',
      description:
        'This is a manuscript in preparation. Isolated from a Russian space station, Elizabethkingia miricola DSM 14571 is a Gram-negative opportunistic and antibiotic resistant human pathogen. Sequencing its genome reveals 4,064 genes, including virulence factors and secondary metabolic clusters. This research could offer further insight into pathogenicity, environmental resilience, resistance mechanisms, and zoonotic risks.',
    },
    {
      title: 'Metabolic Acidosis in DKA: GPR4 as a Mediator of Cellular Dysfunction',
      conferenceName: '',
      journalName: 'California State University Journal of Biochemistry',
      authors: 'Julian Garcia',
      link: 'https://github.com/JulianGarcia00/JulianGarcia00.github.io/raw/main/Biochem%20second%20draft.pdf',
      description:
        'This is a manuscript in preparation. Acidosis, a key feature of diabetic ketoacidosis (DKA) and metabolic disorders, contributes to kidney and vascular injury. The proton-sensing receptor GPR4 plays a central role in mediating this damage. Upon activation by low pH, GPR4 triggers ER stress, apoptosis, and inflammation. Studies using LDH release and cAMP assays show that GPR4 activation increases cell damage and apoptosis in renal and endothelial cells, while GPR4 silencing reduces these effects. In endothelial cells, GPR4 also upregulates ER stress markers like CHOP and GRP78, promoting dysfunction through inflammation and oxidative stress. These findings highlight GPR4 as a potential therapeutic target in acidotic conditions such as DKA.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
