import Link from "next/link";
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect, useRef } from "react";
import MyApp from "./_app";


// pages/index.js

function get(queryRef,setData) {
    setData([]);
    var query = queryRef.replaceAll(" ", "+");  
    fetch("https://archive.org/advancedsearch.php?q=title%3A("
    +query+
    ")+AND+mediatype%3A(texts)"+
    "&fl[]=downloads"+
    "&fl[]=name"+
    "&fl[]=title"+
    "&fl[]=year"+
    "&fl[]=identifier"+
    "&sort[]=downloads+desc&rows=50&page=1&output=json").then((response) =>{
        response.json().then((response) => {setData(response.response.docs)})
    });
}

export default  function Home() {
    const [data,setData] = useState([]);
    const [books,setBooks] = useState([]);
    const [render, setRender] = useState(false);

    useEffect(() => {
        setRender(true);
    },[data]);

    useEffect(() => {
        setRender(true);
    },[books]);

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
            {render ?  <Grid className="container-Fluid grid" data={data}></Grid> : <></>}
        </div>
        
      </div>
    );
}

function display(data, setBooks) {
    
    fetchBooks(data, setBooks);

}

const DisplayItems = ({data}) => {
    const items = [];
    console.log(data);
    for (let item of Object.values(data)) {
        var id1 = uuidv4();
        var id2 = uuidv4();
        var id3 = uuidv4();
        var id4 = uuidv4();
        var id5 = uuidv4();
        var id6 = uuidv4();
        console.log(item.metadata);
        var src = 'https://archive.org/services/img/'+item.identifier;
        var rows = [];
        var minarr = [];
        var i = 0;
       
        items.push(
            <div key={id5} className="bg-red col-sm-3 mb-5 d-flex  flex-column align-items-center">
                <img key={id1} loading="lazy" style={{minHeight :40+ 'vh'}} src={src}  name='thumbnail'></img>
                <div style={{minHeight:10+'vh'}} className="d-flex  flex-column justify-content-between w-50 mt-3">
                    <p key={id2} className="" name='title'>{item.title}</p>
                    <div key={id6} className="w-50 d-flex justify-content-between">
                        <p key={id3} name='downloads'>{item.downloads} DLs </p>
                        <p key={id3} name='border'> | </p>
                        <p key={id4} name='date'>{item.year}</p>
                    </div>
                </div>
            </div>
        )
    }

    while (i < items.length) {
        rows.push(
            <div className="row"> 
                {items[i]}
                {items[i+1]}
                {items[i+2]}
                {items[i+3]}
            </div>
        )
        i = i +1;
       if (i + 4 < items.length) {
        i = i +4;
       } else if (i + 4 > items.length && i != items.length) {
        i = i + (items.length - 1 - i);
       } else {break};
    }
    return (
        <>
            {rows}
        </>
    )   

}

const Grid = ({data}) => {
    return(
        <div >
            <div>
                <DisplayItems data={data}></DisplayItems>
            </div>
        </div>
    )
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