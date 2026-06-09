// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-survival-guide-to-cs-292f-real-time-high-quality-rendering",
        
          title: "Survival Guide to CS 292F: Real-Time High Quality Rendering",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/cs-292f-survival-guide/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-excited-to-join-netapp-as-a-swe-intern-for-the-summer",
          title: 'Excited to join NetApp as a SWE intern for the summer!',
          description: "",
          section: "News",},{id: "news-grateful-to-receive-a-ucsb-computer-science-student-of-the-year-award-for-2025",
          title: 'Grateful to receive a UCSB Computer Science Student of the Year award for...',
          description: "",
          section: "News",},{id: "news-received-the-judges-choice-award-at-netapp-s-internal-engineering-hackathon",
          title: 'Received the Judges Choice Award at NetApp’s internal engineering hackathon.',
          description: "",
          section: "News",},{id: "news-excited-to-join-chipagents-as-an-ai-agent-engineer-intern-for-winter-quarter",
          title: 'Excited to join ChipAgents as an AI Agent Engineer Intern for winter quarter!...',
          description: "",
          section: "News",},{id: "news-joined-google-as-a-software-engineer-intern-doing-multilingual-dataset-synthesis-for-android-ai",
          title: 'Joined Google as a Software Engineer Intern doing multilingual dataset synthesis for Android...',
          description: "",
          section: "News",},{id: "news-our-paper-on-efficient-sparse-retrieval-has-been-accepted-to-the-full-papers-track-of-sigir-2026",
          title: 'Our paper on efficient sparse retrieval has been accepted to the Full Papers...',
          description: "",
          section: "News",},{id: "news-very-grateful-to-be-awarded-the-nsf-graduate-research-fellowship-grfp",
          title: 'Very grateful to be awarded the NSF Graduate Research Fellowship (GRFP)!',
          description: "",
          section: "News",},{id: "news-committed-to-stanford-university-for-a-master-s-in-computer-science-beginning-in-fall-2026",
          title: 'Committed to Stanford University for a Master’s in Computer Science beginning in Fall...',
          description: "",
          section: "News",},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/cv/Rohil%20Shah%20Resume.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%6F%68%69%6C%64%73%68%61%68@%75%63%73%62.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/rohildshah", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/rohildshah", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Z3sL9rUAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
