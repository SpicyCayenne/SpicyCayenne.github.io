let funFacts;
let oldFunFacts = [];

funFactsList = ['My first "real" experience with programming was using VBA in Excel. I automated a lot of my data-entry tasks for work (shhh!)',
"I'm an old lady at heart; I love knitting, gardening, and cooking!",'My favorite place to visit is Crater Lake National Park.'];


function funFact() {
    let randInt = Math.floor(Math.random()*(funFactsList.length));
    while (oldFunFacts.indexOf(randInt) !== -1) {
        randInt = Math.floor(Math.random()*(funFactsList.length));
    }
    oldFunFacts.push(randInt);
    console.log(oldFunFacts)
    document.getElementById('funFact').innerText = funFactsList[randInt];
    if (oldFunFacts.length === funFactsList.length) {
        oldFunFacts = [];
    }
    document.getElementById('funFact').style.display = 'block';
}