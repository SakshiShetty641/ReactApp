import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Sakshi">
        <p> This is the children props</p>
      </Greet>
      <Greet name="Tina">
        <button>Action</button>
      </Greet>
      <Welcome name="Sakshi">
        <button>Welcome</button>
      </Welcome> */}
      <Message name= "Sakshi">
        <button>Subscribe</button>
      </Message>
    </div>
  );
}

export default App;
