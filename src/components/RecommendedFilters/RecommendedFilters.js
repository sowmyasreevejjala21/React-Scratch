import closeIcon from '../../assets/images/close.svg';
import DropdownFilter from './DropdownFilter';
import filterData from '../../recommendedFilters.json'
import './RecommendedFilters.scss'

const RecommendedFilters = () => {
    return (
        <div className="recommended-products">
            <h1>Recommended Products</h1>

            <div className="recommended-products_filters">
                <div className="recommended-products_filters__select">
                    <div className='recommended-products_filters__select_wrap'>
                        <label>Selected Filters:</label>
                        <div className='recommended-products_filters__select_filter'>
                            <span>Continental</span> <img src={closeIcon} alt="closeIcon" />
                        </div>
                    </div>
                </div>
                <div className="recommended-products_filters__dropdown">
                    <div className='recommended-products_filters__dropdown_wrap'>
                        <label>Sort by:</label>
                        <div className='recommended-products_filters__dropdown_filter'>
                            <DropdownFilter data={filterData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RecommendedFilters;