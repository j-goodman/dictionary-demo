const getDefinition = (word) => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(response => response.json())
    .then(data => {
        let definition = data[0].meanings[0].definitions[0].definition
        definitionContainer.innerText = definition
    })
}

const wordInput = document.getElementById("word-input")
const definitionContainer = document.getElementById("definition-container")

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        getDefinition(wordInput.value)
    }
})

console.log(wordInput)