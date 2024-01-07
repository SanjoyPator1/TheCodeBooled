import React, { useEffect } from 'react'
import * as d3 from 'd3'

const E01d3select = () => {

    useEffect(()=>{

        const selectedElement = d3.select('.my-class')
        // console.log({selectedElement})

        selectedElement.style("background-color","blue")

        const selectedElementP = d3.select('p')
        // console.log({selectedElementP})

        selectedElementP.style("color","red")


    })

    return (
        <div>
            <h3>E01 d3.select</h3>
            <p>first p</p>
            <p>second p</p>
            <div className='my-class'>element 1</div>
            <div className='my-class'>element 2</div>
            <div className='my-class'>element 2</div>
        </div>
    )
}

export default E01d3select