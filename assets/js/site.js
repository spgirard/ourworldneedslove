// SITE JAVASCRIPT

let text = "Sed vitae sem quis mi euismod egestas lobortis vel lorem. Morbi conv."
let textLength = text.length
console.log(textLength)

// store default phrases

let lovePhrases = [
    "Love conquers all.",
    "Love at first sight.",
    "Love is blind.",
    "Love knows no bounds.",
    "Love is a two-way street.",
    "Love is a beautiful thing.",
    "Love makes the world go 'round.",
    "All you need is love.",
    "Love is the key to happiness.",
    "Love makes life worth living.",
    "Love is the greatest gift of all.",
    "Love is patient and kind.",
    "Love is a powerful force.",
    "Love is the language of the heart.",
    "Love is like a fine wine.",
    "Love is a journey, not a destination.",
    "Love is in the air.",
    "Love makes every day special.",
    "Love makes you feel alive.",
    "Love is a treasure.",
    "Love is the music of the soul.",
    "Love is a work of art.",
    "Love is a sweet melody.",
    "Love is a warm embrace.",
    "Love is the answer to everything.",
    "Love is the glue that binds us."
  ];

//   where the text shows
let loveText = document.getElementById("loveText");
getLoveText();

let loveButton = document.getElementById("loveButton")
loveButton.addEventListener('click', function() {
    getLoveText()
})

function getLoveText() {
    let randNum = Math.floor(Math.random() * lovePhrases.length);
    loveText.textContent =  lovePhrases[randNum];
}

//  love note
let loveNoteArea = document.getElementById("loveNote");

function submitForm() {
    let loveNoteText = loveNoteArea.value;
    // console.log(loveNoteText);
    loveNoteText.value = '';
    lovePhrases.push(loveNoteText);
    // console.log(lovePhrases);
}