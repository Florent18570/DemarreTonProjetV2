import React from "react";
import Bienvenue from "./accueil/bienvenue";
import { Link } from "react-router-dom";
import appareilPhoto from "../Images/dislike.png";
import fermer from "../../src/Images/fermer.png";
import { toast } from "react-toastify";

class NewPost extends React.Component {
  constructor(props) {
    super(props);

    // console.log(arrayUser);
    this.state = {
      inputTextPost: "toto",
      image: "",
      errorinput: "",
      idUserPost: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    try {
      var str = window.location.href;
      var url = new URL(str);
      var idPostValue = url.searchParams.get("id_postupdate");

      const data = {
        idPost: idPostValue,
      };

      const datasearch = async () => {
        let UserName = sessionStorage.getItem("user");
        let arrayUser = UserName.split(",");
        var requestOptions2 = {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            Authorization: arrayUser[3],
          },
        };
        const response = await fetch(
          `http://localhost:3001/api/poste/getPostSelected`,
          requestOptions2
        );
        const dataSearch = await response.json();
        var datatext = dataSearch.inputTextPost;
        var image = dataSearch.image;
        var idUserPost = dataSearch.idUserPost;
        this.setState({
          inputTextPost: datatext,
          image: image,
          oldImage: image,
          idUserPost: idUserPost,
        });
      };

      datasearch();
    } catch (error) {
      // window.location = "/login";
      console.log("Error:", error);
    }
  }

  handleChange = (e) => {
    this.setState({
      inputTextPost: e.target.value,
    });

    var reg = /^[^@&"()!_$*€£`+=\/;?#]+$/;
    console.log(e.target.value);
    if (!e.target.value.match(reg)) {
      this.setState({
        errorinput: "Les caractères spéciaux ne sont pas accepté",
      });
    } else {
      this.setState({
        errorinput: "",
      });
    }
  };

  handleChangeImage = (e) => {
    const oldImage = this.state.oldImage;
    let UserName = sessionStorage.getItem("user");
    let arrayUser = UserName.split(",");
    var imageNew = document.querySelector("#file").files[0];
    var formData = new FormData();
    formData.append("image", imageNew);
    formData.append("oldimage", oldImage);

    var requestOptions = {
      method: "POST",
      body: formData,
      headers: { Authorization: arrayUser[3] },
    };

    fetch("http://localhost:3001/api/poste/upload", requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        // console.log(data.message);

        var oldImages;
        if (oldImages !== []) {
          oldImages = [];
          console.log("tata");
        }
        oldImages.push(data.message);
        console.log(oldImages);

        this.setState({
          image: data.message,
          oldImage: data.message,
        });
      });
  };

  send = () => {
    let UserName = sessionStorage.getItem("user");
    let arrayUser = UserName.split(",");
    var str = window.location.href;
    var url = new URL(str);
    var idPostValue = url.searchParams.get("id_postupdate");
    const { inputTextPost, image, idUserPost, errorinput } = this.state;

    var validRegex = /^[^@&"()!_$*€£`+=\/;?#]+$/;
    console.log("toto");
    if (errorinput == "") {
      console.log("ça marche");
      const dataUpdate = {
        userId: arrayUser[2],
        nom: arrayUser[0],
        prenom: arrayUser[1],
        inputTextPost: inputTextPost,
        image: image,
        modifierle: true,
        idPostUser: idUserPost,
        administrateur: arrayUser[4],
      };
      console.log(dataUpdate);
      var requestOptions = {
        method: "PUT",
        body: JSON.stringify(dataUpdate),
        // Variable récupérer dans le LocalStorage
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        fetch(
          `http://localhost:3001/api/poste/modifier_post/${idPostValue}`,
          requestOptions
        )
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            window.location = "/accueil";
          })
          .catch((error) => {
            window.location = "/accueil";
            console.log("Error:", error);
          });
      } catch (error) {
        window.location = "/accueil";
        console.log("Error:", error);
      }
    }
  };

  render() {
    return (
      <>
        <section className="bigContainer" id="bigContainer">
          <Bienvenue />
          <div className="modificationPost  ">
            <div class="addPostTop">
              <div className="flex">
                <h2>Modification d'un poste</h2>
                <Link to="/accueil">
                  <img
                    src={fermer}
                    alt="fermer nouveau post"
                    className="img_croix"
                  />
                </Link>
              </div>
            </div>

            <form action="">
              <input
                onChange={this.handleChange}
                className="inputText"
                type="text"
                value={this.state.inputTextPost}
              />
              <br />
              <h9 className="erreur">{this.state.errorinput}</h9>

              <h2>Image du Post : </h2>
              <p>(Seul les fichiers png sont accepté)</p>
              <div className="button_bottom_modifier">
                <input
                  className="buttonImage"
                  type="file"
                  id="file"
                  name="image"
                  accept="image/png"
                  onChange={this.handleChangeImage}
                />
                <img
                  src={`http://localhost/p7-backend/backend/images/${this.state.image}`}
                  alt=""
                />
              </div>
              <button
                onClick={this.send}
                className="modif_publier"
                type="submit"
              >
                Valider
              </button>
            </form>
          </div>
        </section>
      </>
    );
  }
}

export default NewPost;
