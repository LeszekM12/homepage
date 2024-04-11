{
  const onChangeBackgroundClick = () => {
    const background = document.querySelector(".backgr");
    const themeName = document.querySelector(".themeName");
    background.classList.toggle("dark");
    themeName.innerText = background.classList.contains("dark")
      ? "jasny"
      : "ciemny";
  };
  const init = () => {
    let changeBackgroundButton = document.querySelector(".button");

    changeBackgroundButton.addEventListener("click", onChangeBackgroundClick);
  };

  init();

}
