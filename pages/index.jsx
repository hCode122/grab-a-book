import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import MyApp from "./_app";
import {ErrorBoundary} from "./utilities"
import {get} from  "./dataFuncs.js";
import {DisplayItems, Grid} from "./render.js";
import spinner1 from "../public/loading.svg";
import book from "../public/book.svg"
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image'


export default function Home() {
    
    const [data,setData] = useState([]);
    const [alrtEr,setEr] = useState('alrt');
    const [renderState, setRender] = useState('');
    var uid = uuidv4();
    useEffect(() => {
        setRender('rendered')
    },[data]);
   
    useEffect(() => {
        
    },[renderState]);

    useEffect(() => {
        
        if (alrtEr == 'alrt1') {
        setTimeout( () => {
            setEr("alrt2")
        },4100)}
    },[alrtEr]);


    const query = useRef(0);
    return (
       
      <div className="container-fluid p-3  vh-100">
        <div className="container-fluid  d-flex justify-content-between">
            <h1 className="text-light bg-dark w-25 margin-left p-1" >Grab A Book  <Image
            style={{paddingLeft:2+'vw', width: '30%', height: 'auto'}} src={book}></Image></h1>
            <Link className="link-underline-dark  text-light bg-dark h-25 p-2 rounded" href="#">About</Link>
        </div>
    
      
        
        <div className="container-fluid h-25 border-bottom border-dark d-flex justify-content-center align-items-center
        gap" style={{gap: 10 + 'px'}}>
            <input onChange={e => {query.current = e.target.value}} className="w-25 h-25" placeholder="Search Archive.org for free books!"></input> 
            <a onClick={() => get(query.current,setData,12,1,setEr,setRender,renderState)} className="btn h-25 btn-dark" style={{width: 3 +'vw'}}>
               Go </a>
        </div>

        <div className="container-fluid">
            {data.length > 0 && renderState == 'rendered'?  (<DisplayItems  data={data}></DisplayItems>) :
             renderState == 'loading' ? 
                <Image key={uid} src={spinner1} width={0}
                        height={0}
                        sizes="30vw"
                        style={{ width: '10%', height: 'auto',position: 'absolute', left:45+'vw' }} // optional
                        />
             : <></>
            }
        </div>
        
            <div className={"alert alert-danger " + alrtEr}  >An error has occurred, please try again</div>
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