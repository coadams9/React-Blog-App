import React from 'react'
import '../stylesheets/NewStory.css'
import { withRouter } from 'react-router-dom'


class NewStory extends React.Component {
    render() {
        return (
            <h2>NewStory</h2>
        )
    }
}


export default withRouter(NewStory)