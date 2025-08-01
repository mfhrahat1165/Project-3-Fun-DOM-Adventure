 function changeText() {
        let textElement = document.getElementById("myText");
        textElement.innerText = "Boom! You've unlocked a colorful surprise! Keep clicking to explore more fun!";
        textElement.style.color = "#" + Math.floor(Math.random()*16777215).toString(16); // Random color
    }