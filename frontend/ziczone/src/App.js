import logo from './logo.svg';
// import './App.css';
import MainComponent from './main/components/MainComponent';
import Pickzone from './pickzone/components/Pickzone';
import LoginMainComponent from './main/components/LoginMainComponent';

function App() {
  return (
    <div>
      <Pickzone />    
      <LoginMainComponent/>
    </div>
  );
}

export default App;
