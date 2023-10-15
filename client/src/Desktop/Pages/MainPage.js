import styled from "@emotion/styled"

const BackgroundImage = styled("div") ({
    width: '100vw', 
    height: 'calc(100vh - 60px)',
    top: '60px',
    position: 'relative', 
    background: 'url("/MainPage_bg.jpg")', 
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat'
})

export default function MainPage() {
    return (
        <BackgroundImage />
    )
}