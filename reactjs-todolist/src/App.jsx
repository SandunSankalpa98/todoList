
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

const App = () => {

  let todos = [
    'Go to gym',
    'Eat more fruits and veges',
    'Pick up the kids from school',
  ];
  return (
    <>
      
      
      <TodoInput/>
      <TodoList todos={todos}/>
    </>
  )
}

export default App
