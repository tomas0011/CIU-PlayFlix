import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import { Card } from '../Card/Card';

import './Gallery.css';

export const Gallery = ({ topic, founds, addToMyList }) => {
  return (
    <div className='Gallery'>
      <h2 className="GalleryTitle">{topic} {founds.search}</h2>
      <Container>
        <Row xs={2} md={3} lg={4} xl={5}>
          {
            !founds.results?.length
              ? <h4>Vacio</h4>
              : founds.results.map((image) => (
                <Col>
                  <Card
                    data={image}
                    addToMyList={addToMyList}
                    deleteFromMyList={() => {}}
                  />
                </Col>
              ))
          }
        </Row>
      </Container>
    </div>
  );
}
