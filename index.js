const app = require('./app')

// This line says :- process.env.PORT
const {PORT} =  process.env
app.listen(PORT, ()=> 'server is running on port 4000')