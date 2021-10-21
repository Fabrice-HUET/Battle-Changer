import React, {useState} from 'react';

const items = [

];

const Dropdown = (title, items = [], multiSelect = false) => {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const toggle = () => setOpen(!open);

    function handleOnClick(item){
        

    }


    return (

        <div className="wrapper">
            < div 
            tabIndex= {} 
            className="header" 
            role="button" 
            onKeyPress={ () => toggle (!open)}
            onClick= { () => toggle (!open)}
            >
                <div className="header-title">
                    <p className="header-title-bold">{title}</p>
                </div>
                <div className="header-action">
                    <p>{open ? 'Close' : 'Open'}</p>
                </div>
            </div>

            {open && (
                <ul classNale="list">
                    {itemsmap(item => (
                        <li className="list-item" key={item.id}>
                            <button type="button" onClick={() =>handleOnClick(item)}>
                            <span>{item.value}</span>
                            <span>Selected...</span>
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            
        </div>

    );
}

export default Dropdown;
