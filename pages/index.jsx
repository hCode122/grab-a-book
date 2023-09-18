import MyApp from "./_app";

// pages/index.js
export default function Home() {
    return (
      <div className="container-fluid p-3 vh-100">
        <h1 className="text-light bg-dark w-25 margin-left p-1" >Grab A Book   |= =|</h1>
        <div className="container-fluid h-25 border-bottom border-dark d-flex justify-content-center align-items-center
        gap" style={{gap: 10 + 'px'}}>
            <input className="w-25 h-25"></input> 
            <button className="btn h-25 btn-dark" style={{width: 3 +'vw'}}>Go</button>
        </div>
        
      </div>
    );
  }