const express = require('express');
const cors = require('cors');
const app = express();
// const path = require('path');



app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3000; //Line 3



// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port http://localhost:${port}`)); //Line 6

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// });

const root = require('path').join(__dirname, '../client', 'build')
app.use(express.static(root));
app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
})