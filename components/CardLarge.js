import React from 'react'
import Image from "next/image";

function CardLarge({img,title,descrition,button}) {
    return (
        <div className = "relative py-16 cursor-pointer">

            <div className = "relative h-96 min-w-[300px]  ">
            <Image src = {img} layout="fill" objectFit ="cover" className = "rounded-2xl" />

            </div>
            <div className = "absolute top-32 left-12 text-black sm:text-white">
                <h3 className = "text-4xl mb-3 w-64">{title}</h3>
                <p className = "text-black w-64 py-6 sm:text-white">{descrition}</p>
                <button className ="text-black bg-white p-2 w-26 mt-3 rounded-lg font-semibold hover:bg-gray-200" >{button}</button>
            </div>
           
            
            
        </div>
    )
}

export default CardLarge

// https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=1440