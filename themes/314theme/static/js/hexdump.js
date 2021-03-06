const colorizeRow = (elem) => {
    elem.classList.toggle("selectedRow");
    console.log(elem)
}

const addHexListeners = () => {
    let hexs = document.querySelectorAll(".hexdump .addr");
    for (let elem of hexs) {
        elem.addEventListener("mouseover",(event)=>{
            colorizeRow(event.target.parentElement);
        });
        elem.addEventListener("mouseleave",(event)=>{
            colorizeRow(event.target.parentElement);
        });
    }
}
window.addEventListener("load", addHexListeners, false);