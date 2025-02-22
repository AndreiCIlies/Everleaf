import '../styles/DeleteNote.css'
import { useNavigate, useParams } from 'react-router-dom';

const DeleteNote = ({ setNotes, notes }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const noteId = parseInt(id);
    const noteToDelete = notes[noteId];

    const handleDelete = () => {
        const updatedNotes = notes.filter((_, index) => index !== noteId);
        setNotes(updatedNotes);
        localStorage.setItem('notes', JSON.stringify(updatedNotes));

        navigate('/');
    };

    if (isNaN(noteId) || !noteToDelete) {
        return <p>Note not found.</p>;
    }

    return (
        <div className="delete-note">
            <h2>Are you sure you want to delete this note?</h2>
            <p><strong>Title:</strong> {noteToDelete.title}</p>
            <p><strong>Note:</strong> {noteToDelete.note}</p>
            <button onClick={handleDelete}>Yes, Delete</button>
            <button className="cancel-btn" onClick={() => navigate('/')}>Cancel</button>
        </div>
    );
};

export default DeleteNote;