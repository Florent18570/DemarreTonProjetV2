import React from "react";
import Bienvenue from "./accueil/bienvenue";
import GetPost from "./accueil/postes";
import { toast } from "react-toastify";
class accueil extends React.Component {
  constructor(props) {
    super(props);
    if (sessionStorage.getItem("messageLogin")) {
      toast.success("content de te revoir", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log("sessionStorage");
    }
    sessionStorage.removeItem("messageLogin");
  }

  render() {
    return (
      <>
        <section className="bigContainer" id="bigContainer">
          <Bienvenue />
          <div>
            <GetPost />
          </div>
        </section>
      </>
    );
  }
}

export default accueil;
