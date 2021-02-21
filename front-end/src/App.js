import InputForm from './components/InputForm'; 
import './App.css';
import firebase from "firebase";

const App = () => {
  const firebaseApp = firebase.apps[0];
  return (
    <div className="Wrapper">
      
      <h1 className="WelcomeBanner">Welcome to Easy Learn!</h1>
      <InputForm/>
      
    </div>
  );
}

export default App;
