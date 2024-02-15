import { useState } from 'react';

export default function ColorPicker() {
    const [color, setColor] = useState("#000000");

    function handleColorChange (e) {
        const color = e.target.value;
        const wrapper = document.querySelector('.wrapper');

        setColor(color);
        wrapper.style.backgroundColor = color;
    }

    return (
        <div className="wrapper">
            <div className="container">
                <h1>Color picker</h1>
                <p>Selected Color</p>
                <h2>{color}</h2>

                <h1>Pick a color</h1>
                <input type="color" value={color} onChange={handleColorChange} />
            </div>
        </div>
    );
}