import React, { useEffect } from 'react'
import * as d3 from 'd3'

const E02d3selectAll = () => {

    useEffect(() => {
        const selectedDiv = d3.selectAll(".my-class-new")
        // console.log({selectedDiv})

        selectedDiv.style("background-color", "aqua")

        const selectAnchor = d3.selectAll('a')

        // console.log({selectAnchor})

        selectAnchor.style("color", "blue")


    }, [])

    return (
        <div>
            <h3>E02 d3.selectAll</h3>
            <p>first p</p>
            <a>absbasa</a> <br/>
            <a>iiji</a>
            <p>asasas</p>
            <a>hashjbahj</a>
            <div className='my-class-new'>div 1</div>
            <div className='my-class-new'>div 2</div>
            <div className='my-class-new'>div 3</div>
        </div>
    )
}

export default E02d3selectAll