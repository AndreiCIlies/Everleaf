import '../styles/CreateNote.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateNote = ({ setNotes }) => {
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const [color, setColor] = useState('#ffffff');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title && note) {
            const currentDate = new Date().toISOString().split("T")[0];
            setNotes((prevNotes) => [...prevNotes, { title, note, date: currentDate, color }]);
            navigate('/');
        }
    }

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