const express = require('express');
const greetRouter = require('./routes/greet');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', greetRouter);

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Emoji Greeting App running at http://localhost:${PORT}`);
  });
}

module.exports = app;
