import CanvasPaint from 'react-canvas-paint';
import 'react-canvas-paint/dist/index.css';
import './App.css';

export function PaintCanvas(){

    return (
        <div id="CanvasBox">
            <h1 id="canvasTitle">Drawing Canvas</h1>
            <CanvasPaint id="CanvasArea"
                width={screen.width * 0.5}
                height={screen.height * 0.5}
                brushColor={"#000000"}
                brushRadius={5}
                lazyRadius={0}
                colors={["#000000", "#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff", "#ffffff", "#008000", "#800080", "#570303ff", "#000080"]}
            />
        </div> 
    )    
};

export default PaintCanvas;