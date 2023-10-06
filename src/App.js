import Diena from "./Diena";





function App() {

  const visuDienuStundas = [
    {
      diena: "otrdiena",
      stundas:[  
          "Datortīkli",
          "Datortīkli",
          "Sistēmu prog",
          "Sistēmu prog"
        ]
    },    
    {
      diena: "tresdiena",
      stundas:[  
          "Datortīkli",
          "Datortīkli",
          "Sistēmu prog",
          "Sistēmu prog"
        ]
    },    
    {
      diena: "ceturtdiena",
      stundas:[  
          "Sistēmu prog",
          "Matemātika",
          "Latviešu valoda",
          "Vēl viena latviešu valoda + kultūra wtf lol"
        ]
    }
  ]

  const dienuSarakstsJSX = visuDienuStundas.map((dienas) => {
    return <Diena nosaukums={dienas.diena} stundas={dienas.stundas}/>
  })


  return (
    <>
      <h1>Hi mom</h1>
        {dienuSarakstsJSX}

      {/* <Diena nosaukums="trešdiena" stundas={tresdienasStundas}/> */}
      {/* <Diena nosaukums="ceturtdiena" stundas={ceturdienasStundas}/> */}
    </>
  );
}

export default App;


// Pieliec trešdienai visas pārstundas