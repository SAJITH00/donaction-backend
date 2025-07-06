const jsonServer = require('json-server');
const cors = require('cors');

// Create server instance
const server = jsonServer.create();

// Set up middlewares
server.use(cors());
server.use(jsonServer.defaults());
server.use(jsonServer.router('db.json')); 

// Use port 3001 to avoid conflicts with React (which uses 3000)
const PORT = process.env.PORT || 3001;

// Start server with error handling
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
}).on('error', (err) => {
  console.error('Server error:', err);
  if (err.code === 'EADDRINUSE') {
    console.log(`Port ${PORT} is already in use. Try a different port.`);
  }
});