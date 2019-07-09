import React from 'react'
import '../stylesheets/NewStory.css'
import { Form } from 'semantic-ui-react'



const NewStory = () => {

    return (
        <div id='newStoryMain'>
            <h1>New Story</h1>
            <div id='border'>
                <label>Your Story</label>
                <form>
                    <textarea></textarea>
                </form>
            </div>
        </div>
    )

}


export default NewStory