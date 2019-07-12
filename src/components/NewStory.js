import React, { useState } from 'react'
import '../stylesheets/NewStory.css'
// import { Form } from 'semantic-ui-react'




// const handleSubmit = (e) => {
//     e.preventDefault()
//     debugger
//     console.log(e.target)
// }

const NewStory = () => {

    const [input, setInput] = useState('')

    return (
        <div id='newStoryMain'>
            <h1>New Story</h1>
            <div id='border'>
                <label>Your Story</label>
                <form>
                    <textarea id='textarea' value={input} placeholder='Go on...' onChange={e => setInput(e.target.value)} />
                    <button>Submit Story</button>
                </form>
            </div>
        </div>
    )

}


export default NewStory