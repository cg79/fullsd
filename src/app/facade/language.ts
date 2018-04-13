// import { Injectable } from '@angular/core';
//
// @Injectable()

export default new class Language {

  RO: any = {
    edu:{
      level1:"Incepator",
      level2:"Mediu",
      level3:"Avansat",
    },
    what:{
      p1:"Consultanta",
      p2:"Colaborare",
      p3:"Instruire"
    },
    home: {
      t1: "Instruire programare Cluj",
      t2: "Consultanta IT",
      t3: "Colaborare la realizarea proiectelor",
      t4: "Ar ajuta sa vedem nivelul cunostintelor folosind linkul de mai jos.",
      t5: "Verificare cunostinte",
      t6:"Tehnologii",
      typoText: [
        "Limbajul principal este  <strong>JavaScript</strong>.",
        "Se va invata <strong>javascript</strong>",
        "Se va invata <strong>algoritmica</strong>",
        "Se va invata <strong>creare server </strong>",
        "Se va invata <strong>front-end </strong>",
        "Se va invata <strong>testare</strong>",
        "Se va invata <strong>deployment</strong>",
        "Se va invata <strong>aplicatii pentru telefoane </strong>",
        "Ajutor la gasirea unui loc de munca",
        "Sprijin dupa terminarea cursurilor"
      ],
      survey: "Ar ajuta sa vedem nivelul cunostintelor folosind linkul de mai jos.",
      surveyText: "Verificare cunostinte"
    },
    menu: {
      home: "Acasa",
      news: "Stiri",
      exercise: "Exercitiu",
      sondaj: "Sondaj",
      cursuri: "Cursuri",
      inscriere: "Inscriere",
      despre: "Despre",
      setari: "Setari",
      login: "Logare",
      logout: "Logout",
      personaldata: "Datele mele",
      education:"Instruire",
      consulting:"Consulting",
      collaboration:"collaboration"
    },
    slide: {
      algo: "Algoritmica este esentiala pentru un programator. Se vor face in jur de 150 de exercitii pornind de la simplu la complex. De exemplu, pentru stabilirea valorii produselor dintr-un cos de cumparaturi se foloseste algoritmica. ",
      node: "Crearea unui server se va face folosind aceasta tehnologie. Are avantajul de a folosii aceeasi sintaxa ca si javascript. Este folosit pentru primirea comenzilor dintr-o pagina web, stocarea datelor intr-o baza de date, citirea, filtrarea acestora",
      js: "Javascript este limbajul principal ce se invata. Aproape toate paginile web folosesc javascript.  Un mare avantaj este ca acest limbaj se poate folosii atat pe Front-End cat si pe Back-end",
      mongo: "Mongo db este un tip de baza de date care are avantajul de a pastra obiecte javascript, rapiditate, usor de invatat",
      html: "Foarte multe persoane au auzit/folosit html. Html-ul reprezinta structura unei pagini web.  Ideea de baza este de a prezenta cea mai usoara metoda de copiere a unui web site. Teoria este prezenta deasemenea",
      css: "CSS este folosit la aranjarea elementelor html intr-o pagina web; Se vor discuta principalele metode de utilizare a acestei tehnologii.",
      jq: "JQuery este folosit la manipularea elementelor intr-o pagina. Trecem repede peste aceasta tehnologie",
      es6: "ES6 este noul standard pentru javascript",
      ang1: "Angular 1 este printre primele frameworkuri de creare a paginilor web folosind SPA (Single Page Application). Este creat si mentinut de google",
      ang2: "Angular 2+ este o imbunatatire adusa primei versiuni de angular. Cei de la google au folosit typescript pentru realizarea acestui framework si ofera o mai buna modularizare decat versiunea precedenta",
      testing: "Testarea este folosita atat pentru front-end cat si pentru back-end. Se vor face exercitii atat de testare automata cat si testarea codului in paralel cu partea de development",
      mobile: "Partea de dezvoltare aplicatii pentru mobile este acoperita folosind frameworkul ionic.",
      react: "React este o librarie de creare a paginilor web creata de cei de la facebook. Pe piata muncii este o cerere mare atat pentru angular cat si pentru react",
      docker: "Docker este folosit cand se doreste hostarea aplicatiilor pe un calculator. Se pot face aplicatii si fara aceste cunostinte insa e bine a fi prezentate.",
      autotesting: "Testarea automata a unei aplicatii este acoperita prin utilizarea a webdriver.io si selenium. O persoana care se ocupa de testarea aplicatiilor ar fi bine sa stie aceste abordari"
    },
    "resetPass": "Resetare Parola",
    "login_desc": "Intrare in cont",
    "fb_login": "Logare cu Facebook",
    "empty_name": "Introduceti numele",
    "email_used": "Emailul este deja folosit",
    "invalid_email": "email invalid",
    "invalid_password": "Email sau parola sunt introduse gresit",
    "invalid_old_password": "Invalid old password",
    "invalid_new_password": "Invalid new password",
    "old_password_not_match": "Old password not match",
    "user_not_found": "User not found",
    "required": "Camp obligatoriu",
    "account_exists": "Acest email este deja inregistrat. Folositi ecranul de logare sau resetare parola",
    "password": "Parola",
    "confirmation_code": "Codul de confirmare nu este corect",
    "user_confirmed": "Contul de email a fost confirmat",
    "password_confirm": "Confirmare Parola",
    "email": "Email",
    "password_different": "Parola de confirmare nu este la fel cu parola ",
    "terms": "Termeni si conditii",
    "check_forgot_password": "Verificati adresa de email pentru a seta o noua parola",
    "password_changed": "Parola a fost schimbata",
    "security_code": "Parola nu a putut fi schimbata.",
    "invalid_token": "Codul de securitate a expirat. Va rugam sa reintroduceti emailul si parola in fereastra de logare",
    "edit_profile": "Profilul meu",
    "change_password": "Schimbare Parola",
    "log_out": "Deautentificare",
    "max_length": "Numarul de caractere este limitat la 50",
    "email_new_password": "Parola noua",
    "search": "Cautare",
    "hello": "Buna",
    "registerok": "Contul a fost creat cu succes",
    "verifyemailaddress": "Va rugam verificati contul de email pentru a valida adresa de email",
    "gotouserprofile": "Pentru a adauga servicii, trebuie sa completezi profilul",
    "add_new_service": "Adaugare serviciu nou",
    "delete_service": "Stergere serviciu",
    "inactivate": "Dezactiveaza",
    "no_coordonates": "<row>Profilul tau nu are setat coordonatele unde locuiesti </row> </br> Te rugam sa mergi la pagina ta de profil pentru a seta aceste informatii ",
    "remaining_char": "Caractere ramase",
    "title": "Titlu",
    "service_name": "Nume domeniu",
    "description": "Descriere",
    "det_desc": "Descriere detaliate",
    "photos": "Fotografii",
    "new_img": "Adauga imagne",
    "save": "Salveaza",
    "my_services": "Serviciile mele",
    "my_companies": "Companii",
    "del": "Sterge",
    "avail": "Activeaza",
    "inact": "Dezactiveaza",
    "edit": "Editeaza",
    "service": "serviciu",
    "del_conf": "Sunteti sigur ca vreti sa stergeti {0} {1}?",
    "cat": "Categorie",
    "create_user": "Utilizator nou",
    "login": "Logare",
    "login_screen": {
      "title": "Logare",
      "desc": "Introduceti adresa de email si parola",
      "help": "",
      "email": "Email",
      "name": "Nume",
      "password": "Parola",
      "forgot": "Am uitat parola",
      "login": "Logare",
      "remember": "pastreaza parola pe acest calculator"
    },
    "create_user_screen": {
      "title": "Utilizator nou",
      "desc": "Introduceti adresa de email si parola",
      "help": "Dupa inregistrare, verificati casuta de email pentru validare adresei",
      "email": "Email",
      "fname": "Nume",
      "lName": "Prenume",
      "phone": "Telefon",
      "password": "Parola",
      "confirm": "Confirmare Parola",
      "create_user": "Inregistrare",
      "have_account": "Ai cont?",
      "login_here": "Ecranul de logare"
    },
    "change_password_screen": {
      "title": "Schimbare Parola",
      "desc": "Schimbare Parola",
      "help": "Schimbare Parola",
      "old": "Parola actuala",
      "new": "Parola noua",
      "confirm": "Confirmare Parola",
      "change": "Schimbare Parola"
    },
    "profile": {
      "title": "Modificare date personale",
      "desc": "Info",
      "help": "Schimbare date",
      "avatar": "Fotografie profil",
      "first_name": "Nume",
      "last_name": "Prenume",
      "nick": "Nume utilizator",
      "address": "Adresa",
      "phone": "Telefon",
      "country": "Tara",
      "birthday": "Data Nasterii",
      "gendre": "Gen",
      "man": "Masculin",
      "woman": "Feminin",
      "action": "Salveaza"
    }
  };
  EN: any = {
    edu:{
      level1:"Beginer",
      level2:"Medium",
      level3:"Advanced",
    },
    what:{
      p1:"Consulting",
      p2:"Collaboration",
      p3:"IT Courses"
    },
    home: {
      t1: "Programming courses Cluj",
      t2: "IT consulting",
      t3: "Collaboration on project implementation",
      t4: "It would help to see the level of knowledge using the below link.",
      t5: "Checking knowledge",
      t6:"Technology",
      typoText: [
        "The primary language is <strong>JavaScript</strong>.",
        "Will learn <strong>javascript</strong>",
        "Will learn <strong>algoritms</strong>",
        "Will learn <strong>server development </strong>",
        "Will learn <strong>front-end </strong>",
        "Will learn <strong>testing</strong>",
        "Will learn <strong>deployment</strong>",
        "Will learn <strong>phone applications </strong>",
        "Help finding a job",
        "Support after graduation"
      ],
      survey: "It would help to see the level of knowledge using the link below.",
      surveyText: "Checking knowledge"
    },
    menu: {
      home: "Home",
      news: "News",
      exercise: "Exercise",
      sondaj: "Survey",
      cursuri: "Courses",
      inscriere: "Subscription",
      despre: "About",
      setari: "Settings",
      login: "Login",
      logout: "Logout",
      personaldata: "My info",
      education:"Education",
      consulting:"Consulting",
      collaboration:"collaboration"
    },
    slide: {
      algo: "Algorithm is essential for a programmer. There will be about 150 exercises starting from simple to complex. For example, algorithm is used to determine the value of products in a shopping cart.",
      node: "Creating a server will be done using this technology. It has the advantage of using the same syntax as javascript. It is used for receiving orders from a web page, storing data in a database, reading, filtering them.",
      js: "Javascript is the main language to learn. Almost all webpages use javascript.  A great advantage is that this language can be used on both Front-End and Back-end",
      mongo: "Mongo db is a type of database that has the advantage of keeping javascript objects fast, easy to learn",
      html: "Many people have heard / used html. Html is the structure of a web page.  The basic idea is to present the easiest way to copy a web site. The theory is also present",
      css: "CSS is used to arrange html elements in a web page; The main ways of using this technology will be discussed.",
      jq: "JQuery is used to manipulate items on a page. We're fast moving over this technology",
      es6: "ES6 is the new javascript standard",
      ang1: "Angular 1 is one of the first frameworks to create web pages using SPA (Single Page Application). It is created and maintained by google",
      ang2: "Angular 2+ is an improvement on the first angular version. Google has used typists to build this framework and offers better modularization than the previous version",
      testing: "Testing is used for both front end and back end. Exercises will be done for both automatic testing and code testing alongside the development side",
      mobile: "The mobile application development part is covered using the ionic framework.",
      react: "React is a facebook creation book created by facebook. On the labor market there is a great demand for both angular and responsive",
      docker: "Docker is used when you want to host applications on a computer. Applications can be made without this knowledge but it is good to be presented.",
      autotesting: "Automatic testing of an application is covered by the use of webdriver.io and selenium. An application test person should know these approaches"
    },
    "resetPass": "Password reset",
    "login_desc": "Enter into your account",
    "fb_login": "Facebook login",
    "empty_name": "Empty name",
    "email_used": "Email already used",
    "invalid_email": "Invalid email",
    "invalid_password": "Invalid email or password",
    "invalid_old_password": "Invalid old password",
    "invalid_new_password": "Invalid new password",
    "old_password_not_match": "Old password not match",
    "user_not_found": "User not found",
    "required": "Required",
    "account_exists": "This email is already registered. Please use the login or forgot password section",
    "password": "Password",
    "password_confirm": "Confirm Password",
    "email": "Email",
    "password_different": "Password confirmation is not good",
    "terms": "Terms and conditions",
    "check_forgot_password": "Please check your email in order to set up a new password",
    "password_changed": "Password is changed",
    "invalid_token": "Your credentials has expired. Please login again",
    "edit_profile": "Update profile",
    "change_password": "Change Password",
    "log_out": "Log Out",
    "max_length": "Maximum length is 50",
    "email_new_password": "New Password",
    "search": "Search",
    "hello": "Hello",
    "registerok": "Your account has been successfully created ",
    "verifyemailaddress": "Please check your email in order to verify the email address",
    "gotouserprofile": "In order to add your services you have to navigate to the user profile page",
    "add_new_service": "Add new service",
    "delete_service": "Remove",
    "inactivate": "Inactivate",
    "no_coordonates": "<row>Your profile does not have the address coordinates </row> Please update your profile ",
    "remaining_char": "Remaining characters",
    "title": "Title",
    "service_name": "Domain name",
    "description": "Description",
    "det_desc": "Detailed description",
    "photos": "Photos",
    "new_img": "New Image",
    "save": "Save",
    "my_services": "My services",
    "my_companies": "My companies",
    "del": "Delete",
    "avail": "Available",
    "inact": "Inactivate",
    "edit": "Edit",
    "service": "service",
    "del_conf": "Are you sure you want to remove {0} {1} ?",
    "cat": "Category",
    "create_user": "Create user",
    "login": "Login",
    "login_screen": {
      "title": "Login",
      "desc": "Please enter your email and password",
      "help": "",
      "email": "Email",
      "name": "Username",
      "password": "Password",
      "forgot": "Forgot Password",
      "login": "Login",
      "remember": "Remember password on this computer"
    },
    "create_user_screen": {
      "title": "New User",
      "desc": "Please enter your email and password",
      "help": "After registration, please check your email",
      "email": "Email",
      "fname": "First Name",
      "lName": "Last Name",
      "phone": "Phone",
      "password": "Password",
      "confirm": "Confirm Password",
      "create_user": "Register",
      "have_account": "Already have an account?",
      "login_here": "Login screen"
    },
    "change_password_screen": {
      "title": "Change Password",
      "desc": "Change password",
      "help": "The password will change",
      "old": "Current Password",
      "new": "New Password",
      "confirm": "Confirm Password",
      "change": "Change Password"
    },
    "profile": {
      "title": "Edit profile",
      "desc": "Info",
      "help": "Change your info",
      "avatar": "Profil picture",
      "first_name": "First Name",
      "last_name": "Last Name",
      "nick": "User name",
      "address": "Address",
      "phone": "Phone",
      "country": "Country",
      "birthday": "Birthday",
      "gendre": "Genre",
      "man": "Man",
      "woman": "Woman",
      "action": "Save"
    }
  };

}

