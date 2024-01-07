import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

const E05selectionWithUseRef = () => {

    const myElementRef = useRef(null)

    useEffect(()=>{
        // const myElement = myElementRef.current
        // if(myElement){
        //     console.log({myElement})
        //     myElement.style.color = "blue"
        // }

        const selectedElement = d3.select(myElementRef.current)

        selectedElement.style("color", "green")

    })

    return (
        <div>
            <h3>E05 selection with useRef</h3>
            <div ref={myElementRef}>I am a useRef example</div>
        </div>
    )
}

export default E05selectionWithUseRef