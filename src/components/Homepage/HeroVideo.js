/* Library import */
import { useState, useEffect } from 'react';

/* Dependency import */
import './css/HeroVideo.css';

/* Component import */

/* Asset imports */
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';

function HeroVideo() {

    return (
        <header
            className="hero"
        >
            <video
                src='./assets/videos/bigbuck.mp4'
                autoPlay
                muted
                loop
            />
            <div className='hero-content'>
                <div className='hero-title'>
                    <img src="../assets/img/big-buck-bunny.png" alt="" />
                </div>
                <div className='hero-button-container'>
                    <div className='hero-button primary-button'>
                        <PlayCircleOutlineOutlinedIcon/>
                        <span>Play</span>
                    </div>
                    <div className="hero-button secondary-button">
                        <InfoOutlinedIcon/>
                        <span>More Info</span>
                    </div>
                </div>
            </div>
            <div className='upper-shadow'>
            </div>
        </header>
    );
}

export default HeroVideo;