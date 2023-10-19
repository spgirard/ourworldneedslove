// SITE JAVASCRIPT

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
    "Love is the glue that binds us.",
    "Lilly, I love your smile.",
    "Lilly, my heart loves you.",
    "Lilly, your love is my joy.",
    "Lilly, you are my true love.",
    "Lilly, love in your eyes.",
    "Lilly, your love is my strength.",
    "Lilly, you're my endless love.",
    "Lilly, love lights your way.",
    "Lilly, love makes us shine.",
    "Lilly, love is your name.",
    "Lilly, love makes life sweet.",
    "Lilly, love's in the air.",
    "Lilly, love is our bond.",
    "Lilly, you're my love song.",
    "Lilly, my love, my life.",
    "Lilly, you're my love story.",
    "Lilly, love in every glance.",
    "Lilly, love's in every hug.",
    "Lilly, love's in every word.",
    "Lilly, love blooms in you.",
    "Lilly, love's our treasure.",
    "Lilly, you're my love's home.",
    "Lilly, my love's devotion.",
    "Lilly, love's your reflection.",
    "Lilly, love, pure and true.",
    "Lilly, you're my forever love."    
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
    loveNoteArea.value = '';
    lovePhrases.push(loveNoteText);
    // console.log(lovePhrases);
}