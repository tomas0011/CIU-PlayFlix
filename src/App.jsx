import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Fragment, useState, useTransition } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';
import { Series } from './Components/Series/Series';
import { Movies } from './Components/Movies/Movies';
import { MyList } from './Components/MyList/MyList';

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
      {
        isLoading 
          ? <Spinner animation="grow"/> 
          : pageName === 'movies' ? <Movies/>
          : pageName === 'series' ? <Series/>
          : pageName === 'my-list' && <MyList/>
      }
      <Footer/>
    </div>
  );
}

export default App;
