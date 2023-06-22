/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/Body.css';

/* Component import */
import Card from './Card';

/* Asset imports */
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

function CardRow({
    rowNum,
    Heading
}){

    const [scrollable, setScrollable] = useState(false);

    useEffect(() => {
        var element = document.getElementById(`row${rowNum}`)
        if(element.scrollWidth){
            if(element.scrollWidth > element.clientWidth){
                setScrollable(true)
            }
        }
    }, []);

    const scrollForward = () => {
        var element = document.getElementById(`row${rowNum}`)
        element.scrollBy({
            left: 200,
            behavior: 'smooth'
        })
    }

    const scrollBackward = () => {
        var element = document.getElementById(`row${rowNum}`)
        element.scrollBy({
            left: -200,
            behavior: 'smooth'
        })
    }
    
    
    return(
        <div className='row' id={`row${rowNum}`}>
            <div className="row-heading">
                <span>{Heading}</span>
            </div>
            <div className='cards-container'>
                {
                    
                    (scrollable) &&
                    (
                        <div 
                            className='left-card-scroller'
                            onClick={() => scrollBackward()}
                        >
                            <ArrowBackIosNewOutlinedIcon/>
                        </div>
                    )
                }
                
                <div className='card-dummy'>dummy</div>
                <Card
                    img={'./assets/posters/AOT.jpeg'}
                />
                <Card
                    img={'./assets/posters/Haikyuu.jpeg'}
                />
                <Card
                    img={'./assets/posters/Bitten.jpg'}
                />
                <Card
                    img={'./assets/posters/Joker.jpg'}
                />
                <Card
                    img={'./assets/posters/LalaLand.jpg'}
                />
                <Card
                    img={'./assets/posters/MyHero.jpeg'}
                />
                <Card
                    img={'./assets/posters/Matrix.jpg'}
                />
                <Card
                    img={'./assets/posters/PulpFiction.jpg'}
                />
                <Card
                    img={'./assets/posters/Steins.jpg'}
                />
                 <Card
                    img={'./assets/posters/Stanger.jpeg'}
                />
                <Card
                    img={'./assets/posters/TheOffice.jpeg'}
                />
                <Card
                    img={'./assets/posters/Tokyo.jpeg'}
                />
                {
                    (scrollable) &&
                    (
                        <div 
                            className='right-card-scroller'
                            onClick={()=>scrollForward()}
                        >
                            <ArrowForwardIosOutlinedIcon/>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default CardRow;