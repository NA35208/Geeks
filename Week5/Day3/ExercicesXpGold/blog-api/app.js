const express = require('express');
const postsRouter = require('./routes/posts');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/posts', postsRouter);

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found.' });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Blog API running at http://localhost:${PORT}`);
  });
}

module.exports = app;
