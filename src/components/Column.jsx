import {useContext} from 'react'
import Card from './Card'
import { MyContext } from '../MyContext';

const Column = ({category}) => {
    const { allTasks, setallTasks,setEditForm, setShowModal } = useContext(MyContext);
    const tasks = allTasks.filter((task) => task.stage === category) 
    const handleEditClick = (id) => {
      setEditForm(id)
      setShowModal(true);
    }
  const handleDelete=(id)=>{
    const tasks = allTasks.filter((x)=>x.id !== id)
    setallTasks(tasks)
  }
  return (
    <div className='column' style={{}}>
      <h4>{category}</h4>
        {tasks.map((x,i)=>{
            return <Card key={x.id} title={x.title} stage={x.stage} description={x.description} handleEditClick={()=>handleEditClick(x.id)} handleDelete={()=>handleDelete(x.id)}/>
        })}
    </div>
  )
}

export default Column