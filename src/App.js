import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import CreateCard from './components/CreateCard';

function App() {
  const [cards, setCards] = useState([]);

  return (
    <Router>
      <div className="app">
        <div className="header">
          <Header/>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="cards">
                  {cards.map((card, index) => (
                    <Card
                      key={index}
                      title={card.title}
                      description={card.description}
                      date={card.date}
                      color={card.color}
                    />
                  ))}
                </div>
                <div className="footer">
                  <Footer/>
                </div>
              </>
            }
          />
          <Route
            path="/create"
            element={<CreateCard setCards={setCards} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
