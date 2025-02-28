import '../styles/UpdateNote.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateNote = ({ notes, setNotes }) => {
    const { id } = useParams();
    const noteIndex = parseInt(id, 10);
    const noteToUpdate = notes[noteIndex];
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const [color, setColor] = useState('#ffffff');

    useEffect(() => {
        if (noteToUpdate) {
            setTitle(noteToUpdate.title || '');
            setNote(noteToUpdate.note || '');
            setColor(noteToUpdate.color || '#ffffff');
        }
    }, [noteToUpdate]);

    const handleUpdate = (e) => {
        e.preventDefault();

        if (title && note) {
            const updatedNotes = [...notes];
            
            updatedNotes[id] = { title, note, date: noteToUpdate.date, color };
            setNotes(updatedNotes);
            localStorage.setItem('notes', JSON.stringify(updatedNotes));

            navigate('/');
        }
    };

    if (!noteToUpdate) return <p>Note not found!</p>;

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