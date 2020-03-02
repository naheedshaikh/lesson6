
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
        PageSwitcher();
        Main();
    }

    function PageSwitcher()
    {
        let name = window.location.pathname;
        
        let pageName = name.substring(1, name.length - 5);

        switch(pageName)
        {
            case "index":
                HomePageContent();
                break;
            case "products":
                break;
            case "services":
                break;
            case "contact":
                break;
            case "[rojects":
                break;
            default:
                console.error("Landed in a page that is not defined");
                break;
                
        }
        //add a class of active to the active link using jquery
        $("#" +pageName).addClass("active");
        
       //add a class of active to the active link using java Script
       // document.querySelector("#"+pageName).className = "nave-item-active";
    }

    function HomePageContent()
    {
        document.getElementById("home").className = "nav-item active"   ;
        $("button").click(()=>{
            location.href = "projects.html"
        });
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

