
function StudentCard({ etudiant }) {
  return (
    <div className="student-card">
      <img src={etudiant.photo} alt="Photo étudiant" />
      <h2>Fiche étudiant</h2>
      <p>Nom & Prénom : {etudiant.prenom} {etudiant.nom}</p>
      <p>Email : {etudiant.email}</p>
      <p>Téléphone : {etudiant.telephone}</p>
      <p>Ville : {etudiant.ville}</p>
    </div>
  );
}

export default StudentCard;
