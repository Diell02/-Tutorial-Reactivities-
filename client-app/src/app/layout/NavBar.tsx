import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';

export default function NavBar() {
    return(
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/' exact header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px', width: '80px'}}/>
                </Menu.Item>
                <Menu.Item as={NavLink} to='/activities' name='Activities'/>
                <Menu.Item as={NavLink} to='/errors' name='Errors'/>
                <Menu.Item>
                <Button as={NavLink} to='/createActivity' positive content='Create Activity'/>
                    {/*<Button.Group style={{marginLeft:'400px'}}>
                    <Button positive content='Nxenes' style={{marginLeft:'10px'}}/>
                    <Button positive content='Prind' style={{marginLeft:'10px'}}/>
                    <Button positive content='Mesimdhenes' style={{marginLeft:'10px'}}/>
                    <Button positive content='StafM' style={{marginLeft:'10px'}}/>
                    </Button.Group>*/}
                </Menu.Item>
            </Container>
        </Menu>
    )
}