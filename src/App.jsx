import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState, useTransition } from 'react';
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
  const [isLoading, startTransition] = useTransition();
  const [pageName, setPageName] = useState('movies');
  const [founds, changeFounds] = useState([]);

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

  const changePage = (page) => {
    startTransition(() => {
      setPageName(page)
    })
  };

  return (
    <div className="App">
      <Navbar pageName={pageName} changePage={changePage} changeFounds={changeFounds}/>
      {
        isLoading
          ? <div className="AppLoader">
              <Spinner className="Loader" animation="grow"/>
            </div>
          : pageName === 'movies' ? <Movies
              myList={myList}
              addToMyList={addToMyList} 
              deleteFromMyList={deleteFromMyList}
            />
          : pageName === 'series' ? <Series
              myList={myList}
              addToMyList={addToMyList}
              deleteFromMyList={deleteFromMyList}
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
