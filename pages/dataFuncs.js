export function get(queryRef,setData) {
    setData([]);
    var query = queryRef.replaceAll(" ", "+");  
    fetch("https://archive.org/advancedsearch.php?q=title%3A("
    +query+
    ")+AND+mediatype%3A(texts)"+
    "&fl[]=downloads"+
    "&fl[]=name"+
    "&fl[]=title"+
    "&fl[]=year"+
    "&fl[]=creator"+
    "&fl[]=identifier"+
    "&sort[]=downloads+desc&rows=50&page=1&output=json").then((response) =>{
        response.json().then((response) => {setData(response.response.docs)})
    });
}