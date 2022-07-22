import logo from './logo.svg';
import './App.css';

function App() {
  ///const [count, setcount] = useState(0)
  // let i=0
  // i = i+1
//   let condicion = true
//  console.log(`El resultado es ${ condicion ? 'verdaddero': 'falso'}`)

//  const array =[1,2,3,4]
//  const once =11

//  const newarray =[...array,once]

let campoid = '_id'
const objeto={
  nombre: 'edgar',
  ['persona'+campoid]: '5656'
}

const {nombre: firstName}= objeto
console.log(firstName)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
