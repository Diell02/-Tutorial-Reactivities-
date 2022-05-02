import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';
import { useStore } from '../stores/store';

export default function NavBar() {

    const {activityStore} = useStore();

    return(
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px', width: '80px'}}/>
                    SIMTS
                </Menu.Item>
                <Menu.Item name='Activities'/>
                <Menu.Item>
                <Button onClick={() => activityStore.openForm()} positive content='Create Activity'/>
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