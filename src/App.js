import './App.css';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App" >
      <h1 className='text-3xl mt-5'>Todo App (Redux Toolkit)</h1>
      <AddTodo/>
      <Todo/>
    </div>
  );
}

export default App;
