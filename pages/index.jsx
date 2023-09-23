import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import MyApp from "./_app";
import {get} from  "./dataFuncs.js";
import {Grid} from "./render.js";
// pages/index.js



export default function Home() {
    const [data,setData] = useState([]);
    const [render, setRender] = useState(false);

    useEffect(() => {
        setRender(true);
    },[data]);


    const query = useRef(0);
    return (
      <div className="container-fluid p-3 vh-100">
        <div className="container-fluid d-flex justify-content-between">
            <h1 className="text-light bg-dark w-25 margin-left p-1" >Grab A Book   |= =|</h1>
            <Link className="link-underline-dark  text-light bg-dark h-25 p-2 rounded" href="#">About</Link>
        </div>
        
        <div className="container-fluid h-25 border-bottom border-dark d-flex justify-content-center align-items-center
        gap" style={{gap: 10 + 'px'}}>
            <input onChange={e => {query.current = e.target.value}} className="w-25 h-25" placeholder="Search Archive.org for free books!"></input> 
            <button onClick={() => get(query.current,setData)} className="btn h-25 btn-dark" style={{width: 3 +'vw'}}>Go</button>
        </div>

        <div >
            {render ?  <Grid  className="bg-dark container-Fluid grid" data={data}></Grid> : <></>}
        </div>
        
      </div>
    );
}


/*
function fetchBooks(data, books,setBooks) {
    setBooks([]);
    data.forEach(id => {
        fetch("https://archive.org/metadata/" + id.identifier)
        .then((response) => {
            response.json().then(response => {

        
                setBooks(books => [...books, response]
                );
            })
        })
    })
}*/