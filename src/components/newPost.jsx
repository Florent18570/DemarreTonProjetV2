import React from "react";
import Bienvenue from "./accueil/bienvenue";
import GetPost from "./accueil/postes";
import { Link } from "react-router-dom";
import appareilPhoto from "../Images/dislike.png";
import fermer from "../../src/Images/fermer.png";

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    let UserName = sessionStorage.getItem("user");

    this.state = {
      userId: UserName.userId,
      inputText: "",
      imageURL: "",
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.send = this.send.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      inputText: document.querySelector(".inputText").value,
    });
    // console.log(this.state.inputText);

    // const name = event.target.name;
    // const value = event.target.value;
  };

  send = () => {
    let UserName = sessionStorage.getItem("user");
    let arrayUser = UserName.split(",");

    // const imageURL = document.querySelector(".buttonImage").files[0];

    const date = new Date();

    const inputText = this.state.inputText;

    var formdata = new FormData();
    formdata.append("image", document.getElementById("file").files[0]);
    formdata.append("userId", arrayUser[2]);
    formdata.append("nom", arrayUser[0]);
    formdata.append("prenom", arrayUser[1]);
    formdata.append("inputTextPost", inputText);
    formdata.append("datePost", date);

    console.log(document.getElementById("file").files[0]);

    if (sessionStorage.getItem("user") != null) {
      var requestOptions = {
        method: "POST",
        body: formdata,
        // Variable récupérer dans le LocalStorage
        headers: { Authorization: arrayUser[3] },
      };
    } else {
      window.location = "./login#connexion";
      requestOptions = null;
    }

    try {
      fetch("http://localhost:3001/api/poste/newpost", requestOptions)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);

          window.location = "./accueil";
        })
        .catch((error) => {
          window.location = "./accueil";

          console.log("Error:", error);
        });
    } catch (error) {
      window.location = "/accueil";
      console.log("Error:", error);
      // console.error(error);
    }
  };

  render() {
    return (
      <>
        <section className="bigContainer" id="bigContainer">
          <Bienvenue />
          <div className="newPostContainer">
            <div class="addPostTop">
              <div className="flex">
                <h2>Nouveau Post</h2>
                <Link to="/accueil">
                  <img src={fermer} alt="fermer nouveau post" />
                </Link>
              </div>

              <p>Qu'avez vous à partager ?</p>
            </div>

            <form action="">
              <div className="input-block">
                <input
                  onBlur={this.handleChange}
                  className="inputText"
                  type="text"
                  value={this.state.content}
                />
              </div>

              <div className="button_bottom">
                <input
                  type="file"
                  id="file"
                  className="inputfile"
                  name="imageURL"
                />

                <button onClick={this.send} className="publier" type="submit">
                  Publier
                </button>
              </div>
            </form>
          </div>

          <div>
            <GetPost />
          </div>
        </section>
      </>
    );
  }
}

export default NewPost;
