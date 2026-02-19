let url="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");

btn.addEventListener("click",async()=>{
    let country=document.querySelector("input").value;
    console.log(country);

    let colarr= await getdata(country);
    Show(colarr);
});

function Show(colarr){
    let result=document.querySelector("#result");
    for(col of colarr){
        console.log(col.name);
        let li=document.createElement("li");
        li.innerText=col.name;
        result.appendChild(li);
    }}

async function getdata(country){
    try{
        let res=await axios.get(url+country);
        console.log(res.data);
        return res.data;
    }
    catch(e){
        console.log("error:",e);
        return [];
    }
}
