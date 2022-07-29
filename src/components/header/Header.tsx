import React from 'react'
import {useTheme} from "../../common/theme/useTheme";
import style from './Header.module.css'


function Header() {
    const {themeColor, setThemeColor} = useTheme()

    const onClickHandlerLight = () => {
        setThemeColor('light')
    }

    const onClickHandlerDark = () => {
        setThemeColor('dark')
    }

    return (
        <div className={style.headerContainer}>
                <h1>Movie lists</h1>

                <div className={style.headerButton}>
                    <button onClick={onClickHandlerLight}>Light</button>
                    <button onClick={onClickHandlerDark}>Dark</button>
                </div>


        </div>
    );
}

export default Header;
