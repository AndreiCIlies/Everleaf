const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/notesdb', { useNewUrlParser: true, useUnifiedTopology: true });

const NoteSchema = new mongoose.Schema({
    title: String,
    note: String,
    date: String,
    color: String
});

const Note = mongoose.model('Note', NoteSchema);

app.post('/notes', async (req, res) => {
    const newNote = new Note(req.body);
    await newNote.save();
    res.json(newNote);
});

app.get('/notes', async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
});

app.put('/notes/:id', async (req, res) => {
    await Note.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Note updated" });
});

app.delete('/notes/:id', async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Note deleted" });
});

app.listen(5000, () => console.log('Server running on port 5000'));