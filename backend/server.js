// INFRASTRUCTURE
import app from './src/app.js';

const port = 9000;

// Start listening to the port
app.listen(port, () => {
    console.log(`Book ReST API is listening on port ${port}`)
});