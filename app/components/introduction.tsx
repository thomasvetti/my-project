"use client";
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image   src="/laptop2.png"    alt="Avatar"    width={600}   height={800}   priority className="w-55 md:w-[600px] h-auto mx-auto"
/>
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
                        Hola, soy Thomas Vetti Úsuga <br />
                        <TypeAnimation
                            sequence={[
                                'Desarrollador frontend',
                                2000,
                                'Desarrollador backend',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold"
                            style={{ color: '#808b96' }}
                        />
                    </h1>
                    
                    <p className="mx-auto mb-4 text-lg md:text-2xl md:mx-0 md:mb-8">
                        Estudiante de Desarrollo de Software en la Universidad Tecnológica de Pereira. 
                        He trabajado en proyectos tanto de frontend como de backend. Me apasiona la tecnología y busco seguir creciendo como desarrollador. <br />
                    </p>
                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10 mt-4">
                        <a href="/projects" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Ver proyectos
                        </a>
                        <a href="/contact"
                            className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50" >
                            Contacta conmigo
                        </a>
                    </div>
                  
                </div>
            </div>
        </div>
    );
}
export default Introduction;