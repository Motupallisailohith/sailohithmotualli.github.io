/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Lohith's portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Lohith's Portfolio",
    type: "website",
    url: "https://motupallisailohith.github.io/.github.io/#/home",
  },
};

//Home Page
const greeting = {
  title: "Sai Lohith",
  logo_name: "SaiLohith",

  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1kXLpYnqtkOjMe4RbeM7wxD7DscbP6pDK/view?usp=sharing",
  githubProfile: "https://github.com/Motupallisailohith",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Motupallisailohith",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/saillohith/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:sailohith1439@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/SaiLohi51044179",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/sai.lohith.796/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/lohithm.me/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "🌟 Capable of performing data preprocessing, data cleaning, data visualization",
        "🌟 Experience of working with Kaggle datasets through ETL operations and representing data through dashboards and Reports ",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "mdi:language-r",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "logos:tableau",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "vscode-icons:file-type-excel",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Back End Development",
      fileName: "DataScienceImg",
      skills: [
        "🌟 Developing Java and Python Projets for distinct business use cases",
        "🌟 Experience of working in Unit testing framework of Java- Junit testing and Vectorization techniques in NLP using python ",
        "🌟 Maven implementation for automatic building of application and Microservices Architecture",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "skill-icons:java-dark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "skill-icons:python-dark",
          style: {
            backgroundColor: "transparent",
            //backgroundColor: "white",
            //color: "#D00000",
          },
        },
        {
          skillName: "Git-vcs",
          fontAwesomeClassname: "mdi:git",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "API-testing",
          fontAwesomeClassname: "logos:postman",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Structured DB query",
          fontAwesomeClassname: "mdi:sql-query",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "🌟 Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "🌟 Setting up streaming jobs from DB to Server or vice-versa on GCP ",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/sailohith1439",
    },

    {
      siteName: "Qwiklabs-GCP",
      iconifyClassname: "cib:qwiklabs",
      style: {
        color: "#F5CD0E",
      },
      profileLink:
        "https://www.cloudskillsboost.google/public_profiles/361a6ee2-6e72-4fba-876e-6657b2bd1247",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Lovely Professional University, Jalandhar, India",
      subtitle: "B.Tech. in Computer Science & Engineering",
      logo_path: "Lovely_Professional_University_logo.5456eb90.png",
      alt_name: "Lovely Professional University",
      duration: "2018 - 2022",
      descriptions: [
        "🌟 I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "🌟 Apart from this, I have done courses on Data Science, Cloud Computing and Programming.",
      ],
      website_link: "https://www.lpu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Google Digital Garage",
      subtitle: "-56L CEH JQY",
      logo_path: "unnamed.d0f02490.png",
      certificate_link:
        "https://learndigital.withgoogle.com/digitalgarage/validate-certificate-code",
      alt_name: "Google Digital Garage",
      color_code: "#1a73e8",
    },
    {
      title: "Data Structures And Algorithms",
      subtitle: "-Sandeep Jain",
      logo_path: "images.png",
      certificate_link:
        "https://drive.google.com/file/d/1O0W_9q9sDbpqDTvL4rQnP9cqkP_Z1XNT/view?usp=sharing",
      alt_name: "GeeksForGeeks",
      color_code: "#28a745",
    },
    {
      title: "Learning Paladin",
      subtitle: "-Digital base 1",
      logo_path: "676-6762434_cognizant-logo-png.png",
      certificate_link:
        "https://drive.google.com/file/d/1Po-6nsxeDnMeyUVVldKXgm0mOKTmWEkj/view",
      alt_name: "Learning Paladin",
      color_code: "#0C9D5899",
    },
    {
      title: "Sparkling Star",
      subtitle: "-Digital base 1",
      logo_path: "676-6762434_cognizant-logo-png.png",
      certificate_link:
        "https://drive.google.com/file/d/1YHs4m3oXz7fmHxgo-DhGm9_CNEaKgCLg/view",
      alt_name: "Sparkling-star",
      color_code: "#1F70C199",
    },

    {
      title: "Cloud Master Class",
      subtitle: "-Goutham Nanjudaswamy",
      logo_path: "aws.png",
      certificate_link:
        "https://drive.google.com/file/d/1Twqwqcp8th0FgRxY0bvLmm0wMQCuHy6Q/view",
      alt_name: "AWS",
      color_code: "#fff",
    },
    {
      title: "Software Engineering",
      subtitle: "- -A.Goswami",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1zuWIPsrpCQjZRIbdLlRCQFKB1YfdcCY6/view",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Data Science For Engineers",
      subtitle: "-Andrew Thangaraj",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1o2RBnQLx8skd5b-bZDyDbbnMyOihIvsi/view",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked in Bosch Global Software Technologies, a leader in software providers for Mobility Solutions, dealt automation project with Corporate Coding Standards and etiquittes. I love to connect with world class developers and participate in hackathons",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Associate Software Engineer",
          company: "Bosch Global Software Technologies",
          company_url: "https://www.bosch-softwaretechnologies.com/en/",
          logo_path: "311221_bgsw_digital_banners-11_new_res_1600x900.png",
          duration: "July 2022-current",
          location: "Bangalore, Karnataka",
          description:
            "I am working on automating mobility solutions. The project involves automation in generation of artifacts for software builds in Network and Diagnostic entities of Automotive Base Software. It requires skill set in Java, Python, AI and MicroService architecture",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Project Trainee Intern",
          company: "Bosch Global Software Technologies",
          company_url: "https://www.bosch-softwaretechnologies.com/en/",
          logo_path: "311221_bgsw_digital_banners-11_new_res_1600x900.png",
          duration: "Jan 2022-May 2022",
          location: "Work From Home",
          description:
            "feature development in DBC to Arxml file format conversion servcice Java project, Basic implementational domain knowledge in Autosar and Base Softwarr architecture",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Developer Students Club Member",
          company: "DSC LPU",
          company_url:
            "https://gdsc.community.dev/lovely-professional-university-jalandhar/",
          logo_path: "dsc_logo.png",
          duration: "Jan 2021 - May 2022",
          location: "Jalandhar, Punjab",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Event Manager & Social media handler",
          company: "Spade EMS",
          company_url:
            "https://www.linkedin.com/company/spadeevents/?originalSubdomain=in",
          logo_path: "spade.png",
          duration: "Jan 2019 - May 2019",
          location: "Jalandhar, Punjab",
          description:
            "Explore Various departments in managing a event right from colloborations to publicrelations,sponsorships,socialmediamarketing,ground work,registrations,graphic designing etc.",
          color: "#0C9D58",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects are mostly as part of my curriculum. They are built using small scale infrastructure to understand the concepts well",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Web_Photo_Editor.61485005.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Java, Python and Data Science associated entities",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I used to write a blog for students who are searching for apt Engineering disciplines and colleges",
    link: "https://clgvouge.blogspot.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Balaji Avenue, Bhavani Nagar, Tirupati, Dist-Tirupati, AndhraPradesh - 517501",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/yNLAVpb674XhjNxWA",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
