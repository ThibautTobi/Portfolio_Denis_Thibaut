import Image from 'next/image';
import dataService from '../../data/data_service';

export default function Service (){

    return(
    <section id="service">
        <div className="p-4 text-center mb-3">
          <h2 className="text-2xl mb-2 font-bold text-slate-800 lg:text-4xl">Services</h2>
            {dataService.map((service, index) => (
                <article key={index} className='w-4/5 bg-slate-400 rounded-xl m-auto p-4 mb-6 lg:mb-10'>
                <Image 
                src={service.icon} 
                alt={service.alt} 
                width={130} 
                height={130} 
                className='inline m-3' />
                <h3 className='font-bold text-slate-800 mb-2 sm:text-xl lg:text-2xl'>{service.title}</h3>
                <p className='text-left'>{service.description}</p>
                </article>
            ))}
        </div>
    </section>
    )
};