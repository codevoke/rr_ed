import styled from "@emotion/styled"

const BackgroundImage = styled("div") ({
    height: 'calc(100vh - 60px)',
    position: 'relative', 
    background: 'url("/MainPage_bg.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPositionX: 'center'
})

export default function MobileMainPage () {
    return (
        <BackgroundImage />
    )
}