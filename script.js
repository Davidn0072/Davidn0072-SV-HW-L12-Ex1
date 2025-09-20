function createDivByFullName(firstName,lastName)
{
  let rmvDiv =  document.getElementById('DivFullName');
  if (rmvDiv != null)
    document.removeChild(document.getElementById('DivFullName'));

  const divFullName = document.createElement("div");
  //divFullName.innerHTML = "DivFullName";
  document.body.appendChild(divFullName);

  let myP = document.createElement("p");
  divFullName.appendChild(myP);
  myP.style.color = "red";
  myP.style.textDecoration = "underline";
  myP.innerHTML = firstName;
  divFullName.appendChild(myP);

  myP = document.createElement("p");
  myP.style.height = "50px";
  myP.style.width = "50px";
  myP.style.border = "1px solid black";
  myP.innerHTML = lastName;

  divFullName.appendChild(myP);
}
createDivByFullName("Lary","Bird");