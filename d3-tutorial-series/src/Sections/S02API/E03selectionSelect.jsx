import React, { useEffect } from 'react'
import * as d3 from 'd3'

const E03selectionSelect = () => {

    useEffect(() => {

        const firstDiv = d3.select('.class-1')
        // console.log({
        //     firstDiv
        // })

        // firstDiv.style("background-color","pink")

        const firstDivFirstP = firstDiv.select('p')
        // console.log({firstDivFirstP})

        // firstDivFirstP.style("color", "red")

        const allDivs = d3.selectAll('.class-1')
        // console.log({allDivs})

        const allDivsFirstP = allDivs.select('p')
        // console.log({allDivsFirstP})

        allDivsFirstP.style("color",'green')

    }, [])

    return (
        <div>
            <h3>E03 selection.Select</h3>
            <div className='class-1'>
                first div
                <a>link 1</a><br />
                <p>first p</p>
                <p>second p</p>
                <a> link 2</a>
            </div>
            <div className='class-1'>
                second div
                <a>link 1</a><br />
                <p>first p</p>
                <p>second p</p>
                <a> link 2</a>
            </div>

        </div>
    )
}

export default E03selectionSelect