document.addEventListener('DOMContentLoaded', () => {
    const inspireBtn = document.getElementById('inspireBtn');
    const quoteDisplay = document.getElementById('quoteDisplay');

    const quotes = [
        "Счастье — это не что иное, как хорошее здоровье и плохая память. — Альберт Швейцер",
        "Счастье не в счастье, а в его достижении. — Федор Достоевский",
        "Счастье — это когда то, что ты думаешь, что ты говоришь и что ты делаешь, находится в гармонии. — Махатма Ганди",
        "Секрет счастья не в том, чтобы делать то, что ты любишь, а в том, чтобы любить то, что ты делаешь. — Джеймс М. Барри"
    ];

    function displayRandomQuote() {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteDisplay.textContent = randomQuote;
    }

    inspireBtn.addEventListener('click', displayRandomQuote);
    
    // Показать первую цитату при загрузке страницы
    displayRandomQuote();
});
