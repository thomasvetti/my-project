"use client";
import { Avatar } from "../components/avatar";
import ContainerPage from "../components/container-page";
import CounterServices from "../components/counter-services";
import TransitionPage from "../components/transition-page";
import TimeLine from "../components/time-line";
import { Coverparticles } from "../components/cover-particles";
const AboutMePage = () => {
  return (
   <>
     <TransitionPage />
      <Coverparticles />
     <ContainerPage>
        <Avatar />
        <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    Toda mi{' '}
                    <span style={{ color: "#808b96" }}>  trayectoria profesional
                    </span>
                </h1>
       <CounterServices />
       
        <TimeLine />

     </ContainerPage>
   </>
  );
}   
export default AboutMePage;