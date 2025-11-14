import './App.css';
import Card from './Components/Card';
import firstjuice from './assets/images/first juice.jpeg';
import thirdjuice from './assets/images/third juice.jpeg';
import Counter from './Components/Counter';
import Counterbox from './Components/Textbox';
import Statehandling from './Components/Statehandling';


function App() {
  return (
    <div>
      <Statehandling/>
      <Card title="firstjuice" description="Glow naturally with our premium treatments" src={firstjuice}/>
      <Card title="thirdjuice" description="Perfect look for every occasion" src={thirdjuice}/>
      <Counter/>
      <Counterbox/>
      </div>
  );
}

export default App;
