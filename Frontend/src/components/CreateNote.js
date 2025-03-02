import '../styles/CreateNote.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const CreateNote = ({ setNotes }) => {
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const [color, setColor] = useState('#ffffff');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (title && note) {
            const newNote = { title, note, date: new Date().toISOString().split("T")[0], color };
            
            try {
                const res = await axios.post('http://localhost:5000/notes', newNote);
                setNotes(prev => [...prev, res.data]);
                navigate('/');
            } catch (err) {
                console.error(err);
            }
        }
    };

    return (
        <div className="create-note">
            <form onSubmit={handleSubmit}>
                <p>Create new note</p>
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
                <button type="submit">Create</button>
            </form>
        </div>
    )
};

export default CreateNote;