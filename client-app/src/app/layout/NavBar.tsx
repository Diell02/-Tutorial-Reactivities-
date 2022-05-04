import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';
import "./NavBar.css";
export default function NavBar() {
    return(
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/' exact header>
                    <img src="/assets/logo.png" alt="logo" style={{ width: '80px'}}/>
                </Menu.Item>
                {/*<Menu.Item as={NavLink} to='/activities' name='Activities'/>*/}
                
                <Menu.Item>
                    <div style={{marginLeft: '660px'}}>
                <Button as={NavLink} to='/activities' color='green' content='Nxenes' style={{marginRight: '10px'}} />
                <Button as={NavLink} to='/activities' color='blue' content='Prind' style={{marginRight: '10px'}} />
                <Button as={NavLink} to='/activities' color='red' content='Mesimdhenes' style={{marginRight: '10px'}} />
                <Button as={NavLink} to='/activities' color='black' content='Staf' style={{marginRight: '10px'}} />
                </div>
                {/*<Button as={NavLink} to='/createActivity' color='red' content='Create Activity'/>*/}
                </Menu.Item>
            </Container>
        </Menu>
    )
}