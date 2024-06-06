import { useEffect, useState } from "react"

export default function Posts() {
    const [post, setPost] = useState([]);

    useEffect(()=> {
      fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then(res => res.json())
      .then(data => console.log(data))
    },[])
    return (
        <div>
            <h3>Posts: </h3>
        </div>
    )
}


/* 
1. cerate a state to store the data
2. cerate use effect with no dependencies
3. use fecth to load data
*/