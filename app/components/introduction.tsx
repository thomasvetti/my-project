import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return(
        <div className=' z20 w-full bg-dark/60'>
            <div className='z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2'>
                  <Image src="/home-4.png" priority width="800" height="800" alt="Avatar" />
            </div>
            from intriduciont
        </div>
    );
}
export default Introduction;