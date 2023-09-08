// 'use client'
// import Layout from "../../../components/displayLayout";
// import emailjs from 'emailjs-com';
// import { useState } from "react";

// export default function Contact () {

//   const [formData, setFormData] = useState({
//     name: '',
//     prenom:'',
//     email: '',
//     sujet: '',
//     message: '',
//   });

//   const { name, prenom, email, sujet, message } = formData;

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
    
//       // useEffect(() => {
//       //   if (typeof window !== "undefined") {
//           const handleSubmit = async (e) => {
//             e.preventDefault();
    
//             try {
//               await emailjs.sendForm(
//                 'service_portfolio',
//                 'template_6zkvgc6',
//                 e.target,
//                 'XSaRwpZUYQrzWinOX'
//               );
    
//               console.log('Formulaire soumis avec succès');
//               // affichage d'une alerte de succès
//               alert('Le formulaire a été soumis avec succès');
//             } catch (error) {
//               console.error('Erreur lors de la soumission du formulaire');
//               console.error(error);
//               //affichage d'une alerte d'erreur
//               alert(`Une erreur s'est produite lors de la soumission du formulaire.`);
//             }
//             // Réinitialisez le formulaire après l'envoi
//             setFormData({ name: '', prenom:'', email: '',sujet: '', message: '' });
//           };
    
//           // Attachez l'événement de soumission au formulaire ici si nécessaire
//           // Par exemple : document.querySelector("form").addEventListener("submit", handleSubmit);
//       //   }
//       // }, []); // La liste de dépendances est vide, ce qui signifie que le useEffect s'exécute une seule fois après le montage initial du composant.
    

//   return (
//       <Layout>
//                 <div id='contact'>
//                   <form onSubmit={handleSubmit} className='formulaire'>
//                     <div className='formulaire_display'>
//                       <label htmlFor="name">Nom :</label>
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={name}
//                         onChange={handleChange}
//                         required
//                         maxLength={20}
//                       />
//                     </div>
//                     <div className='formulaire_display'>
//                       <label htmlFor="prenom">Prénom :</label>
//                       <input
//                         type="text"
//                         id="prenom"
//                         name="prenom"
//                         value={prenom}
//                         onChange={handleChange}
//                         required
//                         maxLength={20}
//                       />
//                     </div>
//                     <div className='formulaire_display'>
//                       <label htmlFor="email" >Email :</label>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={email}
//                         onChange={handleChange}
//                         required
//                         maxLength={40}
//                       />
//                     </div>
//                     <div className='formulaire_display'>
//                       <label htmlFor='sujet' >
//                         Sujet :
//                       </label>
//                       <input
//                         type='text'
//                         id='sujet'
//                         name='sujet'
//                         value={sujet}
//                         onChange={handleChange}
//                         required
//                         maxLength={60}
//                       />
//                     </div>
//                     <div className='formulaire_display'>
//                       <label htmlFor="message">Message :</label>
//                       <textarea
//                         id="message"
//                         name="message"
//                         value={message}
//                         onChange={handleChange}
//                         required
//                         maxLength={400}
//                       ></textarea>
//                     </div>
//                     <button type="submit" className='submit'>Envoyer</button>
//                   </form>
//               </div>
//       </Layout>
//   );
// };


'use client'
import Image from 'next/image';
import emailjs from 'emailjs-com';
import { useState } from "react";
import enveloppe from '../../public/images/icone/icone_envelope.svg';

