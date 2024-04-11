{
  const onChangeBackgroundClick = () => {
    background.classList.toggle("dark");
    themeName.innerText = background.classList.contains("dark")
      ? "jasny"
      : "ciemny";
  };

  let background = document.querySelector(".backgr");
  let changeBackgroundButton = document.querySelector(".button");
  let themeName = document.querySelector(".themeName");

  changeBackgroundButton.addEventListener("click", onChangeBackgroundClick);
}
