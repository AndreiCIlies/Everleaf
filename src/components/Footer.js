import "../styles/Footer.css";
import { BsPlus } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <div className="footer">
            <button
                className="create-btn"
                onClick={() => navigate("/create")}
            >
                <BsPlus />
            </button>
        </div>
    )
}

export default Footer;