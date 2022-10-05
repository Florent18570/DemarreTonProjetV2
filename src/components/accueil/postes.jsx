import React, { useState, useEffect } from "react";
import troispoints from "../../Images/troispoints.png";
import coeur from "../../Images/coeur.png";
import down from "../../Images/dislike.png";
import imageProfil from "../../Images/iconeProfil.png";
var moment = require("moment"); // require

const GetPost = () => {
  const [arrayPost, setData] = useState([]);
  const [detailsShown, setDetailShown] = useState([]);
  const [toggle, settoggle] = useState([]);
  // const [like, setlike] = useState([]);

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
      window.location = "./login#connexion";
      requestOptions = null;
    }

    try {
      const response = await fetch(
        "http://localhost:3001/api/poste/getpost",
        requestOptions
      );
      let data = await response.json();

      var arraydata = Object.values(data.reverse());
      console.log(data);

      setData(arraydata);

      // window.setInterval(() => {
      //   interval(data, i);
      // }, 60000);
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

  function datePost(arrayPost) {
    let datepost = new Date(arrayPost);
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

    console.log(dataUpdate);

    var requestOptions = {
      method: "PUT",
      body: JSON.stringify(dataUpdate),
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(
        `http://localhost:3001/api/poste/like/${id}`,
        requestOptions
      );

      let numberLike = await response.json();
      console.log(numberLike.likes);
      // setlike(numberLike.likes);
      window.location.reload();
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const toggleShown = (id) => {
    const shownState = detailsShown.slice();
    const index = shownState.indexOf(id);

    if (index >= 0) {
      shownState.splice(index, 1);
      setDetailShown(shownState);
      settoggle("none");
    } else {
      shownState.push(id);
      setDetailShown(shownState);
      settoggle("toggle");
    }
  };

  function renderTable() {
    return (
      <>
        {arrayPost.map((item) => {
          return (
            <>
              <div className="containerPost" id={"containerPost" + item._id}>
                <div className="containerTop" id={"containerTop" + item._id}>
                  <img src={imageProfil} className="imageProfil" />
                  <h2 className="IdentifiantPost">
                    {item.nom + " " + item.prenom}
                  </h2>

                  <img
                    src={troispoints}
                    alt="imagetroispoints"
                    id={"imagetroispoints" + item._id}
                    className="troispoints"
                    onClick={() => toggleShown(item._id)}
                  />

                  <div className={toggle}>
                    {detailsShown.includes(item._id) && (
                      <a
                        id={"modifier" + item._id}
                        href={`/modifier_post/?id_postupdate=${item._id}`}
                      >
                        <p className="user">Modifier</p>
                      </a>
                    )}
                    {detailsShown.includes(item._id) && (
                      <a
                        id={"suprimer" + item._id}
                        href={`/delete_post/?id=${item._id}`}
                      >
                        <p className="user">Supprimer</p>
                      </a>
                    )}
                  </div>
                </div>

                <div id={"div_bottom" + item._id} className="div_bottom">
                  <div className="headerBottom">
                    <p id={"p" + item._id} className="post">
                      {item.inputTextPost}
                    </p>
                    <nav>{datePost(item.datePost)}</nav>
                  </div>

                  <img
                    id={"img" + item._id}
                    className="imgPost"
                    src={
                      "http://localhost/projet7/backend/images/" + item.image
                    }
                    alt="imagePost"
                  />

                  <div className="avis">
                    <div
                      className="like"
                      id={"like_dislike" + item._id}
                      onClick={() => likeDislikeFunction(item._id, 1)}
                    >
                      <img src={coeur} alt="like" id={"like" + item._id} />
                      <p id={"plike" + item._id}>{item.like}</p>
                    </div>

                    <div
                      className="dislike"
                      id={"like_dislike" + item._id}
                      onClick={() => likeDislikeFunction(item._id, -1)}
                    >
                      <img src={down} alt="dislike" id={"dislike" + item._id} />
                      <p id={"pdislike" + item._id}>{item.dislike}</p>
                    </div>
                  </div>
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
