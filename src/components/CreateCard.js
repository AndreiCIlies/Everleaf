import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CreateCard.css';

const CreateCard = ({ setCards }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [color, setColor] = useState('#ffffff');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title && description) {
            const currentDate = new Date().toISOString().split("T")[0];
            setCards((prevCards) => [...prevCards, { title, description, date: currentDate, color }]);
            navigate('/');
        }
    }

    return (
        <div className="create-card">
            <form onSubmit={handleSubmit}>
                <p>Create new card</p>
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
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
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

export default CreateCard;