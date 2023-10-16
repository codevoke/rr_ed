import styled from "@emotion/styled"
import { Breadcrumbs, Link, List, ListItem, ListItemButton, Typography } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"

const PathWrapper = styled("div") ({
    display: 'inline-flex',
    margin: '20px',
    padding: '15px',
    border: '1px solid dimgray',
    borderRadius: '15px',
    background: 'whitesmoke'
})

export default function HomeworkNavL() {
    const navigate = useNavigate();
    const { NavClass } = useParams();
    return (
        <>
            <PathWrapper>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link
                        underline="hover"
                        color="inherit"
                        onClick={() => {navigate(`/hw`)}}
                    >
                        Навигация
                    </Link>
                    <Typography color="text.primary">{NavClass}</Typography>
                </Breadcrumbs>
            </PathWrapper>
            <List dense={true}>
                {["а", "б", "в"].map( (elem) => {
                return (
                    <ListItemButton>
                        <ListItem onClick={()=>{ navigate(`/hw/${NavClass}/${elem}`) }}>
                            {NavClass} {elem} 
                        </ListItem>
                    </ListItemButton>
                )
                })}
                
            </List>
        </>
    )
}