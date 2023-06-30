import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Fragment, useState, useTransition } from 'react';
import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';
import { Games } from './Components/Games/Games';

function App() {

  const [isLoading, doTransition] = useTransition();
  const [pageName, setPageName] = useState('games');

  const changePage = (page) => {
    doTransition(() => {
      setPageName(page)
    })
  };

  return (
    <div className="App">
      <Navbar changePage={changePage}/>
      { isLoading && <p>loading</p> }
      { pageName === 'games' && <Games/> }
      { pageName === 'movies' && <h1>Movies</h1> }
      { pageName === 'my-list' && <h1>My list</h1> }
      <Footer/>
    </div>
  );
}

export default App;
