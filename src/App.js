import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Note from './components/Note';
import CreateNote from './components/CreateNote';
import UpdateNote from './components/UpdateNote';
import Footer from './components/Footer';

function App() {
  const [notes, setNotes] = useState([]);

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
                      key={index}
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
