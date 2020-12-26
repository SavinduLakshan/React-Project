import React from 'react'
import Spinner from './Spinner.gif'

export default function spinner() {
    return (
        <div>
            <img
            src={spinner}
            style={{ width: '200px', margin: 'auto', display: 'block' }}
            alt="Loading..."
            />
        </div>
    )
}

