import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import { useLocalStorage } from 'react-use';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HeaderBox = styled(Box) ({
    position: 'fixed',
    top: '0px',
    width: '100vw',
    height: '60px',
    background: '#000000',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: '10',
    color: '#ffffff'
})
const LogoBox = styled("div") ({
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: "0 5vw",
    cursor: 'pointer'
})
const Link = styled("div") ({
    display: 'flex',
    alignItems: 'center',
    margin: '0 10px',
    cursor: 'pointer'
})


export default function Header () {
    const navigate = useNavigate();
    const [is_authed, setAuthed] = useLocalStorage('auth');
    const [username, setUsername] = useLocalStorage('user_name');
    const [avatar, setAvatar] = useLocalStorage('user_avatar_link');

    const fake_auth = () => {
        setAuthed(true)
        setUsername("Леха Нечаев")
        setAvatar("https://sun112-2.userapi.com/s/v1/if1/LCNvEjLj_R0GBuEWvitV5fCH09TCZ7U_cGgoT3oJLi_21BuI1R4_RhknR2jyQ2MzPinvbd0x.jpg?size=400x400&quality=96&crop=0,0,769,769&ava=1")
    }
    const fake_logout = () => {
        setAuthed(null)
        setUsername(null)
        setAvatar(null)
    }

    return (
        <HeaderBox>
            <LogoBox onClick={()=>{navigate('/')}}>
                <div style={{fontSize: '1.25em'}}>
                    МБОУ "ИТ-Лицей №24"
                </div>
            </LogoBox>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', margin: '0 5vw' }}>
                <Link onClick={() => {navigate('/about')}}>
                    О нас
                </Link>
                <Link onClick={() => {navigate('/hw')}}>
                    Домашнее задание
                </Link>
                <Link>
                    {
                        is_authed === true ? 
                        <>
                            <div style={{ display: 'flex', alignItems: 'center'}}>
                                <Avatar alt={is_authed} src={avatar} style={{ margin: '0 5px' }} sx={{ width: 35, height: 35 }} />
                                <div style={{fontSize: '1.1em', margin: '0 5px' }}>
                                    {username}
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <Button variant="contained" onClick={fake_logout}>Выйти</Button>
                            </div>
                        </>: 
                        
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <Button variant="contained" onClick={fake_auth}>Войти</Button>
                        </div>
                    }
                </Link>
            </div>
        </HeaderBox>
    )
}
