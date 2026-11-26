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
        {kanji: "男", meaning: "Man", reading: "Kun: おとこ (Otoko), On: ダン (Dan)"},
        {kanji: "田", meaning: "Rice Field", reading: "Kun: た (Ta), On: デン (Den)"},
        {kanji: "木", meaning: "Tree", reading: "Kun: き (Ki), On: モク (Moku)"},
        {kanji: "大", meaning: "Big", reading: "Kun: おお (Oo), On: タイ (Tai)"},
        {kanji: "中", meaning: "Middle, Center", reading: "Kun: なか (Naka), On: チュウ (Chuu)"},
        
        {kanji: "日", meaning: "Sun", reading: "Kun: ひ (Hi), On: ニチ (Nichi)"},
        {kanji: "月", meaning: "Moon", reading: "Kun: つき (Tsuki), On: ゲツ (Getsu)"},
        {kanji: "年", meaning: "Year", reading: "Kun: とし (Toshi), On: ネン (Nen)"},

        {kanji: "夏", meaning: "Summer", reading: "Kun: なつ (Natsu), On: カ (Ka)"},
        {kanji: "秋", meaning: "Autumn", reading: "Kun: あき (Aki), On: シュウ (Juu)"},
        {kanji: "冬", meaning: "Winter", reading: "Kun: ふゆ (Fuyu), On: トウ (Tou)"},
        {kanji: "春", meaning: "Spring", reading: "Kun: はる (Haru), On: シュン (Shun)"},

        {kanji: "入", meaning: "Enter, Insert", reading: "Kun: い・る (I.ru), On: ニュウ (Nyuu)"},
        {kanji: "出", meaning: "Exit, Put out", reading: "Kun: で・る (De.ru), On: シュツ (Shutsu)"},
        {kanji: "口", meaning: "Mouth", reading: "Kun: くち (Kuchi), On: コウ (Kou)"},

        {kanji: "時", meaning: "Time", reading: "Kun: とき (Toki), On: ジ (Ji)"},
        {kanji: "右", meaning: "Right", reading: "Kun: みぎ (Migi), On: ユ (Yu)"},
        {kanji: "左", meaning: "Left", reading: "Kun: ひだり (Hidari), On: サ (Sa)"},
        


    ]
    


    const flashcardElement = document.getElementById('kanji');
    const meaningElement = document.querySelector('.meaning');
    const readingElement = document.querySelector('.reading');
    const noteElement = document.querySelector('.note');

    const backElement = document.querySelector('.back');
    const flipButton = document.getElementById('flip-button');
    const againButton = document.getElementById('again-button');

    const pick = arr => arr[Math.floor(Math.random() * arr.length)];

    let currentCard = pick(level0);

    function displayCard() {

        flashcardElement.textContent = currentCard.kanji;
        meaningElement.textContent = currentCard.meaning;
        readingElement.textContent = currentCard.reading;
        noteElement.textContent = currentCard.note;


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
    currentCard = pick(level0);
    displayCard();
});

displayCard();

 
});