import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Fragment, useEffect, useState, useTransition } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';
import { Series } from './Components/Series/Series';
import { Movies } from './Components/Movies/Movies';
import { MyList } from './Components/MyList/MyList';
import { Gallery } from './Components/Gallery/Gallery';

function App() {
  let savedMyList = JSON.parse(localStorage.getItem('play-flix-my-list')) || [];

  const [myList, setMyList] = useState(savedMyList);
  const [isLoading, doTransition] = useTransition();
  const [pageName, setPageName] = useState('movies');
  const [founds, changeFounds] = useState([]);

  const [moviesByCategory, setMoviesByCategory] = useState([]);
  const [seriesByCategory, setSeriesByCategory] = useState([]);

  useEffect(() => {
    localStorage.setItem('play-flix-my-list', JSON.stringify(myList));
  }, [myList])

  const addToMyList = (data) => {
    setMyList([...myList, {
      ...data,
      type: 'Peli',
      status: 'Pending',
      description: '',
      stars: 0
    }])
  };

  const deleteFromMyList = (id) => {};

  const updateFromMyList = (id, toUpdate) => {};

  const changePage = (page) => {
    doTransition(() => {
      setPageName(page)
    })
  };

  return (
    <div className="App">
      <Navbar changePage={changePage} changeFounds={changeFounds}/>
      {
        isLoading 
          ? <Spinner animation="grow"/> 
          : pageName === 'movies' ? <Movies 
              moviesByCategory={moviesByCategory}
              setMoviesByCategory={setMoviesByCategory} 
              addToMyList={addToMyList} 
              deleteFromMyList={deleteFromMyList}
            />
          : pageName === 'series' ? <Series
              seriesByCategory={seriesByCategory}
              setSeriesByCategory={setSeriesByCategory}
              addToMyList={addToMyList}
              deleteFromMyList={deleteFromMyList}
            />
          : pageName === 'my-list' ? <MyList myList={myList} deleteFromMyList={deleteFromMyList} updateFromMyList={updateFromMyList}/>
          : pageName === 'search' && <Gallery topic={'Resultados de la Busqueda:'} images={founds} addToMyList={addToMyList}/>
      }
      <Footer/>
    </div>
  );
}

export default App;
