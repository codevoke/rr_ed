import { Divider, List, ListItemButton, ListItemText, Drawer } from "@mui/material";
import { useNavigate } from 'react-router-dom';

export default function LeftMenu (props) {
    const { isOpen, setIsOpen } = props;
    const navigate = useNavigate();
    
    return (
        <Drawer 
            anchor="left"
            open={isOpen}
            onClose={() => {setIsOpen(false);}}
        >
            <List>
                <ListItemButton>
                    <ListItemText primary="Главная" onClick={()=>{ setIsOpen(false); navigate('/')}} />
                </ListItemButton>
                <ListItemButton>
                    <ListItemText primary="О нас" onClick={()=>{ setIsOpen(false); navigate('/about')}} />
                </ListItemButton>
                <ListItemButton>
                    <ListItemText primary="Домашнее задание" onClick={()=>{ setIsOpen(false); navigate('/hw')}}/>
                </ListItemButton>
                <Divider />
                <ListItemButton>
                    <ListItemText primary="Войти" onClick={()=>{ setIsOpen(false); navigate('/login') }} />
                </ListItemButton>
            </List>
        </Drawer>
    );
}