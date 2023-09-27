import { v4 as uuidv4 } from "uuid";

export const DisplayItems = ({ data }) => {
  const items = [];

  for (let item of Object.values(data)) {
    var id1 = uuidv4();
    var id2 = uuidv4();
    var id3 = uuidv4();
    var id4 = uuidv4();
    var id5 = uuidv4();
    var id6 = uuidv4();
    console.log(item.metadata);
    var src = "https://archive.org/services/img/" + item.identifier;
    var i = 0;

    items.push(
      <div  className="card m-2 col-12 col-sm-4 col-lg-2  bg-dark border-dark">
        <img
          key={id1}
          className="m-2 border border-light border-Width-2 card-img-top align-self-center "
          style={{ height: 30 + "vh", maxWidth: 10 + "rem" }}
          loading="lazy"
          src={src}
          name="thumbnail"
        ></img>
        <div className="card-body bg-light">
          <h6
            className=" card-title"
            style={{ overflow: "auto", height: 9 + "vh" }}
          >
            {item.title}
          </h6>
          <div className="mt-1 d-flex flex-column justify-content-end align-items-center ">
            <div
              className="mt-4 text-center d-flex flex-column justify-content-start align-items-between"
              style={{ height: 15 + "vh" }}
            >
              <p
                className="card-subtitle text-muted"
                style={{ height: 3 + "vh" }}
              >
                {item.year ? "Year: " + item.year : "Unknown"}
              </p>
              <p
                className="card-subtitle text-muted mt-2"
                style={{ overflow: "auto", height: 7 + "vh" }}
              >
                {item.creator ? "Author: " + item.creator : "Unknown"}
              </p>
              <p
                className="card-subtitle text-muted mt-1"
                style={{ height: 3 + "vh" }}
              >
                {item.downloads ? "Downloads: " + item.downloads : "Unknown"}
              </p>
            </div>

            <a
              href="#"
              className=" w-75 mt-3 btn border border-primary bg-dark text-primary"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    );
  }

  return <div className="row justify-content-center">{items}</div>;
};

function details(id) {
  console.log(id);
  fetch("https://archive.org/details/" + id).then((response) => {
    response.json().then((response) => {
      console.log(response);
    });
  });
}
