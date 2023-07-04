import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState, useTransition } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';
import { Catalogue } from './Components/Catalogue/Catalogue';
import { MyList } from './Components/MyList/MyList';
import { Gallery } from './Components/Gallery/Gallery';

import {
  getMoviesSuggestions,
  getMoviesByGenreId,
  getSeriesSuggestions,
  getSeriesByGenreId,
  searchMoviesAndSeries
} from './Api/api';

function App() {
  let savedMyList = JSON.parse(localStorage.getItem('play-flix-my-list')) || [];

  const [myList, setMyList] = useState(savedMyList);
  const [isLoading, startTransition] = useTransition();
  const [pageName, setPageName] = useState('movies');
  const [founds, changeFounds] = useState([]);

  const [series, setSeries] = useState([]);
  const [movies, setMovies] = useState([]);

  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('play-flix-my-list', JSON.stringify(myList));
  }, [myList])

  const addToMyList = (data) => {
    const found = myList.find((element) => element.id === data.id);
    if (!found) {
      setMyList([...myList, {
        ...data,
        status: 'pending',
        description: '',
        stars: 0
      }]);
    }
  };

  const deleteFromMyList = (id) => {
    setMyList(myList.filter((element) => element.id !== id))
  };

  const updateFromMyList = (id, toUpdate) => {
    setMyList(myList.map((element) => {
      if (element.id === id) {
        return toUpdate;
      }
      return element;
    }));
  };

  const handlerOnSearch = () => {
    changePage('search');
    setSearch('');
  }

  const changePage = (page) => {
    startTransition(async () => {
      setPageName(page)
      if (page === 'movies') {
        setMovies([
          {title: 'TRENDS', data: await getMoviesSuggestions()},
          {title: 'THRILLER', data: await getMoviesByGenreId(53)},
          {title: 'ANIMATION', data: await getMoviesByGenreId(16)},
          {title: 'COMEDY', data: await getMoviesByGenreId(35)},
          {title: 'DRAMA', data: await getMoviesByGenreId(18)},
          {title: 'HORROR', data: await getMoviesByGenreId(27)},
        ])
      } else if (page === 'series') {
        setSeries([
          {title: 'TRENDS', data: await getSeriesSuggestions()},
          {title: 'CRIME', data: await getSeriesByGenreId(80)},
          {title: 'ANIMATION', data: await getSeriesByGenreId(16)},
          {title: 'COMEDY', data: await getSeriesByGenreId(35)},
          {title: 'DRAMA', data: await getSeriesByGenreId(18)},
          {title: 'ACTION & ADVENTURE:', data: await getSeriesByGenreId(10759)},
        ])
      } else if (page === 'search') {
        changeFounds(await searchMoviesAndSeries(search));
      }
    })
  };

  useEffect(() => {
    changePage('movies')
  }, []);

  return (
    <div className="App">
      <Navbar
        changePage={changePage}
        pageName={pageName}
        search={search}
        setSearch={setSearch}
        searchAction={handlerOnSearch}
      />
      {
        isLoading
          ? <div className="AppLoader">
              <Spinner className="Loader" animation="grow"/>
            </div>
          : pageName === 'movies' ? <Catalogue
              title="MOVIES"
              elements={movies}
              myList={myList}
              addToMyList={addToMyList}
            />
          : pageName === 'series' ? <Catalogue
              title="SERIES"
              elements={series}
              myList={myList}
              addToMyList={addToMyList}
            />
          : pageName === 'my-list' ? <MyList
              myList={myList}
              deleteFromMyList={deleteFromMyList}
              updateFromMyList={updateFromMyList}
            />
          : pageName === 'search' && <Gallery
              topic={`Results for the search:`}
              founds={founds}
              myList={myList}
              addToMyList={addToMyList}
            />
      }
      <Footer/>
    </div>
  );
}

export default App;
