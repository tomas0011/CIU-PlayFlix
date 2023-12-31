import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import { Card } from '../Card/Card';

import './Gallery.css';

export const Gallery = ({ topic, founds, myList, addToMyList }) => {
  return (
    <div className='Gallery'>
      <h2 className="GalleryTitle">{topic} {founds.search}</h2>
      <Container>
        <Row xs={2} md={3} lg={4} xl={5}>
          {
            !founds.results?.length
              ? <h4>Vacio</h4>
              : founds.results.map((image) => (
                <Col key={image.id}>
                  <Card
                    data={image}
                    myList={myList}
                    action={addToMyList}
                    showType={true}
                  />
                </Col>
              ))
          }
        </Row>
      </Container>
    </div>
  );
}
