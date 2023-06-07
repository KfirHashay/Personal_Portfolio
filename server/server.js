const express = require('express');
const app = express();
const cors = require('cors');

var corsOptions = {
  origin: 'http://localhost:3000',
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
  //   res.send('Successful response.');
  res.json({ users: ['userOne', 'userTwo', 'userThree'] });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Portfolio Server is running on port ${PORT}.`);
});
