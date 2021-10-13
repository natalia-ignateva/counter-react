import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
    const initialValue = {
        display: 0,
    };

    const [count, setCount] = useState(initialValue.display);

    const incrementCount = (label) => {
        setCount(count + label);
    };

    const resetValue = () => {
        setCount(initialValue.display);
    };

    return (
        <div className="App">
            <div className="Display">{count}</div>
            <Button label={1} onClickFunction={incrementCount} />
            <Button label={10} onClickFunction={incrementCount} />
            <Button label={100} onClickFunction={incrementCount} />
            <Button label={1000} onClickFunction={incrementCount} />
            <div className="Reset">
                <Button label={'Clear'} onClickFunction={resetValue} />
            </div>
        </div>
    );
}

export default App;
