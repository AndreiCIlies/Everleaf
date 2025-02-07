import './App.css';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  return (
    <div className="app">
      <div className="header">
      <Header/>
      </div>
      <div className="cards">
        <Card title="Card 1" description="This is the first card" date="10/01/2025"/>
        <Card title="Card 2" description="This is the second card" date="10/01/2025"/>
        <Card title="Card 3" description="This is the third card" date="10/01/2025"/>
      </div>
    </div>
  );
}

export default App;
