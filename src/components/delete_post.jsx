// ID retrieval with URL
var urlcourante = document.location.href;
var urlData = new URL(urlcourante);

if (urlData.searchParams.has("id") || urlData.searchParams.has("delete_post")) {
  var id = urlData.searchParams.get("id");
  console.log("id: " + id);
  deletePostId(id);
  console.log("id: " + id);
}

function deletePostId(id) {
  if (sessionStorage.getItem("user") != null) {
    let UserName = sessionStorage.getItem("user");
    var arrayUser = UserName.split(",");

    var requestOptions = {
      method: "DELETE",
      // Variable récupérer dans le LocalStorage
      headers: { Authorization: arrayUser[3] },
    };
  } else {
    window.location = "./login#connexion";
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
