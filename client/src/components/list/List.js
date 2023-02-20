import './List.css'

export default function List({ items, handleSelect }) {
    const listItems = items.map(({name, id}) => <li className="item" key={id} onClick={() => handleSelect(id)}><p>{name}</p></li>)
    return (
        <div className='list'>
            <ul> {listItems} </ul>
        </div>
    )
}