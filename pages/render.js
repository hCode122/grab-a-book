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
            <div key={id5} className="border border-dark col-3 mt-3 d-flex  flex-column align-items-center">
                <img key={id1} className=' mt-5 w-50'  loading="lazy" style={{minHeight :40+ 'vh'}} src={src}  name='thumbnail'></img>
                <a className='text-danger bg-dark w-50 h-25' key={id2} onClick={() => details(item.identifier)}>
                    <p  className="" name='title'>{item.title}</p>
                </a>
                <div key={id6} className="text-light bg-dark w-50 d-flex justify-content-between">
                    <p key={id3} name='downloads'>{item.downloads} DLs </p>
               
                    <p key={id4} name='date'>{item.year}</p>
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

export const Grid = ({data}) => {
    return(
        <div >
            <div>
                <DisplayItems data={data}></DisplayItems>
            </div>
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