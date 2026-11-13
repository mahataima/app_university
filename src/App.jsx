
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const etudiants = [
    {
      id: 1,
      prenom: "Mohamed",
      nom: "Taima",
      email: "imen2@gmail.com",
      telephone: "+216 99 999 999",
      ville: "Monastir",
      photo: "https://i.pravatar.cc/150?img=12"
    },
    {
      id: 2,
      prenom: "Maha",
      nom: "Taima",
      email: "mahataima@gmail.com",
      telephone: "+216 11 111 111",
      ville: "Mahdia",
      photo: "https://i.pravatar.cc/150?img=47"
    }
  ];

  return (
    <div>
      <Header />
      <Navbar />

      <main id="etudiants" className="students-container">
        {etudiants.map((etudiant) => (
          <StudentCard key={etudiant.id} etudiant={etudiant} />
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;
