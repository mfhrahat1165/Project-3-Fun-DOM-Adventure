 function changeText() {
        let textElement = document.getElementById("myText");
        textElement.innerText = "Boom! You've unlocked a colorful surprise! Keep clicking to explore more fun!";
        textElement.style.color = "#" + Math.floor(Math.random()*16777215).toString(16); // Random color

        // Get the video container
        let videoContainer = document.getElementById("videoContainer");

        // Clear any existing video (if the button is clicked multiple times)
        videoContainer.innerHTML = '';

        // Create a new video element
        let videoElement = document.createElement("video");
        videoElement.src =  "https://www.w3schools.com/html/mov_bbb.mp4"; // Replace with your video URL
        videoElement.controls = true; // Show video controls (play, pause, volume)
        videoElement.autoplay = true; // Autoplay the video
        videoElement.loop = true; // Loop the video
        videoElement.style.width = "100%"; // Make video responsive within its container
        videoElement.style.maxWidth = "600px"; // Limit max width
u
        // Append the video to the container
        videoContainer.appendChild(videoElement);

        // Make the video container visible
        videoContainer.style.display = "block";
    }