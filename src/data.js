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
        image: {isSvg: false, src:"./images/luigis-logo.png", alt:"LUIGI'S Real Italian Ice", bgColor: "#EBA525"},
        link: "https://www.luigis.com/",
        type: "Web Application",
        techStack: ["WordPress", "PHP", "JavaScript", "Sass"],
        whatIbuilt: [
            {section: "Home", link:"https://www.luigis.com/"}, 
            {section: "Flavors", link:"https://www.luigis.com/flavor/lemon/"}, 
            {section: "Footer", link:"https://www.luigis.com/"}, 
            {section: "Design WordPress Gutenburg Blocks"},
        ]
    },
    // {
    //     title: "Alabama A&M University - Microsite", 
    //     image: {src:"images/aamu.png", alt:"Alabama A&M University"},
    //     link: "https://www.aamu.edu/index-landing.html",
    //     type: "Static Microsite",
    //     techStack: ["Pug.js", "Node.js", "Express"],
    //     whatIbuilt: ["Content Cards", "Carry the Torch", "Footer"]
    // },
    {
        title: "Valvoline Performance Rewards", 
        image: {isSvg: false, src:"./images/StickerbucksLogo.png", alt:"Stickerbucks Home Screen", bgColor: "#124B8C"},
        type: "Mobile Application",
        techStack: ["React Native", "React Native StyleSheet", "WordPress"],
        whatIbuilt: ["Home Screen", "Submit Claim Screen", "All Claims Screen"]
    },
    {
        title: "Obsidianworks", 
        image: {isSvg: false, src:"./images/obsidianworks-logo.png", alt:"Obsidianworks", bgColor: "#101010"},
        link: "https://obsidianworks.com/",
        type: "Web Application",
        techStack: ["WordPress", "PHP", "JavaScript", "Sass"],
        whatIbuilt: ["Home Screen", "Submit Claim Screen", "All Claims Screen"]
    },
    {
        title: "Vassar College - Campaign Fundraiser", 
        image: {isSvg: true, src: "./images/vassar-logo.svg", alt:"Vassar College", bgColor: "#641A2B"},
        link: "https://campaign.vassar.edu/",
        type: "Web Application",
        techStack: ["WordPress", "Vue", "Sass"],
        whatIbuilt: [
            {section: "Campain Priorities and Footer", link:"https://campaign.vassar.edu"}, 
            {section: "News", link: "https://campaign.vassar.edu/news"},
            {section: "Design WordPress Gutenburg Blocks"}
        ]
    },
    {
        title: "Wake Forest University - School of Professional Studies", 
        image: {isSvg: true, src: "./images/wake-forest-logo.svg", alt:"Wake Forest University", bgColor: "#8c6d2c"},
        link: "https://sps.wfu.edu/",
        type: "Web Application",
        techStack: ["WordPress", "Vue", "Sass"],
        whatIbuilt: [
            {section:"Tuition and Financial Aid - FAQ", link:"https://sps.wfu.edu/tuition-financial-aid/"}, 
            {section:"Programs - Program Cards", link:"https://sps.wfu.edu/programs/"}, 
            {section:"Downloads Filter", link:"https://sps.wfu.edu/downloads/"}, 
        ]
    },
];