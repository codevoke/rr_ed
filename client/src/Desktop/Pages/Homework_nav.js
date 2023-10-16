import styled from "@emotion/styled"
<<<<<<< HEAD
import { Breadcrumbs, Link, List, ListItem, ListItemButton } from "@mui/material"
=======
import { Breadcrumbs, List, ListItem, ListItemButton, Typography } from "@mui/material"
>>>>>>> 3b02328 (updates*)
import { useNavigate } from "react-router-dom"

const PathWrapper = styled("div") ({
    display: 'inline-flex',
    margin: '20px',
    padding: '15px',
    border: '1px solid dimgray',
    borderRadius: '15px',
    background: 'whitesmoke'
})

export default function HomeworkNav() {
    const navigate = useNavigate();
    return (
        <>
            <PathWrapper>
                <Breadcrumbs aria-label="breadcrumb">
                    <Typography color="text.primary">Навигация</Typography>
                </Breadcrumbs>
            </PathWrapper>
            <List dense={true}>
                {[...Array(12).keys()].slice(1).map( (elem) => {
                return (
                    <ListItemButton>
                        <ListItem onClick={()=>{ navigate(`/hw/${elem}`) }}>
                            {elem} класс
                        </ListItem>
                    </ListItemButton>
                )
                })}
                
            </List>
        </>
    )
}
