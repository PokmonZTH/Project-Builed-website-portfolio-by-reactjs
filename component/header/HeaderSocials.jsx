import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import { FaCodepen } from 'react-icons/fa'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://web.facebook.com/thongchai.pornchaisureesiamkits.3/" target="_blank"><BsFacebook /></a>
            <a href="https://github.com/PokmonZTH" target="_blank"><BsGithub /></a>
            <a href="https://codepen.io/PokmonZTH" target="_blank"><FaCodepen /></a>

        </div>
    )
}

export default HeaderSocials
