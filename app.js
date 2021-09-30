
var friends = ["Rosemary", "Niki", "Jas", "Jonique", "Gambi"];
var locations = ["Plum Bar", "Starbucks", "McDonalds", "Piggly Wiggly", "Walmart", "Waffle House", "Target", "Chiptole", "Moe's", "Platinum"];
var weapons = ["a water gun", "a rubber duckie", "a Klondike bar", "water bugs", "some rocks", "a pic of an ex", "a soda with anti-freeze", "some Dunkin Donuts coffee", "a plastic spoon", "some burnt biscuits", "silly puddy", "darts", "a brick", "a bat", "a plastic fork", "a rabid dog", "a taser", "spoiled milk", "a plastic knife", "hot grits"];


document.addEventListener("DOMContentLoaded", function () {
    for (let i = 1; i < 101; i++) {
        //i know that i'm not supposed to have 101 on there but it kept stopping at 99
        var h3 = document.createElement("h3");
        h3.innerText = "~" + "Accusation " + i + "~";
         
        h3.addEventListener('click', function () {

            var friend = friends[Math.floor(Math.random() * friends.length)];
            var weapon = weapons[Math.floor(Math.random() * weapons.length)];
            var location = locations[Math.floor(Math.random() * locations.length)];
                
            alert("Accusation " + i + ": I accuse " + friend + " of attacking them using " + weapon + " while at " + location + "!");
        });
              
        document.body.appendChild(h3);
    }
});
