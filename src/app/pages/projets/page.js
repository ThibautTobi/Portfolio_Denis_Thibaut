import Layout from "../../../components/displayLayout";
import { dataProjets } from "@/data/data_projets";

export default function Projets (){

    return(
      <Layout>
        <h2>Projets</h2>
        {dataProjets.map((item, index) => (
          <div key={index}>
            <h2>{item.name}</h2>
            <h3>{item.projet}</h3>
            <img src={item.image} alt={item.name}/>
            <a href={item.lien}>Lien vers le projet</a>
            <h3>langages utilisés</h3>
            <ul>
              {item.langage.map((lang) => (
                <li key={lang}>{lang}</li>
              ))}
            </ul>
            <h3>les Problématiques rencontrées</h3>
            <p>{item.problematique}</p>
            <h3>les compétences utilisées</h3>
            <ul>
              {item.competence.map((comp, index) => (
                <li key={index}>{comp}</li>
              ))}
            </ul>
          </div>
        ))}
      </Layout>
    )
}