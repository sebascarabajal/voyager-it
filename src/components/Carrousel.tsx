"use client"
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

export default function Carrousel() {
    return (
        <div className="flex justify-center items-center mt-10">
            <Carousel autoPlay={true} infiniteLoop={true} className="w-full md:w-1/2" >
                <div>
                    <Image src={"/server.png"} alt="Descripción de la imagen" width={500} height={500} />
                    <p className="legend">Servidor</p>
                </div>
                <div>
                    <Image src={"/cables.png"} alt="Descripción de la imagen" width={500} height={500} />
                    <p className="legend">Servidor</p>
                </div>
            </Carousel>
        </div>
    )
}