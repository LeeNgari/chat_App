import React from "react";
import Main from './Body.jsx'
import './App.css'

export default function App(){

const Search = () => {

    const [texts , setText] = React.useState(" ")

    return(
        <div className='search'>
            <h1>MOVIEDREAMZ</h1>
			<input
        value={texts}
				className='search-control'
				placeholder='Type to search...'
                onChange={(e)=>{setText(e.target.value)}}
			></input>
		</div>
    )
    }
const lee  = Search()


return(
  <>
    {lee}
    <Main 
    />
  </>
)
}