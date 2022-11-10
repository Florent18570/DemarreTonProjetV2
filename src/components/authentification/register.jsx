import React from "react";
import "../../styles/main.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

class register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      erreurNom: "",
      prenom: "",
      erreurPrenom: "",
      email: "",
      erreurEmail: "",
      password: "",
      erreurPassword: "",
    };
    sessionStorage.removeItem("inscription");
    sessionStorage.removeItem("deconnexionMessage");
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    // console.log(event.target.value);
    // console.log(event.target.type);
    // console.log(this.state);
  };

  send = async () => {
    try {
      const { nom, prenom, email, password } = this.state;
      const data = {
        nom: nom,
        prenom: prenom,
        email: email,
        password: password,
      };

      var validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      var validRegex2 = /^[A-Za-z\é\è\ê\-]+$/;

      var validePrenom, valideNom, valideEmail;

      if (!nom.match(validRegex2)) {
        this.setState({
          erreurNom: "Nom incorrect",
        });
      } else {
        this.setState({
          erreurNom: "",
        });
        valideNom = "ok";
        if (!prenom.match(validRegex2)) {
          this.setState({
            erreurPrenom: "Prénom incorrect",
          });
        } else {
          this.setState({
            erreurPrenom: "",
          });
          validePrenom = "ok";
          if (!email.match(validRegex)) {
            this.setState({
              erreurEmail: "Email incorrect",
            });
          } else {
            this.setState({
              erreurEmail: "",
            });
            valideEmail = "ok";
          }
        }
      }

      if (valideEmail === "ok" && validePrenom === "ok" && valideNom === "ok") {
        var requestOptions = {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        };

        const response = await fetch(
          `http://localhost:3001/api/auth/signup`,
          requestOptions
        );

        let numberLike = await response.json();
        console.log(numberLike);

        if (numberLike.message === "Utilisateur créé !") {
          var inscription = "inscription";
          sessionStorage.setItem("inscription", inscription);
          window.location.href = "/login";
        } else {
          toast.error(
            "Erreur: L'adresse mail ou le mot de passe existe déjà !",
            {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
        }
      }
    } catch (error) {
      toast.error(
        "Erreur: Erreur de connexion à la base de données. Merci de retenter plus tard ",
        {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
  };

  render() {
    return (
      <div>
        <section>
          <div className="enregistrer">
            <h1> Bienvenue ! </h1>
            <p>Tu es nouveau ? S’inscrire, c’est rapide et facile.</p>
            <Link to="/login">
              <button type="button" className="inscription">
                Connexion
              </button>
            </Link>
          </div>

          <div id="formlogin">
            <div className="login">
              <h1 class="inscription_bottom">Inscription</h1>

              <div class="input-block">
                <label for="">Nom</label>
                <input
                  name="nom"
                  onChange={this.handleChange}
                  value={this.Nom}
                  required
                />
                <p className="erreur">{this.state.erreurNom}</p>
              </div>

              <div class="input-block">
                <label for="">Prénom</label>
                <input
                  name="prenom"
                  onChange={this.handleChange}
                  value={this.prenom}
                  required
                />
                <p className="erreur">{this.state.erreurPrenom}</p>
              </div>

              <div class="input-block">
                <label for="">Email</label>
                <input
                  name="email"
                  className="email"
                  value={this.email}
                  onChange={this.handleChange}
                  required
                />
                <p className="erreur">{this.state.erreurEmail}</p>
              </div>

              <div class="input-block">
                <label for="">Password</label>
                <input
                  name="password"
                  type="password"
                  className="password"
                  value={this.password}
                  onChange={this.handleChange}
                  required
                />
              </div>

              <button type="submit" className="btcvalider" onClick={this.send}>
                Valider
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default register;
