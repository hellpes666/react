import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Nav_bar from './components/Nav_bar/Nav_bar';

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
