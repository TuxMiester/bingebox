/* Library import */
import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

/* Dependency import */
import './css/Navbar.css';

/* Component import */

/* Asset imports */
import SearchIcon from '@mui/icons-material/Search';
import {Avatar} from "@mui/material";

function Navbar(){  
    function stringAvatar(name) {
        return {
            
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }

    const location = useLocation();
    const [connected,setConnected] = useState(true)
    const [searchbar, setSearchbar] = useState(false)

    return(
        <div className='Navbar' id='navbar'>
            <div className='Logo-navbar-container'>
                <Link to='/'>
                    <img 
                        className='Logo-navbar'
                        src='./assets/posters/bingeboxlogo.svg'
                        alt="BINGEBOX" 
                    />
                </Link>
            </div>
            <div className='Menu-container-navbar'>
                <Link to='/'>
                    <div className={`Menu-item-navbar
                    ${
                        (location.pathname==='/')?
                            'Menu-item-active-navbar':
                            ''
                    }`}>
                        Home
                    </div>
                </Link>
                <Link to='/tvshows'>
                    <div className={`Menu-item-navbar
                    ${
                        (location.pathname==='/tvshows')?
                            'Menu-item-active-navbar':
                            ''
                    }`}>
                        Tv shows
                    </div>
                </Link>
                <Link to='/movies'>
                    <div className={`Menu-item-navbar
                    ${
                        (location.pathname==='/movies')?
                            'Menu-item-active-navbar':
                            ''
                    }`}>
                        Movies
                    </div>
                </Link>
                <Link to='/pricing'>
                    <div className={`Menu-item-navbar
                    ${
                        (location.pathname==='/pricing')?
                            'Menu-item-active-navbar':
                            ''
                    }`}>
                        Pricing
                    </div>
                </Link>
            </div>
            <div className='Right-container-navbar'>
                <div className="Search-navbar">
                    <input
                        className={
                            searchbar?
                            'Search-expanded-navbar':
                            'Search-hidden-navbar'
                        }
                        id='search' 
                        type="text" 
                        placeholder='Search shows or movies'
                    />
                    <SearchIcon
                        onClick = {() => {
                            setSearchbar(!searchbar);
                        }}
                    />
                </div>
                <div className="Avatar-container-navbar">
                    {
                        (connected)?
                        (
                            <Avatar 
                                {...stringAvatar('Taksh Preet Singh')}
                                variant="rounded"
                            />
                        ):
                        (
                            <div 
                                className='Connect-button-navbar'
                            >
                                Connect Wallet
                            </div>
                        )
                    }
                    {
                        connected && 
                        (
                            <div className='dropdown-navbar'>
                                <div className="dropdown-item">Account</div>
                                <div className="dropdown-item">Billing</div>
                                <div className="dropdown-item">Help Center</div>
                                <div className="dropdown-item">Sign out of BingeBox</div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Navbar;