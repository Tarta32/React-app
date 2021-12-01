import React, { useContext} from "react";
import { ThemeContext,themes } from "../context/context";

function ThemedButton(props) {
    const {theme, swap} = useContext(ThemeContext);
    let t=themes.dark
if(theme){
    t=themes.light
}

    return(
        <button style={{background: t.background, color: t.foreground}} onClick={swap}>Bouton style</button>
    )
}

export default ThemedButton