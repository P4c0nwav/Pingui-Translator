document.getElementById('translateButton').addEventListener('click', function() {
    var inputText = document.getElementById('inputText').value.trim();
    if (inputText !== "") {
        var translatedText = translateWithStorage(inputText.toLowerCase(), wordStorage);
        document.getElementById('outputText').innerText = translatedText;
    } else {
        document.getElementById('outputText').innerText = "";
    }
});

function translateWithStorage(text, storage) {
    // Substitui cada palavra-chave pelo valor correspondente do armazenamento.
    var words = text.split(' ');
    var translatedWords = words.map(function(word) {
        // Converte a palavra para minúsculas.
        var lowercaseWord = word.toLowerCase();
        // Verifica se a palavra está no armazém.
        if (storage.hasOwnProperty(lowercaseWord)) {
            return storage[lowercaseWord];
        }
        // Se não estiver, gera uma tradução fictícia mantendo o estilo do armazém.
        return generateFictionalTranslation(lowercaseWord);
    });

    // Limita o comprimento total da tradução para evitar resultados muito longos.
    var maxLength = 100;
    var truncatedTranslation = translatedWords.join(' ').substring(0, maxLength);

    return truncatedTranslation;
}

function generateFictionalTranslation(word) {
    // Gera uma tradução fictícia mantendo o estilo do armazém.
    if (word.length <= 3) {
        // Para palavras curtas (com 3 letras ou menos), adiciona apenas "Noot".
        return 'Noot'.repeat(Math.max(1, Math.ceil(word.length / 3)));
    } else {
        // Para palavras longas, utiliza a lógica anterior.
        var translation = '';
        for (var i = 0; i < word.length; i++) {
            if (i % 2 === 0) {
                translation += 'Noot';
            } else {
                translation += 'Nooot';
            }
        }
        return translation;
    }
}
