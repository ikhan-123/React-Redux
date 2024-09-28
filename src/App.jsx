import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo } from './config/redux/reducers/todoSlice'

const App = () => {

  const todoVal = useRef()

  // dispatch
  const dispatch = useDispatch()

  // selector
  const selector = useSelector(state => state.todos.todo)


  const addTodoInRedux = (event) => {
    event.preventDefault()
    console.log("todo added", todoVal.current.value);
    dispatch(addTodo({
      title: todoVal.current.value
    }))
  }

  const deleteItemFromRedux = (index) => {
    console.log("delete item", index);
    dispatch(removeTodo({
      index
    }))
  }

  return (
    <>
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <form>
          <input type="text" ref={todoVal} />
          <button onClick={addTodoInRedux}>Add Todo</button>
        </form>
      </div>
      <ul>
        {selector.length > 0 ? selector.map((item, index) => {
          return (
            <li key={index}>
              {item.title}
              <button onClick={() => deleteItemFromRedux(index)}> Delete</button>
            </li>
          )
        }) : <h1>No data found</h1>}
      </ul>
    </>
  )
}

export default App
