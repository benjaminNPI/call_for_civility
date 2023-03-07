const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000; //Line 3

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// app.get("/", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

app.get('/welcome', (req, res) => {
  res.sendFile(path.resolve(__dirname, './build', 'index.html'));
});