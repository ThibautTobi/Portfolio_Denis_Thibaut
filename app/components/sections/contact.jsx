'use client'
import Image from 'next/image';
import emailjs from 'emailjs-com';
import { useState } from "react";
import enveloppe from '../../../public/icone/icone_envelope.svg';
import InputComposant from '../inputComposant';

// ajouter une modale pop up ou remplacer le formulaire par un message envoie reussi
// quand le nous contacter est envoyer pour confirmer ou avertir d'une erreur et rééssayer l'envoie .

export default function Contact() {
  // État pour stocker les données du formulaire
  const [formData, setFormData] = useState({
    name: '',
    prenom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
  });
  // État pour stocker les retours après soumission du formulaire
  const [feedback, setFeedback] = useState(null);
  // Gestionnaire de changement pour les champs du formulaire
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // Gestionnaire de soumission du formulaire
  const handleSubmit = async (e) => {
    // Empeche le comportement par default de recharger la page
    e.preventDefault();
    // Réinitialise le feedback avant une nouvelle soumission pour eviter des anciens message ou incorrects
    setFeedback(null); 


    try {
      // Envoi du formulaire via emailjs
      const result = await emailjs.sendForm(
        'service_portfolio',
        'template_6zkvgc6',
        e.target,
        'XSaRwpZUYQrzWinOX'
      );
      // Vérifie si l'envoi est réussi code 200
      if (result.status === 200){
      // Mise à jour des retours après soumission réussie
      setFeedback("Le formulaire a été soumis avec succès.");
      // Réinitialisation des données du formulaire
      setFormData({ name: '', prenom: '', email: '', telephone:'', sujet: '', message: '' });
      } else {
        setFeedback("Une erreur s'est produite lors de la soumission du formulaire.")
      }
    } catch (error) {
      // Mise à jour des retours en cas d'erreur avec emailJs
      setFeedback("Une erreur s'est produite lors de la connexion pour l'envoi du formulaire.");
    }
  };

  return (
    <section id="contact" className='dark:bg-neutral-400 text-center mt-16 mb-16 p-4 w-4/5 bg-slate-400 rounded-xl m-auto shadow-combined'>
      <Image
        src={enveloppe}
        alt='enveloppe'
        width={130}
        height={130}
        className='inline m-3'
      />
      <div>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <InputComposant label="Nom" name="name" value={formData.name} type="text" required={true} maxLength={20} onChange={handleChange} />
          <InputComposant label="Prénom" name="prenom" value={formData.prenom} type="text" required={true} maxLength={20} onChange={handleChange} />
          <InputComposant label="Email" name="email" value={formData.email} type="email" required={true} maxLength={40} onChange={handleChange} />
          <InputComposant label="Téléphone" name="telephone" value={formData.telephone} type="text" required={false} maxLength={20} onChange={handleChange} />
          <InputComposant label="Sujet" name="sujet" value={formData.sujet} type="text" required={true} maxLength={60} onChange={handleChange} />

          <div className='flex flex-col p-2 items-center'>
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              className='border-solid border-slate-800 border-2 rounded w-56 h-32 min-h-full max-w-xs max-h-36'
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              maxLength={400}
            ></textarea>
          </div>

          <p className='text-center'>* Champ obligatoire</p>

          <button type="submit"
            className='rounded bg-slate-800 p-2 m-2 text-white hover:bg-white hover:text-slate-800 max-w-sm mx-auto'>
            Envoyer
          </button>
        </form>

        {feedback && <div  className="dark:text-stone-800 dark:border-neutral-600 mt-4 p-2 text-center font-bold rounded-lg bg-white text-slate-800 border-solid border-4 border-slate-800">{feedback}</div>}
      </div>
    </section>
  );
};