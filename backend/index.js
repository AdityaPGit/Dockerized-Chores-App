const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://mongodb:27017/chores', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('MongoDB connection error:', err));

// Define Chore schema
const choreSchema = new mongoose.Schema({
  chore: String,
});

const Chore = mongoose.model('Chore', choreSchema);

// Route for adding a chore
app.post('/chores', async (req, res) => {
  const { chore } = req.body;
  const newChore = new Chore({ chore });
  await newChore.save();
  res.status(201).json(newChore);
});

// DELETE a chore by ID
app.delete('/chores/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Chore.findByIdAndDelete(id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete chore' });
  }
});


// Route for getting all chores
app.get('/chores', async (req, res) => {
  const chores = await Chore.find();
  res.status(200).json(chores);
});

// Basic route to check if backend is working
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
