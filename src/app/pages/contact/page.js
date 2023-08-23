'use client'
import Layout from "../../../components/displayLayout";
import emailjs from 'emailjs-com';
import { useState } from "react";

export default function Contact () {

  const [formData, setFormData] = useState({
    name: '',
    prenom:'',
    email: '',
    sujet: '',
    message: '',
  });

  const { name, prenom, email, sujet, message } = formData;

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
      <Layout>
                <div id='contact'>
                  <form onSubmit={handleSubmit} className='formulaire'>
                    <div className='formulaire_display'>
                      <label htmlFor="name">Nom :</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        required
                        maxLength={20}
                      />
                    </div>
                    <div className='formulaire_display'>
                      <label htmlFor="prenom">Prénom :</label>
                      <input
                        type="text"
                        id="prenom"
                        name="prenom"
                        value={prenom}
                        onChange={handleChange}
                        required
                        maxLength={20}
                      />
                    </div>
                    <div className='formulaire_display'>
                      <label htmlFor="email" >Email :</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        required
                        maxLength={40}
                      />
                    </div>
                    <div className='formulaire_display'>
                      <label htmlFor='sujet' >
                        Sujet :
                      </label>
                      <input
                        type='text'
                        id='sujet'
                        name='sujet'
                        value={sujet}
                        onChange={handleChange}
                        required
                        maxLength={60}
                      />
                    </div>
                    <div className='formulaire_display'>
                      <label htmlFor="message">Message :</label>
                      <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={handleChange}
                        required
                        maxLength={400}
                      ></textarea>
                    </div>
                    <button type="submit" className='submit'>Envoyer</button>
                  </form>
              </div>
      </Layout>
  );
};


//     return(
//         <>
//             <Layout>
//                 <h2>contact</h2>





//             </Layout>
//         </>
//     )
// }