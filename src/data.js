export var projects = [
    // {
    //     title: "Cal Poly Pomona", 
    //     links: {root: "/"},
    //     type: "Website Reskin",
    //     techStack: ["Pug.js", "Node.js", "Express"],
    //     whatIbuilt: ["Home", "Flavors", "Footer"]
    // },
    {
        title: "LUIGI'S Real Italian Ice",
        image: {src:"images/luigis.png", alt:"LUIGI'S Real Italian Ice"},
        link: "https://www.luigis.com/",
        type: "Web Application",
        techStack: ["WordPress"],
        whatIbuilt: [
            {section: "Home", link:"https://www.luigis.com/"}, 
            {section: "Flavors", link:"https://www.luigis.com/flavor/lemon/"}, 
            {section: "Footer", link:"https://www.luigis.com/"}, 
            {section: "Design WordPress Gutenburg Blocks"},
        ]
    },
    {
        title: "Alabama A&M University - Microsite", 
        image: {src:"images/aamu.png", alt:"Alabama A&M University"},
        link: "https://www.aamu.edu/index-landing.html",
        type: "Static Microsite",
        techStack: ["Pug.js", "Node.js", "Express"],
        whatIbuilt: ["Content Cards", "Carry the Torch", "Footer"]
    },
    {
        title: "Valvoline Performance Rewards", 
        image: {src:"images/stickerbucks-home-screen.png", alt:"Stickerbucks Home Screen"},
        type: "Mobile Application",
        techStack: ["React Native", "WordPress"],
        whatIbuilt: ["Home Screen", "Submit Claim Screen", "All Claims Screen"]
    },
    {
        title: "Vassar College - Campaign Fundraiser", 
        image: {src: "images/vassar.png", alt:"Vassar College"},
        link: "https://campaign.vassar.edu/",
        type: "Web Application",
        techStack: ["WordPress", "Vue"],
        whatIbuilt: [
            {section: "Campain Priorities and Footer", link:"https://campaign.vassar.edu"}, 
            {section: "News", link: "https://campaign.vassar.edu/news"},
            {section: "Design WordPress Gutenburg Blocks"}
        ]
    },
    {
        title: "Wake Forest University - School of Professional Studies", 
        image: {src: "images/wakeforest.png", alt:"Wake Forest University"},
        link: "https://sps.wfu.edu/",
        type: "Web Application",
        techStack: ["WordPress", "Vue"],
        whatIbuilt: [
            {section:"Tuition and Financial Aid - FAQ", link:"https://sps.wfu.edu/tuition-financial-aid/"}, 
            {section:"Programs - Program Cards", link:"https://sps.wfu.edu/programs/"}, 
            {section:"Downloads Filter", link:"https://sps.wfu.edu/downloads/"}, 
        ]
    },
];

export var techSkills = [
    {
        areaOfExpertise: "Frontend", 
        languages: ["HTML", "CSS", "JavaScript"], 
        devTools: ["React.js", "React Native", "WordPress", "Pug.js", "SASS", "Tailwind", "Bootstrap", "Git"]
    },
    {
        areaOfExpertise: "Backend", 
        languages: ["PHP", "Java"], 
        devTools: ["Node.js", "Express", "WordPress", "Spring Boot"]
    },
];