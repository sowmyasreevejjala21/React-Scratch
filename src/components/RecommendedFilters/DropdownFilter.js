import { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './RecommendedFilters.scss';

const DropdownFilter = ({ data }) => {
    const [isOpen, setOpen] = useState(false);
    const [items, setItem] = useState(data.RecommendedFilters);
    const [selectedItem, setSelectedItem] = useState(null);

    const toggleDropdown = () => setOpen(!isOpen);

    const handleItemClick = (id) => {
        selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);
    }
    return (
        <>
            <div className={`dropdown-filter_header ${isOpen && "open"}`} onClick={toggleDropdown}>
                {selectedItem ? items.find(item => item.id === selectedItem).label : "Popularity"}
                <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
            </div>
            <div className={`dropdown-filter_body ${isOpen && 'open'}`}>
                {items.map(item => (
                    <div className="dropdown-filter_item" onClick={e => handleItemClick(e.target.id)} id={item.id}>
                        <span className={`dropdown-filter_item-space ${item.id === selectedItem && 'selected'}`}></span>
                        {item.label}
                    </div>
                ))}
            </div>
        </>
    )
}
export default DropdownFilter