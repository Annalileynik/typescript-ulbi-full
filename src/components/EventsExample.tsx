import React, {ChangeEvent, FC, useRef, useState} from "react";

const EventsExample:FC = () => {
    const [value, setValue] = useState<string>("");
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null)
    const changeHandler = (event:ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    const clickHandler = (event:React.MouseEvent<HTMLButtonElement>) => {
       console.log(inputRef.current?.value);
    };

    const dragHandler = (event:React.DragEvent<HTMLDivElement>) => {
        console.log("DRAG");
    };

    const dragWithPreventHandler = (event:React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        setIsDrag(true)
    };
    const leaveHandler = (event:React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        setIsDrag(false)
    }
    const dropHandler = (event:React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        setIsDrag(false)
        console.log("DROP")
    }
    return (
        <div>
            <input value={value} onChange={changeHandler} type="text" placeholder="managed"/>
            <input ref={inputRef}  type="text" placeholder=" not managed"/>
            <button onClick={clickHandler}>Hello!</button>
            <div onDrag={dragHandler} draggable style={{width:200, height:200, background:"red"}}> </div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{width:200, height:200, background: isDrag? 'blue':"red", marginTop:15}}> </div>
        </div>
    );
};

export default EventsExample;
