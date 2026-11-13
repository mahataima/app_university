
function StudentCard({ etudiant, onSupprimer, onModifier }) {
  return (
    <div className="student-card">

      {etudiant.image && (
        <img
          src={etudiant.image}
          alt={etudiant.prenom}
          width="100"
        />
      )}

      <h3>{etudiant.prenom} {etudiant.nom}</h3>

      <p>Filière : {etudiant.filiere}</p>
      <p>Ville : {etudiant.ville}</p>
      <p>Email : {etudiant.email}</p>

      {etudiant.telephone && (
        <p>Téléphone : {etudiant.telephone}</p>
      )}

      {etudiant.annee && (
        <p>Année : {etudiant.annee}</p>
      )}

      {etudiant.groupe && (
        <p>Groupe : {etudiant.groupe}</p>
      )}

      <button onClick={() => onModifier(etudiant.id)}>
        Modifier
      </button>

      <button onClick={() => onSupprimer(etudiant.id)}>
        Supprimer
      </button>

    </div>
  );
}

export default StudentCard;
