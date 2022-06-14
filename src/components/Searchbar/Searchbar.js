import SearchBarIcon from '../../assets/images/search_icon.svg';
const Searchbar = () => {
    return (
        <div className='search-menu'>
            <input type="text" placeholder= "Search" />
            <img src= {SearchBarIcon} alt="searchIcon"/>
        </div>
    )
}
export default Searchbar;