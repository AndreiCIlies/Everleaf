import '../styles/Note.css';
import { BsFillTrashFill, BsPencilSquare } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Note = ({ title, note, date, color, index }) => {
    const navigate = useNavigate();
    const formattedDate = date.split("-").reverse().join("/");

    return (
        <div className="note" style={{ backgroundColor: color }}>
            <h2>{title}</h2>
            <p>{note}</p>
            <p><strong>Created on:</strong> {formattedDate}</p>
            <button className="update-btn" onClick={() => navigate(`/update/${index}`)}>
                <BsPencilSquare />
            </button>
            <button className="delete-btn" onClick={() => navigate(`/delete/${index}`)}>
                <BsFillTrashFill />
            </button>
        </div>
    )
}

export default Note;