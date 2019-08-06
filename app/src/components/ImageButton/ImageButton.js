import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const ImageButton = props => {
  const [modal, setModal] = useState(false);
  return (
    <section>
      {modal ? (
        <button> home</button>
      ) : (
        <button
          onClick={() => {
            console.log(props);
          }}
        >
          add pic
        </button>
      )}
    </section>
  );
};

export default ImageButton;
