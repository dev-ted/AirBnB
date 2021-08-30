import React from 'react'
import Image from "next/image";

function CardMedium({img,title,descrition,show}) {
    return (
        <div className=" cursor-pointer hover:scale-105  transition transform duration-300 ease-out ">
            <div className={ `relative ${show ? 'h-96 w-96 ' :' h-80 w-80' } `}>
                <Image className="rounded-xl" src = {img}  layout = "fill"/>

            </div>
            
                <p className="text-2xl mt-3 mb-3">{title}</p>
                {show &&(<small>{descrition}</small>)}
          
            
        </div>
    )
}

export default CardMedium
