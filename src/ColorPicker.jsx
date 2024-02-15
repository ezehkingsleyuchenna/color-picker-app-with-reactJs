import { userState } from 'react';

export default function ColorPicker() {
    const [color, setColor] = userState("#FFFFFF");

    return (
        <div className="wrapper">
            <h1>Color picker</h1>
            <p>Selected Color</p>
            <h2>{color}</h2>
        </div>
    );
}