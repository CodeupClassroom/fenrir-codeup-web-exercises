(function(){
    "use strict";


    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    planetsArray = planetsString.split("|");

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    let planetsHTML = planetsArray.join("<br>");

    console.log(planetsHTML);


    let planetListHTML = "<ul>";


    for (let i = 0; i < planetsArray.length; i++) {
        planetListHTML += `<li>${planetsArray[i]}</li>`;
    }

    planetListHTML += "</ul>";

    console.log(planetListHTML);


let bonusRoundTwo = planetsArray.join("</li><li>")

    bonusRoundTwo = "<ul><li>" + bonusRoundTwo + "</li></ul>";
    console.log(bonusRoundTwo);

})();
