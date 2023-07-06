import { Fragment } from 'react';
import { Carousel } from '../Carrousel/Carrousel';
import { CardWithModal } from '../CardModal/CardWithModal';

export const MyList = ({ myList, deleteFromMyList, updateFromMyList }) => {
  const filterInProgress = (movies) => movies.filter(movie => movie.status === 'onCourse');
  const filterMovies = (movies) => movies.filter(movie => movie.type === 'movie');
  const filterSeries = (movies) => movies.filter(movie => movie.type === 'serie');

  return (
    <Fragment>
      <h2 className="Title">MY LIST</h2>
      {
        !myList?.length
          ? <h4 className="Title">Not elements on my list now</h4>
          : [
              { title: 'CONTINUE WATCHING', data: filterInProgress(myList) },
              { title: 'MOVIES', data: filterMovies(myList) },
              { title: 'SERIES', data: filterSeries(myList) }
            ].map((category) => category.data?.length 
              ? <Carousel
                  key={category.title}
                  topic={category.title}
                  data={category.data}
                  myList={[]}
                  loop={false}
                  action={updateFromMyList}
                  deleteAction={deleteFromMyList}
                  CardComponent={CardWithModal}
                />
              : <></>
          )
      }
    </Fragment>
  );
}
