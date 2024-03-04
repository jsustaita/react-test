import React from 'react'

export default async function page() {
  const staticData = await fetch(`https://jsonplaceholder.typicode.com/posts`, { cache: 'force-cache' }).then(res => res.json());
  
  console.log('static',staticData)

  return (
    <div>
      <h1>Blog Posts</h1>

      {staticData.map((post:any)=>{
        return (
          <div key={post.id} style={{display:'flex', flexDirection:'column'}}>
          <h1 style={{fontWeight:"bold", paddingBottom:'1rem', paddingTop:'1rem'}}>{post.title}</h1>
          <p>{post.body}</p>
          </div>
        )
      })}
      
      </div>
  )
}
