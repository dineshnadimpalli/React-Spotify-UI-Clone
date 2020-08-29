import React from 'react'
import './body.styles.css'
import Header from '../Header'
import { useStateProviderValue } from '../../store'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from '../SongRow';

function Body({spotify}) {
    const [{discover_weekly}, dispatch] = useStateProviderValue()
    return (
        <div className='body'>
            <Header spotify={spotify}/>
            <div className='body_info'>
                <img
                    src={discover_weekly?.images[0]?.url}
                    alt=''
                />
                <div className='body_infoText'>
                    <strong>Playlist</strong>
                    <h2>Discover weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className='body_songs'>
                <div className='body_icons'>
                    <PlayCircleFilledIcon className='body_shuffle'/>
                    <FavoriteIcon fontSize='large'/>
                    <MoreHorizIcon/>
                </div>
                {/* List of songs */}
                {
                    discover_weekly?.tracks.items.filter(item=>item.track.album.id!==null).map(item=>(
                        <SongRow track={item.track} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body
