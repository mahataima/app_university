
import { useState } from "react";
import "../StudentForm.css";

function StudentForm({ ajouterEtudiant }) {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [filiere, setFiliere] = useState("");
  const [annee, setAnnee] = useState("");
  const [groupe, setGroupe] = useState("");
  const [ville, setVille] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const nouvelEtudiant = {
      nom,
      prenom,
      email,
      telephone,
      filiere,
      annee,
      groupe,
      ville,
      image
    };

    ajouterEtudiant(nouvelEtudiant);

    setNom("");
    setPrenom("");
    setEmail("");
    setTelephone("");
    setFiliere("");
    setAnnee("");
    setGroupe("");
    setVille("");
    setImage("");
    e.target.reset();
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <h2>Ajouter un étudiant</h2>

      <label htmlFor="nom">Nom :</label>
      <input
        type="text"
        id="nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        required
      />

      <label htmlFor="prenom">Prénom :</label>
      <input
        type="text"
        id="prenom"
        value={prenom}
        onChange={(e) => setPrenom(e.target.value)}
        required
      />

      <label htmlFor="email">Email :</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="telephone">Téléphone :</label>
      <input
        type="tel"
        id="telephone"
        value={telephone}
        onChange={(e) => setTelephone(e.target.value)}
        required
      />

      <label htmlFor="filiere">Filière :</label>
      <select
        id="filiere"
        value={filiere}
        onChange={(e) => setFiliere(e.target.value)}
        required
      >
        <option value="">Choisir une filière</option>
        <option value="GLSI">GLSI</option>
        <option value="DSI">DSI</option>
        <option value="RSI">RSI</option>
      </select>

      <label htmlFor="annee">Année d'étude :</label>
      <select
        id="annee"
        value={annee}
        onChange={(e) => setAnnee(e.target.value)}
        required
      >
        <option value="">Choisir une année</option>
        <option value="1ère année">1ère année</option>
        <option value="2ème année">2ème année</option>
        <option value="3ème année">3ème année</option>
      </select>

      <label htmlFor="groupe">Groupe :</label>
      <input
        type="text"
        id="groupe"
        value={groupe}
        onChange={(e) => setGroupe(e.target.value)}
        required
      />

      <label htmlFor="ville">Ville :</label>
      <input
        type="text"
        id="ville"
        value={ville}
        onChange={(e) => setVille(e.target.value)}
        required
      />

      <label htmlFor="image">Photo :</label>
      <input
        type="file"
        id="image"
        accept="image/*"
        onChange={(e) => {
          const fichier = e.target.files[0];

          if (fichier) {
            setImage(URL.createObjectURL(fichier));
          }
        }}
      />

      {image && (
        <img src={image} alt="Photo étudiant" width="100" />
      )}

      <button type="submit">Ajouter</button>
    </form>
  );
}

export default StudentForm;
