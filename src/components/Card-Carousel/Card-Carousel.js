import cardFilters from '../../cardFilter.json';
import Card from '../Card/Card';
import ListItems from '../ListItems/ListItems';
import LoadResults from '../LoadResults/LoadResults';
import '../Card/Card.scss'

const Carousel = () => {
    return (
        <div className='card-body'>
            <div className='card'>
                <Card cardData={cardFilters.premiumBestSeller} />
                <Card cardData={cardFilters.economyBestSeller} />
            </div>

            <div className='listItems'>
                <ListItems listData={cardFilters.list} />
            </div>
            <div>
                <LoadResults />
            </div>
        </div>
    )
}

export default Carousel;