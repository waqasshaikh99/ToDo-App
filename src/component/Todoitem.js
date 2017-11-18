import React from 'react';

const Todoitem = (props) => {
    
    return(
        <li>
            {props.detail.name}
            <a className="a" aria-label="Delete" onClick={() => {
                props.deleteItem(props.index)}
                } >
                <i className="fa fa-trash" ></i>
              </a>
        </li>
    )	
}

export default Todoitem;