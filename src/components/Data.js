import ListItem from "./ListItem"

const Data = ({items}) => {
  
    return (       
        
        <ul>
            {items.map((item) => (
                <ListItem key = {item.id} item = {item} />
            ))}
        </ul>
    )
}

export default Data