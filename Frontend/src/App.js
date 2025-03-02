import './App.css';
import Header from './components/Header';
import Note from './components/Note';
import CreateNote from './components/CreateNote';
import UpdateNote from './components/UpdateNote';
import DeleteNote from './components/DeleteNote';
import Footer from './components/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import axios from 'axios';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/notes')
      .then(res => setNotes(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Router>
      <div className="app">
        <div className="header">
          <Header/>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="notes">
                  {notes.map((note, index) => (
                    <Note
                      key={note._id}
                      id={note._id}
                      title={note.title}
                      note={note.note}
                      date={note.date}
                      color={note.color}
                      index={index}
                    />
                  ))}
                </div>
                <div className="footer">
                  <Footer/>
                </div>
              </>
            }
          />
          <Route
            path="/create"
            element={<CreateNote setNotes={setNotes} />}
          />
          <Route
            path="/update/:id"
            element={<UpdateNote notes={notes} setNotes={setNotes}/>}
          />
          <Route
            path="/delete/:id"
            element={<DeleteNote notes={notes} setNotes={setNotes}/>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
