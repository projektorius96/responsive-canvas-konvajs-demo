import './style.css';
import { Stage, Layer } from 'konva/lib/Core';
import { Rect } from 'konva/lib/shapes/Rect';
import { name } from './package.json';

document.addEventListener('DOMContentLoaded', ()=>{
  document.title = name;
})

const 
    width = window.innerWidth
    ,
    height = window.innerHeight
    ;

const 
    stage = new Stage({
        container: document.body,
        width,
        height,
    })
    ,
    layer = new Layer()
    ;

const 
    commonDivisor  = 4
    ,
    [
        rectWidth, 
        rectHeight,
    ]  = [
        /* DEV_NOTE # you can use absolute values, but to me personally makes more sense, and perhaps easier to grasp it, when I use relative units with respect to stage dimensions */
        stage.width() / commonDivisor, 
        stage.height() / commonDivisor,
    ]
    ;

const rect = new Rect({
    x: stage.width() / 2 - (rectWidth / 2),
    y: stage.height() / 2 - (rectHeight / 2),
    width: rectWidth,
    height: rectHeight, 
    fill: 'green',
    stroke: 'black',
    strokeWidth: 4,
});

stage.add(
    layer.add(rect)
)

window.addEventListener('resize', ()=>{

    stage.setAttrs({
        width: window.innerWidth,
        height: window.innerHeight, 
    })

   rect.setAttrs({
        x: stage.width() / 2 - (rectWidth / 2),
        y: stage.height() / 2 - (rectHeight / 2), 
   })

})