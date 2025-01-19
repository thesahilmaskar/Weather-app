import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';
import Card from './Components/Card';
import Input from './Components/Input';
import { useWeather } from './context/Weather';

function App() {
  const weather=useWeather()
  return (
    <div className="App">
      <Input></Input>
      <Button value="Search" onClick={weather.fetchData}></Button>
      <Card></Card>
    </div>
  );
}

export default App;
