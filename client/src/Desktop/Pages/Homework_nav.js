import { Button } from "@mui/material";
import { useState } from "react";

export default function HomeworkNav() {
    const [data, setData] = useState("")
    return (
        <div style={{ position: 'relative' }}>
            <p>Для доступа к домшке скинь нюдсы</p>
            <Button variant="outlined" onClick={() => {setData("Упс кнопка не работает, жаль да?.. (я пошутил)")}}>Прикрепить нюдсы</Button>
            <br/>
            <p>{data}</p>
        </div>
    )
}