import logo from './logo.svg';
import './App.css';

function App() {
  // Initialize  code js

  //constante
  const name = "jane Doe";
  const age = 24;
  const element = <h1> hello world </h1>;

  //object
  const etudiant = {
    nom : " Mohamed Aziz",
    prenom : "Ben Ismail",
    age : 24,
  }

  return (
    // HTML pro
    <div className="App">
      <header className="App-header">
        
      {/* constante */}
        {name}
        <br></br>
        {age}
        {element}

      {/* object */}
      {etudiant.nom} {etudiant.prenom} {etudiant.age}

      </header>
    </div>
  );
}

export default App;
