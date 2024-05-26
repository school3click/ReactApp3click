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

  //fonction return user
  function getEtudiant(etudiant){
    return etudiant
  }

  //fonction return etudiant
  function getObjectV1(etudiant){
  return ` Nom ${etudiant.nom}| Prenom ${etudiant.prenom}| Age ${etudiant.age}`
  }

  function getObjectV2(etudiant){
    const results =  etudiant.nom + " " + etudiant.prenom + " " + etudiant.age
    return results
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
      <div className='App-link '> 
         {etudiant.nom} {etudiant.prenom} {etudiant.age}
      </div>
   
      <h1>hello {getEtudiant("Oumaima")} </h1>

      <h2>getObjectV1 : {getObjectV1(etudiant)}</h2>
      <h2>getObjectV2 : {getObjectV2(etudiant)}</h2>


      </header>
    </div>
  );
}

export default App;
