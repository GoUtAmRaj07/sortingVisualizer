import { useState } from 'react';
import './Bars.css'
function Bars({index, length, color, changeArray}) {

    const [len , setLength] = useState(length)

    const colors =[ 
        ['rgba(55,255,205)', 'rgba(55,255,205)'],
        ['rgba(255,65,20)', 'rgba(255,65,105)'],
        ['rgba(55,155,205)', 'rgba(155,255,205)'],
    ];

    // const barStyle = {
    //     height : length,
    // }

    const inputStyle = {
        position : 'relative',
        top : Math.floor(length / 2) - 10,
        width : length,
        left : -Math.floor(length / 2) + 10,
        border : 'none',
    }

    const bottom = {
        transform : `translateY(${200 - length}px) rotateX(-90deg)`,
        backgroundColor : `${colors[color][0]}`,
        boxShadow : `5px 5px 50px 5px ${colors[color][1]}`,
        transition : '0.3s' 
    }

    const front_bottom_right_left = {
        height: `${length}px`,
        transition : `translateY(${200 - length}px)`,
        backgroundColor : `${colors[color][0]}`,
        boxShadow : `5px 5px 50px 5px ${colors[color][1]}`,
        transition : '0.3s'
    }

    const quantity = {
        position : 'relative',
        top : 225,
    }

    const handleChange = (e) => {
        let val = e.target.value;
        if (val == ''){
            setLength(0);
            changeArray(index, 0);
        }
        else{
            val = parseInt(val);
            if(val > 200){
                setLength(200);
                changeArray(index,200);
            }
            else{
                setLength(val);
                changeArray(index,val);
            }
        }
        setLength(parseInt(e.target.value))
    }

    const increment = (e) => {
        setLength(length + 1);
        changeArray(index,length + 1);
    }

    const decrement = (e) => {
        setLength(length - 1);
        changeArray(index,length - 1);
    }

    return (
        <>
        <div className= "bar">
            <div className= "side top"></div>
            <div className= "side bottom" style = {bottom}></div>
            <div className= "side right">
                <div className= "color-bar right-color-bar" style = {front_bottom_right_left}></div>
            </div>
            <div className= "side left">
                <div className= "color-bar left-color-bar" style = {front_bottom_right_left}></div>
            </div>
            <div className= "side front">
                <div className= "color-bar front-color-bar" style = {front_bottom_right_left}>
                <input 
                type = "number" 
                length = {length} 
                style = {inputStyle} 
                value = {len} 
                className = 'input'
                onChange = {handleChange} 
                />
                </div>
            </div>
            <div className="side back">
            <div className= "color-bar back-color-bar" style = {bottom}></div>
            </div>
            <div className="quantity-nav">
                <div className= "quantity-button quantity-up" style = {quantity} onClick = {increment}> {' '} + {' '}</div>
                <div className= "quantity-button quantity-down" style = {quantity} onClick = {decrement}> {' '} - {' '}</div>
            </div>
        </div>
        </>
    )
}

export default Bars;
