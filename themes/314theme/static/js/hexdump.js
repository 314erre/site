const colorizeRow = (elem) => {
    elem.classList.toggle("selectedRow");
}

const addHexListeners = () => {
    let hexs = document.querySelectorAll(".hexdump .addr");
    for (let elem of hexs) {
        elem.addEventListener("mouseover",(event)=>{
            colorizeRow(event.target.parentElement,true);
        });
        elem.addEventListener("mouseleave",(event)=>{
            colorizeRow(event.target.parentElement,false);
        });
    }
}
window.addEventListener("load", addHexListeners, false);