"use client"
import modularcss from '@/app/modularcss.module.css'
import another from '@/app/another.module.css'
import { useState } from 'react'

export default function conditionalCss() {
    const [color, setColor] = useState("red")
    const {red} = modularcss.red;
    // represents the .red not #red
   
    
    return (
        <>
            <h1 className={another.main}>conditional css</h1>
            <h2 className={color != 'red' ? modularcss.red : modularcss.green}>here comes the conditional css</h2>
            {/*get confused with the modularcss.red, the red is the class inside the module */}
            <h1 id={modularcss.red}>id thing</h1>
            {/* now id carrying thing .red indicates the #red in modularcss */}
            <button onClick={() => setColor("white")}>Click for change in color</button>
            {/* when the button changes the color to white the condition in the h2 tage checks and if is red it sets the the color to red and if it isn't then it sets the color to green</> */ }
        </>
            )
            // in summary the the operators checks the color property, the color property can also be checked with the modular way because it is easy
            // previously in react it were little tough to check the color property


}