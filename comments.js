// Create web server

var express = require('express');
var app = express();

// Set up comments
var comments = {
  '1': 'First comment!',
  '2': 'Second comment!'
};

// GET /comments
// Respond with a JSON representation of the comments
app.get('/comments', function(req, res) {
  res.json(comments);
});

// GET /comments/1
// Respond with a JSON representation of the comment with the id of 1
app.get('/comments/:id', function(req, res) {
  res.json(comments[req.params.id]);
});

// Start server
app.listen(3000);
console.log('Server started on port 3000');

// Run the server with the command:
// node comments.js
// You can then visit http://localhost:3000/comments and http://localhost:3000/comments/1 in your browser to see the results.

// The server is now running and responding to requests. It is serving up a JSON representation of the comments data. The data is being served from an in-memory object, but in a real application, you would likely be fetching this data from a database or other source.

// The server is listening on port 3000, so you can visit it by going to http://localhost:3000 in your web browser. When you visit http://localhost:3000/comments, you should see the JSON representation of the comments object. When you visit http://localhost:3000/comments/1, you should see the JSON representation of the first comment.