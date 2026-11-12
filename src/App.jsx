import "./App.css";


function App() {
    return (
        <div className="container">
            <h1>Fiche Etudiant</h1>
            <div className="fiche"> 
                <img 
                src="/etudiant.jpg"
                alt=" photo de l'etudiante"
                className="photo"
                />

               
            <p>
               <strong>Nom& prenom:</strong> Maha Taima</p> 
            <p><strong> Email:</strong>mahataima@gamil.com</p>
            <p><strong>telephone:</strong> 25 123 478</p>
            <p><strong>Filiere:</strong>Genie Logiciel et Systeme d'information.</p>
            <p><strong>anee d'etude:</strong> </p>
            <p><strong>Groupe:</strong>GLSI2</p>
            <p><strong>Ville:</strong>Mahdia</p>
             <a
                    href="mailto:mahataima@.com"
                    className="btn-contact"
                >
                    Contacter
                </a>
            </div>
            </div>

    );
}
export default App;