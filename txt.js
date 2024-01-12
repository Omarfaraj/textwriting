5
function writeText(text, speed) {
    const element = document.getElementById('selfWritingText');

    let index = 0;

    function addNextCharacter() {
      if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeOut(addNextCharacter, speed);
      }
    }

    addNextCharacter();
}

const textToWrite = "Hello, my name is Faraj Omar, Learning javascript."
const speed = 50;

writeText(textToWrite, speed);