const ti = document.getElementById("title");
const tx = document.getElementById("text");
const sv = document.getElementById("save");
const oa = document.getElementById("outarea")
const tio = document.getElementById("titleoutput");
const txo = document.getElementById("textoutput");
ti.addEventListener("input", () => {
  sessionStorage.setItem("titlep",ti.value);
  tio.innerText=sessionStorage.getItem("titlep");
})
tx.addEventListener("input", () => {
  sessionStorage.setItem("textp",tx.value);
  txo.innerText=sessionStorage.getItem("textp");
})
addEventListener("load",() =>{
  if(sessionStorage.getItem("titlep") == null){
     tio.innerText ="ここに題目が入ります。";
     } else{
    ti.value=sessionStorage.getItem("titlep");
    tio.innerText=sessionStorage.getItem("titlep");
  } if(sessionStorage.getItem("textp")==null){
    txo.innerText = "ここに本文が入ります。"
  } else{
    tx.value=sessionStorage.getItem("textp");
    txo.innerText=sessionStorage.getItem("textp");
  }
})
sv.addEventListener("click",() =>{
  const filename =  ti.value + ".pdf";
  html2pdf(oa).save(filename);
})
