let funFacts;
let oldFunFacts = [];

funFactsList = ['My first "real" experience with programming was using VBA in Excel. I automated a lot of my data-entry tasks for work (shhh!)',
"I'm an old lady at heart; I love knitting, gardening, and cooking!",'My favorite place to visit is Crater Lake National Park.',
'I had to take Calculus three times before I finally understood it. Persistance pays off!', 'I am a Viking 3 times over: my undergraduate and post-baccalaureate mascots were both vikings, and I learned through DNA testing that I am of Norwegian descent. Skål!',
'I have a terrible sense of smell.', 'My favorite subject in high school was band. I played 4 instruments: piano, flute, guitar, euphonium.', 'My favorite characters to play in D&D are rogues and clerics.',
'I gave myself a concussion going down a slide at a park. I was 22 and in college.'];


function funFact() {
    let randInt = Math.floor(Math.random()*(funFactsList.length));
    while (oldFunFacts.indexOf(randInt) !== -1) {
        //to prevent seeing duplicates until you've seen the whole list
        randInt = Math.floor(Math.random()*(funFactsList.length));
    }
    oldFunFacts.push(randInt);
    document.getElementById('funFact').innerText = funFactsList[randInt];
    if (oldFunFacts.length === funFactsList.length) {
        oldFunFacts = [];
    }
    document.getElementById('funFact').style.display = 'block';
    document.getElementById('funFact').scrollIntoView();
}