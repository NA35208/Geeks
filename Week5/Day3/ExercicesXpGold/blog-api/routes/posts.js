const express = require('express');
const router = express.Router();

let posts = [
  {
    id: 1,
    title: 'Getting Started with express.Router',
    content: 'express.Router helps modularize route handling cleanly.',
    timestamp: new Date().toISOString()
  },
  {
    id: 2,
    title: 'Advanced Routing Strategies',
    content: 'Middleware chaining and parameter validation in Express.',
    timestamp: new Date().toISOString()
  }
];

// GET /posts
router.get('/', (req, res) => {
  res.status(200).json(posts);
});

// GET /posts/:id
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid ID format.' });
  }

  const post = posts.find(p => p.id === id);
  if (!post) {
    return res.status(404).json({ error: `Blog post with ID ${id} not found.` });
  }

  res.status(200).json(post);
});

// POST /posts
router.post('/', (req, res) => {
  const { title, content } = req.body;

  if (!title || typeof title !== 'string' || !title.trim()) {
    return res.status(400).json({ error: 'Title is required and must be non-empty.' });
  }
  if (!content || typeof content !== 'string' || !content.trim()) {
    return res.status(400).json({ error: 'Content is required and must be non-empty.' });
  }

  const nextId = posts.length ? Math.max(...posts.map(p => p.id)) + 1 : 1;
  const newPost = {
    id: nextId,
    title: title.trim(),
    content: content.trim(),
    timestamp: new Date().toISOString()
  };

  posts.push(newPost);
  res.status(201).json(newPost);
});

// PUT /posts/:id
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid ID format.' });
  }

  const post = posts.find(p => p.id === id);
  if (!post) {
    return res.status(404).json({ error: `Blog post with ID ${id} not found.` });
  }

  const { title, content } = req.body;
  if (!title && !content) {
    return res.status(400).json({ error: 'At least title or content must be provided for update.' });
  }

  if (title) post.title = title.trim();
  if (content) post.content = content.trim();
  post.timestamp = new Date().toISOString();

  res.status(200).json(post);
});

// DELETE /posts/:id
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid ID format.' });
  }

  const index = posts.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).json({ error: `Blog post with ID ${id} not found.` });
  }

  const deleted = posts.splice(index, 1)[0];
  res.status(200).json({ message: 'Post successfully deleted.', deleted });
});

module.exports = router;
