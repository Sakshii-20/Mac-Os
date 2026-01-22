import React from 'react'
import githubData from'../../assets/github.json' 
import MacWindows from './MacWindows'
import './github.scss'
const GitCard=({data={id:1,image:"",title:"",description:"",tags:[],repolink:"",demolink:""}})=>{
return <div className="card">
    <img src={data.image}/>
    <h1>{data.title}</h1>
    <p className='description'>{data.description}</p>
    <div className="tags">
        {
            data.tags.map(tag=><p className='tag'>{tag}</p>)
        }
    </div>
    <div className="urls">
        <a href={data.repolink}>Repository</a>
        <a href={data.demolink}>Demo Link</a>
    </div>
</div>
}
const Github = () => {
  return (
    <MacWindows>
        <div className="cards">
            {githubData.map(project=>{
             return <GitCard data={project}/>
            })}
        </div>

    </MacWindows>
  )
}

export default Github
