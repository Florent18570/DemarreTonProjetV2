import React, { useState, useEffect } from "react";
import troispoints from "../../Images/troispoints.png";
import coeur from "../../Images/coeur.png";
import imageProfil from "../../Images/iconeProfil.png";
import envoyer from "../../Images/envoyer.png";
import supprimer from "../../Images/delete.png";

var moment = require("moment"); // require

const GetPost = () => {
  const [arrayPost, setData] = useState([]);
  const [comment, setComment] = useState();
  const [dropdown, setDropdown] = useState(null);
  const [dropdowntroispoint, setDropdownTroisPoint] = useState(null);
  const [like, setlike] = useState();

  let UserName = sessionStorage.getItem("user");
  var arrayUser = UserName.split(",");
  const [infoUser, setinfoUser] = useState(arrayUser);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    if (sessionStorage.getItem("user") != null) {
      let UserName = sessionStorage.getItem("user");
      var arrayUser = UserName.split(",");
      var requestOptions = {
        method: "GET",
        // Variable récupérer dans le LocalStorage
        headers: { Authorization: arrayUser[3] },
      };
    } else {
      window.location = "/login#connexion";
      requestOptions = null;
    }

    try {
      const response = await fetch(
        "http://localhost:3001/api/poste/getpost",
        requestOptions
      );
      let data = await response.json();
      var arraydata = Object.values(data.reverse());
      setData(arraydata);
    } catch (error) {
      console.log("Error:", error);
    }
  }

  // function interval() {
  //   for (var y = 0; y < arrayPost.length; y++) {
  //     // console.log(arraydata, y);
  //     datePost(arrayPost, y);
  //   }
  // }

  function datePost(arrayTime, modifierle) {
    let datepost = new Date(arrayTime);
    let dateNow = Date.now();
    let dateDuPost = dateNow - datepost;

    var diff = new moment.duration(dateDuPost);

    var postday = Math.trunc(diff.asDays()); //# of minutes in the duration

    var postdayinHour = postday * 24;
    var postHour = Math.trunc(diff.asHours() - postdayinHour); //# of days in the duration

    var postHour2 = Math.trunc(diff.asHours()); //# of days in the duration
    var postHourinMinute2 = postHour2 * 60;
    var postMinute = Math.trunc(diff.asMinutes() - postHourinMinute2); //# of hours in the duration

    switch (postday) {
      case 0:
        if (modifierle == true) {
          return (
            <p>
              Modifier Il y a {postday} jours et {postHour}h{postMinute}
            </p>
          );
        } else {
          if (postHour === 0) {
            return <h1 key="uniqueId1">Il y a {postMinute} minutes </h1>;
          } else {
            if (postMinute === 0) {
              return <h1 key="uniqueId2"> Il y a {postHour} h</h1>;
            } else {
              return (
                <h1 key="uniqueId2">
                  Il y a {postHour} h {postMinute} minutes
                </h1>
              );
            }
          }
        }

      default:
        return (
          <p>
            Il y a {postday} jours et {postHour}h{postMinute}
          </p>
        );
    }
  }

  const likeDislikeFunction = async (id, choice) => {
    let UserName = sessionStorage.getItem("user");
    var arrayUser = UserName.split(",");
    var dataUpdate;
    if (choice === 1) {
      dataUpdate = {
        userid: arrayUser,
        idPost: id,
        case: 1,
      };
    } else {
      dataUpdate = {
        userid: arrayUser,
        idPost: id,
        case: -1,
      };
    }

    var requestOptions = {
      method: "PUT",
      body: JSON.stringify(dataUpdate),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    try {
      const response = await fetch(
        `http://localhost:3001/api/poste/like/${id}`,
        requestOptions
      );

      var numberLike = await response.json();

      const newData = arrayPost.map((item) => {
        if (item._id == numberLike.Newpost._id) {
          return numberLike.Newpost;
        } else {
          return item;
        }
      });
      setData(newData);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  async function updateComment(id) {
    if (comment != null) {
      let UserName = sessionStorage.getItem("user");
      var arrayUser = UserName.split(",");

      var commentUpdate = {
        userCommentaire: arrayUser[0] + " " + arrayUser[1],
        commentaire: comment,
      };

      var requestOptions = {
        method: "post",
        body: JSON.stringify(commentUpdate),
        headers: {
          "Content-Type": "application/json",
          Authorization: arrayUser[3],
        },
      };
      try {
        const response = await fetch(
          `http://localhost:3001/api/poste/updateComment/${id}`,
          requestOptions
        );

        let etatCommentaire = await response.json();
      } catch (error) {
        console.log("Error:", error);
      }
    }
  }

  const displayComment = (idPost, commentaire, usercommentaire) => {
    return (
      <div className="allCommentaire">
        {commentaire.map((item, index) => {
          return (
            <div className="commentaire">
              <p className="auteur">{usercommentaire[index]}</p>
              <p className="commentaireAuteur">
                {commentaire[index]}
                <img
                  className="supprimer"
                  src={supprimer}
                  alt="supprimer commentaire"
                  onClick={() =>
                    deletecomment(idPost, commentaire, usercommentaire, index)
                  }
                />
              </p>
            </div>
          );
        })}
      </div>
    );
  };

  const clickHandler = (index) => {
    setDropdown((prev) => {
      return prev === index ? null : index;
    });
  };

  const clickHandleryTroisPoint = (index) => {
    console.log("clicked", index);
    setDropdownTroisPoint((prev) => {
      return prev === index ? null : index;
    });
    console.log("clicked", index);
  };

  async function deletecomment(idPost, commentaire, usercommentaire, index) {
    var deletecomment = {
      userCommentaire: usercommentaire,
      commentaire: commentaire,
      index: index,
    };

    console.log(deletecomment);

    var requestOptions = {
      method: "delete",
      body: JSON.stringify(deletecomment),
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(
        `http://localhost:3001/api/poste/deleteComment/${idPost}`,
        requestOptions
      );

      let deletecom = await response.json();
      if (deletecom) {
        window.location.reload();
      }
    } catch (error) {
      console.log("Error:", error);
    }
  }

  function renderTable() {
    return (
      <>
        {arrayPost.map((item) => {
          return (
            <>
              <div
                className="containerPost"
                id={"containerPost" + item._id}
                key={item._id}
              >
                <div className="containerTop" id={"containerTop" + item._id}>
                  <img src={imageProfil} className="imageProfil" />
                  <h2 className="IdentifiantPost">
                    {item.nom + " " + item.prenom}
                  </h2>

                  {(() => {
                    if (infoUser[2] === item.userId) {
                      return (
                        <img
                          src={troispoints}
                          alt="imagetroispoints"
                          id={"imagetroispoints" + item._id}
                          className="troispoints"
                          onClick={() => clickHandleryTroisPoint(item._id)}
                        />
                      );
                    }
                    if (infoUser[4] == "true") {
                      return (
                        <img
                          src={troispoints}
                          alt="imagetroispoints"
                          id={"imagetroispoints" + item._id}
                          className="troispoints"
                          onClick={() => clickHandleryTroisPoint(item._id)}
                        />
                      );
                    }
                  })()}

                  <div
                    className={
                      dropdowntroispoint === item._id ? "toggle" : "hidden"
                    }
                  >
                    <a
                      id={"modifier" + item._id}
                      href={`/modifier_post/?id_postupdate=${item._id}`}
                    >
                      <p className="user">Modifier</p>
                    </a>

                    <a
                      id={"suprimer" + item._id}
                      href={`./delete_post/?id=${item._id}`}
                    >
                      <p className="user">Supprimer</p>
                    </a>
                  </div>
                </div>

                <div id={"div_bottom" + item._id} className="div_bottom">
                  <div className="headerBottom">
                    <p id={"p" + item._id} className="post">
                      {item.inputTextPost}
                    </p>
                    <nav>{datePost(item.datePost, item.modifierle)}</nav>
                  </div>

                  {(() => {
                    if (item.image) {
                      return (
                        <img
                          id={"img" + item._id}
                          className="imgPost"
                          src={
                            "http://localhost/projet7_final/backend/images/" +
                            item.image
                          }
                          alt="imagePost"
                        />
                      );
                    }
                  })()}

                  <div className="avis">
                    <div
                      className="like"
                      id={"like_dislike" + item._id}
                      onClick={() => likeDislikeFunction(item._id, 1)}
                    >
                      <img src={coeur} alt="like" id={"like" + item._id} />
                      <p id={"plike" + item._id}>{item.like}</p>
                    </div>

                    <div id={"commentaire" + item._id}>
                      <button
                        className="btc-commentaire"
                        onClick={() => clickHandler(item._id)}
                      >
                        Commentaire
                      </button>
                    </div>
                  </div>

                  <form
                    className={dropdown === item._id ? "envoie" : "hidden"}
                    action={window.location.reload}
                  >
                    <div>
                      <input
                        type="text"
                        className="comment"
                        onChange={(e) => setComment(e.target.value)}
                        required
                      />

                      <img
                        className="envoyerComment"
                        src={envoyer}
                        type="submit"
                      />

                      <input
                        type="submit"
                        value=""
                        id="image"
                        alt="envoyer"
                        className="envoyerComment"
                        onClick={() => updateComment(item._id)}
                      />
                      {displayComment(
                        item._id,
                        item.commentaire,
                        item.userCommentaire
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  }
  return renderTable();
};

export default GetPost;

// datePost(arraydata, i);