export default function Contact () {

  const [formData, setFormData] = useState({
    name: '',
    prenom:'',
    email: '',
    telephone:'',
    sujet: '',
    message: '',
  });

  const { name, prenom, email, telephone, sujet, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
    
      // useEffect(() => {
      //   if (typeof window !== "undefined") {
          const handleSubmit = async (e) => {
            e.preventDefault();
    
            try {
              await emailjs.sendForm(
                'service_portfolio',
                'template_6zkvgc6',
                e.target,
                'XSaRwpZUYQrzWinOX'
              );
    
              console.log('Formulaire soumis avec succès');
              // affichage d'une alerte de succès
              alert('Le formulaire a été soumis avec succès');
            } catch (error) {
              console.error('Erreur lors de la soumission du formulaire');
              console.error(error);
              //affichage d'une alerte d'erreur
              alert(`Une erreur s'est produite lors de la soumission du formulaire.`);
            }
            // Réinitialisez le formulaire après l'envoi
            setFormData({ name: '', prenom:'', email: '',sujet: '', message: '' });
          };
    
          // Attachez l'événement de soumission au formulaire ici si nécessaire
          // Par exemple : document.querySelector("form").addEventListener("submit", handleSubmit);
      //   }
      // }, []); // La liste de dépendances est vide, ce qui signifie que le useEffect s'exécute une seule fois après le montage initial du composant.
    

  return (
                <section id='contact' className='text-center mt-8 mb-8 p-4 w-4/5 bg-slate-400 rounded-xl m-auto'>
                  <Image 
                    src={enveloppe} 
                    alt='enveloppe' 
                    width={130} 
                    height={130} 
                    className='inline m-3'
                  />
                  <div>
                    <form onSubmit={handleSubmit} className='flex flex-col'>
                      <div className='flex flex-col p-2 items-center'>
                        <label htmlFor="name">Nom *</label>
                        <input
                          type="text"
                          id="name"
                          className='border-solid border-slate-800 border-2 rounded hover:bg-slate-400 max-w-sm place-content-center'
                          name="name"
                          value={name}
                          onChange={handleChange}
                          required
                          maxLength={20}
                        />
                      </div>
                      <div className='flex flex-col p-2 items-center'>
                        <label htmlFor="prenom">Prénom *</label>
                        <input
                          type="text"
                          id="prenom"
                          className='border-solid border-slate-800 border-2 rounded hover:bg-slate-400 max-w-sm'
                          name="prenom"
                          value={prenom}
                          onChange={handleChange}
                          required
                          maxLength={20}
                        />
                      </div>
                      <div className='flex flex-col p-2 items-center'>
                        <label htmlFor="email" >Email *</label>
                        <input
                          type="email"
                          id="email"
                          className='border-solid border-slate-800 border-2 rounded hover:bg-slate-400 max-w-sm'
                          name="email"
                          value={email}
                          onChange={handleChange}
                          required
                          maxLength={40}
                        />
                      </div>
                      <div className='flex flex-col p-2 items-center'>
                        <label htmlFor="telephone" >Téléphone</label>
                        <input
                          type="text"
                          id="telephone"
                          className='border-solid border-slate-800 border-2 rounded hover:bg-slate-400 max-w-sm'
                          name="telephone"
                          value={telephone}
                          onChange={handleChange}
                          required
                          maxLength={20}
                        />
                      </div>
                      <div className='flex flex-col p-2 items-center'>
                        <label htmlFor='sujet' >
                          Sujet *
                        </label>
                        <input
                          type='text'
                          id='sujet'
                          className='border-solid border-slate-800 border-2 rounded hover:bg-slate-400 max-w-sm'
                          name='sujet'
                          value={sujet}
                          onChange={handleChange}
                          required
                          maxLength={60}
                        />
                      </div>
                      <div className='flex flex-col p-2 items-center'>
                        <label htmlFor="message">Message *</label>
                        <textarea
                          type="text"
                          id="message"
                          className='border-solid border-slate-800 border-2 rounded hover:bg-slate-400 w-56 h-32 min-h-full max-w-xs max-h-36'
                          name="message"
                          value={message}
                          onChange={handleChange}
                          required
                          maxLength={400}
                        ></textarea>
                      </div>
                      <p className='text-center'>* Champ obligatoire</p>
                      {/* <div>
                        <input
                        type='checkbox'
                        className='border-solid border-slate-800 border-2 rounded hover:bg-slate-400'
                        // value={}
                        required
                        />
                      En soumettant ce formulaire, j'accepte que mes données personnelles soient utilisées pour me recontacter.
                       Aucun autre traitement ne sera effectué avec mes informations.
                       Pour connaître et exercer vos droits, veuillez consultez la 
                      </div> */}
                      <button type="submit" 
                      className='rounded bg-slate-800 p-2 m-2 text-white hover:bg-slate-400 max-w-sm mx-auto'>
                        Envoyer
                      </button>
                    </form>
                  </div>
              </section>
  );
};