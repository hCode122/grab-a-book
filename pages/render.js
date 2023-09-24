import { v4 as uuidv4 } from 'uuid';

export const DisplayItems = ({data,setDet}) => {
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
            <div key={id5} className="col-12 col-sm-6 col-lg-3 mt-5 ">
                <div className='card border bg-dark  border-dark '>
                    <img key={id1} className='pt-3 card-img-top align-self-center ' style={{height:30+'vh', maxWidth: 10 +'rem'}}  loading="lazy"  src={src}  name='thumbnail'></img>
                    <div className='bg-light card-body text-start border border-dark' style={{minHeight:27+'vh',maxHeight:35+'vh'}}>
                        <h5 className='text-dark card-title ' key={id2} onClick={() => details(item.identifier)}>
                           {item.title}
                        </h5>
                        <h6 className='card-subtitle mt-4 text-muted'>{item.creator} - {item.year} - {item.downloads} DLs</h6>
                        
                        <form className='d-flex justify-content-between'>
                        <button className='mt-4 btn btn-dark'>Download</button>
                        <div className='dropdown'>
                            <button class="mt-4 btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Select Format
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                
           
        )
    }

   
    return (
        <div className='row justify-content-center'>
            {items}
        </div>
    )


}


function details(id) {
    console.log(id);
    fetch("https://archive.org/details/"+id).then(response =>{
            response.json().then(response =>
                {  
                    console.log(response);
                })
        }
    )
}