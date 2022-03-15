import React, {useRef} from 'react'

export default function ToDo(props) {
    const inpRef = useRef()
    const listElements = props.list.map(item => {
        return <li key={item.id}>
            <span>{item.content}</span><button 
            className='btn btn-success'
            onClick={() => props.move(item.id)}
            >=></button>
        </li>
    })

    return (
        <div className='col-md-4 col-lg-4 col-sm-12'>
            <h2>To Do List</h2>
            <ul>
                {listElements}
            </ul>
            <div className="input-group mb-3">
                <input ref={inpRef} type="text" className="form-control" placeholder="Write To Do " />
                <div className="input-group-append">
                    <button 
                    className="btn btn-outline-secondary" 
                    onClick={() => props.addEvent(inpRef.current.value)}
                    >Add</button>
                </div>
            </div>
        </div>
    )
}
