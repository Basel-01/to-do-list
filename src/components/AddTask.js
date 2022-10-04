import { useState } from "react"
import { nanoid } from "nanoid"

const AddTask = ({onAddTask}) => {
  
  let [formData, setFormData] = useState({
    text: '',
    day: '',
    reminder: false,
  })

  function updateForm(e, name) {
    const {value, checked, type} = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    })
  }

  function handelSubmit(e) {
    e.preventDefault()
    
    onAddTask({
      id: nanoid(),
      ...formData
    })

    setFormData({ 
      text: '',
      day: '',
      reminder: false,
    })
  }

  return (
    <form className='add-form' onSubmit={handelSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input type="text" value={formData.text} onChange={e => updateForm(e, "text")} placeholder="Add Task" required />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input type="text" value={formData.day} onChange={e => updateForm(e, "day")} placeholder="Add Day & Time" required />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input type="checkbox" checked={formData.reminder} onChange={e => updateForm(e, "reminder")} />
      </div>
      <button type="submit" className='btn btn-block'>Save Task</button>
    </form>
  )
}

export default AddTask