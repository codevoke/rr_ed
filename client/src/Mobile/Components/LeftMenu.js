import { Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import { useNavigate } from 'react-router-dom';

export default function LeftMenu (props) {
    
    const { isOpen, setIsOpen } = props;
    const navigate = useNavigate();

    console.log(isOpen)
    return (
        <Drawer 
            anchor="left"
            open={isOpen}
        >
            <List>
            <ListItemButton>
                    <ListItemText primary="О нас" onClick={()=>{ setIsOpen(false); navigate('/about')}} />
                </ListItemButton>
                <ListItemButton>
                    <ListItemText primary="Домашнее задание" onClick={()=>{ setIsOpen(false); navigate('/hw')}}/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemText primary="Войти" onClick={()=>{ setIsOpen(false); navigate('/login') }} />
                </ListItemButton>
            </List>
        </Drawer>
    );
}