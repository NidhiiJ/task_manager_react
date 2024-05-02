import {useContext} from 'react'
import Card from './Card'
import { MyContext } from '../MyContext';

const Column = ({category}) => {
    const { allTasks, setallTasks } = useContext(MyContext);
    const tasks = allTasks.filter((x)=>{ return x.stage == category})
  return (
    <div className='column' style={{}}>
      <h4>{category}</h4>
        {tasks.map((x,i)=>{
            return <Card key={i} title={x.title} stage={x.stage} description={x.description}/>
        })}
    </div>
  )
}

export default Column