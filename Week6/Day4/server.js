
const http = require('http');

const orders = {
  A104: {
    order_id: "A104",
    status: "shipped",
    delivery_estimate: "2026-11-28",
    carrier: "ExpressPost",
    tracking_number: "TRK98124"
  },
  A205: {
    order_id: "A205",
    status: "processing",
    delivery_estimate: null,
    carrier: null,
    tracking_number: null
  },
  A407: {
    order_id: "A407",
    status: "processing",
    delivery_estimate: null,
  }
};

const server = http.createServer((req, res) => {
  const urlParts = req.url.split('?')[0].split('/');
  if (urlParts.length >= 3 && urlParts[1] === 'orders') {
    const orderId = decodeURIComponent(urlParts[2]).toUpperCase();

    if (req.method === 'GET') {
      const order = orders[orderId];
      if (!order) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: "Order not found", order_id: orderId }));
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(order));
    }

    if (req.method === 'PATCH') {
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', () => {
        try {
          const updates = JSON.parse(body);
          if (!orders[orderId]) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ error: "Order not found", order_id: orderId }));
          }
          orders[orderId] = { ...orders[orderId], ...updates };
          res.writeHead(200, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ message: "Order updated", order: orders[orderId] }));
        } catch (e) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ error: "Invalid JSON" }));
        }
      });
      return;
    }
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: "Route not found" }));
});

const PORT = process.env.ORDER_SERVICE_PORT || 5002;
if (require.main === module) {
  server.listen(PORT, '127.0.0.1', () => {
    console.log(`Order Service listening on http://127.0.0.1:${PORT}`);
  });
}

module.exports = { server, orders };
