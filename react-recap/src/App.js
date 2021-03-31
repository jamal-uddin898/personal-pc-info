import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [nayoks,setNayoks] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setNayoks(data))
  },[])
  // const nayoks = [{name: 'Jasin', age: 44}, {name: 'Faruk', age: 33}, {name: 'Deepjol', age:22},{name: 'Alomgir', age:66}]
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      {
        nayoks.map(nk => <Nayak name={nk.name} key={nk.id} age={nk.age}></Nayak>)
      }
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

function MovieCounter(){
  const [count, setCount] = useState (0);

  const handleClick = () => setCount(count + 1);
  return (
    <div>
      <button onClick={handleClick}>Add Movie</button>
      <h3>Number of movies:  {count} </h3>
      <MovieDisplay movies={count + 2}></MovieDisplay>
    </div>
  )
}
function MovieDisplay(props){
  return <h4>Movies I have acted: {props.movies}</h4>
}
function Nayak (props){
  return (
    <div>
      <h1>Ami Nayak: {props.name}</h1>
      <h3>Hello world year : {props.age}</h3>
    </div>
  )
}

export default App;
