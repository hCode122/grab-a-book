import { v4 as uuidv4 } from "uuid";
import { useRef } from "react";
import { Modal } from 'react-bootstrap';
export const DisplayItems = ({ data }) => {
  const items = [];

  for (let item of Object.values(data)) {
    var id = [];
    id[0] = uuidv4();
    id[1] = uuidv4();
    id[2] = uuidv4();
    id[3] = uuidv4();
    id[4] = uuidv4();
    id[5] = uuidv4();
    id[6] = uuidv4();
    id[7] = uuidv4();
    id[8] = uuidv4(); 
    console.log(item.metadata);
    var src = "https://archive.org/services/img/" + item.identifier;
    var i = 0;

    items.push(
      <BookCard item={item} src={src} id={id}></BookCard>
    );
  }

  return (
        <div className="row justify-content-center">
            {items}
            <BookCardMain></BookCardMain>
        </div>);
};

const BookCardMain = () => {
    return (
        
        <div  tabIndex={-1} className="modal" role="dialog">
            <div className="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>Modal body text goes here.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary">Save changes</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
    )
}

const BookCard = ({item,src,id}) => {
    const modalRef = useRef();
      
    const showModal = () => {
          const modalEle = modalRef.current
          const bsModal = new Modal(modalEle, {
              backdrop: 'static',
              keyboard: false
          })
          bsModal.show()
    }

    return (
        <div key={id[1]} className="card m-2 col-12 col-sm-4 col-lg-2 bg-dark border-dark">
        <img alt='book cover photo'
          key={id[1]}
          className="m-2 border border-light border-Width-2 card-img-top align-self-center "
          style={{ height: 30 + "vh", maxWidth: 10 + "rem" }}
          loading="lazy"
          src={src}
          name="thumbnail"
        ></img>
        <div key={id[2]} className="card-body rounded bg-light">
          <h6 key={id[3]}
            className=" card-title"
            style={{ overflow: "auto", height: 9 + "vh" }}
          >
            {item.title}
          </h6>
          <div key={id[4]} className="mt-1 d-flex flex-column justify-content-end align-items-center ">
            <div key={id[5]}
              className="mt-4 text-center d-flex flex-column justify-content-start align-items-between"
              style={{ height: 15 + "vh" }}
            >
              <p key={id[6]}
                className="card-subtitle text-muted"
                style={{ height: 3 + "vh" }}
              >
                {item.year ? "Year: " + item.year : "Unknown"}
              </p>
              <p key={id[7]}
                className="card-subtitle text-muted mt-2"
                style={{ overflow: "auto", height: 7 + "vh" }}
              >
                {item.creator ? "Author: " + item.creator : "Unknown"}
              </p>
              <p key={id[8]}
                className="card-subtitle text-muted mt-1"
                style={{ height: 3 + "vh" }}
              >
                {item.downloads ? "Downloads: " + item.downloads : "Unknown"}
              </p>
            </div>

            <a
              href={"https://archive.org/details/"+item.identifier}
              className=" w-75 mt-3 btn border border-primary bg-dark text-light" 
            >
              View on Archive.org
            </a>
          </div>
        </div>
        <Modale item={item} src={src}></Modale>
      </div>
    )
}

function details(id,showModal) {
  console.log(id);
  fetch("https://archive.org/details/"+id).then(response => {
    response.json().then(response => {
      console.log(response),showModal();
    })
  })
  
}

const Modale = ({item,src}) => {
    
  

  const hideModal = () => {
    const modalEle = modalRef.current
    const bsModal= Modal.getInstance(modalEle)
    bsModal.hide()
  }

  return(
    <div className="addEmployee">
        <div className="modal fade"tabIndex="-1" >
         <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">{item.title}</h5>
                <button type="button" className="btn-close"   aria-label="Close"></button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" >Close</button>
                <button type="button"  className="btn btn-primary">Understood</button>
              </div>
            </div>
          </div>
        </div>
    </div>
)
                   
        
    
}
