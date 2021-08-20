import React from 'react'
import Songdetails from './Songdetails'
import Songlist from './Songlist'

const App = () => {
    return (
        <div className='ui container grid'>
            <div className='ui row'>
                <div className='column eight wide'>
                <Songlist />
                </div>
                <div className='column eight wide'>
                <Songdetails />
                </div>
            </div>
           
        </div>
    )
}

export default App
