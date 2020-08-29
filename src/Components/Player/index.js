import React from 'react'
import Sidebar from '../Sidebar'
import Body from '../Body'
import './player.styles.css'
import Footer from '../Footer'
import { useStateProviderValue } from '../../store'

function Player({spotify}) {
    const [state, dispatch] = useStateProviderValue()
    console.log(state)
    return (
        <div className='player'>
            <div className='player_body'>
                {/* Sidebar */}
                <Sidebar/>
                {/* Body */}
                <Body spotify={spotify}/>
            </div>
            {/* Footer */}
            <Footer/>
        </div>
    )
}

export default Player
