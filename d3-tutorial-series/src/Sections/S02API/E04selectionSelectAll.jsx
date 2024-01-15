import React, { useEffect } from 'react'
import * as d3 from 'd3'

const E04selectionSelectAll = () => {

    useEffect(() => {
        const allDivs2 = d3.selectAll('.class-2')
        // console.log({allDivs2})

        allDivs2.style("border", "2px solid pink")

        const allDivs2AllP = allDivs2.selectAll('p')
        // console.log({allDivs2AllP})

        allDivs2AllP.style("color", "blue")

    }, [])

    return (
        <div>
            <h3>E04 selection.SelectAll</h3>
            <div className='class-2'>
                first div<br />
                <a>link 1</a><br />
                <p>first p</p>
                <p>second p</p>
                <a> link 2</a>
            </div>
            <div className='class-2'>
                second div<br />
                <a>link 1</a><br />
                <p>first p</p>
                <p>second p</p>
                <a> link 2</a>
            </div>
        </div>
    )
}

export default E04selectionSelectAll