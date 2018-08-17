import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpWrapperService} from '../../services/http/httpService';
import language from '../../facade/language';
import {PubSubService} from '../../services/pubsub/pubsub';
import {LocalizationService} from "../../services/localization/localization.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public src: any = 'dd';

  constructor(private httpService: HttpWrapperService,
              private router: Router,
              private pubSubService: PubSubService,public localizationService: LocalizationService
  ) {
    pubSubService.subscribe('change-language', (val)=>{
      // this.language = language[val];
      if (val == 'RO'){
        this.src = this.ro;
      }else{
        this.src = this.en;
      }
    });
  }


  ro = [
    {
      title:"Javascript",
      img:"images/slider/javascript_200.png",
      text: 'Incepem cu definirea a ceea ce inseamna limbajul Javascript. Se acopera definirea variabilelor, lucrul cu consola, toolurile folosite pentru a vedea ce se intampla cand se ruleaza metode javascript.'

    },
    {
      title:"Javascript",
      img:"images/slider/javascript_200.png",
      text: 'Operatorii vor fi prezentati, discutati si testati. Pe langa acesti operatori, se vor prezenta metodele de lucru cu consola si folosirea unui fisier javascript.\n' +
      'Exercitiile se vor face la un singur calculator, laptopul defiind neaparat necesar la primele intalniri'
    },
    {
      title:"Javascript",
      img:"images/slider/javascript_200.png",
      text: 'Se vor prezenta tipurile de date existente in javascript si metodele aferente.\n' +
      'Exercitiile zilnice vor fi inbunatatite prin adaugarea exercitiilor folosind aceste tipuri de date. \n' +
      'Pentru ca functiile existente sunt intr-un numar destul de mare, prioritatea se pune pe tipurile de date numar, string si array, celelte urmand a fi acoperite in mod treptat'
    },
    {
      title:"Javascript",
      img:"images/slider/javascript_200.png",
      text: 'Javascript statements. Ca orice limbaj de programare, javascriptul pune la dispozitia programatorului sintaxe specifice pentru crearea unor algoritmi. De exemplu, pentru afisarea sumei de plata a unui cos de cumparaturi, se folosesc algoritmi scrisi folosind aceste sintaxe. \n' +
      'Din acest moment, exercitiile zilnice vor contine partea de algoritmica cu scopul de a intelege ce se intampla in spatele unei aplicatii. Numarul acestor exercitii se ridica la 150 si se porneste de la exercitii simple la unele mai complexe.\n' +
      'Partea de algoritmica este esentiala pentru orice programator si nu exista persoane care sa stie sa faca un web site fara aceste cunostinte '
    },
    {
      title:"Algoritmica",
      img:"images/slider/algorithms_200.png",
      text: 'Se vor prezenta obiectele javascript. Pe langa asta,vom recapitula ce am facut,  ce putem face mai bine, diferite abordari logice de rezolvare a unui exercitiu plus exercitii mai simple folosind sintaxa invatata la \'statements\'. Se va explica necesitatea si cazuri in care se foloseste fiecare sintaxa. Partea de algoritmica se va desfasura pe toata durata cursului si chiar si dupa. Vom avea 30 min pana la 1h la fiecare sedinta pentru a discuta/explica exercitiile zilnice.'
    },
      {
        title:"Codul sursa",
        img:"images/slider/git.png",
        text: 'Codul sursa este pastrat folosind git. Ca si utilitar se poate utiliza SourceTree sau GitKraken. Git-ul este un sistem de management a codului sursa si este utilizat in fiecare firma. '+
        'Toate cele 150 de exercitii de algoritmica o sa fie puse pe un server, astfel incat orice firma sa analizeze munca noastra. Se vor prezenta cele mai bune practici de lucru cu git si avantajele folosirii lui (mai ales la nivel de echipa si partea de deploy)'
      },
    {
      title:"Design Patterns",
      img:"images/slider/designpatternsjs.png",
      text: 'Partea de design patterns va fi discutata deasemenea la fiecare sedinta. Este o parte esentiala pentru un programator si se va incepe cu explicarea conceptelor de modul si closure.\n' +
      'TDD va fi introdus tot in decursul acestei sedinte folosind Mocha and Chai (cod sursa, exemplu, tutorial si video). \n' +
      'Mocha, Chai, Jasmine, enzyme, webdriver.io vor fi prezentate treptat impreuna cu exercitii aferente'
    },
    {
      title:"Node.js",
      img:"images/slider/nodejs.png",
      text: 'Partea de back-end va fi prezentata folosind Node.js. Se va face o introducere a ceea ce inseamna partea de server, conceptele necesare. Incepem cu un tutorial, insotit de codul sursa si 3 video-uri de cate 15 min. De ajuns cat sa fie prezentate 80% din conceptele necesare unui server. Din experienta avuta, echipa a imbratisat cu drag aceasta abordare.\n' +
      'Ca si nota, partea de server este necesara pentru a primii comenzi de la un utilizator (de obicei din browser)'
    },
    {
      title:"Node.js",
      img:"images/slider/nodejs.png",
      text: 'Pe langa partea de algoritmica, se va discuta conceptele unui server, securitatea, modularizarea unui server, comunicarea intre module, dificultatile intalnite in parcurgerea codului/surselor sau a videou-rilor'
    },
    {
      title:"Node.js",
      img:"images/slider/nodejs.png",
      text: 'In aceasta sedinta, vom discuta, testa codul primit (insotit de video-uri) pentru a lamurii cum se face (pe partea de server): structura unui proiect, middleware, definirea unei rute, securizarea unei rute, folosirea unui serviciu, testarea metodelor unui server (folosind TDD), comunicarea in timp real (folosita la sisteme chat), uploadul unui fisier, generarea unui raport, trimiterea unui email, crearea unei metode care ruleaza la un interval stabilit, folosirea uni modul si/sau a unei clase'
    },
    {
      title:"MongoDB",
      img:"images/slider/mongodb.png",
      text: 'Se vor prezenta metodele de acces asupra unei baze de date mongo.db. Abordarea este atat cu driverul nativ cat si cu mongoose; Se vor face exercitii de inserare, modificare, stergere, paginare, inserare intr-o subcolectie, modificarea unei subcolectii, filtrarea si sortarea datelor'
    },
    {
      title:"Es6",
      img:"images/slider/es6.png",
      text: 'ES6 este o imbunatire adusa javascriptului din punct de vedere sintactic, a usurintei de a scrie codul si vine cu niste functionalitati care in javascript s-ar face putin mai dificil; \n' +
      'Aceasta lectie este insotita de exercitii si o comparatie unu la unu cu aceeasi functionalitate in javascript versus ES6'
    },
    {
      title:"Html",
      img:"images/slider/html.png",
      text: 'Cu siguranta, pentru majoritatea persoanelor, partea de HTML si CSS este cea mai importanta la inceput; Pentru un programator mai important este sa faca algoritmii necesari unei aplicatii, comunicarea cu serverul si toate cele mentionate mai sus; Partea de html este mult mai usoara decat se crede, dovada sunt paginile facute de cursanti chiar dupa prima lectie de html. Se foloseste bootstrap, prezentarea folosirii emmet si Haml, si prezentarea temelor html existente pe web, punandu-se accent in a cauta ce este nevoie si a stii ce si cum copiem dintr-o pagina pentru a o integra in pagina noastra. Pentru cine vrea sa aprofundeze, punem la dispozitie 25 de fisiere video cu ultimele "best practices", video-uri facute in colaborare cu cei care au facut browserul Firefox.\n' +
      'Nota: O sa fie acoperite tehnicile de lucru cu canvas (HTML5). '
    },
    {
      title:"Css",
      img:"images/slider/html.png",
      text: 'CSS este folosit la aranjarea in pagina a elementelor Html si este prezentat sub forma de exemple si quiz-uri. Atat Html cat si CSS vor fi folosite la crearea unei aplicatii web. LESS si SASS vor fi prezentate, conceptul de mixin, flexbox, urmand a fi folosite in decursul realizarii aplicatiei stabilite de comun acord cu participantii'
    },
    {
      title:"JQuery",
      img:"images/slider/jq.png",
      text: 'O mica prezentare asupra a ceea ce inseamna manipularea DOM-ului. In acest moment ne vom impartii in echipe de cate 4 persoane si fiecare echipa va lucra la aplicatia proprie. Partea de server va contine functionalitati comune. JQuery si Vanilla vor fi prezentate la un nivel nu prea in adancime din cauza ca aceste librarii nu se prea folosesc; Totusi, pot fi intalnite la plug-inuri wordpress, librarii de animatie, slide-uri, integrae cu partea de CSS. Cele mai noi metode de creare a unui site web (ANgualr, React, Vue) nu necesita partea de JQuery. '
    },
    {
      title:"Angular1",
      img:"images/slider/angular1.png",
      text: 'Angular 1 este prima abordare de la cei de la google referitor la crearea unui site web. Proiectele noi folosesc Angular 2+ si Angular 1 este folosit doar pentru aplicatii mai vechi. Aceasta lectie se poate inlocuii cu Angular 2+.'
    },
    {
      title:"Typescript",
      img:"images/slider/typescript.png",
      text: 'TypeScript  este un limbaj de programare  creat si mentinut de cei de la Microsoft. Aduce o mai buna stucturare a codului, usurinta implementrii conceptelor de OOP si este folosit la crearea site-urilor web. Poate fi folosit atat pe front-end cat si pe partea de back-end.'
    },
    {
      title:"angular",
      img:"images/slider/ang5.png",
      text: 'Angular 6 este noua modalitate de a face site-uri web (partea de front-end). Aceasta tehnologie este foarte cautata si o vom folosii pentru crearea aplicatiei pentru fiecare echipa.\n' +
      'Se va folosii Angular CLI impreuna cu o prezentare a unui editor de cod (Visual Studio Code, WebStorm)'
    },
    {
      title:"angular",
      img:"images/slider/ang5.png",
      text: 'Combinam partea teoretica cu partea practica luand in considerare crearea unor componente, servicii a directivelor ng.\n' +
      'Obiectivul este de a stii sa cream o pagina care sa contina cele mai importante elemente a unei pagini web. \n' +
      'Liste, taburi, validarile necesare unei pagini, prezentarea conditionala a unui element, transmiterea proprietatilor unei componente si primirea valorilor de la o componeta copil.'
    },
    {
      title:"Angular",
      img:"images/slider/ang5.png",
      text: 'Se va acorda o mare importanta pentru modularizarea aplicatiei, citirea instructiunilor UML pe baza carora se vor implementa functionalitatile, conceptele de OOP vor fi implementate progresiv cu ajutorul limbajului typescript.'
    },
    {
      title:"Testare",
      img:"images/slider/testing.png",
      text: 'Partea de TDD o sa fie prezentata inca din primele sedinte; Echipa o sa faca unele exercitii folosind aceasta abordare. Pe langa TDD, se va prezenta Jasmine (folosit la testarea aplicatiei creata cu Angular 5), Mocha si Chai vor fi prezente inca din partea de TDD. Pentru React.js se va folosii enzyme si partea de testare automata a aplicatiei create va fi acoperita de webdriver.io'
    },
    {
      title:"Angular",
      img:"images/slider/ang5.png",
      text: 'Folosind echipele create, acoperim partile esentiale ale unei aplicatii web. Securitate, accesul la baza de date, rutare, permisii, partea vizuala a paginilor.\n' +
      'Vom face si o paralela intre Angular 2+, Vue.js si React'
    },
    {
      title:"React.js",
      img:"images/slider/react.png",
      text: 'React este o librarie folosita la crearea paginilor web creata de Facebook. Vom acoperii conceptele importante cum ar fi transmiterea proprietatilor la o componeta si de la o componeta, partea de rutare, libraria Redux si comparatie cu MobX. '
    },
    {
      title:"React.js",
      img:"images/slider/react.png",
      text: 'Se vor discuta diferentele conceptele unei aplicatii web ca si comparatie intre Angular si React. \n' +
      'Conceptul de virtual dom, cum functioneaza un mecanism de pub-sub, utilitatea folosirii unui state'
    },
    {
      title:"React.js",
      img:"images/slider/react.png",
      text:'Se va prezenta partea de testare a componentelor, verificarea codului folosind lint, accesul la baza de date\n' +
      'Redux va fi explicat folosind tutorial, cod sursa si un numar de 7 video-uri'
    },
    {
      title:"Aplicatii mobile",
      img:"images/slider/mobile.png",
      text:'Aplicatiile mobile vor fi prezentate folosind IOnic. Din cauza timpului, aplicatiile native Ios sau android sunt lasate la o parte, insa IOnic ofera un avantaj enorm la crearea unei aplicatii mobile. Partile mai importante ce se vor discuta sunt notificarile si partea de deploy'
    },
    {
      title:"Docker",
      img:"images/slider/docker.png",
      text:'Se vor prezenta avantajele folosirii unui container privind partea de continuous integration, continuous delivery, procesele care ar fi bine sa se intample inainte ca o functionalitate sa ajunga la utilizator'
    }
    ];

  en = [
    {
      title:"Javascript",
      img:"images/slider/javascript_200.png",
      text: 'We begin by defining what Javascript means. It covers the definition of variables, the work with the console, the tools used to see what happens when running javascript methods.'
    },
    {
      title:"Javascript",
      img:"images/slider/javascript_200.png",
      text: 'Operators will be presented, discussed and tested. In addition to these operators, we will present the methods of working with the console and using a javascript file.\n' +
      'Exercises will be done on a single computer, and the laptop is definitely necessary at first meetings'
    },
    {
      title:"Javascript",
      img:"images/slider/javascript_200.png",
      text: 'There will be the types of existing javascript data and related methods.\n' +
      'Daily exercise will be enhanced by adding exercises using these data types.\n' +
      'Because the existing functions are quite large, the priority is placed on the number, string and array data types, the others being gradually covered'
    },
    {
      title:"Javascript",
      img:"images/slider/javascript_200.png",
      text:  'Javascript statements. Like any programming language, javascript provides programmer with specific syntax for creating algorithms. For example, to display the payment amount of a shopping cart, using written algorithms using these syntaxes.\n' +
      'From this point on, daily exercises will include the algorithmic part in order to understand what is happening behind an application. The number of these exercises amounts to 150 and starts from simple exercises to some more complex.\n' +
      'The part of the algorithm is essential for any programmer and there are no people who know how to make a web site without this knowledge.'
    },
    {
      title:"Algorithms",
      img:"images/slider/algorithms_200.png",
      text: 'The javascript objects will be displayed.\n' +
      'Besides this, we\'ll review what we did, what we can do better, different logical approaches to solving an exercise plus simple exercises using the syntax learned in \'statements\'. It will explain the need and cases in which each syntax is used.\n' +
      'The part of the algorithm will take place throughout the course and even after. We will have 30 minutes to 1 hour each session to discuss / explain daily exercises.'
    },
    {
      title:"Codul sursa",
      img:"images/slider/git.png",
      text: 'Source code is saved using git. As a utility, you can use SourceTree or GitKraken. Git is a source code management system and is used in every business.\n' +
      'All 150 algorithmic exercises will be placed on a server so that any business analyzes our work. We will present the best git work practices and the advantages of using it (especially at the team level and the deploying side)'
    },
    {
      title:"Design Patterns",
      img:"images/slider/designpatternsjs.png",
      text: 'Design patterns will also be discussed at each meeting. It is an essential part for a programmer and will begin by explaining the concepts of module and closure.\n' +
      'TDD will be introduced throughout this session using Mocha and Chai (source code, example tutorial and video).\n' +
      'Mocha, Chai, Jasmine, enzymes, webdriver.io will be presented step by step along with related exercises'
    },
    {
      title:"Node.js",
      img:"images/slider/nodejs.png",
      text: 'The back end will be presented using Node.js. There will be an introduction to what the server side means, the necessary concepts. We start with a tutorial, accompanied by source code and 3 videos of 15 minutes each. As long as 80% of the concepts required for a server are presented. From experience, the team embraced this approach.\n' +
      'Like the note, the server side is required to get commands from a user (usually from the browser)'
    },
    {
      title:"Node.js",
      img:"images/slider/nodejs.png",
      text: 'Besides the algorithmic part, it will discuss the concepts of a server, security, modularisation of a server, communication between modules, difficulties encountered in passing code / sources or videos',
    },
    {
      title:"Node.js",
      img:"images/slider/nodejs.png",
          text: 'In this session, we will discuss, test the received code (accompanied by videos) to make it clear (on the server side): project structure, middleware, defining a route, securing a route, using a service, testing methods (using TDD), real-time communication (used in chat systems), uploading a file, generating a report, sending an email, creating a method running at a set interval, using a module and / or a class'
        },
        {
          title:"MongoDB",
          img:"images/slider/mongodb.png",
          text: 'Here\'s how to access a mongo.db database. The approach is both native driver and mongoose driver; Inserting, modifying, deleting, paging, inserting into a subcollection, modifying a subcollection, filtering and sorting data',
        },
    {
      title:"Es6",
      img:"images/slider/es6.png",
      text: 'ES6 is a syntactic javascript enhancement, ease of writing the code, and comes with some features that would make it a little more difficult in javascript; This lesson is accompanied by exercises and a one-to-one comparison with the same functionality in javascript versus ES6'
    },
    {
      title:"Html",
      img:"images/slider/html.png",
      text: 'Certainly, for most people, the HTML and CSS side is the most important at first; For a more important programmer it is necessary to make the necessary algorithms for the application, the communication with the server and all the above mentioned; The html side is much easier than it is believed, proof is the pages made by students just after the first html lesson. Using bootstrap, using Emmet and Haml, and presenting html themes on the web, focusing on looking for what\'s needed and knowing what and how to copy from a page to fit it into our page. For those who want to deepen, we provide 25 video files with the latest "best practices", videos made in collaboration with those who made the Firefox browser.\n' +
      'Note: Work will be covered with canvas (HTML5).'
    },
        {
          title:"Css",
          img:"images/slider/html.png",
          text: 'CSS is used in the layout of Html elements and is presented as examples and quizzes. Both Html and CSS will be used to create a web application. LESS and SASS will be presented, the concept of mixin, flexbox, to be used during the implementation of the application agreed with the participants'
        },
        {
          title:"JQuery",
          img:"images/slider/jq.png",
          text: 'A small presentation of what DOM manipulation means. At this moment we will divide into teams of 4 people and each team will work on their own application. The server side will contain common features. JQuery and Vanilla will be presented at a level not too deep due to the fact that these libraries are not very much used; However, they can be found in wordpress plug-ins, animation libraries, slides, embedded with CSS. The newest methods of creating a website (ANgualr, React, Vue) do not require the JQuery side.'
        },
    {
      title:"Angular1",
      img:"images/slider/angular1.png",
          text: 'Angular 1 is the first approach from Google to creating a website. New projects use Angular 2+ and Angular 1 is only used for older applications. This lesson can be replaced with Angular 2+.'
        },
        {
          title:"Typescript",
          img:"images/slider/typescript.png",
          text: 'TypeScript is a programming language created and maintained by Microsoft. It brings better code structure, easy to implement OOP concepts, and is used to create web sites. It can be used both on the front end and on the back end.'
        },
        {
          title:"angular",
          img:"images/slider/ang5.png",
          text: 'Angular 2+ is the new way to make websites (front-end). This technology is highly sought after and will be used to create the application for each team.\n' +
          'Use Angular CLI with a presentation of a code editor (Visual Studio Code, WebStorm)'
        },
    {
      title:"angular",
      img:"images/slider/ang5.png",
      text: 'We combine the theoretical part with the practical part, considering the creation of components, services of the ng directives.\n' +
      'The goal is to know how to create a page that contains the most important elements of a web page.\n' +
      'Lists, tabs, validations required for a page, conditional presentation of an element, transmission of the properties of a component and receipt of values ​​from a child component.'
    },
    {
      title:"angular",
      img:"images/slider/ang5.png",
      text: 'It will be of great importance to modulate the application, read the UML instructions on which the functionalities will be implemented, the PPE concepts will be progressively implemented with the help of the typographic language.'
    },
    {
      title:"Testing",
      img:"images/slider/testing.png",
      text: 'The TDD part will be presented from the first sessions; The team will do some exercises using this approach. In addition to TDD, Jasmine (used to test the application created with Angular 5) will be presented, Mocha and Chai will still be present on the TDD side. React.js will use enzymes and the automatic test part of the created application will be covered by webdriver.io}'
    },
    {
      title:"Angular",
      img:"images/slider/ang5.png",
      text: 'Using the created teams, we cover the essential parts of a web application. Security, access to the database, routing, permissions, visual side of the pages.\n' +
      'We will also make a parallel between Angular 2+, Vue.js and React}'
    },
    {
      title:"React.js",
      img:"images/slider/react.png",
      text: 'React is a library used to create web pages created by Facebook. We will cover important concepts such as the transmission of properties to a component and a component, the routing part, the Redux library, and MobX comparison.}'
    },
    {
      title:"React.js",
      img:"images/slider/react.png",
      text: 'The differences between the concepts of a web application as well as the comparison between Angular and React will be discussed.\n' +
      'The virtual house concept, how a pub-sub mechanism works, the usefulness of using a state'
    },
    {
      title:"React.js",
      img:"images/slider/react.png",
      text: 'It will show component testing, code verification using lint, access to the database\n' +
      'Redux will be explained using tutorial, source code and 7 videos'
    },
    {
      title:"Mobile",
      img:"images/slider/mobile.png",
      text:'Mobile applications will be presented using IOnic. Due to the time, native Ios or android applications are left aside, but IOnic offers an enormous advantage in creating a mobile application. The most important parts to be discussed are the notifications and the deploying part'
    },
    {
      title:"Docker",
      img:"images/slider/docker.png",
      text:'The advantages of using a container on the continuous integration, continuous delivery side, the processes that should be good before the functionality reaches the user'
    }
];

async ngOnInit() {
    this.src = this.en;
  }


}
