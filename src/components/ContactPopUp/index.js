import React, {useState} from 'react'
import {Container, Button} from "./ContactPopUpElements"

const ContactPopUp = () => {
    const [hover, setHover] = useState(false)
    const onHover = () =>
        setHover(!hover)
    const Video = "https://ik.imagekit.io/87w1vdmbl9d/websitemp4/video-3.mp4"
    return (
        <Container>
            <Button>Button</Button>
        </Container>
    )
}

export default ContactPopUp
