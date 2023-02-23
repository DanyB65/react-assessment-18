import React,{useState, useEffect} from 'react';

const Comments = () => {
    // Insturction:
    // Use endpoint: https://jsonplaceholder.typicode.com/comments to get a list of comments. 
    // display the comment body on the screen
    // add event listeners to each comment body that when clicked will simply console.log the comment id.

    // you will need to use the useEffect hook. Do this in async / await syntax.
    
    const [data,setData] = useState(null)
    

    async function fetchData(){
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments`)
        const data = await response.json()
        setData(data)
        // console.log(data.body)
    }

    useEffect(()=>{
        fetchData()
    },[])


    return(
        <div>
       {data.map((current)=>(
        <li key={current.id} onClick={()=> console.log(current.id)}
        >{current.body}</li>
       ))}
       </div>
    )
}

export default Comments