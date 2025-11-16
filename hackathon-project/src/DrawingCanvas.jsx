import CanvasPaint from 'react-canvas-paint';
import 'react-canvas-paint/dist/index.css';
import './App.css';


export function PaintCanvas(){

    return (
        <div id="CanvasBox">
            <h1 id="canvasTitle">Drawing Canvas</h1>
            <CanvasPaint className="CanvasArea"
                width={600}
                height={650}
                brushColor={"#000000"}
                brushRadius={5}
                lazyRadius={12}
                colors={["#000000", "#ff0000", "#00ff00", "#0000ff"]}
            />
        </div> 
    )    
};

export default PaintCanvas;