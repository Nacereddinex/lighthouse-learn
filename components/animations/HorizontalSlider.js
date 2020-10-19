import React from "react"
import Slide from 'react-reveal/Slide'


const HorizontalSlider = ({ children, direction }) => {
    return (
        <div>
            <Slide left={direction === 'left'} right={direction === 'right'}>
                {children}
            </Slide>
        </div>
    )

}

export default HorizontalSlider