import './App.css';

export function PaintCanvas() {
    return (
        <div id="CanvasBox">
            <h1 id="canvasTitle">Drawing Canvas</h1>
            <canvas id="drawingCanvas" width="500" height="500" style={{border: '10px solid black'}}></canvas>
        </div>
    );
}

export default PaintCanvas;