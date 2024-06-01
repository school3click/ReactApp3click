import "./App.css";
import React, { useState, useEffect } from "react";
import Welcome from "./Welcome";
import { useParams ,Link} from "react-router-dom"
function Home() {
  // Initialize  code js

  const { username } = useParams();
  //constante
  const name = "jane Doe";
  const age = 24;
  const element = <h1> hello world </h1>;

  //object
  // const etudiant = {
  //   nom: " Mohamed Aziz",
  //   prenom: "Ben Ismail",
  //   age: 24,
  // };

  //fonction return user
  function getEtudiant(etudiant) {
    return etudiant;
  }

  //fonction return etudiant
  function getObjectV1(etudiant) {
    return ` Nom ${etudiant.nom}| Prenom ${etudiant.prenom}| Age ${etudiant.age}`;
  }

  function getObjectV2(etudiant) {
    //2
    const results = etudiant.nom + " " + etudiant.prenom + " " + etudiant.age;
    return results;
  }

  const listeEtudiant = [
    { nom: "dorra", prenom: "labidi", age: 55, objectID: 0 },
    { nom: "aziz", prenom: "Ben Ismail", age: 24, objectID: 1 },
    { nom: "thoraya", prenom: "dhawedi", age: 55, objectID: 2 },
    { nom: "islem", prenom: "slema", age: 55, objectID: 3 },
  ];

  const codeCss = {
    color: "#2ecc71",
    fontSize: "26px",
  };

  const [count, setCount] = useState(0); //const count = 0;   setCount(1)

  const [state, setState] = useState("a");

  const [{ color, backround }, setData] = useState({
    color: "red",
    backround: "purple",
  });

  // useEffect(() => {
  //   // document.title = `Vous avez clique ${count} fois`
  //   console.log(`Vous avez clique ${count} fois`);
  // });

  useEffect(() => {

     setTimeout(() => {
       setCount((count) => count + 1);
       console.log(`nombre de compliplastion ${count}`);	

     }, 1000);

   },[count]);

  //useEffect(,[x]) 
  //useEffect(() => {},[x])

  // useEffect(() => {
  //    console.log('cette fonction va etre execute la premiere fois et a chaque modification de la variable count ');
  //    console.log('car le deuxieme argument est count ');
  //    return () => {
  //    console. log('cette partie va etre execute pour nettoyer et lors de loperation unmounting ');
  //    }
  //    }, [state]);

  //useEffect(,[]) 
  //useEffect(() => {},[])

  // useEffect(() => {
  //   console.log('cette fonction va etre execute une fois seulement ');
  //   console.log('car le deuxieme argument est un tableau vide ');
  //   return () => {
  //   console. log(' cette partie va etre execute seulement lors de loperation unmounting ')
  //   }
  //}, [])
    
  //useEffect() 
  //useEffect(() => {})

  // useEffect(() => {
  //   console.log('cette fonction va etre execute chaque re-render');
  //   console.log('car pas de deuxieme argument passer');
  //   });

  return (
    // jsx
    <div className="App">
      <header className="App-header">
        {/* constante */}
        {/* {name}
        <br></br>
        {age}
        {element}

        {/* object */}
        <div className="App-link ">
          {/* {etudiant.nom} {etudiant.prenom} {etudiant.age} */}
        </div>

        {/* <h1>hello {getEtudiant("Oumaima")} </h1>

        <h2>getObjectV1 : {getObjectV1(etudiant)}</h2>
        <h2>getObjectV2 : {getObjectV2(etudiant)}</h2> */}
        {/* 
        {listeEtudiant.map(function (item) {  //function adiya
          return (
            <div key={item.objectID}>
              {item.nom} {item.prenom} {item.age}
            </div>
          );
        })} */}

        {/* {listeEtudiant.map( (item) =>   // function lamda
          (
            <div key={item.objectID}>
              {item.nom} {item.prenom} {item.age}
            </div>
          )
        )} */}

        {/* <table border={1}>
          <thead>
            <tr>
              <td>Nom</td>
              <td>Prenom</td>
              <td>Age</td>
            </tr>
          </thead>
          <tbody> */}
        {/* {listeEtudiant.map(function (item) {
              return (
              <tr key={item.objectID}>
                <td>{item.nom}</td>
                <td>{item.prenom}</td>
                <td>{item.age}</td>
              </tr>
              )
            })} */}

        {/* {listeEtudiant.map( (item) => ( 
            <tr key={item.objectID}>
              <td>{item.nom}</td>
              <td>{item.prenom}</td>
              <td>{item.age}</td>
            </tr>
            ))}
          </tbody>
        </table> */}

        <p className="maClasse"> Formation React 
        
        <div className="userName" >{username}</div></p>
        <Link to="/About/JSX">link</Link>
        {/* 
        <Welcome name="Dora thoraya" /> */}

        {count}
        <button onClick={() => setCount(count + 1)}>Cliquez ici</button>

        {state}
        <button onClick={() => setState(state + "a")}>Ajouter A</button>
        <br />
        <input onChange={(e) => setState(e.target.value)} />

        {color}
        <br />
        {backround}
        <br />
        <input
          onChange={(e) =>
            setData((current) => ({ ...current, color: e.target.value }))
          }
        />
      </header>
    </div>
  );
}

export default Home;
