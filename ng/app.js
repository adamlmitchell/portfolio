var app = angular.module("PortfolioApp", ["ngSanitize"])
.controller('MainController', ['$scope', function($scope) {
  $scope.sName = 'Adam Mitchell';
  $scope.sTitle = 'Technical Director, Senior Developer & Web Technology Consultant';
  $scope.skillsIntro = "<p>I am a fast learner and very adaptible, I have never met a challenge I couldn't face. In college, I started with Java and moved to C#. As soon as I entered the workforce, I had to pick up ActionScript (Flash) and Python, later making a transition to PHP. Seeing those languages from that perspective gave me a real sense of the commonality of the logic and solutions across languages and the effects the nuance of the specific syntax can have.</p><p>Alongside those languages, I have been exposed to and worked with countless technologies. Throughout my career, I have worked on small, nimble teams that require quick thinking, gear shifting, and learning new things every day. The skills below reflect my most recent experience and are just a small set of the things I have worked with.</p><p>If you don't see something on the list, chances are I have either worked with it directly or am familar with similar technology.</p>";

  $scope.skills = [
    {
      title: "Concepts",
      content: "<ul>"+
                "<li>Content Management Systems</li>"+
                "<li>APIs</li>"+
                "<li>Integrations</li>"+
                "<li>Migrations</li>"+
                "<li>Web Technologies</li>"+
                "<li>Software Developement Lifecycle</li>"+
              "</ul>"
    },
    {
      title: "Technology",
      content: "<ul>"+
                "<li>CMS: Drupal, eZ Publish, WordPress</li>"+
                "<li>Languages: PHP, Javascript, jQuery, AngularJS, HTML, Python</li>"+
                "<li>Concepts: OOP, DevOps, Continuous Integration, SSO, SEO, Accessibility</li>"+
                "<li>Systems: LAMP stack, AWS, Unix</li>"+
                "<li>Product Administration: JIRA, Confluence, HipChat</li>"+
                "<li>Software: Sublime, PHPStorm, Eclipse, Photoshop, Illustrator, InDesign, Visio</li>"+
              "</ul>"
    },
    {
      title: "Management",
      content: "<ul>"+
                "<li>Director experience overseeing technical department</li>"+
                "<li>12+ years experience in agency environment</li>"+
                "<li>Attuned to fast pace and multi-tasking</li>"+
                "<li>Self-starter</li>"+
                "<li>Experience staffing in matrixed environment</li>"+
                "<li>Experience estimating and planning $250k+ projects</li>"+
                "<li>Experience managing and mentoring junior resources</li>"+
              "</ul>"
    }
  ];

  $scope.timelineItems = [
    {
      type: 'project',
      title: 'CAL Solutions',
      detail: 'eZ Publish CMS Build',
      location: 'Beaconfire RED',
      timeframe: 'Spring 2016',
      description: '',
      id: ''
    },
    {
      type: 'project',
      title: "Colorado Health Foundation",
			detail: "Technical Platform Consulting",
      location: 'Beaconfire RED',
      timeframe: 'Spring 2016',
      description: '',
      id: ''
    },
    {
      type: 'project',
      title: "Alzheimer's Association",
      detail: "CMS Evaluation",
      location: 'Beaconfire RED',
      timeframe: 'Fall 2015 - Spring 2016',
      description: 'Acted as primary consultant on a large-scale technology evalution project to determine a new CMS platform.',
      id: 'alz'
    },
    {
      type: 'project',
      title: "National Women's History Museum",
			detail: "Technology Consulting",
      location: 'Beaconfire RED',
      timeframe: 'Fall 2015',
      description: '',
      id: ''
    },
    {
      type: 'position',
      title: 'Promoted to Director of Technology',
      detail: "",
      location: 'Beaconfire RED',
      timeframe: 'July 2015',
      description: 'Assumed Technical Director position alongside continued Technical Lead position',
      id: 'bf-techdir'
    },
    {
      type: 'project',
      title: "Legal Services Corporation",
			detail: "Drupal CMS Build",
      location: 'Beaconfire RED',
      timeframe: 'Spring 2015',
      description: '',
      id: ''
    },
    {
      type: 'project',
      title: "Working America HealthCare",
			detail: "Drupal CMS Build",
      location: 'Beaconfire RED',
      timeframe: 'Fall 2014',
      description: '',
      id: ''
    },
    {
      type: 'project',
      title: "Foundation Center's GlassPockets",
			detail: "eZ Publish Build",
      location: 'Beaconfire RED',
      timeframe: 'Fall 2014 - Spring 2015',
      description: "Led CMS and data integration project for a new addition to Foundation Center's multi-site set up.",
      id: 'fcgp'
    },
    {
      type: 'project',
      title: "ALS Association",
			detail: "Internal Technology Consulting",
      location: 'Beaconfire RED',
      timeframe: 'Fall 2014',
      description: '',
      id: ''
    },
    {
      type: 'project',
      title: "Helen Keller International",
			detail: "Drupal CMS Build",
      location: 'Beaconfire RED',
      timeframe: 'Fall 2014',
      description: '',
      id: ''
    },
    {
      type: 'project',
      title: "Union of Concerned Scientists",
			detail: "Drupal CMS Build",
      location: 'Beaconfire RED',
      timeframe: 'Summer 2014 - Spring 2015',
      description: 'Technical lead on large-scale Drupal CMS build for UCS.',
      id: 'ucs'
    },
    {
      type: 'project',
      title: "Truth Initiative",
			detail: "Custom App Integration Work",
      location: 'Beaconfire RED',
      timeframe: 'Summer 2014',
      description: '',
      id: ''
    },
    {
      type: 'project',
      title: "AFSP",
			detail: "eZ Publish CMS Build",
      location: 'Beaconfire RED',
      timeframe: 'Summer 2014',
      description: '',
      id: ''
    },
    {
      type: 'position',
      title: 'Promoted to Technical Lead with Personnel Manager duties',
      detail: "",
      location: 'Beaconfire RED',
      timeframe: 'June 2014',
      description: 'Took on additional responsibilities as Personnel Manager for the development department.',
      id: ''
    },
    {
      type: 'project',
      title: "Skillman Foundation",
			detail: "eZ Publish Build",
      location: 'Beaconfire RED',
      timeframe: 'Spring - Summer 2014',
      description: '',
      id: ''
    },
    {
      type: 'project',
      title: "Legacy For Health",
			detail: "eZ Publish Build",
      location: 'Beaconfire RED',
      timeframe: 'Spring 2014',
      description: 'Technical Lead for Legacy For Health redesign, migration, and new CMS build.',
      id: 'lfh'
    },
    {
      type: 'project',
      title: "AICPA",
			detail: "eZ Publish CMS Build",
      location: 'Beaconfire RED',
      timeframe: 'Winter 2013',
      description: '',
      id: ''
    },
    {
      type: 'project',
      title: "Ad Council",
			detail: "eZ Publish CMS Build",
      location: 'Beaconfire RED',
      timeframe: 'Summer - Winter 2013',
      description: '',
      id: ''
    },
    {
      type: 'project',
      title: "American Museum of Natural History",
			detail: "Large-scale eZ Publish Build",
      location: 'Beaconfire RED',
      timeframe: 'Spring 2012 - Summer 2013',
      description: 'Acted as primary of two Technical Leads for Beaconfire RED on the largest single build they had undertaken.',
      id: 'amnh'
    },
    {
      type: 'project',
      title: "National Trust for Historic Preservation",
			detail: "@Home Community Build",
      location: 'Beaconfire RED',
      timeframe: 'Fall - Winter 2011',
      description: '',
      id: ''
    },
    {
      type: 'project',
      title: "Foundation Center",
			detail: "eZ Publish CMS Build",
      location: 'Beaconfire RED',
      timeframe: 'Fall 2010 - Summer 2011',
      description: '',
      id: ''
    },
    {
      type: 'project',
      title: "Living Beyond Breast Cancer",
			detail: "eZ Publish CMS Build",
      location: 'Beaconfire RED',
      timeframe: 'Summer 2010 - Fall 2010',
      description: '',
      id: ''
    },
    {
      type: 'project',
      title: "BecomeAnEx",
			detail: "Community Migration",
      location: 'Beaconfire RED',
      timeframe: 'Spring - Summer 2010',
      description: 'Was technical lead for evaluation and configuration of new community platform and principle architect for migration of more than 2 million data points from existing community.',
      id: 'bex'
    },
    {
      type: 'project',
      title: "Ocean Conservancy",
			detail: "DCRT Platform work",
      location: 'Beaconfire RED',
      timeframe: 'Summer - Fall 2009',
      description: 'Acted as Senior Developer on rework and enhancements to existing custom data collection and reporting tool.',
      id: 'occ'
    },
    {
      type: 'position',
      title: 'Started at Beaconfire RED as Senior Developer',
      detail: "",
      location: 'Beaconfire RED',
      timeframe: 'March 2009',
      description: 'Hired on as Developer quickly moved to Senior Developer/Technical Lead',
      id: 'bf-dev'
    },
    {
      type: 'position',
      title: 'Started at Atlantic Media as Project Manager',
      detail: "",
      location: 'Atlantic Media',
      timeframe: 'June 2008',
      description: 'Hired on as Project Manager with Technical focus',
      id: 'am'
    },
    {
      type: 'project',
      title: "Council fro Christian Colleges and Universities",
			detail: "Custom CMS Build",
      location: 'Siteworx, Inc.',
      timeframe: 'Spring 2008',
      description: '',
      id: ''
    },
    {
      type: 'project',
      title: "Goodwill",
			detail: "Site Revamp Consulting",
      location: 'Siteworx, Inc.',
      timeframe: 'Fall 2007 - Spring 2008',
      description: 'Acted as Primary Consultant for Goodwill internal site revamp.',
      id: 'goodwill'
    },
    {
      type: 'project',
      title: "American Background Institute",
			detail: "Website Redesign Consulting",
      location: 'Siteworx, Inc.',
      timeframe: 'Spring - Summer 2007',
      description: "",
      id: ''
    },
    {
      type: 'project',
      title: "K12",
			detail: "Website Redesign Consulting",
      location: 'Siteworx, Inc.',
      timeframe: 'Fall 2006 - Winter 2006',
      description: "",
      id: ''
    },
    {
      type: 'position',
      title: 'Promoted to Technical Manager',
      detail: "",
      location: 'Siteworx, Inc.',
      timeframe: 'June 2006',
      description: 'Promoted to Technical Manager for team of 8 developers.',
      id: 'swx-tm'
    },
    {
      type: 'project',
      title: "Lat34",
			detail: "Custom CMS Build",
      location: 'Siteworx, Inc.',
      timeframe: 'Summer - Fall 2006',
      description: "",
      id: ''
    },
    {
      type: 'project',
      title: "Discovery Health",
			detail: "Custom Flash Application",
      location: 'Siteworx, Inc.',
      timeframe: 'Summer - Fall 2006',
      description: "",
      id: ''
    },
    {
      type: 'project',
      title: "The College Board",
			detail: "PowerFAIDS Overhaul",
      location: 'Siteworx, Inc.',
      timeframe: 'Fall 2005 - Fall 2006',
      description: 'Acted as Principle Consultant for large-scale rework of PowerFAIDS application.',
      id: 'cbpf'
    },
    {
      type: 'project',
      title: "AOL",
			detail: "Various Projects",
      location: 'Siteworx, Inc.',
      timeframe: 'Fall 2005 - Spring 2008',
      description: "",
      id: ''
    },
    {
      type: 'position',
      title: 'Promoted to Senior Developer',
      detail: "",
      location: 'Siteworx, Inc.',
      timeframe: 'June 2005',
      description: 'Promoted from developer to senior developer',
      id: 'swx-sd'
    },
    {
      type: 'project',
      title: "Dr. Sauer",
			detail: "Custom CMS Build",
      location: 'Siteworx, Inc.',
      timeframe: 'Spring - Summer 2005',
      description: "",
      id: ''
    },
    {
      type: 'project',
      title: "DLC Virtual Case Studies",
			detail: "Flash Application Build",
      location: 'Siteworx, Inc.',
      timeframe: 'Fall 2004 - Spring 2005',
      description: 'Was principle developer on Virtual Case Studies distance learning Flash application.',
      id: 'dlcvcs'
    },
    {
      type: 'position',
      title: 'Hired on as Full-Time Developer',
      detail: "",
      location: 'Siteworx, Inc.',
      timeframe: 'March 2004',
      description: 'Merit-based promotion from internship, hired on as full-time developer',
      id: ''
    },
    {
      type: 'project',
      title: "Haverford Homes Floorplan Viewer",
			detail: "Flash Application Build",
      location: 'Siteworx, Inc.',
      timeframe: 'Spring - Fall 2004',
      description: "Was primary developer and principle architect for Haverford Homes' floorplan viewer Flash application.",
      id: 'hh'
    },
    {
      type: 'position',
      title: 'Started as Development Intern',
      detail: "",
      location: 'Siteworx, Inc.',
      timeframe: 'January 2004',
      description: 'Started with 3 month internship between college semesters',
      id: 'swx-intern'
    },
    {
      type: 'project',
      title: "SIUE Textbook Service Internal Software Revamp",
			detail: "Legacy Technology Refresh",
      location: 'Southern Illinois University Edwardsville Textbook Service',
      timeframe: 'Fall 2002 - Fall 2003',
      description: "Went beyond duties as office assistant to help revamp / repair internal legacy textbook rental software written directly in Paradox 4.5 database software.",
      id: ''
    },
    {
      type: 'position',
      title: "Started as Office Assistant",
      detail: "",
      location: 'Southern Illinois University Edwardsville Textbook Service',
      timeframe: 'March 2002',
      description: 'Worked as office assistant while attending college.',
      id: 'swx-intern'
    }

  ];

  $scope.introContent = [
   {
      title: "Developer",
      content: "I was always drawn to computers. From my early days tinkering with programs on my TI-83 calculator and teaching myself the basics of HTML on my first desktop computer to recently digging in to AngularJS and Bootstrap, I have always had a desire to learn more about how things work behind the scenes. That curiosity has led me to a career in development that has included a breadth of web technologies and solutions including primary web technologies (HTML, CSS, JavaScript), LAMP stack, various languages (PHP, Java, Python, and more), and a specific focus on CMS platform technologies (Drupal, eZ Publish, WordPress, etc). Throughout my time in the web industry, I have become very familiar with the challenges of web builds, both common and uncommon.",
      quote: "Adam's ability to help me dissect problems, and then come up with steps to solve them, have really helped me become a better developer and manager.",
      person: "Chris Guy",
      role: "Senior Developer & Former Employee",
      organization: "Siteworx, Inc."
    },
    {
      title: "Problem Solver",
      content: "With more than a dozen years of experience in the web tech industry, I have a versatile background which includes experience as a developer, technical team lead, UX architect, project manager, technical consultant, and technical director. I am a quick learner and have spent most of my career being a collaborator and leader that fills in the gaps, playing a necessary but ill-defined role of problem solver and team force multiplier.",
      quote: "Adam is full of ideas about how to move the project forward. He is a great problem solver whether it be helping with technical hurdles, improving design and usability, or rearranging schedules so the project doesn't go down hill. I would recommend Adam as a great addition to any software development team.",
      person: "Marco Rogers",
      role: "Former Co-Worker & Engineering Manager",
      organization: "Clover Health"
    },
    {
      title: "Collaborator",
      content: "Personable, outgoing, intuitive, and creative with an eye for solutions that are both technically sound and personally engaging, I am able to leverage my pragmatic and collaborative nature to manage teams, engage internal & client team members, and deliver high quality results. I have been an integral part of teams responsible for delivering award-winning websites and have helped many organizations identify root-cause problems, design solutions, and achieve success.",
      quote: "Adam is a versatile and talented software engineer and manager. He has a knack for working with clients to build solutions that are well considered and engineered while maintaining budget and focus on deadlines.",
      person: "Neal Meier",
      role: "Former Co-Worker & Owner",
      organization: "Elevated Presence"
    },
    {
      title: "Consensus Builder",
      content: "While I have a breadth of experience with all parts of development, what always engages me the most are the collaborative and brainstorming aspects. I love to dig in to a problem, put heads down with others, and work towards a smart solution. I am very pragmatic and tend to emerge as a thought-leader, working to identify the best path forward. In addition to my own contributions, I often reinforce others' opinions and give a voice to the best ideas no matter where or who they come from.",
      quote: "Adam is extremely attuned to the people around him and developed relationships of trust with the entire team. He is one of the best consultants I've ever worked with.",
      person: "Darrill Anderson",
      role: "Client",
      organization: "The College Board"
    },
    {
      title: "Manager",
      content: "I have a strong belief in teamwork and collaboration. Leveraging junior and senior skillsets appropriately, mentoring team members, and growing organically are key goals when building a successful team. I am a steadfast believer in good ideas over politics and value collaboration & teamwork above all else.",
      quote: "Adam believes in mutual trust and loyalty amongst his team members [...] I couldn't ask for a better team manager.",
      person: "Jim Schmatz",
      role: "Senior Developer & Former Employee",
      organization: "Siteworx, Inc."
    }
  ];

  $scope.projects = [
    {
      id: "alz",
      title: "Alzheimer's Association CMS Evaluation",
      shortTitle: "Alzheimer's Association",
      timeframe: "Fall 2015 - Spring 2016",
      location: "Beaconfire RED",
      content: "<p>The Alzheimer's Association project was a Technical Consulting effort where we helped identify the best platform for their new site. Their existing site was built in Sitecore and several factors were being taken into account including leveraging the existing technology platform, usability for the administrators, and considering a complete change of direction.</p><p>My role on the project was Principle Consultant which initially included running requirements workshops, interpreting user and administrator needs, researching available platforms and products, and creating a comparison document. From there, I lead the full team through product exploration, vendor demos and scoring, and a final decision on the best platform for their multi-site implementation.</p><p>Ultimately, remaining neutral throughout the process, a product was recommended that best fit Alzheimer's Association's needs and the client was very happy with their selection as they entered the beginning phases of their new implementation.</p>",
      screenshots: false
    },
    {
      id: "fcgp",
      title: "Foundation Center GlassPockets eZ Publish CMS Build",
      shortTitle: "GlassPockets",
      timeframe: "Fall 2014 - Spring 2015",
      location: "Beaconfire RED",
      content: "<p>The Foundation Center's GlassPockets project was a new sub-site created as part of the Foundation Center's multi-site CMS set up that focuses on their transparency efforts. The site itself includes several ways of contextualizing transparency data for a large list of foundations.</p><p>The project included several interactive pieces and data integrations to display a list of foundations with a customizable set of data points for comparison, a trends section to compare the relative openness of the foundations, and a comparison interactive that allows foundations to compare their foundation's openness directly with other selected foundations that are similar.</p><p>Hailed as a stunning success internally, the GlassPockets site has become a marquee piece for the Foundation Center and an quality example of how data can be made both accessible and highly engaging.</p>",
      screenshots: true
    },
    {
      id: "ucs",
      title: "Union of Concerned Scientists Drupal CMS Build",
      shortTitle: "Union of Concerned Scientists",
      timeframe: "Summer 2014 - Spring 2015",
      location: "Beaconfire RED",
      content: "<p>The Union of Concerned Scientists project was a migration and rebuild of a site that Beaconfire had long supported. The new site was one of the first and most complex Drupal implementations undertaken at Beaconfire. The site included several unique pieces of functionality, specifically around organization and display of the UCS content by related content and tagging and included a tweaked search that allowed for custom relevance and more tailored results for users using the site search.</p><p>My role on the project was principle architect, technology consultant, build lead, and ongoing lead. The site was a success both internally and externally for the client and received positive feedback from users.</p>",
      screenshots: true
    },
    {
      id: "lfh",
      title: "Legacy for Health eZ Publish Build",
      shortTitle: "Legacy for Health",
      timeframe: "Spring 2014",
      location: "Beaconfire RED",
      content: "<p>The Legacy for Health project was a full redesign and rebuild of their existing site. Legacy for Health was formerly American Legacy and is now consolidated under the Truth Initiative brand. Throughout this transition, the Legacy for Health site was the primary site for the organization, alongside the BecomeAnEX site and Truth Initiative marketing sites.</p><p>My involvement in the project was as the Tech Lead and principle developer. The site itself was a CMS build with some unique pieces of functionality. The first was an in depth media library that had support for videos, infographics, and other assets made available for others to download and use to promote anti-smoking efforts. The second piece was a database of facts about smoking that allowed for researchers, teachers, and others to browse, filter, and sort facts to create a customized downloadable and printable list of facts.</p>",
      screenshots: true
    },
    {
      id: "amnh",
      title: "American Museum of Natural History eZ Publish CMS Build",
      shortTitle: "American Museum of Natural History",
      timeframe: "Spring 2012 - Summer 2013",
      location: "Beaconfire RED",
      content: "<p>The American Museum of Natural History project was a milestone for Beaconfire, as it was one of the largest projects the company had ever undertaken. The project itself was a full-scale redesign and rebuild of the museum's full website, including pages for the many halls and exhibitions in the museum, a calendar of events, a event / scheduling system, and a unique navigation paradigm that allowed end users to easily navigate the site's deep content tree.</p><p>As the primary of two Beaconfire Tech Leads on the project, I was charged with architecting technical solutions for the major functionality on the site, implementing several complex pieces personally, and leading the development team through the rest of the project. At launch, the site received positive feedback from end users and was seen as a vast improvement over the museum's previous site.</p>",
      screenshots: true
    },
    {
      id: "bex",
      title: "BecomeAnEX Community Build and Large-scale Migration",
      shortTitle: "BecomeAnEx Community",
      timeframe: "Spring - Summer 2010",
      location: "Beaconfire RED",
      content: "<p>Another project that I took on early in my time at Beaconfire was the BecomeAnEx community migration. The existing community existed on the Ning platform and heavily leveraged custom code, a feature that was soon to be removed from the Ning platform. As a result, BecomeAnEx was looking to migrate their community to a new community with as little disruption as possible.</p><p>The project itself focused on identifying a new and flexible community platform that could be leveraged to recreate the existing community as closely as possible in both form and function and then migrate the million-plus data points from the existing community to its new home. My role on the project was principle consultant, technology consultant, build / customization lead, and data migration expert.</p><p>At the end of the project, and with few compromises, we had successfully recreated the community and migrated all of the existing data to the new location. While there were a few exceptions, the community was happy with the change and the retention of active participants in the community beat expectations and continued to grow in the following years.</p>",
      screenshots: true
    },
    {
      id: "occ",
      title: "Oceans Conservancy Data Collection and Reporting Tool Google Earth Implementation",
      shortTitle: "Oceans DCRT",
      timeframe: "Summer - Fall 2009",
      location: "Beaconfire RED",
      content: "<p>One of my first projects at Beaconfire was for the Ocean Conservancy. For this project, Beaconfire had already created a custom application for the collection of data during OC's annual International Coastal Cleanup. The part of the project I was brought on for was the Google Earth integration.</p><p>The ICC event includes volunteers from around the world cleaning up water ways and providing data about what they found via scorecards. The system that Beaconfire was responsible for processed those scorecards and held the historical and analytical data about them. The Google Earth portion of the project was a focus on converting that location data to points that could be plotted using a KML file.</p><p>My work included digging in to the KML format, prepping the data for use in the KML file, architecting the region-based structure of the incremental and clustered KML files, and implementing the full solution, including additional caching and API work to offset the server load.</p><p>As a result, the Ocean Conservancy was able to leverage their data in a more engaging way and help communicate the impact of their clean up efforts to donors and stakeholders alike.</p>",
      screenshots: false
    },
    {
      id: "goodwill",
      title: "Goodwill Internal Site Revamp Consulting",
      shortTitle: "Goodwill",
      timeframe: "Fall 2007 - Spring 2008",
      location: "Siteworx, Inc.",
      content: "<p>The Goodwill project was a targeted consultation on user feedback about the usability of their members' site. My role was as principle consultant to help organize and interpret user feedback into an actionable plan for the organization. The primary concern was feedback from the users that the site 'took too many clicks'. The team had attempted to stream-line the site as much as possible but found only more negative feedback in the process.</p><p>My insight coming in to the project from outside was that 'too many clicks' was potentially near the problem but not the specific problem users were having. Pivoting from the original statement, we started to work against an expanded version of the feedback: 'too many unsure clicks.' From there, things started to fall in to place as we reworked the first few levels of their navigation to focus less on reducing the number of clicks, which had caused a lot of things to be placed in a very long menu, and more on making sure that each click was an intuitive step between the previous click and the next step towards the destination.</p><p>My involvement ended before the implementation phase but feedback from key stakeholders was that, with my help, we had 'found the missing piece.'</p>",
      screenshots: false
    },
    {
      id: "cbpf",
      title: "College Board PowerFAIDS Application Refresh",
      shortTitle: "College Board PowerFAIDS",
      timeframe: "Fall 2005 - Fall 2006",
      location: "Siteworx, Inc.",
      content: "<p>Early on in my career, while not yet a senior developer, I worked on the College Board PowerFAIDS financial aid management application rebuild project. The project itself was a complete rebuild of a very large application used nationwide by colleges and universities to track and manage student loan information.</p><p>I was initially tasked to embed with a team that included College Board in-house development staff and another 3rd party vendor to help rebuild the PowerFAIDS in a developer role. Quickly pivoting on our initial plan and due largely to my insight and ability to effectively communicate with the client, I stepped up and was tasked with doing business analysis, technical consulting, and interface design for the project, while the in-house resources and other vendor focused on the back-end implementation.</p><p>Taking close to a year for the interface specification alone, the project itself included reworking hundreds of screens in the application and took a considerable amount of hours consulting directly with the client's business analysts and user advocates to quickly iterate on approaches and layouts to best fit the end users needs. The final product received high praise both internally and externally as a vast improvement in the usability and was noted as being much more intuitive to navigate.</p><p>Throughout the project, I was able to translate between technical and non-technical resources to mediate concerns about both technology and end-user needs. Both the developers and business resources had high praise for my work on the project.</p>",
      screenshots: true
    },
    {
      id: "dlcvcs",
      title: "DLC Virtual Case Studies Flash Application Build",
      shortTitle: "DLC Virtual Case Studies",
      timeframe: "Fall 2004 - Spring 2005",
      location: "Siteworx, Inc.",
      content: "<p>One of the earliest projects in my career, the DLC Solutions Virtual Case Studies project was an implementation of a complex Flash application for custom-defined presentations. The project was part of a larger suite of distance learning products and focused on case study content that required some security that was provided by being implemented in Flash.</p><p>Specifically, the implementation kept end-users from being able to cut and paste text directly from the application and consistently formatted the dynamic slides to appear as though they had been individually designed. The solution for this included some in-depth coding and thought work. The end solution required writing a custom XML schema and markup language parser for the slide data that included client-specific tags for custom functionality, including complex interactions with the navigation and interface for the piece. Critical parts of the XML were then loaded into the SWF file at compile time to further obfuscate the data from easy duplication by the end users.</p>",
      screenshots: false
    },
    {
      id: "hh",
      title: "Haverford Homes Interactive Floorplan Viewer Flash Application Build",
      shortTitle: "Haverford Homes",
      timeframe: "Spring - Fall 2004",
      location: "Siteworx, Inc.",
      content: "<p>For the Haverford Homes project, I was tapped to take over an existing interactive floorplan viewer that was written in Flash. The existing piece included simple functionality for choosing a floorplan and then being able to drag and zoom the blueprint to further inspect the plan.</p><p>Initially, my involvement was merely to add some additional content to the piece and fix a few bugs. Once I dug into the project, I was able to make the business case for additional improvements to the piece including a complete rebuild of the underlying code and adding serveral features that were on the clients 'blue sky' wishlist. Most notable were the interactive, toggable options on the floorplans which included complex logic and interactions between simple options, sub-options, and conflicting options. Designed to be intuitive for the end users, the floorplans would fade out and back in with the new additions in place for quick 'with/without' comparisons.</p><p>The interactive was noted as critical to the success of the client's site after it was launched and was eventually retired years later.</p>",
      screenshots: true
    }

  ];

}])
.directive('intro', function(){
  return {
    restrict: 'E',
    replace: false,
    templateUrl:
    'ng/html/intro.html'
  };
})
.directive('jumbotron', function(){
  return {
    restrict: 'E',
    replace: false,
    templateUrl:
    'ng/html/jumbotron.html'
  };
})
.directive('navigation', function(){
  return {
    restrict: 'E',
    replace: false,
    templateUrl:
    'ng/html/navigation.html'
  };
})
.directive('portfolioFooter', function(){
  return {
    restrict: 'E',
    replace: false,
    templateUrl:
    'ng/html/portfolioFooter.html'
  };
})
.directive('portfolioHead', function(){
  return {
    restrict: 'E',
    replace: false,
    templateUrl:
    'ng/html/portfolioHead.html'
  };
})
.directive('projects', function(){
  return {
    restrict: 'E',
    replace: false,
    templateUrl:
    'ng/html/projects.html'
  };
})
.directive('skills', function(){
  return {
    restrict: 'E',
    replace: false,
    templateUrl:
    'ng/html/skills.html'
  };
})
.directive('timeline', function(){
  return {
    restrict: 'E',
    replace: false,
    templateUrl:
    'ng/html/timeline.html'
  };
});