import React, { useState } from "react";
import Bienvenue from "./accueil/bienvenue";
import GetPost from "./accueil/postes";
import { Link } from "react-router-dom";
import fermer from "../../src/Images/fermer.png";

// import { toast } from "react-toastify";

const NewPost = () => {
  const [inputText, setInputText] = useState([]);
  const [file, setFile] = useState([]);
  const [errorInput, setErrorInput] = useState([]);

  const send = () => {
    if (errorInput == "") {
      let UserName = sessionStorage.getItem("user");
      let arrayUser = UserName.split(",");
      const date = new Date();

      var formdata = new FormData();
      formdata.append("userId", arrayUser[2]);
      formdata.append("nom", arrayUser[0]);
      formdata.append("prenom", arrayUser[1]);
      formdata.append("datePost", date);
      formdata.append("text", inputText);
      formdata.append("image", file);
      const data = Object.fromEntries(formdata);
      console.log(data);

      var requestOptions = {
        method: "POST",
        body: formdata,
      };

      fetch(
        "https://projetopenclassroom.herokuapp.com/api/poste/newpost",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    }
  };

  return (
    <>
      <section className="bigContainer" id="bigContainer">
        <Bienvenue />
        <div className="newPostContainer">
          <div class="addPostTop">
            <div className="flex">
              <h2>Nouveau Post</h2>
              <Link to="/P7_Openclassroom/accueil">
                <img src={fermer} alt="fermer nouveau post" />
              </Link>
            </div>

            <p>Qu'avez vous à partager ?</p>
          </div>

          <form>
            <div className="input-block">
              <input
                className="inputText"
                type="text"
                value={inputText}
                onChange={(event) => {
                  const input = event.target.value;
                  setInputText(input);
                  var reg = /^[^@&"()!_$*€£`+=\/;?#]+$/;
                  console.log(input);
                  if (!input.match(reg)) {
                    setErrorInput(
                      "Les caractères spéciaux ne sont pas accepté"
                    );
                  } else {
                    setErrorInput("");
                  }
                }}
                required
              />
              <br />
              <h9 className="erreur">{errorInput}</h9>
            </div>
            <p>Une image à partager ?</p>
            <h9>
              (Seul les fichiers png sont accepté, les images aux mauvais
              formats seront ignorées )
            </h9>
            <div className="button_bottom">
              <input
                type="file"
                id="file"
                className="inputfile"
                accept="image/png"
                name="file"
                onChange={(event) => {
                  const file = event.target.files[0];
                  setFile(file);
                }}
              />
              <button type="submit" onClick={send} className="publier">
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
};

export default NewPost;
