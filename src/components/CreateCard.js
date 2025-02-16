import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateCard = ({ setCards }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title && description && date) {
            setCards((prevCards) => [...prevCards, { title, description, date }]);
            navigate('/');
        }
    }

    return (
        <div className="create-card">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
                <button type="submit">Create</button>
            </form>
        </div>
    )
};

export default CreateCard;