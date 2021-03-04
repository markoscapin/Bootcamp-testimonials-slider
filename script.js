
var tanya = {
    name: "Tanya Sinclair",
    profession: "UX Engineer",
    citation: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
}

var john = {
    name: "John Tarkpor",
    profession: "Junior Front-end Developer",
    citation: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”'
}

var peopleArray = [tanya, john];
//Things that will change clicking the button
var currentPerson = document.querySelector(".name");
var currentProfession = document.querySelector(".profession");
var currentCitation = document.querySelector(".citation");
var currentImage = document.querySelector("img");

//two buttons
var leftButton = document.querySelector("#turn-left");
var rightButton = document.querySelector("#turn-right");

//function to change person
function changePerson(person) {
    currentPerson.innerHTML = person.name;
    currentProfession.innerHTML = person.profession;
    currentCitation.innerHTML = person.citation;
    currentImage.src = "images/image-" + getName(person.name) + ".jpg";
}
//With this function, we have the index to slice the name and we return the firstName only!
function getName(personName) {
    var slicerIndex = personName.search(" ");
    return personName.slice(0,slicerIndex);
}
//main function switcher for buttons
function personSwitcher() {
    if (currentPerson.innerHTML == tanya.name) {
        return changePerson(john);
    } else if (currentPerson.innerHTML == john.name) {
        return changePerson(tanya)
    }
}


leftButton.addEventListener("click", function () {
    return personSwitcher();
});

rightButton.addEventListener("click", function () {
    return personSwitcher();
});






