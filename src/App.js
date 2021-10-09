import './App.css';
import Greeting from './component/Greeting';

function App() {
  return (
    <div className="App">
      <Greeting name="Superman" heroName="Clark"></Greeting>
      <Greeting name="Batmen" heroName="Bruce"></Greeting>
      <Greeting name="Wonderwomen" heroName="Diana">
        <p>Children props</p>
      </Greeting>
    </div>
  );
}

export default App;
