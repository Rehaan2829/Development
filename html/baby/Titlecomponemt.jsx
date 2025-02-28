import React, {usestate,useEffect} from 'react';

const Titleupdatercomponent = () =>{
    const[title,settitle ] =usestate('Default Title');

    useEffect(() =>{
        document.title= title;
},[title])

retuen (
    <div>
        <h1>Title updater component</h1>
        <input type="text" value={title}
        onchange={(e) =>settitle(e.target.value)}
        placeholder="Enter new title"
        
        
    )


}