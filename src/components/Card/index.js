import React from "react";
import "./style.css";

function Card(props) {

  return (
    <div className="card" onClick={(event) => props.onClick(event)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default Card;

// props = {
//     id: 1,
//     name: "SpongeBob",
//     image: "https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014",
//     job: "Fry Cook",
//     place: "A Pineapple Under the Sea"
// }
