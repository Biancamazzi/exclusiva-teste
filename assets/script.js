function toggleMenu () {
  const header = document.getElementById("header");

  if(header.classList.length == 0){
    header.classList.add("open")
  }
  else {
    header.classList.remove("open");
  }
}