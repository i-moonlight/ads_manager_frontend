import React from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

const AnimatedModal = (props) => {
    return (
        <React.Fragment>
            <Rodal closeMaskOnClick={props.isCloseMaskOnClick} showMask={props.isShowMask} width={props.width} height={props.height} visible={props.visible} onClose={props.onClose} animation={props.animation}>
                {props.children}
            </Rodal>
        </React.Fragment>
    );
};

export default AnimatedModal;
