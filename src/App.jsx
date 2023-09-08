import './App.css'
import Team from './Team';
import Counter from './counter';
import Users from './Users';
import Friends from './Friends';


function App() {

  function handleClick() {
    alert('Button Clicked!')
  }

  const addFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h1>React Core Concepts 2</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me 1</button>
      <p/>
      <button onClick={() => alert('second clicked!')}>Click Me 2</button>
      <p/>
      <button onClick={() => addFive(3)}>Click Me 3</button>
    </>
  )
}

export default App


