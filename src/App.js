import './App.css';
import Profile from './components/Content';
import Header from './components/Header';
import Nav_bar from './components/Nav_bar';


function App() {
  return (

    <div className="App">
      <div className='wrapper'>
        <Header />
        
        <Nav_bar />
        
        <Profile />

      </div>    
    </div>

  );
}




export default App;
