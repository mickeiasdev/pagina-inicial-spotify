document.addEventListener("DOMContentLoaded", function () {
    // Lista de cores disponíveis na paleta
    const colorPalette = [
        "#363062",
        "#22092C",
        "#662549",
        "#393646",
        "#735F32",
        "#3F4E4F",
        "#541212",
        "#1E5128",
        "#C996CC",
    ];

    // Seleciona todos os elementos com a classe "card"
    const cards = document.querySelectorAll(".card");

    // Aplica uma cor aleatória a cada card
    cards.forEach(function (card) {
        const randomColor =
            colorPalette[Math.floor(Math.random() * colorPalette.length)];
        card.style.backgroundColor = randomColor;
    });
}); // sistema de cores aleatorias para o fundo dos cards
