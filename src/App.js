import Diena from './Diena.js';
import { useState, useEffect } from 'react'
import styles from './App.module.css'
import banana from './Banana-Single.jpg'


function App() {
    //https://cheese-cake.onthewifi.com/api/lessons
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '/' + mm + '/' + yyyy;

    const [stundas, setStundas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getData() {
            const get = await fetch("https://cheese-cake.onthewifi.com/api/lessons")
            const response = await get.json()

            setStundas(response["IPa22"])
            setLoading(false)
        }
        getData();
    }, [])

    let whatever
    if(!loading){
        whatever = stundas.map((x,y)=>{
            return(<Diena key={y} stundas={x["classes"]}/>)
        })
    }
    


    return (
        <>
            <div>Stundu Saraksts uz {formattedToday}</div>
            {loading?<div class={styles.loader}><img src={banana}/></div> : whatever}
        </>)
}

export default App;