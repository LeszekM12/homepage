{
  const toggleBackground = () => {
    const background = document.querySelector(".backgr");
    const themeName = document.querySelector(".themeName");
    background.classList.toggle("dark");
    themeName.innerText = background.classList.contains("dark")
      ? "jasny"
      : "ciemny";
  };
  const init = () => {
    const changeBackgroundButton = document.querySelector(".button");
    changeBackgroundButton.addEventListener("click", toggleBackground);
  };

  init();

  console.log("Witaj!");

}
