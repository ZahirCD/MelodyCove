// script.js

// Function to change the color of a music note when clicked
function changeNoteColor(event) {
    const note = event.target;
    const colors = ['#13579B', '#2468AC', '#468ACE', '#F04286', '#33AA55', 
    '#AA33FF', '#FF7722', '#44DD99', '#112233', '#445566', '#778899', 
    '#99AABB', '#CCDDEE', '#AAFFBB', '#FFAACC', '#DDAADD', '#EEBBCC', 
    '#FFDDEE', '#123456', '#654321', '#135792', '#987654', '#456789', 
    '#ABCDEA', '#FF5733', '#F0A840', '#33FFA0', '#FFDD33', '#DD3300', 
    '#AABBCC', '#FFD700', '#FF5733', '#FFFF00', '#008080', '#00FFFF', 
    '#FF4500', '#FF6347', '#8A2BE2', '#1E90FF', '#FF69B4', '#FF1493', 
    '#FF4500', '#FFD700', '#B22222', '#FFD700', '#FF4500', '#00FF00', 
    '#FFFF00', '#008080', '#00FFFF'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    note.style.backgroundColor = randomColor;
}

// Add a click event listener to each music note
const musicNotes = document.querySelectorAll('.music-note');
musicNotes.forEach(note => {
    note.addEventListener('click', changeNoteColor);
});
