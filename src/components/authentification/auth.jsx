function auth() {
  let UserName = sessionStorage.getItem("user");
  let arrayUser = UserName.split(",");
  console.log(arrayUser);
  console.log(arrayUser);
  console.log(arrayUser);
  return arrayUser;
}

auth();
