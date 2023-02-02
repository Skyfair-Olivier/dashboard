document.querySelector('.menu__toggle div').addEventListener('click', function() {
    let mode = document.querySelector(".menu__toggle input");
    if (mode.getAttribute("checked") != "checked") {
        mode.setAttribute("checked", "checked");
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        mode.removeAttribute("checked")
        document.documentElement.setAttribute('data-theme', 'dark');
    }
})



window.addEventListener("load", function() {
    let tableau = [
        ["facebookFollowers","1987"],
        ["twitterFollowers","1044"],
        ["instagramFollowers","11k"],
        ["youtubeFollowers","8239"],
        ["facebookViews","87"],
        ["facebookLikes","52"],
        ["instagramLikes","5462"],
        ["instagramViews","52k"],
        ["twitterViews","117"],
        ["twitterLikes","507"],
        ["youtubeLikes","107"],
        ["youtubeViews","1407"]
    ];
    tableau.forEach(function(element) {
        let nombre = element[1];
        if (nombre.slice(-1)=="k"){
        	nombre=nombre.slice(0,-1)+"000";
        }
        let time = 2000 / parseInt(nombre);

        test(element[0], parseInt(nombre), time);
    });
});

function test(id, fin, temps) {
    let nombre = document.getElementById(id);
    for (let j = 0; j <= fin; j++) {
        setTimeout(function(j) {
            return function() {
                if (j == 11000) {
                    j = "11k";
                } else if (j == 52000) {
                    j = "52k";
                }
                nombre.innerHTML = j;
            }
        }(j), temps * j);

    }
}