import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import Done from './components/Done'
import InProgress from './components/InProgress'
import ToDo from './components/ToDo'

function App() {

    const [toDoes, setToDoes] = useState([]);
    const [progress, setProgress] = useState([]);
    const [dones, setdones] = useState([]);
    useEffect(() => {
        (async()=>{
            const response = await fetch('/gettodos', {
                method: 'POST'
            });
            const data = await response.json();
            if(data.error) {
                alert(data.error)
            } else {
                setToDoes(data.list)
            }
        })();
        (async() =>{
            const response = await fetch('/getprogress', {method: 'POST'})
            const data = await response.json();
            if (data.error) {
                alert(data.error)
            } else {
                setProgress(data.list)
            }
        })()

    }, [])


    const addToDo =  async (content) => {
        const response = await fetch('/addtodo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({content})
        });
        const data = await response.json();
        if (data.error) {
            alert(data.error)
        } else {
            setToDoes([...toDoes, {id: data.id, content}])
        }
    }

    const move_todo_inprogress = async (id) => {
        const response = await fetch('/mv_todo_progress', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id, content: toDoes.find(item => item.id === id).content})
        });
        const result = await response.json();
        if (result.error) {
            alert(result.error)
        } else {
            setProgress([...progress, {id: result.id, content: toDoes.find(item => item.id === id).content}])
            setToDoes(toDoes.filter(item => item.id !== id));
            
        }
    }
  return (
    <div className='container'>
        <div className='row'>
            <ToDo move={move_todo_inprogress} list={toDoes} addEvent={addToDo} />
            <InProgress list={progress}/>
            <Done />
        </div>
    </div>
  )
}


ReactDOM.render(<App />, document.querySelector('#root'))
