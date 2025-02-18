import "../styles/Card.css";
import { BsFillTrashFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";

const Card = ({ title, description, date }) => {
    const formattedDate = date.split("-").reverse().join("/");

    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{description}</p>
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

export default Card;