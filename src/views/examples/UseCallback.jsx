import React, { useState, useCallback } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import CallbackButtons from './UseCallbackButtons';

const UseCallback = (props) => {
    const [count, setCount] = useState(0);

    const inc = useCallback(function (delta) {
        setCount(current => current + delta);
    }, [setCount]);

    const clearCount = useCallback(function () {
        setCount(0);
    }, [setCount]);

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />

            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <CallbackButtons inc={inc} clear={clearCount}></CallbackButtons>
                </div>
            </div>
        </div>
    );
}

export default UseCallback;