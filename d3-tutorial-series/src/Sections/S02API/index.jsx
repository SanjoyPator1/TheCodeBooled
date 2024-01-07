import React from 'react'
import E01d3select from './E01d3select'
import E02d3selectAll from './E02d3selectAll'
import E03selectionSelect from './E03selectionSelect'
import E04selectionSelectAll from './E04selectionSelectAll'
import E05selectionWithUseRef from './E05selectionWithUseRef'

const S02API = () => {
    return (
        <div>
            <h2>Section 02 API</h2>
            <E01d3select />
            <br />
            <E02d3selectAll/>
            <br/>
            <E03selectionSelect/>
            <br/>
            <E04selectionSelectAll/>
            <br/>
            <E05selectionWithUseRef/>
        </div>
    )
}

export default S02API


