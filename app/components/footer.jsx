import Link from "next/link";
import Image from "next/image";
import github from '../../public/icone/github.svg';
import linkedin from '../../public/icone/linkedin.svg';

export default function Footer (){

    return(
            <div className="dark:bg-stone-800 text-white bg-slate-800 w-full h-28 flex flex-col items-center">
                <div className='flex flex-row m-3 justify-around'>
                    <Link href='https://github.com/ThibautTobi?tab=repositories' aria-label='Mon github' className='m-auto'>
                        <Image 
                        src={github} 
                        alt='github'
                        aria-label='github'
                        width={50}
                        height={50}
                        className="dark:hover:bg-neutral-600 hover:bg-slate-500 p-2 rounded-lg lg:w-16 lg:h-16"/>
                    </Link>
                    <Link href='https://www.linkedin.com/in/thibaut-denis-2b12b21b1/' aria-label='Mon linkedin'>
                        <Image 
                        src={linkedin} 
                        alt='linkedin'
                        aria-label='github'
                        width={50}
                        height={50}
                        className="dark:hover:bg-neutral-600 hover:bg-slate-500 p-2 rounded-lg lg:w-16 lg:h-16"/>
                    </Link>
                </div>
                <h2 className="text-center mb-2">© 2023 Thibaut Denis, Tous droits réservés.</h2>
            </div>
    )
}