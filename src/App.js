import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="cards">
      <Card title="Card 1" description="This is the first card" date="10/01/2025"/>
      <Card title="Card 2" description="This is the second card" date="10/01/2025"/>
      <Card title="Card 3" description="This is the third card" date="10/01/2025"/>
    </div>
  );
}

export default App;
