import React from 'react'
import Image from "next/image";
import { HeartIcon, StarIcon } from '@heroicons/react/outline';

function ResultsCard({img ,title,location,description,star,price,total,lat,long,}) {
    return (
        <div className=" flex items-center flex-col md:flex md:flex-row py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg rounded-lg transition duration-200 ease-out first:border-t ">
            <div className="relative h-52 w-80  flex-shrink-0">
            <Image src={img} layout="fill" objectFit = "cover" className = "rounded-xl" />
            </div>
            <div className="flex flex-col flex-grow pl-5">
                <div className = "flex justify-between">
                    <p>{location}</p>
                    <HeartIcon className = "h-6 text-red-400 cursor-pointer"/>
                    {/* <StarIcon className = "h-6 text-yellow-400"/> */}
                </div>
                <h4 className = "text-xl font-semibold">{title}</h4>

            <div className = "border-b w-10 pt-2 "/>
                <p className = "text-sm text-gray-500 flex-grow">{description}</p>

                <div className = "flex justify-between items-end pt-5">
                    <p className = "flex items-center text-sm ">
                        <StarIcon className = "h-5 text-red-400" />
                        {star}
                    </p>

                    <div>
                    <p className = "text-lg lg:text-2xl font-semibold pb-2">{price}</p>
                    <p className = "text-right font-extralight">{total}</p>
                </div>

                </div>
              

            </div>
           
            
        </div>
    )
}

export default ResultsCard
