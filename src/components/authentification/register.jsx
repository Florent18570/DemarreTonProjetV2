import React from "react";
import "../../styles/main.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

class register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      prenom: "",
      email: "",
      password: "",
    };
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
        window.location = "/login";
      } else {
        toast.error("Erreur: L'adresse mail ou le mot de passe existe déjà !", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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

          <form action="accueil.php" id="formlogin">
            <div className="login">
              <h1 class="inscription_bottom">Inscription</h1>

              <div class="input-block">
                <label for="">Nom</label>
                <input
                  name="nom"
                  onChange={this.handleChange}
                  value={this.Nom}
                />
              </div>

              <div class="input-block">
                <label for="">Prénom</label>
                <input
                  name="prenom"
                  onChange={this.handleChange}
                  value={this.prenom}
                />
              </div>

              <div class="input-block">
                <label for="">Email</label>
                <input
                  name="email"
                  className="email"
                  value={this.email}
                  onChange={this.handleChange}
                />
              </div>

              <div class="input-block">
                <label for="">Password</label>
                <input
                  name="password"
                  type="password"
                  className="password"
                  value={this.password}
                  onChange={this.handleChange}
                />
              </div>

              <button type="button" className="btcvalider" onClick={this.send}>
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
