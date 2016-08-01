
angular.module('myApp', []).controller('resumeCtrl', function($scope) {
    $scope.skills = [
        {skill:'HTML'},
        {skill:'CSS'},
        {skill:'JavaScript'},
        {skill:'jQuery'},
        {skill:'AngularJS'},
        {skill:'Responsive Web Design'},
        {skill:'Front-End'},
        {skill:'User Interface'},
        {skill:'Dashboard'},
        {skill:'Digital Design'}
    ];

    $scope.summary = [
    {quote:'Creative and visually-driven would most describe my professional contribution to any given project. Always surfacing my graphical design and developing background in order to provide Outside-of-the-box solutions and a very graphical user experience approach.',school:'TEC de Monterrey',period:'2001-2007',title:'LATI'}
   ];

   $scope.jobs = [
        {job:'Deacero',title:'Chief Development Accountant',period:'Sep-2013 to Present', dept:'Accounting', descp1:"As chief development accountant, I’m in charge of the overall management of the Expense system and the Gateway service between all company systems and the accounting records. As of 2016 I became part of a reengineering project that will provide a more intuitive user interface.",descp2:" Also responsible for the visual design of an Expense Dashboard for top management use, and finally overseeing its development and implementation. My approach on design is to build the most realistic mockup first using Excel and SQL queries for a better sample of information. Using information samples guides us visually through the business rules involved and gives a better perspective of what will work and what needs re-designing.",descp3:"Finally, the every-day tasks include supporting multi-company operation, providing monthly multi-company consolidated reports, monthly expense variation analysis, and maintaining information integrity vs. accounting records.",descp4:"",descp5:""},
        {job:'Deacero',title:'Internal Auditor',period:'Sep-2008 to Sep-2013', dept:'Risk & Audit', descp1:"After being involved in the definition and design of the Continuous Auditing System, once it was released for final use, I was put in charge of its overall management as well as its new developments and continuous improvement. For the second version of the auditing system, I redesigned the logo, icons and graphical templates used in the system, similar to what would usually be called branding, but in an internal scale.", descp2:"  I was also put in charge of the design of the system’s dashboard and the department’s monthly reports. My process of building mockups through Excel / SQL and Photoshop put another perspective of how auditing information could be presented for top management, which led to ideas and designs being turned into information systems or extra modules.", descp3:" Later on my contributions were focused on the scripts that represented continuous audits and how they were entered and configured in the system. Adding attributes to the structure provided better pivot points when exploiting the information that the system generated.", descp4:"", descp5:""},
        {job:'ACS',title:'HelpDesk Specialist',period:'Mar-2008 to Sep-2008', dept:'MWV', descp1:"While hired only for helpdesk duties, I got myself involved in the development of an internal knowledge base. The idea was to cover all of the tech-support related subjects in a single tool that everyone could use while attending helpdesk calls in order to provide a much faster service. My approach was a web-based knowledge base divided in categories and each category presented its known issues and possible solutions in a tree-like structure.", descp2:" Since it was HTML, CSS and Javascript, it was really easy to maintain.", descp3:"", descp4:"", descp5:"" }
    ];

   $scope.colors = [
      '#00DDDD','#EE00EE','#FFCC00','gray'
      // 'cyan', 'magenta','yellow','gray'
    ];

    $scope.links = [
        {url:'http://josuna.bluecoreservices.com/responsive', title:'Responsive Portfolio'},
        {url:'https://mx.linkedin.com/in/jesus-osuna-1a70ba7', title:'LinkedIn'},
        {url:'https://hellrydeinc.bandcamp.com/', title:'Bandcamp'},
        {url:'https://github.com/viejomacabro', title:'GitHub'}
    ];

    $scope.invert =function(element){
        $("*").toggleClass("invert");
    }

});
