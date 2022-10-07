import './App.css';
import ListTask from './components/ListTask';

function App() {
  return (
    <div className="App">

      <div className='box'>
        <div className='contenedor-tasklist'>
          <h1>Task List</h1>
          <ListTask  />
        </div>
      </div>
      
    </div>
  );
}

export default App;
