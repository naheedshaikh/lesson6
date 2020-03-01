
"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function

let app;
(function(app){

    // Declare Function Variables here...
    console.log("%cDeclaring Variables", "color: red;")
   
    /**
     * Variable initialization in this function
     *
     */
    function Start()
    {
        let mainContent = $("#mainContent")[0];
        console.log(mainContent);

        let mainCont = document.getElementById("mainContent");
        console.log(mainCont);

        let mainQuery = document.querySelectorAll("#mainContent")[0];
        console.log(mainQuery);

        let mainFirstQuery = document.querySelector("#mainContent");
        console.log(mainFirstQuery);

        //$(".display-4").hide();   //it hide the display-4 "Hello World"

        //console.log($(".nav-link").css("font-weight","bold")); //it make bold all the items of nave links

        //let navlink = document.getElementsByClassName("nav-link"); To hide the first element from nav-link

        //navlink[0].style.display = "none";

        //$(".nav-link").hide();

        Main();
    }

    /**
     * Main Program entry point is here
     *
     */
    function Main()
    {
        
    }
    
    window.addEventListener("load", Start);
})(app || (app = {}));

