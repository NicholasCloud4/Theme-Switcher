import React from "react"
import { ThemeContext } from "./App"



export default function Button() {

    const value = React.useContext(ThemeContext)
    return (
        <button className={`${value.theme}-theme`} onClick={value.toggleTheme}>
            Switch Theme
        </button>
    )
}