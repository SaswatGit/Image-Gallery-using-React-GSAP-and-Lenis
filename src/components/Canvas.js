import { useEffect, useRef } from 'react';
import './css/canvas.css';
const Canvas = () =>{
    const canvasRef = useRef(null);
    useEffect(()=>{
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const rectWidth = canvas.width/8;
        const rectHeight = canvas.height;
        for(let i=0;i<8;i++){
            ctx.fillStyle = "black";
            ctx.strokeStyle = "white";
            ctx.lineWidth = 3;
            ctx.fillRect(rectWidth * i, 0, rectWidth, rectHeight);
            ctx.stroke();
            ctx.fill();
        }
        console.log(ctx.lineWidth);
    }, []);
    return(
        <canvas id="canvas" ref={canvasRef}></canvas>
    )
}

export default Canvas;