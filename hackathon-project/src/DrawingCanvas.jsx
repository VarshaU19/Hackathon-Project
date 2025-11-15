import './App.css';

export function PaintCanvas() {
    return (
        <div>
            <h1 id="canvasTitle">Drawing Canvas</h1>
            <canvas id="drawingCanvas" width="500" height="500" style={{border: '1px solid black'}}>
            </canvas>
        </div>
    );
}