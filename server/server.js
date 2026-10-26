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

// In the bundled deploy (dist/), the client build sits next to server.js in public/
const path = require('path');
const fs = require('fs');
const bundled = path.join(__dirname, 'public');
const root = fs.existsSync(bundled) ? bundled : path.join(__dirname, '../client', 'build')
const { seoFor } = require('./seo');
// index: false so "/" also goes through the route below and gets its meta tags
app.use(express.static(root, { index: false }));

let indexHtml;
app.get("*", (req, res) => {
    indexHtml = indexHtml || fs.readFileSync(path.join(root, 'index.html'), 'utf8');
    const seo = seoFor(req.path);
    const html = indexHtml.replace(/<!-- seo:[\s\S]*?<!-- \/seo -->/, seo.html);
    res.status(seo.found ? 200 : 404).type('html').send(html);
})