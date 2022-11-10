// ID retrieval with URL
var urlcourante = document.location.href;
var urlData = new URL(urlcourante);

if (urlData.searchParams.has("id") || urlData.searchParams.has("delete_post")) {
  var id = urlData.searchParams.get("id");
  console.log("id: " + id);
  deletePostId(id);
  console.log("id: " + id);
}

async function deletePostId(id) {
  if (sessionStorage.getItem("user") != null) {
    let UserName = sessionStorage.getItem("user");
    var arrayUser = UserName.split(",");

    var str = window.location.href;
    var url = new URL(str);
    var idPostValue = url.searchParams.get("id");

    const data = {
      idPost: idPostValue,
    };

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
    var idUserPost = dataSearch.idUserPost;

    const dataUpdate = {
      userId: arrayUser[2],
      idPostUser: idUserPost,
      administrateur: arrayUser[4],
    };

    console.log(dataUpdate);

    var requestOptions = {
      method: "DELETE",
      // Variable récupérer dans le LocalStorage
      body: JSON.stringify(dataUpdate),
      // Variable récupérer dans le LocalStorage
      headers: {
        "Content-Type": "application/json",
        Authorization: arrayUser[3],
      },
    };
  } else {
    window.location = "/login#connexion";
    requestOptions = null;
  }

  fetch(`http://localhost:3001/api/poste/deletepost${id}`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      window.location = "/accueil";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
