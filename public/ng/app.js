var app = angular.module("PortfolioApp", ["ngSanitize"])
.controller('MainController', ['$scope', function($scope) {
  $scope.sName = 'Adam Mitchell';
  $scope.sTitle = 'Technical Director, Senior Developer & Web Technology Consultant';
  $scope.skillsIntro = "<p>A fast learner and quick to adapt, I am always picking up new technologies and skills.</p><p>My long-term positions have been for agencies focused on finding the right solution for clients, not just the easy solution. Those environments have led me to develop a skillset that is both technology and people focused.</p><p>At times, I have gained expert-level knowledge to support a technology long-term and, at other times, I have dug into legacy platforms for a single day's work on a client request. That adaptibility and perspective have allowed me to be a key part of nimble teams that require quick thinking, gear shifting, and constant learning.</p><p>Leveraging these various technologies and skills throughout my career has provided perspective on the similarities of the logic and solutions for various problems and given me the ability to quickly assess root-cause concerns and identify solutions that get to the true issue. These skills reflect my most recent experience and are just a subset of the things I have worked with.</p>";

  $scope.contactInfo = {
    content: "<p>I am currently seeking out my next position where I aspire to be a positive force for a talented and dedicated team of people working on exciting projects.</p><p>My interests in a new position are as broad as my experience. More than a specific role or set of tasks, I am seeking out a thought-provoking position where the team feels like family and I can feel like I make a difference. I thrive on contributing to the team and company's success however my skills may be leveraged to get us there.</p><p>If it sounds like we can accomplish great things together I would love to hear from you.</p>",
    links: [
      {
        title: "email",
        linkText: "adamleemitchell@gmail.com",
        link: "mailto:adamleemitchell@gmail.com",
        targetBlank: false
      },
      {
        title: "LinkedIn",
        linkText: "adamleemitchell",
        link: "http://linkedin.com/in/adamleemitchell",
        targetBlank: true
      }
    ]
  };

  $scope.skills = [
    {
      title: "Concepts",
      list: [
        "Content Management Systems",
        "Excellent communication skills",
        "Technical Consulting and Speaking Tech to clients at all levels",
        "Integrations",
        "Migrations",
        "Web Technologies",
        "API - both integration and design",
        "SEO",
        "Faceted Search Optimization",
        "Full SDLC",
        "Change management",
        "Agile workflows"
      ]
    },
    {
      title: "Technology",
      list: [
        "CMS: Drupal, eZ Publish, WordPress",
        "Languages: PHP, Javascript, jQuery, AngularJS, HTML, Python",
        "Concepts: OOP, DevOps, Continuous Integration, SSO, SEO, Accessibility",
        "Systems: LAMP stack, AWS, Unix, Apache, Apache SOLR Search, MySQL, Git, Subversion",
        "Product Administration: JIRA, Confluence, HipChat, GitLab",
        "Software: Sublime, PHPStorm, Eclipse, Photoshop, Illustrator, InDesign, Visio, OSX (Preferred), Windows"
      ]
    },
    {
      title: "Management",
      list: [
        "Director experience overseeing technical department",
        "12+ years experience in agency environment",
        "Attuned to fast pace and multi-tasking",
        "Management style that focuses on collaboration and team-building",
        "Experience staffing in matrixed environment",
        "Experience estimating and planning $250k+ projects",
        "Experience managing and mentoring junior resources",
        "Sub-contractor management"
      ]
    }
  ];

  $scope.jobOrder = ["bf-techdir", "bf-tlmgr", "bf-dev", "am", "swx-tm", "swx-sd", "swx-d", "swx-intern", "siue"];

  $scope.positions = {
    "bf-techdir" : {
      id: 'bf-techdir',
      title: 'Director of Technology',
      location: 'Beaconfire RED',
      timeframe: 'July 2015 - September 2016',
      content: '<p>Assumed Technical Director position alongside continued Technical Lead position.</p><ul>'+
      '<li>Internally promoted from Tech Lead role</li>'+
      '<li>Managed hierarchical tech team of 12 developers</li>'+
      '<li>Developed internal team goals and milestones for department improvement</li>'+
      '<li>Responsible for consulting, problem solving, and mentoring resources on all aspects of CMS builds and integrations, including: CMS architecture, 3rd party systems integration, search engine configuration (SOLR), caching, SEO, semantic content</li>'+
      '<li>Architected and developed integrated CMS solutions in Drupal and WordPress</li>'+
      '<li>Consulted with clients and team members from various departments on project goals, approach, requirements, timeline, budgets, software selection, vendor selection, content migration, and hosting</li>'+
      '<li>Consulted internally on tools, processes, and efficiency of operations</li>'+
      '<li>Performed Technical Lead duties alongside Tech Director duties</li>'+
      '<li>Worked remotely from St. Louis metro area</li>'+
      '</ul>',
      projects: ["calsol", "chf", "alz", "nwhm"]
    },
    "bf-tlmgr" : {
      id: 'bf-tlmgr',
      title: 'Promoted to Technical Lead with Personnel Manager duties',
      location: 'Beaconfire RED',
      timeframe: 'June 2014 - September 2016',
      content: '<p>Took on additional responsibilities as Personnel Manager for the development department.</p>',
      projects: ["lsc", "wahc", "fcgp", "als", "hki", "ucs", "ti", "afsp"]
    },
    "bf-dev" : {
      id: 'bf-dev',
      title: 'Technical Lead',
      location: 'Beaconfire RED',
      timeframe: 'March 2009 - June 2014',
      content: '<p>In early 2009, I hired on with Beaconfire RED as a Senior Developer initially but was quickly transitioned to a Technical Lead.</p><ul>'+
        '<li>Delivered tailored, effective solutions through evaluating, architecting, and implementing various web-based technologies including both 3rd party and open source platforms and tools</li>'+
        '<li>Responsible for architecting solutions and breaking them down into components and individual tasks to delegate to team</li>'+
        '<li>Accountable for consulting and leading development of solution, approach, estimates, budgets, timeline, project plan, and day to day management of tasks for projects led</li>'+
        '<li>Primary technologies were eZ Publish, Drupal, custom PHP applications, HTML, CSS, and 3rd party API integration</li>'+
        '<li>Championed and led internal efforts to adopt industy best-practices, including consistent use of source control and ticketing systems</li>'+
        '<li>Led full team through migration from projcets with no source control to Subversion and later to Git</li>'+
        '<li>Administered Atlassian products including JIRA and Confluence. Responsibilities included full design and implementation of end-to-end workflow in JIRA, construction of templates and spaces in Confluence, and full integration of the two products</li>'+
        '<li>Responsible for developing and implementing solutions for large-scale data migrations including database extraction, API, and screen-scraping techniques</li>'+
        '<li>Conducted several full-scale CMS product comparisons for clients, including determining client concerns & primary needs, coordinating product demos, and consulting on final evaluation & decisions</li>'+
        '<li>Developed and maintained high-quality client relationships built on open and honest communication</li>'+
        '<li>Was a member of People Committee - an employee-led group of employees in charge of running the annual staff survey and interpreting / reporting findings to the Senior Leadership team and owners of the company</li>'+
        '<li>Transitioned to full time remote position from the St Louis metro area in July 2012</li>'+
        '</ul>',
      projects: ["skf", "lfh", "aicpa", "adc", "amnh", "nthp", "fc", "bex", "lbbc", "occ"]
    },
    "am" : {
      id: 'am',
      title: 'Project Manager with Technical Focus',
      location: 'Atlantic Media',
      timeframe: 'June 2008 - March 2009',
      content: '<p>After leaving Siteworx, I went to Atlantic Media Company, producers of The National Journal, Congress Daily, and The Atlantic Monthly. While my title was Project Manager, the primary focus of my role was to function as the technical liason between the IT/development team and the various business units within the organization.</p><ul>'+
        '<li>Coordinated project timelines and development tasks for multiple internal business units.</li>'+
        '<li>Assisted with the creation and implementation of full SLDC project management process for IT department.</li>'+
        '</ul>',
      projects: ["am"]
    },
    "swx-tm" : {
      id: 'swx-tm',
      title: 'Technical Manager',
      location: 'Siteworx, Inc.',
      timeframe: 'June 2006 - March 2009',
      content: '<p>As Siteworx had grown to then have a technical team of 30 developers, they underwent a restructuring that saw me promoted to one of 4 Technical Manager positions in charge of handling personnel, staffing, project, and development management for a team of 7 developers.</p><ul>'+
        '<li>Directly managed and coordinated team of 7 developers to successfully complete multiple simultaneous projects.</li>'+
        '<li>Worked closely with team leads from various disciplines to manage projects through full life cycle.</li>'+
        '<li>Managed customer relationships effectively and worked closely with account lead to grow accounts and pursue up sell opportunities. Clients included associations and nonprofit organizations.</li>'+
        '<li>Consulted with clients on user interface design, technology platforms, best practices, and system implementation.</li>'+
        '<li>Developed, refined, and analyzed requirements to develop Level of Effort (LOE) estimates and project schedules.</li>'+
        '<li>Effectively managed timelines, risks, budgets, hours tracking, and invoicing for multiple projects.</li>'+
        '<li>Collaborated with senior developers and system engineers to define project architecture and hardware requirements.</li>'+
        '<li>Used expertise in both technical and soft skills to mentor junior and senior developers.</li>'+
        '</ul>',
      projects : ["cccu", "goodwill", "abi", "k12"]
    },
    "swx-sd" : {
      id: 'swx-sd',
      title: 'Senior Developer',
      location: 'Siteworx, Inc.',
      timeframe: 'June 2005 - June 2006',
      content: '<p>Frequently representing Siteworx as a Technology Consultant, leading development efforts, and coordinating teams of 2-3 developers, I was promoted to Senior Developer.</p><ul>'+
        '<li>Directly managed team of 3 developers to successfully complete multiple simultaneous projects.</li>'+
        '<li>Worked with management team to coordinate matrixed development team across projects.</li>'+
        '<li>Analyzed requirements to define scope, generate LOE estimates, and outline schedules.</li>'+
        '<li>Acted as technical lead and project manager on multiple simultaneous projects.</li>'+
        '<li>Collaborated with project managers and client contacts to constrain scope, mitigate risk, and meet deadlines.</li>'+
        '<li>Mentored junior developers to improve both technical and softer skills.</li>'+
        '</ul>',
      projects: ["lat34", "disc", "cbpf", "aol"]
    },
    "swx-d" : {
      id: 'swx-d',
      title: 'Software Developer',
      location: 'Siteworx, Inc.',
      timeframe: 'March 2004 - June 2005',
      content: '<p>As a software developer at Siteworx, which was quickly growing at the time, I was able to continue to prove my worth and began managing project teams of 2-3 developers as new junior resources joined the development team.</p><ul>'+
        '<li>Implemented multiple software projects as both a member and lead of teams of 2 -3 developers.</li>'+
        '<li>Utilized wide range of skills to assist with development, user interface design, and project management.</li>'+
        '<li>Worked on-site, embedded with client development teams.</li>'+
        '<li>Collaborated with co-workers and clients to effective deliver highly functional and dynamic projects.</li>'+
        '<li>Displayed effective time-management and communication skills to juggle multiple responsibilities.</li>'+
        '</ul>',
      projects: ["drs", "dlcvcs"]
    },
    "swx-intern" : {
      id: 'swx-intern',
      title: 'Development Intern',
      location: 'Siteworx, Inc.',
      timeframe: 'January 2004 - March 2004',
      content: '<p>Temporarily relocated to Reston, Virginia and started with 3 month internship between college semesters.</p><p>Siteworx was still a small shop at the time and I was one of 8 employees. Initially the position was not meant to have specific goals and was instead intended to merely be an introduction to working in the industry and a test to see if Siteworx could fill time for someone in a junior capacity.</p><p>Based on my performance on early tasks, the complexity and amount of tasks I was given escalated quickly and 2 months into the internship, I was offered a full time position as a software developer. Given that I had quickly become an integral part of their small team, I chose to permanently relocate to Reston to continue with the position.</p>',
      projects: ["hh"]
    },
    "siue" : {
      id: 'siue',
      title: "Office Assistant",
      location: 'Southern Illinois University Edwardsville Textbook Service',
      timeframe: 'March 2002 - December 2003',
      content: '<p>Worked as office assistant while attending college.</p><p>As part of my work in this position I provided some feedback about their custom internal rental system application, which had been written over many years by a single resource as screen-based database code in Paradox 4.5. That feedback led to eventually debugging, maintaining, and re-architecting many pieces of the application myself, becoming the first student worker to assist with the program.</p>',
      projects: ["tbs"]
    }
  };

  $scope.caseStudies = ["alz", "fcgp", "ucs", "lfh", "amnh", "bex", "occ", "goodwill", "cbpf", "dlcvcs", "hh"];

  $scope.projects = {
    "calsol" : {
      id: 'calsol',
      client: 'CAL Solutions',
      project: 'eZ Publish CMS Build',
      location: 'Beaconfire RED',
      timeframe: 'Spring 2016',
      description: '',
      content: '',
      screenshots: false
    },
    "chf" : {
      id: 'chf',
      client: "Colorado Health Foundation",
      project: "Technical Platform Consulting",
      location: 'Beaconfire RED',
      timeframe: 'Spring 2016',
      description: '',
      content: '',
      screenshots: false
    },
    "alz" : {
      id: 'alz',
      client: "Alzheimer's Association",
      project: "CMS Evaluation",
      location: 'Beaconfire RED',
      timeframe: 'Fall 2015 - Spring 2016',
      description: 'Acted as primary consultant on a large-scale technology evalution project to determine a new CMS platform.',
      content: "<p>The Alzheimer's Association project was a Technical Consulting effort to help identify the best platform for their new site. Several factors were being taken into account including leveraging the existing technology platform, usability for the administrators, and considering a complete change of technology direction. A primary focus of the effort was to not only find a technology that could leverage their current assets but identify pros and cons of a complete switch to another platform or technology.</p><p>My role on the project was Principle Consultant which included running requirements workshops, interpreting user and administrator needs, researching available platforms and products, and creating a comparison document profiling various potential technologies and solutions. From there, I lead the full team through product exploration, vendor demos and scoring, and a final decision on the best platform for their multi-site implementation.</p><p>Ultimately, remaining neutral throughout the process, a product was recommended that best fit Alzheimer's Association's needs and the client was very happy with their selection as they entered the beginning phases of their new implementation.</p>",
      screenshots: false
    },
    "nwhm" : {
      id: 'nwhm',
      client: "National Women's History Museum",
      project: "Technology Consulting",
      location: 'Beaconfire RED',
      timeframe: 'Fall 2015',
      description: '',
      content: '',
      screenshots: false
    },
    "lsc" : {
      id: 'lsc',
      client: "Legal Services Corporation",
      project: "Drupal CMS Build",
      location: 'Beaconfire RED',
      timeframe: 'Spring 2015',
      description: '',
      content: '',
      screenshots: false
    },
    "wahc" : {
      id: 'wahc',
      client: "Working America HealthCare",
      project: "Drupal CMS Build",
      location: 'Beaconfire RED',
      timeframe: 'Fall 2014',
      description: '',
      content: '',
      screenshots: false
    },
    "fcgp" : {
      id: 'fcgp',
      client: "Foundation Center's GlassPockets",
      project: "eZ Publish CMS Build",
      location: 'Beaconfire RED',
      timeframe: 'Fall 2014 - Spring 2015',
      description: "Led CMS and data integration project for a new addition to Foundation Center's multi-site set up.",
      content: "<p>The Foundation Center's GlassPockets project was a new sub-site focused on the transparency efforts of various foundations and was created as part of their multi-site CMS configuration. The site itself included several ways of contextualizing transparency data for a large list of foundations.</p><p>The project included multiple interactive pieces and data integrations to display a list of foundations with a customizable set of data points for comparison, a trends section to compare their relative openness, and an interactive that allows foundations to compare their openness directly with other selected foundations of interest.</p><p>Hailed as a stunning success internally, the GlassPockets site has become a marquee piece for the Foundation Center and a quality example of how data can be made both accessible and highly engaging.</p>",
      screenshots: true
    },
    "als" : {
      id: 'als',
      client: "ALS Association",
      project: "Internal Technology Consulting",
      location: 'Beaconfire RED',
      timeframe: 'Fall 2014',
      description: '',
      content: '',
      screenshots: false
    },
    "hki" : {
      id: 'hki',
      client: "Helen Keller International",
      project: "Drupal CMS Build",
      location: 'Beaconfire RED',
      timeframe: 'Fall 2014',
      description: '',
      content: '',
      screenshots: false
    },
    "ucs" : {
      id: 'ucs',
      client: "Union of Concerned Scientists",
      project: "Drupal CMS Build",
      location: 'Beaconfire RED',
      timeframe: 'Summer 2014 - Spring 2015',
      description: 'Technical lead on large-scale Drupal CMS build for UCS.',
      content: "<p>The Union of Concerned Scientists Drupal project was a migration and rebuild of a site that Beaconfire had long supported. The new site was one of the first and most complex Drupal implementations undertaken at Beaconfire. The site included several unique pieces of functionality, specifically around organization and display of content by related content / tagging and included a customized search engine that allowed for tailored relevance and results for users using the site search.</p><p>My role on the project was principle architect, technology consultant, build lead, and ongoing lead. The site was a success both internally and externally for the client and received positive feedback from users.</p>",
      screenshots: true
    },
    "ti" : {
      id: 'ti',
      client: "Truth Initiative",
      project: "Custom App Integration Work",
      location: 'Beaconfire RED',
      timeframe: 'Summer 2014',
      description: '',
      content: '',
      screenshots: false
    },
    "afsp" : {
      id: 'afsp',
      client: "AFSP",
      project: "eZ Publish CMS Build",
      location: 'Beaconfire RED',
      timeframe: 'Summer 2014',
      description: '',
      content: '',
      screenshots: false
    },
    "skf" : {
      id: 'skf',
      client: "Skillman Foundation",
      project: "eZ Publish Build",
      location: 'Beaconfire RED',
      timeframe: 'Spring - Summer 2014',
      description: '',
      content: '',
      screenshots: false
    },
    "lfh" : {
      id: 'lfh',
      client: "Legacy For Health",
      project: "eZ Publish Build",
      location: 'Beaconfire RED',
      timeframe: 'Spring 2014',
      description: 'Technical Lead for Legacy For Health redesign, migration, and new CMS build.',
      content: "<p>The Legacy for Health project was a full redesign and rebuild of an existing site. Legacy for Health was formerly American Legacy and is now consolidated under the Truth Initiative brand. Throughout this transition, the Legacy for Health site was the primary site for the organization, alongside the BecomeAnEX site and Truth Initiative marketing sites.</p><p>My involvement in the project was as the Tech Lead and principle developer. The site itself was a relatively straight-forward CMS implementation but included some unique pieces of functionality. The first was an in depth media library that had support for videos, infographics, and other assets made available for others to download and use to promote anti-smoking efforts. Another major custom piece was a database of facts about smoking that allowed for researchers, teachers, and others to browse, filter, and sort facts to create a customized downloadable pdf and printable list of facts, complete with AP style annotations.</p><p>The build successfully improved upon the existing site and bridged the gap during the transition</p>",
      screenshots: true
    },
    "aicpa" : {
      id: 'aicpa',
      client: "AICPA",
      project: "eZ Publish CMS Build",
      location: 'Beaconfire RED',
      timeframe: 'Winter 2013',
      description: '',
      content: '',
      screenshots: false
    },
    "adc" : {
      id: 'adc',
      client: "Ad Council",
      project: "eZ Publish CMS Build",
      location: 'Beaconfire RED',
      timeframe: 'Summer - Winter 2013',
      description: '',
      content: '',
      screenshots: false
    },
    "amnh" : {
      id: 'amnh',
      client: "American Museum of Natural History",
      project: "Large-scale eZ Publish Build",
      location: 'Beaconfire RED',
      timeframe: 'Spring 2012 - Summer 2013',
      description: 'Acted as primary of two Technical Leads for Beaconfire RED on the largest single build they had undertaken.',
      content: "<p>The American Museum of Natural History project was a milestone for Beaconfire, as it was one of the largest projects the company had ever undertaken. The project itself was a full-scale redesign and rebuild of the museum's public website, including pages for their many physical halls and exhibitions, a calendar of events, an event / scheduling system, and a unique navigation paradigm that allowed end users to easily navigate the site's deep content tree.</p><p>As the primary of two Beaconfire Tech Leads on the project, I was charged with architecting technical solutions for the major functionality on the site, implementing several complex pieces personally, and leading the development team through the rest of the project. At launch, the site received positive feedback from end users and was seen as a vast improvement over the museum's previous site.</p>",
      screenshots: true
    },
    "nthp" : {
      id: 'nthp',
      client: "National Trust for Historic Preservation @Home Community",
      project: "Elgg Community Build",
      location: 'Beaconfire RED',
      timeframe: 'Fall - Winter 2011',
      description: '',
      content: '',
      screenshots: false
    },
    "fc" : {
      id: 'fc',
      client: "Foundation Center",
      project: "eZ Publish CMS Build",
      location: 'Beaconfire RED',
      timeframe: 'Fall 2010 - Summer 2011',
      description: '',
      content: '',
      screenshots: false
    },
    "lbbc" : {
      id: 'lbbc',
      client: "Living Beyond Breast Cancer",
      project: "eZ Publish CMS Build",
      location: 'Beaconfire RED',
      timeframe: 'Summer 2010 - Fall 2010',
      description: '',
      content: '',
      screenshots: false
    },
    "bex" : {
      id: 'bex',
      client: "BecomeAnEx",
      project: "Community Build and Large-scale Migration",
      location: 'Beaconfire RED',
      timeframe: 'Spring - Summer 2010',
      description: 'Was technical lead for evaluation and configuration of new community platform and principle architect for migration of more than 2 million data points from existing community.',
      content: "<p>Another project that I took on early in my time at Beaconfire was the BecomeAnEx community migration. The existing community was built on the Ning platform and heavily leveraged custom code capabilities of the platform, a feature that was soon to be removed. As a result, BecomeAnEx was looking to migrate their community to a new community with as little disruption as possible.</p><p>The project itself focused on identifying a new and flexible community platform that could be leveraged to recreate the existing community as closely as possible in both form and function and then migrate the million-plus data points from the existing community to its new home. My role on the project was principle consultant, technology consultant, build / customization lead, and data migration expert.</p><p>At the end of the project, and with few compromises, we had successfully recreated the community and migrated all of the existing data to the new location. While there were a few exceptions, the community was ultimately happy with the change. The retention of active participants in the community beat expectations and continued to grow in the following years.</p>",
      screenshots: true
    },
    "occ" : {
      id: 'occ',
      client: "Ocean Conservancy",
      project: "Data Collection and Reporting Tool Google Earth Implementation",
      location: 'Beaconfire RED',
      timeframe: 'Summer - Fall 2009',
      description: 'Acted as Senior Developer on rework and enhancements to existing custom data collection and reporting tool. Included Google Earth integration.',
      content: "<p>One of my first projects at Beaconfire was for the Ocean Conservancy. For this project, Beaconfire had already created a custom application for the collection of data during OC's annual International Coastal Cleanup. The part of the project I was brought on for was the Google Earth integration.</p><p>The ICC event includes volunteers from around the world cleaning up waterways and providing data about what debris they found via paper scorecards. The system that Beaconfire was responsible for processed those scorecards and held the historical and analytical data about them. The Google Earth portion of the project was a focus on converting that location data to points that could be plotted in Google Earth using a KML file.</p><p>My work included digging into the KML format, prepping the data for use in the KML file, architecting the region-based structure of the incrementally loading and clustered KML files, and implementing the full solution, including additional caching and API work to offset the server load.</p><p>As a result, the Ocean Conservancy was able to leverage their data in a more engaging way and help communicate the impact of their clean up efforts to donors and stakeholders alike.</p>",
      screenshots: false
    },
    "am" : {
      id: 'am',
      client: "Atlantic Media",
      project: "SLDC Oversight Process Revamp",
      location: 'Atlantic Media',
      timeframe: 'June 2008 - December 2008',
      description: '',
      content: '',
      screenshots: false
    },
    "cccu" : {
      id: 'cccu',
      client: "Council for Christian Colleges and Universities",
      project: "Custom CMS Build",
      location: 'Siteworx, Inc.',
      timeframe: 'Spring 2008',
      description: '',
      content: '',
      screenshots: false
    },
    "goodwill" : {
      id: 'goodwill',
      client: "Goodwill",
      project: "Internal Site Revamp Consulting",
      location: 'Siteworx, Inc.',
      timeframe: 'Fall 2007 - Spring 2008',
      description: 'Acted as Primary Consultant for Goodwill internal site revamp.',
      content: "<p>The Goodwill project was a targeted consultation on user feedback about the usability of their members' site. My role was as principle consultant to help their internal team organize and interpret feedback into an actionable plan for the organization. The primary concern was feedback from the users that the site 'took too many clicks'. The team was in the throws of attempting to streamline the site as much as possible but found only more negative feedback in the process.</p><p>My insight coming into the project from outside was that 'too many clicks' was potentially near the problem but not the specific problem users were having. Working with the group to reinterpret the feedback and pivoting from the original statement, we started to work against an expanded version of the feedback I suggested: 'too many unsure clicks.' From there, things started to fall into place as we reworked the first few levels of their navigation to include more clicks in the path for the user but place heavy focus on keeping the path intuitive. This included focusing less on reducing the number of clicks, which had caused a lot of things to be placed in a very long menu, and more on making sure that each click was an intuitive step between the previous click and the next step towards the destination.</p><p>The streamlined path for the end users included clarification of similar terms and an iconography and color-coding vocablary that reassured users they were on the right track through the system. My involvement ended before the implementation phase but feedback from key stakeholders was that, with my help, we had 'found the missing piece' and 'finally made sense of the feedback.'</p>",
      screenshots: false
    },
    "abi" : {
      id: 'abi',
      client: "American Background Institute",
      project: "Website Redesign Consulting",
      location: 'Siteworx, Inc.',
      timeframe: 'Spring - Summer 2007',
      description: "",
      content: '',
      screenshots: false
    },
    "k12" : {
      id: 'k12',
      type: 'project',
      client: "K12",
      project: "Website Redesign Consulting",
      location: 'Siteworx, Inc.',
      timeframe: 'Fall 2006 - Winter 2006',
      description: "",
      content: '',
      screenshots: false
    },
    "lat34" : {
      id: 'lat34',
      client: "Lat34",
      project: "Custom CMS Build",
      location: 'Siteworx, Inc.',
      timeframe: 'Summer - Fall 2006',
      description: "",
      content: '',
      screenshots: false
    },
    "disc" : {
      id: 'disc',
      client: "Discovery Health",
      project: "Custom Flash Application",
      location: 'Siteworx, Inc.',
      timeframe: 'Summer - Fall 2006',
      description: "",
      content: '',
      screenshots: false
    },
    "cbpf" : {
      id: 'cbpf',
      client: "The College Board",
      project: "PowerFAIDS Application Rebuild",
      location: 'Siteworx, Inc.',
      timeframe: 'Fall 2005 - Fall 2006',
      description: 'Acted as Principle Consultant for large-scale rework of PowerFAIDS application.',
      content: "<p>Early on in my career, while not yet a senior developer, I worked on the College Board PowerFAIDS financial aid management application rebuild project. The project itself was a complete rebuild of a very large application used nationwide by colleges and universities to track and manage student loan information.</p><p>I was initially tasked to embed with a team that included College Board in-house development staff and another 3rd party vendor to help rebuild the PowerFAIDS app in a developer role. Quickly pivoting on our initial plan and due largely to my insight and ability to effectively communicate with the client, I stepped up and was tasked with doing business analysis, technical consulting, and interface design for the project, while the in-house resources and other vendor focused on the back-end implementation.</p><p>Taking close to a year for the interface specification alone, the project itself included reworking hundreds of screens in the application and took a considerable amount of hours in daily meetings consulting directly with the client's business analysts and user advocates to quickly iterate on approaches and layouts to best fit the end users needs. The final product received high praise both internally and externally as a vast improvement in the usability and was noted as being much more intuitive to navigate.</p><p>Throughout the project, I was able to translate between technical and non-technical resources to mediate concerns about both technology and end-user needs. Both the developers and business resources had high praise for my work on the project.</p>",
      screenshots: true
    },
    "aol" : {
      id: 'aol',
      client: "AOL",
      project: "Various Projects",
      location: 'Siteworx, Inc.',
      timeframe: 'Fall 2005 - Spring 2008',
      description: "",
      content: '',
      screenshots: false
    },
    "drs" : {
      id: 'drs',
      client: "Dr. Sauer",
      project: "Custom CMS Build",
      location: 'Siteworx, Inc.',
      timeframe: 'Spring - Summer 2005',
      description: "",
      content: '',
      screenshots: false
    },
    "dlcvcs" : {
      id: 'dlcvcs',
      client: "DLC Virtual Case Studies",
      project: "Flash Application Build",
      location: 'Siteworx, Inc.',
      timeframe: 'Fall 2004 - Spring 2005',
      description: 'Was principle developer on Virtual Case Studies distance learning Flash application.',
      content: "<p>One of the earliest projects in my career, the DLC Solutions Virtual Case Studies project was an implementation of a complex Flash application for custom-defined presentations. The project was part of a larger suite of distance learning products and focused on case study content that required some security that was provided by being implemented in Flash.</p><p>Specifically, the implementation kept end-users from being able to cut and paste text directly from the application and consistently formatted the dynamic slides to appear as though they had been individually designed. The solution for this included some in-depth coding and thought work. The end solution required writing a custom XML schema and markup language parser for the slide data that included client-specific tags for custom functionality, including complex interactions with the navigation and interface for the piece. Critical parts of the XML were then loaded into the SWF file at compile time to further obfuscate the data from easy duplication by the end users.</p>",
      screenshots: false
    },
    "hh" : {
      id: 'hh',
      type: 'project',
      client: "Haverford Homes",
      project: "Interactive Floorplan Viewer Flash Application Build",
      location: 'Siteworx, Inc.',
      timeframe: 'Spring - Fall 2004',
      description: "Was primary developer and principle architect for Haverford Homes' floorplan viewer Flash application.",
      content: "<p>For the Haverford Homes project, I was tapped to take over an existing interactive floorplan viewer that was written in Flash. The existing piece included simple functionality for choosing a floorplan and then being able to drag and zoom the blueprint to further inspect the plan.</p><p>Initially, my involvement was merely to add some additional content to the piece and fix a few bugs. Once I dug into the project, I was able to make the business case for additional improvements to the piece including a complete rebuild of the underlying code and adding serveral features that were on the clients 'blue sky' wishlist. Most notable were the interactive, toggable options on the floorplans which included complex logic and interactions between simple options, sub-options, and conflicting options. Designed to be intuitive for the end users, the floorplans would fade out and back in with the new additions in place for quick 'with/without' comparisons.</p><p>The interactive was noted as critical to the success of the client's site after it was launched and was eventually retired years later.</p>",
      screenshots: true
    },
    "tbs" : {
      id: 'tbs',
      client: "SIUE Textbook Service",
      project: "Internal Software Revamp",
      location: 'Southern Illinois University Edwardsville Textbook Service',
      timeframe: 'Fall 2002 - Fall 2003',
      description: "Went beyond duties as office assistant to help revamp / repair internal legacy textbook rental software written directly in Paradox 4.5 database software.",
      content: '',
      screenshots: false
    }
  };

  $scope.quoteOrder = ["danderson", "mrogers", "nmeier", "jschmatz", "cguy"];

  $scope.quotes = {
    "danderson" : {
      id : 'danderson',
      highlight: "Adam is extremely attuned to the people around him and developed relationships of trust with the entire team. He is one of the best consultants I've ever worked with.",
      quote: "Adam delivered simply stellar results in an enormous user design redesign project. I could always count on Adam to come up with inventive, out-of-the-box ideas, and then follow through with an excellent implementation. He is also extremely attuned to the people around him and developed relationships of trust with the entire team. He is one of the best consultants I've ever worked with.",
      person: "Darrill Anderson",
      role: "Client",
      organization: "The College Board"
    },
    "mrogers" : {
      id: 'mrogers',
      highlight: "Adam is full of ideas about how to move the project forward. He is a great problem solver whether it be helping with technical hurdles, improving design and usability, or rearranging schedules so the project doesn't go down hill. I would recommend Adam as a great addition to any software development team.",
      quote: "Adam and I worked together in supervising a team of developers. His job as technical manager allowed me to do my job as lead software engineer. He is great with communication and keeping the team and our clients informed. He is also full of ideas about how to move the project forward. He is a great problem solver whether it be helping with technical hurdles, improving design and usability, or rearranging schedules so the project doesn't go down hill. I would recommend Adam as a great addition to any software development team.",
      person: "Marco Rogers",
      role: "Former Co-Worker & Engineering Manager",
      organization: "Clover Health"
    },
    "nmeier" : {
      id : 'nmeier',
      highlight: "Adam is a versatile and talented software engineer and manager. He has a knack for working with clients to build solutions that are well considered and engineered while maintaining budget and focus on deadlines.",
      quote: "Adam is a versatile and talented software engineer and manager. He has a knack for working with clients to build solutions that are well considered and engineered while maintaining budget and focus on deadlines. As a manager, Adam balances the needs of the organization with the concerns of the development team to ensure high productivity and team cohesion. Adam is the missing component of any team looking to excel.",
      person: "Neal Meier",
      role: "Former Co-Worker & Owner",
      organization: "Elevated Presence"
    },
    "jschmatz" : {
      id : 'jschmatz',
      highlight: "Adam believes in mutual trust and loyalty amongst his team members [...] I couldn't ask for a better team manager.",
      quote: "Adam is the ideal Team Manager. He knew the specialties of each of his team members and assigned us to appropriate tasks so that he knew we could have them done by their deadline. He also believed in mutual trust and loyalty amongst his team members, so if we had any issues we knew we could go to him with them, and if he needed something from us we could provide it for him. He never had to hound us about our work, he trusted that we knew we could speak up about any concerns, and if we did, he acted appropriately. I couldn't ask for a better team manager.",
      person: "Jim Schmatz",
      role: "Senior Developer & Former Employee",
      organization: "Siteworx, Inc."
    },
    "cguy" : {
      id: 'cguy',
      highlight: "Adam's ability to help me dissect problems, and then come up with steps to solve them, have really helped me become a better developer and manager.",
      quote: "Adam was a great source of information when I needed help both technically and managerially. His ability to help me dissect problems and then come up with steps to solve them, have really helped me become a better developer and manager.",
      person: "Chris Guy",
      role: "Senior Developer & Former Employee",
      organization: "Siteworx, Inc."
    }
  };
  $scope.introContent = [
   {
      id: "dev",
      title: "Developer",
      content: "I have always been drawn to computers. From my early days tinkering with programs on my TI-83 calculator and teaching myself the basics of HTML on my first desktop computer to recently digging into AngularJS and Bootstrap, I have always had a desire to learn more about how things work under the hood. That curiosity has led me to a career in development with a breadth of web technologies and solutions including primary web technologies (HTML, CSS, JavaScript), LAMP stack, various languages (PHP, Java, Python, and more), and a specific focus on CMS platform technologies (Drupal, eZ Publish, WordPress, etc). Throughout my time in the web industry, I have become very familiar with the challenges of web builds, both common and uncommon.",
      quote: "cguy"
    },
    {
      id: "solve",
      title: "Problem Solver",
      content: "With more than a dozen years of experience in the web tech industry, I have a versatile background which includes experience as a developer, technical team lead, UX architect, project manager, technical consultant, and technical director. I am a quick learner and have spent most of my career being a collaborator and leader that fills in the gaps, playing a necessary but ill-defined role of problem solver and team force multiplier.",
      quote: "mrogers"
    },
    {
      id: "collab",
      title: "Collaborator",
      content: "Personable, outgoing, intuitive, and creative with an eye for solutions that are both technically sound and personally engaging, I am able to leverage my pragmatic and collaborative nature to manage teams, engage internal & client team members, and deliver high quality results. I have been an integral part of teams responsible for delivering award-winning websites and have helped many organizations identify root-cause problems, design solutions, and achieve success.",
      quote: "nmeier"
    },
    {
      id: "consult",
      title: "Consensus Builder",
      content: "While I have a breadth of experience with all parts of development, what always engages me the most are the collaborative and brainstorming aspects. I love to dig into a problem, put heads down with others, and work towards a smart solution. I am very pragmatic and tend to emerge as a thought-leader, working to identify the best path forward. In addition to my own contributions, I often reinforce others' opinions and give a voice to the best ideas no matter where or who they come from.",
      quote: "danderson"
    },
    {
      id: "mgmt",
      title: "Manager",
      content: "I have a strong belief in teamwork and collaboration. Leveraging individual strengths appropriately, mentoring team members, and growing organically are key goals when managing a successful team. I am a steadfast believer in good ideas over politics and value collaboration & teamwork above all else.",
      quote: "jschmatz"
    }
  ];
}])
.directive('career', function(){
  return {
    restrict: 'E',
    replace: false,
    templateUrl:
    'ng/html/career.html'
  };
})
.directive('contact', function(){
  return {
    restrict: 'E',
    replace: false,
    templateUrl:
    'ng/html/contact.html'
  };
})
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
.directive('testimonials', function(){
  return {
    restrict: 'E',
    replace: false,
    templateUrl:
    'ng/html/testimonials.html'
  };
});