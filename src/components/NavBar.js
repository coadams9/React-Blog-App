import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


export default function NavBar() {
    return (
        <Menu>
            <Menu.Item name='Home' as={Link} to='/' />
            <Menu.Item>
                My Blogs
            </Menu.Item>
        </Menu>
    )
}