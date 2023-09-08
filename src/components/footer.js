import React from 'react';
import Link from "next/link";
import Image from "next/image";
import github from '../../public/images/icone/github.svg';
import linkedin from '../../public/images/icone/linkedin.svg';

export default function Footer (){

    return(
        <>
            <div className="text-white bg-slate-800 w-full h-50 flex flex-col items-center justify-center">
                <div className='flex flex-row m-4'>
                    <Link href='https://github.com/ThibautTobi?tab=repositories' aria-label='Mon github'>
                    <Image 
                    src={github} 
                    alt='linkedin'
                    width={50}
                    height={50}
                    className="m-3 md:mr-6"/>
                    </Link>
                    <Link href='https://www.linkedin.com/in/thibaut-denis-2b12b21b1/' aria-label='Mon linkedin'>
                        <Image 
                        src={linkedin} 
                        alt='linkedin'
                        width={50}
                        height={50}
                        className="m-3 ml-6"/>
                    </Link>
                </div>
                <h2 className="text-center mb-2">© 2023 Thibaut Denis, Tous droits réservés.</h2>
            </div>
        </>
    )
}