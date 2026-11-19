const express = require('express');
const router = express.Router();

const emojis = ["😀", "🎉", "🌟", "🎈", "👋", "🚀", "🍕", "🔥"];

router.get('/', (req, res) => {
  const emojiOptions = emojis
    .map((e, idx) => `<label style="font-size:24px; margin: 0 10px; cursor:pointer;"><input type="radio" name="emoji" value="${e}" ${idx === 0 ? 'checked' : ''} /> ${e}</label>`)
    .join('');

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Emoji Greeting App</title>
      <style>
        body { font-family: 'Segoe UI', Tahoma, sans-serif; background: #f3f4f6; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin:0; }
        .card { background: white; padding: 32px; border-radius: 12px; box-shadow: 0 4px 16px rgba(0,0,0,0.1); width: 420px; text-align: center; }
        h1 { color: #1f2937; margin-bottom: 20px; font-size: 24px; }
        input[type="text"] { width: 100%; box-sizing: border-box; padding: 12px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 16px; margin-bottom: 16px; }
        .emojis-box { margin: 15px 0 24px; display: flex; justify-content: center; flex-wrap: wrap; }
        button { background: #3b82f6; color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 16px; cursor: pointer; width: 100%; font-weight: bold; }
        button:hover { background: #2563eb; }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>👋 Emoji Greeting App</h1>
        <form method="POST" action="/greet">
          <input type="text" name="name" placeholder="Enter your name..." required />
          <div class="emojis-box">
            ${emojiOptions}
          </div>
          <button type="submit">Generate Greeting</button>
        </form>
      </div>
    </body>
    </html>
  `;
  res.send(html);
});

router.post('/greet', (req, res) => {
  const { name, emoji } = req.body;

  if (!name || !name.trim()) {
    return res.status(400).send(`
      <p style="color:red; font-family:sans-serif; text-align:center;">Name is required! <a href="/">Go back</a></p>
    `);
  }

  const selectedEmoji = emoji || '🌟';
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Your Greeting</title>
      <style>
        body { font-family: 'Segoe UI', Tahoma, sans-serif; background: #eef2ff; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin:0; }
        .card { background: white; padding: 40px; border-radius: 16px; box-shadow: 0 10px 25px rgba(0,0,0,0.08); text-align: center; max-width: 460px; }
        .emoji-banner { font-size: 72px; margin-bottom: 16px; }
        h1 { color: #3730a3; margin-bottom: 10px; }
        p { color: #4b5563; font-size: 18px; margin-bottom: 24px; }
        a { display: inline-block; background: #4f46e5; color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="emoji-banner">${selectedEmoji}</div>
        <h1>Hello, ${name.trim()}!</h1>
        <p>Wishing you an amazing and productive day with ${selectedEmoji}!</p>
        <a href="/">← Create Another Greeting</a>
      </div>
    </body>
    </html>
  `;
  res.send(html);
});

module.exports = router;
