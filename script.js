
let footer = document.querySelector("tfoot");
function getTd()
{
    return document.createElement("td");
}

function display()
{
      footer.innerHTML = localStorage.getItem("data");   
}

display();

function addchild()
{
    let usertask = document.querySelector("#taskname");
    let complisiontime = document.querySelector("#calender");


    if(usertask.value !== "" && complisiontime.value !== "")
    {
        
            let row = document.createElement("tr");
            let td1 = getTd();
            let td2 = getTd();
            let td3 = getTd();

            td1.innerHTML=`<input id="work" type="text" readonly value = "${usertask.value}"></input>`;
            td2.innerHTML = complisiontime.value;
            td3.innerHTML=`<button class = "todelete">Delete</button>`;

            row.appendChild(td1);
            row.appendChild(td2);
            row.appendChild(td3);

            footer.appendChild(row);
            
            usertask.value = ""
            complisiontime.value = "";
            localStorage.setItem("data",footer.innerHTML);

    }
    display();
}

footer.addEventListener("click",function(e){
    if(e.target.classList == "todelete")
    {
        e.target.parentElement.parentElement.remove();
        localStorage.setItem("data",footer.innerHTML);
    }
    display();
})



