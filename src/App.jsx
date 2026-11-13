
import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import StudentCard from "./components/StudentCard";
import StudentForm from "./components/StudentForm";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [etudiants, setEtudiants] = useState([
    {
      id: 1,
      nom: "Taima",
      prenom: "Maha",
      filiere: "GLSI",
      ville: "Mahdia",
      email: "maha@example.com"
    },
    {
      id: 2,
      nom: "Boubaker",
      prenom: "Slim",
      filiere: "GLSI",
      ville: "Monastir",
      email: "slim@example.com"
    },
    {
      id: 3,
      nom: "Trabelsi",
      prenom: "Sarra",
      filiere: "GLSI",
      ville: "Sousse",
      email: "sarra@example.com"
    }
  ]);

  const [recherche, setRecherche] = useState("");

  // Ajouter un étudiant
  const ajouterEtudiant = (nouvelEtudiant) => {
    const etudiantAvecId = {
      ...nouvelEtudiant,
      id: Date.now()
    };

    setEtudiants([...etudiants, etudiantAvecId]);
  };

  // Supprimer un étudiant
  const supprimerEtudiant = (id) => {
    setEtudiants(
      etudiants.filter((etudiant) => etudiant.id !== id)
    );
  };

  // Modifier un étudiant
  const modifierEtudiant = (id) => {
    const nouvelPrenom = prompt("Entrer le nouveau prénom :");

    if (nouvelPrenom && nouvelPrenom.trim() !== "") {
      setEtudiants(
        etudiants.map((etudiant) =>
          etudiant.id === id
            ? { ...etudiant, prenom: nouvelPrenom }
            : etudiant
        )
      );
    }
  };

  // Rechercher un étudiant
  const etudiantsFiltres = etudiants.filter((etudiant) =>
    `${etudiant.nom} ${etudiant.prenom} ${etudiant.filiere}`
      .toLowerCase()
      .includes(recherche.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <Navbar />

      <main>
        <h1>Gestion des étudiants</h1>

        <StudentForm ajouterEtudiant={ajouterEtudiant} />

        <div className="recherche">
          <input
            type="text"
            placeholder="Rechercher un étudiant..."
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
          />
        </div>

        <div className="students-container">
          {etudiantsFiltres.length > 0 ? (
            etudiantsFiltres.map((etudiant) => (
              <StudentCard
                key={etudiant.id}
                etudiant={etudiant}
                onSupprimer={supprimerEtudiant}
                onModifier={modifierEtudiant}
              />
            ))
          ) : (
            <p>Aucun étudiant trouvé.</p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
