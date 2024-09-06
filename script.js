async function add(a,b){
    let response=await a+b;
    display(response);
}
function display(some){
    document.getElementById("results").innerHTML=some;
}
add(4,50);