import React from "react";
import { toast } from "react-toastify";
import "../../styles/main.css";
import { Link } from "react-router-dom";

import { useEffect } from "react";

class register extends React.Component {
  constructor(props) {
    super(props);

    if (!window.location.hash) {
      window.location = window.location + "#connexion";
      window.location.reload();
    }
    this.state = {
      email: "",
      password: "",
    };

    if (sessionStorage.getItem("deconnexionMessage")) {
      toast.success("Déconnexion", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    if (document.location.pathname + "#connexion" == "/login#connexion") {
      if (sessionStorage.getItem("inscription") == "inscription") {
        toast.success("inscription réussi ! ", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  send = async () => {
    const { email, password } = this.state;
    const data = {
      email: email,
      password: password,
    };
    // console.log(data);
    if (!email || email.length === 0) {
      return;
    }
    if (!password || password.length === 0) {
      return;
    }

    try {
      fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.success);
          console.log("Sucess:", data);
          if (data.success) {
            console.log("Sucess:", data);

            let arrayUser = [
              data.prenom,
              data.nom,
              data.userId,
              data.token,
              data.Adminisatrateur,
            ];
            console.log(data.Adminisatrateur);
            sessionStorage.setItem("user", arrayUser);

            var loginMessage = "deconnexion";
            sessionStorage.setItem("messageLogin", loginMessage);
            window.location = "/accueil";
          } else {
            toast.error("Mauvais nom d'utilisateur ou mots de passe", {
              position: "bottom-right",
              autoClose: false,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        });
    } catch (error) {
      toast.error("Erreur de connexion à la base de données", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      console.error(error);
    }
  };

  render() {
    return (
      <div>
        <section>
          <div className="enregistrer">
            <h1> Bienvenue ! </h1>
            <p>Tu es nouveau ? S’inscrire, c’est rapide et facile.</p>
            <Link to="/register">
              <button type="button" className="inscription">
                S'inscrire
              </button>
            </Link>
          </div>
          <form action="accueil.php" id="formlogin">
            <div className="login">
              <h1>Connexion à votre compte</h1>

              <div class="input-block">
                <label for="">Email</label>
                <input
                  type="text"
                  name="email"
                  className="input_top"
                  onChange={this.handleChange}
                />
              </div>

              <div class="input-block">
                <label for="">Password</label>
                <input
                  type="password"
                  onChange={this.handleChange}
                  name="password"
                />
              </div>

              <button onClick={this.send} type="button" className="btcvalider">
                Valider
              </button>
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default register;
