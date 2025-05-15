

import CircleImage from "../components/circle-image";
import ContainerPage from "../components/container-page";
import { Coverparticles } from "../components/cover-particles";
import SliderServices from "../components/slider-services";
import TransitionPage from "../components/transition-page";


const ServicesPage = () => {
    return (
        <>

            <TransitionPage />
             <Coverparticles />
            <ContainerPage>
            <CircleImage />
            <div className="grid items-center justify-center max-w-5xl gap-6 mx-auto md:grid-cols-2 mt-4 mb-0">
                <div className="max-w-[450px]">
                    <h1 className="text-2xl font-bold leading-tight text-center md:text-left md:text-5xl md:mt-10">Mis servicios</h1>
        <p className="mb-3 text-xl text-gray-300">Ofrezco servicios de desarrollo web frontend especializados en la creación de sitios web y aplicaciones atractivas y funcionales. Utilizando las últimas tecnologías, como HTML, CSS y JavaScript, diseño interfaces de usuario intuitivas y responsivas que reflejan la identidad de marca de mis clientes y mejoran su presencia en línea.</p>
    </div>
    <div>
        <SliderServices />
    </div>
</div>
            </ContainerPage>
        </>
    );
}

export default ServicesPage;