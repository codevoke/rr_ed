import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LeftMenu from './LeftMenu';
import { useNavigate } from 'react-router-dom';

export default function MobileHeader() {
    const navigate = useNavigate();
    const [drawerState, setDrawerState] = React.useState(false);
    return (
        <>
            <LeftMenu isOpen={drawerState} setIsOpen={setDrawerState}/>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed">
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => {setDrawerState(true); console.log(drawerState)}}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Button variant='text' onClick={()=>{navigate('/login')}}>
                        Вход
                    </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}