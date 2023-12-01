const express = require('express');
const app = express();

const hostname = '127.0.0.2';
const port = 3000;

app.use(express.static(__dirname)); 

/**
 * as we add more HTML files make sure we update this to follow the example :3
 */
app.get('', (req, res) => {
    res.sendFile(__dirname + '/Pages/HomePage.html'); //here is the example
})

app.get('', (req, res) => {
    res.sendFile(__dirname + '/Pages/TrendingPage.html'); 
})

app.get('', (req, res) => {
    res.sendFile(__dirname + '/Pages/ContactPage.html'); 
})

app.get('', (req, res) => {
    res.sendFile(__dirname + '/Pages/LoginPage.html');
})

app.get('', (req, res) => {
    res.sendFile(__dirname + '/Pages/CreateUserPage.html'); 
})

app.get('', (req, res) => {
    res.sendFile(__dirname + '/Pages/UserProfilePage.html'); 
})

app.get('', (req, res) => {
    res.sendFile(__dirname + '/Pages/ArtistPage.html'); 
})

app.get('', (req, res) => {
    res.sendFile(__dirname + '/Pages/FollowPage.html'); 
})

app.get('', (req, res) => {
    res.sendFile(__dirname + '/Pages/FileUploadPage.html'); 
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})