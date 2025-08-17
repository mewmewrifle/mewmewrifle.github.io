if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark')
  sessionStorage.theme = 'dark';
} else {
  document.documentElement.classList.remove('dark')
  sessionStorage.theme = 'light';
}
const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener("click", () => {
  toggleDarkMode();
})
const toggleDarkMode = () => {
  if (sessionStorage.theme === 'dark') {
    document.documentElement.classList.remove('dark')
    sessionStorage.theme = 'light';
    lt()
  } else {
    document.documentElement.classList.add('dark')
    sessionStorage.theme = 'dark';
    dk()
  }
}

const ovs = document.getElementById("ovserver");
const cht = document.getElementById("chated");
const btn = document.getElementById("button");
var btnAf = false;

const lt =function(){
  var now = new Date();
  var YearValue = now.getFullYear();
  var MonthValue = now.getMonth()+1;
  var DateValue = now.getDate();
  var HourValue = now.getHours();
  var MinValue = now.getMinutes();
  var SecValue = now.getSeconds();
  var gettime = YearValue + "/" + MonthValue + "/" + DateValue + " " + HourValue + ":" + MinValue + ":" + SecValue;
  var baby = document.createElement("li");
  baby.innerHTML = gettime + "ボタンがクリックされてライトモードになりました";
  cht.appendChild(baby)
}
const dk =function(){
  var now = new Date();
  var YearValue = now.getFullYear();
  var MonthValue = now.getMonth()+1;
  var DateValue = now.getDate();
  var HourValue = now.getHours();
  var MinValue = now.getMinutes();
  var SecValue = now.getSeconds();
  var gettime = YearValue + "/" + MonthValue + "/" + DateValue + " " + HourValue + ":" + MinValue + ":" + SecValue;
  var baby = document.createElement("li");
  baby.innerHTML = gettime + "ボタンがクリックされてダークモードになりました";
  cht.appendChild(baby)
}
btn.addEventListener("click", () =>{
  var now = new Date();
  var YearValue = now.getFullYear();
  var MonthValue = now.getMonth()+1;
  var DateValue = now.getDate();
  var HourValue = now.getHours();
  var MinValue = now.getMinutes();
  var SecValue = now.getSeconds();
  var gettime = YearValue + "/" + MonthValue + "/" + DateValue + " " + HourValue + ":" + MinValue + ":" + SecValue;
  var baby = document.createElement("li");
  baby.innerHTML = gettime + "ボタンがクリックされました";
  cht.appendChild(baby)
})
btn.addEventListener("dragstart", (event) =>{
  btnAf=true;
})
btn.addEventListener("dragend", (event) => {
  if(btnAf == true){
  var now = new Date();
  var YearValue = now.getFullYear();
  var MonthValue = now.getMonth()+1;
  var DateValue = now.getDate();
  var HourValue = now.getHours();
  var MinValue = now.getMinutes();
  var SecValue = now.getSeconds();
  var gettime = YearValue + "/" + MonthValue + "/" + DateValue + " " + HourValue + ":" + MinValue + ":" + SecValue;
  var baby = document.createElement("li");
  baby.innerHTML = gettime + "ボタンがドラッグされました";
  cht.appendChild(baby)
  }
});

function throttle(anonymousFunction, limit)
{
    let lastFunctionTimerId;
    let lastExecute;

    return function() {
        const context = this;
        const args = arguments;

        if (!lastExecute) {
            anonymousFunction.apply(context, args);
            lastExecute = Date.now();
            return;
        }

        clearTimeout(lastFunctionTimerId);
        lastFunctionTimerId = setTimeout(function() {
            anonymousFunction.apply(context, args);
            lastExecute = Date.now();

        }, limit - (Date.now() - lastExecute));
    }
}



const clickEvent = throttle(function() {
      var now = new Date();
  var YearValue = now.getFullYear();
  var MonthValue = now.getMonth()+1;
  var DateValue = now.getDate();
  var HourValue = now.getHours();
  var MinValue = now.getMinutes();
  var SecValue = now.getSeconds();
  var gettime = YearValue + "/" + MonthValue + "/" + DateValue + " " + HourValue + ":" + MinValue + ":" + SecValue;
  var baby = document.createElement("li");
  baby.innerHTML = gettime + "ウィンドウサイズが変更されました";
  cht.appendChild(baby);
}, 1000);


window.addEventListener('load', function() {
    window.addEventListener('resize', clickEvent);
});

