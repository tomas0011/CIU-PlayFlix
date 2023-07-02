import './ListItem.css';

export const ListItem = ({ media, showElementDetail }) => {
  return (
    <tr key={media.id} className="tableItem" onClick={() => showElementDetail(media)}>
      <td>
        <img className='ListItemImage' src={media.image} alt={media.title}/>
      </td>
      <td>
        <h3 className='tableTitle'>{media.title}</h3>
        <label className='tableFlag'>{media.type}</label>
        <label className='tableFlag'>{media.status}</label>
      </td>
      <td className='hide-on-md'>
        <p className='ListItemDescription'>{media.description}</p>
      </td>
      <td className='hide-on-md'>
        {media.stars} stars
      </td>
    </tr>
  );
}
