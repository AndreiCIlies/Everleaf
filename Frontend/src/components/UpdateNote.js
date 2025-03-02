import '../styles/UpdateNote.css';

import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import axios from 'axios';

const UpdateNote = ({ notes, setNotes }) => {
    const { id } = useParams();
    const noteToUpdate = useMemo(() => notes.find(note => note._id === id) || {}, [notes, id]);

    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const [color, setColor] = useState('#ffffff');

    useEffect(() => {
        if (noteToUpdate) {
            setTitle(noteToUpdate.title);
            setNote(noteToUpdate.note);
            setColor(noteToUpdate.color);
        }
    }, [noteToUpdate]);

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`http://localhost:5000/notes/${id}`, { title, note, color, date: noteToUpdate.date });
            setNotes(prev => prev.map(n => (n._id === id ? { ...n, title, note, color } : n)));
            navigate('/');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="update-note">
            <form onSubmit={handleUpdate}>
                <p>Update Note</p>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <br/>
                <input
                    type="text"
                    placeholder="Note"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    required
                />
                <br/>
                <div className="color-picker">
                    <label>Color:</label>
                    <input
                        type="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    />
                </div>
                <br/>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateNote;