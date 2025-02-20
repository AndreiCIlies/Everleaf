import "../styles/Note.css";
import { BsFillTrashFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";

const Note = ({ title, note, date, color }) => {
    const formattedDate = date.split("-").reverse().join("/");

    return (
        <div className="note" style={{ backgroundColor: color }}>
            <h2>{title}</h2>
            <p>{note}</p>
            <p><strong>Created on:</strong> {formattedDate}</p>
            <button className="update-btn">
                <BsPencilSquare />
            </button>
            <button className="delete-btn">
                <BsFillTrashFill />
            </button>
        </div>
    )
}

export default Note;