const app = express(); 

const PORT = process.env.PORT || 8000;
app.use(express.json()); 

module.exports = app;