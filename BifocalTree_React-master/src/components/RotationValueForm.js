import React from 'react';

const RotationValueForm = (props) => {

    const rotationValue = props.rotationValue;

    return (
        <div className="customizationDiv">
            <div className="navigationDiv" >
                <button onClick={() => props.decreasePartialData()}> Previous {rotationValue} nodes </button>
                {/* <input type="text" id="rotationValueInput" onChange={(newValue) => props.changeRotationValue(newValue)} value={rotationValue} /> */}
                <input type="text" id="rotationValueInput" onChange={(newValue) => props.changeRotationValue(newValue)} value={rotationValue} />
                <button onClick={() => props.increasePartialData()}> Next {rotationValue} nodes </button>
            </div>
            <div className="customizeNodeNumberDiv">
                <p>Select the number of nodes simultaneously displayed : </p>
                <input type="text" id="quantityNodeInput" value={props.tempQuantityNodeValue} onChange={(newValue) => props.changeQuantityNodeValue(newValue)} />
                <button onClick={() => props.selectQuantityNode()}>Confirm</button>
            </div>
        </div>
    );
};

export default RotationValueForm;