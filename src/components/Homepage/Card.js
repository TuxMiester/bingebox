/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/Card.css';

/* Component import */

/* Asset imports */
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';

function Card({
    img
}){

    return(
        <div className='Card'>
            <img src={img} alt="" />
            <div className='card-cover'>
                <PlayCircleFilledOutlinedIcon/>
                <InfoOutlinedIcon/>
            </div>
        </div>
    );
}

export default Card;