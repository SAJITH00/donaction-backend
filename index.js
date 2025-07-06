const jsonServer = require('json-server');
const cors = require('cors');

// Create server
const server = jsonServer.create();

// Set up middlewares
const middlewares = jsonServer.defaults();

// Set up router
const router = jsonServer.router('db.json');

// Enable CORS and other middlewares
server.use(cors());
server.use(middlewares);
server.use(router);

// Use port 3001 to avoid conflicts with React (3000)
const PORT = process.env.PORT || 3001;

// Start server with better error handling
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Error: Port ${PORT} is already in use.`);
    console.log('Try running on a different port:');
    console.log('PORT=3002 npm start');
  } else {
    console.error('Server error:', err);
  }
});