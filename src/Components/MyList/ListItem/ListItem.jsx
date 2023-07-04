import './ListItem.css';

export const ListItem = ({ media, showElementDetail }) => {
  return (
    <tr key={media.id} onClick={() => showElementDetail(media)}>
      <td className='ListItemImageBox'>
        <img className='ListItemImage' src={media.image} alt={media.title}/>
      </td>
      <td className='ListItemInfo'>
        <h3 className='ListItemTitle'>{media.title}</h3>
        <div className='ListItemFlags'>
          <label className={`ListItemFlag ListItem-${media.type}`}>{media.type}</label>
          <label className={`ListItemFlag ListItem-${media.status}`}>{media.status}</label>
        </div>
      </td>
      <td className='hide-on-md'>
        <p className='ListItemDescription'>{
          media.description
            ? media.description
            : 'Not have notes now'
        }</p>
      </td>
      <td className='hide-on-md'>
        {media.stars} stars
      </td>
    </tr>
  );
}
