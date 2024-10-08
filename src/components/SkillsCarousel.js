//ref:   https://docs.google.com/document/d/1FLzzJ7zpTDWGZg56gu1rWvv7HDXdLZz3F-c07sNwZlE/edit

import React, { useEffect, useState, useRef, useMemo } from "react";

import classNames from "classnames";


const SkillsCarousel = ({items}) => {
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(null);
    const [scrollLeftState, setScrollLeftState] = useState(null);
    const [mouseMoved, setMouseMoved] = useState(0);


    const itemsContainer = useRef();

    const preventDragHandler = (e) => {
        // console.log("Hello")
        e.preventDefault();
    }

    // functions
    function handleMouseDown(e) {
        if (e.pageX === undefined) {
            setStartX(e.touches[0].pageX - itemsContainer.current.offsetLeft);
        } else {
            setStartX(e.pageX - itemsContainer.current.offsetLeft);
        }
        setIsDown(true);
        setScrollLeftState(itemsContainer.current.scrollLeft);
        setMouseMoved(0);
    }


    function handleMouseMove(e) {
        if (!isDown) {
            return;
        }


        const currentMousePositionInsideContainer =
            e.pageX === undefined
                ? e.touches[0].pageX - itemsContainer.current.offsetLeft
                : e.pageX - itemsContainer.current.offsetLeft;


        setMouseMoved((currentMousePositionInsideContainer - startX)*2);     //To adjust  drag speed, replace the 2
    }


    useEffect(() => {
        itemsContainer.current.scrollLeft = scrollLeftState - mouseMoved;
    }, [isDown, startX, scrollLeftState, mouseMoved]);


    return (
        <div className="container drr">
            <hr />
            <div
                className={classNames("ItemsContainer dbb", { activeItems: isDown })}
                ref={itemsContainer}
                // mouse events   (for mouse)
                onMouseDown={(e) => handleMouseDown(e)}
                onMouseUp={() => setIsDown(false)}
                onMouseLeave={() => setIsDown(false)}
                onMouseMove={(e) => handleMouseMove(e)}
                // touch events   (for touchscreens)
                onTouchStart={(e) => handleMouseDown(e)}
                onTouchEnd={() => setIsDown(false)}
                onTouchCancel={() => setIsDown(false)}
                onTouchMove={(e) => handleMouseMove(e)}
            >

                {items.map((item,index) => 
             
                <div className="item" key={index}
                     onDragStart={preventDragHandler}
                ><a href={item.link} target="_blank" rel="noreferrer" title={item.alt}> 
                        <img src={item.img} alt={item.alt} width="60" height="70"/> 
                        <label>{item.alt}</label>
                    </a>
                </div>
                
               )}
                
            </div>
        </div>
    );
};


export default SkillsCarousel;


