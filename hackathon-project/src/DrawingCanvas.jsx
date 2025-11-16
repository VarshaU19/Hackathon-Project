import './App.css';
import ReactCanvasPaint from 'react-canvas-paint';
import 'react-canvas-paint/dist/index.css';


export function PaintCanvas() {
    return (
        <div id="CanvasBox">
            <h1 id="canvasTitle">Drawing Canvas</h1>
            <ReactCanvasPaint />
        </div>
    );
};

export default PaintCanvas;