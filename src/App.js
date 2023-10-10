import Diena from './Diena.js';
const visasStundas = [
    {
        diena_nos: "Pirmdiena",
        stundas_s: ['Sports','Dabaszinibas','Socialas zinibas','Krievu valoda'],    
    },
    { 
        diena_nos: "Otrdiena",
        stundas_s: ['Sports','Dabaszinibas','Socialas zinibas','Krievu valoda'],
    },
    {
        diena_nos: "Tresdiena",
        stundas_s: ['Sports','Dabaszinibas','Socialas zinibas','Krievu valoda'],
    },
    {
        diena_nos: "Ceturtdiena",
        stundas_s: ['Sports','Dabaszinibas','Socialas zinibas','Krievu valoda'],
    },
    {
        diena_nos: "Piektdiena",
        stundas_s: ['Sports','Dabaszinibas','Socialas zinibas','Krievu valoda']
    }
]

const DienasJSX = visasStundas.map((Sodiena) => {
    // console.log(Sodiena.diena_nos + " : " + Sodiena.stundas_s)
    return <Diena diena={Sodiena.diena_nos} stundas={Sodiena.stundas_s}/>
})


function App(){


    return (
    <>
    <div>Stundu Saraksts jau šodien</div>
    {DienasJSX}
    </>)
} 

export default App;