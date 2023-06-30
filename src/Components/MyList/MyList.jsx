import { Table } from 'react-bootstrap';

import './MyList.css';

export const MyList = ({ myList, deleteFromMyList, updateFromMyList }) => {
  // TODO: mejora mi lista
  // TODO: Crear modal para edicion de estrellas y notas

  return (
    <Table striped bordered hover>
      <tbody>
        {
          !myList?.length
            ? <h4>No hay nada para mostrar</h4>
            : myList.map((media) => (
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
