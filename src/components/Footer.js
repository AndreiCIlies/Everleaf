import "../styles/Footer.css";
import { BsPlus } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="footer">
            <button className="create-btn">
                <BsPlus />
            </button>
        </div>
    )
}

export default Footer;