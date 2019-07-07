import React from 'react'
import '../App.css'
import NavBar from './NavBar'
import { Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'




function HomePage() {
    return (
        <div id='backGround'>
            <NavBar />
            <div id='title'>
                <h1 id='title1'>Blog Life</h1>
            </div>
            <div id='homeP'>
                <Button size='massive' icon as={Link} to='/newStory'>
                    <Icon name='pencil alternate' />
                    New Story
                </Button>
                <Button size='massive' icon as={Link} to='/drafts'>
                    <Icon name='idea' />
                    Drafts
                </Button>
                <Button size='massive' icon as={Link} to='/friends'>
                    <Icon name='smile outline' />
                    Friends
                </Button>
            </div>
        </div>
    )
}

export default HomePage