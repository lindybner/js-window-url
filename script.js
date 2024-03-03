window.onload = () => {
  // var
  const display = document.getElementById("display");

  // function
  const getWindowURL = () => {
    return window.location.href;
  };

  display.innerHTML = getWindowURL();
};
