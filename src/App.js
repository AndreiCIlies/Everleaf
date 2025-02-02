import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="cards">
      <Card title="Card 1" description="This is the first card" />
      <Card title="Card 2" description="This is the second card" />
      <Card title="Card 3" description="This is the third card" />
    </div>
  );
}

export default App;
