import React from "react";

const CallbackButtons = (props) => {
    return (
        <div>
            <div>
                <button className='btn' onClick={() => props.inc(6)}>+6</button>
                <button className='btn' onClick={() => props.inc(12)}>+12</button>
                <button className='btn' onClick={() => props.inc(18)}>+18</button>
                <button className='btn' onClick={() => props.clear()}>Clear</button>
            </div>
        </div>
    );
}

export default React.memo(CallbackButtons);