import React from "react";

export default function search(){

    const [text , setText] = React.useState("")

    return(
        <div className='search'>
            <h1>MOVIEDREAMZ</h1>
			<input
                value={text}
				className='search-control'
				placeholder='Type to search...'
                onChange={(e)=>{setText(e.target.value)}}
			></input>
		</div>
    )
}