import '../styles/DeleteNote.css'

import { useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';

const DeleteNote = ({ notes, setNotes }) => {
    const { id } = useParams();

    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/notes/${id}`);
            setNotes(notes.filter(note => note._id !== id));
            navigate('/');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="delete-note">
            <h2>Are you sure you want to delete this note?</h2>
            <button onClick={handleDelete}>Yes, Delete</button>
            <button className="cancel-btn" onClick={() => navigate('/')}>Cancel</button>
        </div>
    );
};

export default DeleteNote;