"use client"

import Image from 'next/image'

const CircleImage = () => {
    return (
        <div className="hidden md:inline-block md:absolute bottom-0 right-0">
        <Image src="/cubes.png" width="400" height="300" className="w-full h-full" alt="Particles " />
    </div>

    );
}

export default CircleImage;