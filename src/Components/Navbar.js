import React from 'react'
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (

        <Menu inverted>
            <Container>
                <Link to='/' >
                    <Menu.Item as='a' name="Game Of Thrones API" />
                </Link>
                <Link to='/characters' >
                    <Menu.Item as='a' name="Characters" />
                </Link>
                <Link to='/houses' >
                    <Menu.Item as='a' name="Houses" />
                </Link>
                <Link to='/events' >
                    <Menu.Item as='a' name="Events" />
                </Link>
                <Link to='/battles' >
                    <Menu.Item as='a' name="Battles" />
                </Link>






            </Container>
        </Menu>

    )
}

export default Navbar
