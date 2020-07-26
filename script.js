let complete1 = document.getElementById("complete-1");
if (complete1) {
    complete1.addEventListener("click", function () {
        let p = document.querySelectorAll("main p");
        if (!p) {
            alert("Did you make any p tags?")
            return
        }
        if (p.length < 2) {
            alert("Not enough p tags!");
            return
        }

        let h1 = document.querySelector("main h1");
        if (!h1) {
            alert("you don't have a h1!");
            return
        }

        let ul = document.querySelector("main ul");
        if (!ul) {
            alert("You don't have a ul!");
            return
        }

        let li = document.querySelectorAll("main li");
        if (!li || li.length < 5) {
            alert("Not enough list item facts are made")
            return
        }

        let img = document.querySelector("main img");
        if (!img) {
            alert("You don't have an image of a greek god!");
            return
        }

        alert("Congratulations you passed challenge-1. The password is: Milky and Butter")
    });
}

let complete2 = document.getElementById("complete-2");
if (complete2) {
    complete2.addEventListener("click", function () {
        let medusa = document.querySelector("main div img:nth-child(2)");
        let path = medusa.src.split("/");
        if (path[path.length - 1] != "medusa.png") {
            alert("Miss May didn't get demystified to Medusa!");
            return
        }

        let griffin = document.querySelector("main div img:nth-child(3)");
        path = griffin.src.split("/");
        if (path[path.length - 1] != "griffin.png") {
            alert("The dog didn't get demystified to a Griffin!");
            return
        }

        let faun = document.querySelector("main div img:nth-child(1)");
        path = faun.src.split("/");
        if (path[path.length - 1] != "faun.png") {
            alert("The Delivery man didn't get demystified to a Faun!");
            return
        }

        let centaur = document.querySelector("main div img:nth-child(4)");
        path = centaur.src.split("/");
        if (path[path.length - 1] != "centaur.png") {
            alert("Mr. John was not demystified to a Centaur!");
            return
        }

        alert("Congratulations! You passed! The password is: Mist It");
    });
}

let complete3 = document.getElementById("complete-3");
if (complete3) {
    complete3.addEventListener("click", function () {
        let items = document.querySelectorAll(".item");
        if (!items || items.length < 6) {
            alert("Are you sure you applied the item class to all the items?");
            return
        } 

        let pen = document.getElementById("pen-sword");
        if (!pen) {
            alert("The pen isn't in the backpack!");
            return
        } 
        let path = pen.src.split("/");
        if (path[path.length - 1] != "sword.png") {
            alert("The pen isn't a sword!")
            return
        }

        let chips = document.querySelectorAll(".chip");
        if (!chip || chips.length < 2) {
            alert("Did you attach the 2 chips with the class chip to the backpack?");
            return
        }

        let water = document.querySelectorAll(".water");
        if (!water || water.length < 3) {
            alert("Did you attach the 2 waterbottles with the class water to the backpack?");
            return
        }

        alert("Congratulations! You passed! The password is: Poisedon Man")
    });
}