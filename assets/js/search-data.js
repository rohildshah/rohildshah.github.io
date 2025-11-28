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
          section: "News",},{id: "news-looking-forward-to-joining-chipagents-as-an-ai-agent-engineer-intern-during-winter-quarter",
          title: 'Looking forward to joining ChipAgents as an AI Agent Engineer Intern during winter...',
          description: "",
          section: "News",},{
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
