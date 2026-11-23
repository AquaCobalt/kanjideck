document.addEventListener('DOMContentLoaded', () => {
    const level0 = [
        {kanji: "一", meaning: "One", reading: "いち (Ichi)"},
        {kanji: "二", meaning: "Two", reading: "に (Ni)"},
        {kanji: "三", meaning: "Three", reading: "さん (San)"},
        {kanji: "四", meaning: "Four", reading: "よん (Yon), し (Shi)"},
        {kanji: "五", meaning: "Five", reading: "ご (Go)"},
        {kanji: "六", meaning: "Six", reading: "ろく (Roku)"},
        {kanji: "七", meaning: "Seven", reading: "しち (Shichi), なな (Nana)"},
        {kanji: "八", meaning: "Eight", reading: "はち (Hachi)"},
        {kanji: "九", meaning: "Nine", reading: "く (Ku), きゅう (Kyuu)"},
        {kanji: "十", meaning: "Ten", reading: "じゅう (Juu)"},
        
        {kanji: "山", meaning: "Mountain", reading: "Kun: やま (Yama), On: サン (San)"},
        {kanji: "人", meaning: "Person", reading: "Kun: ひと (Hito), On: ジン (Jin)"},
        {kanji: "女", meaning: "Woman", reading: "Kun: おんな (Onna), On: ジョ (Jo)"},
        {kanji: "田", meaning: "Rice Field", reading: "Kun: た (Ta), On: デン (Den)"},
        {kanji: "木", meaning: "Tree", reading: "Kun: き (Ki), On: モク (Moku)"},
        {kanji: "大", meaning: "Big", reading: "Kun: おお (Oo), On: タイ (Tai)"},

    ]

    let currentCard = 0;

    const flashcardElement = document.getElementById('kanji');
    const meaningElement = document.querySelector('.meaning');
    const readingElement = document.querySelector('.reading');
    const backElement = document.querySelector('.back');
    const flipButton = document.getElementById('flip-button');
    const againButton = document.getElementById('again-button');


    function displayCard() {

        flashcardElement.textContent = level0[currentCard].kanji;
        meaningElement.textContent = level0[currentCard].meaning;
        readingElement.textContent = level0[currentCard].reading;

        backElement.classList.add('hidden');
        againButton.classList.add('hidden');
        flipButton.classList.remove('hidden');


    }

    flipButton.addEventListener('click', () => {
    backElement.classList.remove('hidden');
    againButton.classList.remove('hidden');
    flipButton.classList.add('hidden');
});

againButton.addEventListener('click', () => {
    currentCard = (currentCard + 1) % level0.length;
    displayCard();
});

displayCard();

 
});