import React from "react";
import Bienvenue from "./accueil/bienvenue";
import { Link } from "react-router-dom";
import appareilPhoto from "../Images/dislike.png";
import fermer from "../../src/Images/fermer.png";

class NewPost extends React.Component {
  constructor(props) {
    super(props);

    // console.log(arrayUser);
    this.state = {
      inputTextPost: "toto",
      image: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    var str = window.location.href;
    var url = new URL(str);
    var idPostValue = url.searchParams.get("id_postupdate");

    const data = {
      idPost: idPostValue,
    };

    console.log(JSON.stringify(data));

    try {
      const datasearch = async () => {
        var requestOptions2 = {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        };
        const response = await fetch(
          `http://localhost:3001/api/poste/getPostSelected`,
          requestOptions2
        );
        const dataSearch = await response.json();
        var datatext = dataSearch.inputTextPost;
        var image = dataSearch.image;

        this.setState({
          inputTextPost: datatext,
          image: image,
          oldImage: image,
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
  };

  handleChangeImage = (e) => {
    // const file = document.getElementById("file").files[0].name;
    // this.setState({
    //   image: file,
    // });

    const oldImage = this.state.oldImage;

    var imageNew = document.querySelector("#file").files[0];
    var formData = new FormData();
    formData.append("image", imageNew);
    formData.append("oldimage", oldImage);

    var requestOptions = {
      method: "POST",
      body: formData,
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
    console.log(idPostValue);

    const date = new Date();
    const { inputTextPost, image } = this.state;

    const dataUpdate = {
      userId: arrayUser[2],
      nom: arrayUser[0],
      prenom: arrayUser[1],
      inputTextPost: inputTextPost,
      datePost: date,
      image: image,
    };

    // if (sessionStorage.getItem("user") != null) {
    //   var requestOptions = {
    //     method: "POST",
    //     body: JSON.stringify(dataUpdate),
    //     // Variable récupérer dans le LocalStorage
    //     headers: { Authorization: arrayUser[3] },
    //   };
    // } else {
    //   window.location = "./login#connexion";
    //   var requestOptions = null;
    // }

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
      // console.error(error);
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

              <h2>Image du Post : </h2>

              <div className="button_bottom_modifier">
                <input
                  className="buttonImage"
                  type="file"
                  id="file"
                  name="image"
                  onChange={this.handleChangeImage}
                />
                <img
                  src={`http://localhost/projet7/backend/images/${this.state.image}`}
                  alt="fermer"
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
