const os_dark = window.matchMedia("(prefers-color-scheme: dark)");


function dark_mode_on() {
  mode_remove()
  document.documentElement.classList.add("darkmode");

}

function dark_mode_off(){
  mode_remove()
document.documentElement.classList.add("lightmode");
}

function mode_remove(){
  document.documentElement.classList.remove("darkmode");
  document.documentElement.classList.remove("lightmode");
}

const listener = (event) => {
  if (event.matches) {
    dark_mode_on();
  } else {
    dark_mode_off();
  }
};

os_dark.addEventListener("change", listener);


listener(os_dark);
