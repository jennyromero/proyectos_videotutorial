const txtn1=document.getElementById("n1")
const txtn2=document.getElementById("n2")
const respuesta=document.getElementById("resp")
const_btncalcular = document.getElementsById("calcular")
("calcular")
btncalcular.addEventListener("click",calcular)
function calcular(){
    const op1=pasefloat( txtn1.value)
    const op2=pasefloat( txtn2.value)
    let resp6=op1+op2
    respuesta.innerText=resp
    respuesta.style="color:red"

}