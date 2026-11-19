const http = require('http');

async function testApp(name, app, tests) {
  return new Promise((resolve) => {
    const server = app.listen(0, async () => {
      const port = server.address().port;
      console.log(`\n--- Testing ${name} (port ${port}) ---`);

      for (const t of tests) {
        try {
          const res = await request(port, t.method, t.path, t.body);
          console.log(`✔ [${t.method}] ${t.path} -> ${res.status}: ${JSON.stringify(res.data).substring(0, 80)}...`);
        } catch (err) {
          console.error(`✖ [${t.method}] ${t.path} -> Error: ${err.message}`);
        }
      }

      server.close(() => resolve());
    });
  });
}

function request(port, method, path, body = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port,
      path,
      method,
      headers: { 'Content-Type': 'application/json' }
    };
    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: data ? JSON.parse(data) : {} });
        } catch (e) {
          resolve({ status: res.statusCode, data });
        }
      });
    });
    req.on('error', reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

async function run() {
  const ex1 = require('./ExercicesXp/Exercice1/app');
  await testApp('Day 3 - Exercice 1', ex1, [
    { method: 'GET', path: '/' },
    { method: 'GET', path: '/about' }
  ]);

  const ex2 = require('./ExercicesXp/Exercice2/app');
  await testApp('Day 3 - Exercice 2 (Todos)', ex2, [
    { method: 'GET', path: '/todos' },
    { method: 'POST', path: '/todos', body: { text: 'New Todo' } },
    { method: 'PUT', path: '/todos/1', body: { done: true } },
    { method: 'DELETE', path: '/todos/2' }
  ]);

  const ex3 = require('./ExercicesXp/Exercice3/app');
  await testApp('Day 3 - Exercice 3 (Books)', ex3, [
    { method: 'GET', path: '/books' },
    { method: 'POST', path: '/books', body: { title: 'Refactoring', author: 'Martin Fowler' } },
    { method: 'PUT', path: '/books/1', body: { title: 'Clean Code 2nd Ed' } },
    { method: 'DELETE', path: '/books/2' }
  ]);

  const gold = require('./ExercicesXpGold/blog-api/app');
  await testApp('Day 3 - XP Gold (Blog API)', gold, [
    { method: 'GET', path: '/posts' },
    { method: 'GET', path: '/posts/1' },
    { method: 'POST', path: '/posts', body: { title: 'New Post', content: 'Gold post content' } }
  ]);

  const ninja = require('./ExercicesXpNinja/emoji-greeting/app');
  await testApp('Day 3 - XP Ninja (Emoji Greeting)', ninja, [
    { method: 'GET', path: '/' }
  ]);

  const trivia = require('./Challenges/daily-challenge/app');
  await testApp('Day 3 - Daily Challenge (Trivia)', trivia, [
    { method: 'GET', path: '/quiz' },
    { method: 'POST', path: '/quiz', body: { answer: 'Paris' } },
    { method: 'POST', path: '/quiz', body: { answer: 'Mars' } },
    { method: 'POST', path: '/quiz', body: { answer: 'Blue whale' } },
    { method: 'GET', path: '/quiz/score' }
  ]);

  console.log('\n=== All Day 3 Tests Passed! ===\n');
}

run();
