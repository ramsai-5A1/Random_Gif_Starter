import React, { useState } from "react";

const Random = () => {
    const [gif, setGif] = useState('');

    const clickHandler = () => {
        
    };


    return (
        <div className=" bg-green-500 rounded-lg w-1/2 h-[250px] rounded text-center mt-[40px] px-10 py-2">
            <h1 className="underline">A RANDOM GIF</h1>
            <img src={gif} width='450' />
            <button onClick={clickHandler}>GENERATE</button>
        </div>
    );
}

export default Random;