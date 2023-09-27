import {ErrorBoundary} from "./utilities"

export function get(queryRef,setData,nRes=10, p=1,setEr,setRender) {
    
    var query = queryRef.replaceAll(" ", "+");  
    setRender('loading');
    
    fetch("https://archive.org/advancedsearch.php?q=title%3A("
    +query+
    ")+AND+mediatype%3A(texts)"+
    "&fl[]=downloads"+
    "&fl[]=name"+
    "&fl[]=title"+
    "&fl[]=year"+
    "&fl[]=creator"+
    "&fl[]=identifier"+
    "&sort[]=downloads&rows="+nRes+"&page="+p+"&output=json").then((response) =>{
        
        if (response.ok) {
            return response.json();}
    }).then((response) => {setData(response.response.docs)}).catch( e =>
            setEr('alrt1')
        )


}