import Image from 'next/image';
import dataService from '../../data/data_service';

export default function Service (){

    return(
    <section id="service" className="p-4 text-center">
          <h2 className="dark:dark:text-stone-800 text-2xl m-10 font-bold text-slate-800 lg:text-4xl">Services</h2>
            {dataService.map((service) => (
                <article key={service.id} className='w-4/5 dark:bg-neutral-400 bg-slate-400 rounded-xl m-auto p-5 mt-16 mb-16 lg:mb-10 shadow-combined'>
                <Image 
                src={service.icon} 
                alt={service.alt} 
                width={130} 
                height={130} 
                className='inline m-5'
                loading="lazy"
                 />
                <h3 className='dark:text-stone-800 font-bold text-slate-800 mb-3 sm:text-xl lg:text-2xl'>{service.title}</h3>
                <p className='text-center m-6'>{service.description}</p>
                <h3 className='text-center dark:text-stone-800 font-bold text-slate-800 mb-3 sm:text-lg lg:text-xl'>Quels sont les bénéfices ?</h3>
                <ul>
                    {service.benefice.map((benefice)=>(
                        <li key={benefice.id} className='text-left m-4'>* {benefice}</li>
                    ))}
                </ul>
                <p className='text-right font-caveat font-bold text-2xl m-8'>{service.cta}</p>
                </article>
            ))}
    </section>
    )
};