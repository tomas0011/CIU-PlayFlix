import { Table } from 'react-bootstrap';

import './MyList.css';

export const MyList = () => {
  // TODO: mejora mi lista
  // TODO: Crear modal para edicion de estrellas y notas
  const medias = [{
    image: 'https://picsum.photos/300/200',
    title: 'La historia sin fin',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores temporibus natus, facere eligendi saepe animi ex quidem labore expedita distinctio esse recusandae illum nostrum itaque explicabo, eos enim consequatur quasi?',
    type: 'Movie',
    status: 'Pending',
    stars: 5
  }, {
    image: 'https://picsum.photos/300/200',
    title: 'La historia sin fin',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores temporibus natus, facere eligendi saepe animi ex quidem labore expedita distinctio esse recusandae illum nostrum itaque explicabo, eos enim consequatur quasi?',
    type: 'Game',
    status: 'On Course',
    stars: 3
  }, {
    image: 'https://picsum.photos/300/200',
    title: 'La historia sin fin',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores temporibus natus, facere eligendi saepe animi ex quidem labore expedita distinctio esse recusandae illum nostrum itaque explicabo, eos enim consequatur quasi?',
    type: 'Game',
    status: 'On Course',
    stars: 3
  }, {
    image: 'https://picsum.photos/300/200',
    title: 'La historia sin fin',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores temporibus natus, facere eligendi saepe animi ex quidem labore expedita distinctio esse recusandae illum nostrum itaque explicabo, eos enim consequatur quasi?',
    type: 'Game',
    status: 'On Course',
    stars: 3
  }, {
    image: 'https://picsum.photos/300/200',
    title: 'La historia sin fin',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores temporibus natus, facere eligendi saepe animi ex quidem labore expedita distinctio esse recusandae illum nostrum itaque explicabo, eos enim consequatur quasi?',
    type: 'Game',
    status: 'On Course',
    stars: 3
  }, {
    image: 'https://picsum.photos/300/200',
    title: 'La historia sin fin',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores temporibus natus, facere eligendi saepe animi ex quidem labore expedita distinctio esse recusandae illum nostrum itaque explicabo, eos enim consequatur quasi?',
    type: 'Game',
    status: 'On Course',
    stars: 3
  }, {
    image: 'https://picsum.photos/300/200',
    title: 'La historia sin fin',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores temporibus natus, facere eligendi saepe animi ex quidem labore expedita distinctio esse recusandae illum nostrum itaque explicabo, eos enim consequatur quasi?',
    type: 'Game',
    status: 'On Course',
    stars: 3
  }, {
    image: 'https://picsum.photos/300/200',
    title: 'La historia sin fin',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores temporibus natus, facere eligendi saepe animi ex quidem labore expedita distinctio esse recusandae illum nostrum itaque explicabo, eos enim consequatur quasi?',
    type: 'Game',
    status: 'On Course',
    stars: 3
  }, {
    image: 'https://picsum.photos/300/200',
    title: 'La historia sin fin',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores temporibus natus, facere eligendi saepe animi ex quidem labore expedita distinctio esse recusandae illum nostrum itaque explicabo, eos enim consequatur quasi?',
    type: 'Game',
    status: 'On Course',
    stars: 3
  }, {
    image: 'https://picsum.photos/300/200',
    title: 'La historia sin fin',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores temporibus natus, facere eligendi saepe animi ex quidem labore expedita distinctio esse recusandae illum nostrum itaque explicabo, eos enim consequatur quasi?',
    type: 'Game',
    status: 'On Course',
    stars: 3
  }]

  return (
    <Table striped bordered hover>
      <tbody>
        {
          !medias?.length
            ? <h4>No hay nada para mostrar</h4>
            : medias.map((media) => (
              <tr className="tableItem">
                <td>
                  <img className='tableImage' src={media.image} alt={media.title}/>
                </td>
                <td>
                  <h3 className='tableTitle'>{media.title}</h3>
                  <lavel className='tableFlag'>{media.type}</lavel>
                  <lavel className='tableFlag'>{media.status}</lavel>
                </td>
                <td>
                  <p className='tableDescription'>{media.description}</p>
                </td>
                <td>{media.stars} stars</td>
              </tr>
            ))
        }
      </tbody>
    </Table>
  );
}
