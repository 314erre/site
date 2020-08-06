let playing = false;
let grid = {};


const updateCellState = (x, y, state, strength = 0) => {
    console.log("Srength is : ",strength);
    let cell = document.getElementById(`${x}-${y}`);
    if (state) {
        cell.classList.add("alive");
    } else {
        cell.classList.remove("alive");
    }
}

const getAliveNeighborsAmount = (x, y) => {
    var neighbors = 0;
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (i != 0 || j != 0) {
                let div = document.getElementById(`${x - i}-${y - j}`);
                if (div && div.classList.contains("alive")) {
                    neighbors += 1;
                }
            }
        }
    }
    return neighbors;
}

const getStates = async () => {
    let states = [];
    for (let i = 0; i < grid.rows; i++) {
        for (let j = 0; j < grid.cols; j++) {
            let n = getAliveNeighborsAmount(i, j);
            let isAlive = document.getElementById(`${i}-${j}`).classList.contains("alive");
            let fstate = (n == 3) || (isAlive && n == 2);
            // console.log("Futur state : ", fstate)
            states[[i, j]] = fstate;
        }
    }
    return states;
}

const gof = async () => {
    let states = await getStates();
    for (let i = 0; i < grid.rows; i++) {
        for (let j = 0; j < grid.cols; j++) {
            let state = states[[i, j]];
            let strength = 0;
            updateCellState(i, j, state, strength);
        }
    }
}

const randomCellsStart = async (size, quotient) => {
    let choice = Math.floor((size.cols * size.rows) * quotient);
    for (let i = 0; i < choice; i++) {
        let pick = Math.ceil(Math.random() * (size.cols * size.rows) - 1);
        /**
         let x = Math.floor(pick / size.width);
         let y = pick - x * size.width;
        */
        let div = document.getElementsByClassName("gcell")[pick];
        div.classList.add("alive");
    }
}

const colorizeMyNeighbors = (el) => {
    let coords = el.id.split("-").map(x => parseInt(x));
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            let div = document.getElementById(`${coords[0] - i}-${coords[1] - j}`);
            if (div) {
                div.classList.add("alive");
            }
        }
    }
}

const createLifeCell = (x, y, container) => {
    let px = document.createElement("div");
    px.classList.add("gcell");
    px.id = x + '-' + y;
    px.addEventListener("mouseover", (event) => {
        colorizeMyNeighbors(event.target);
    }, false);
    container.append(px);
}

const initGof = async () => {
    let cellprops = {
        width: 7,
        padding: 1
    }
    let gofContainer = document.getElementById("gcontainer");
    gofContainer.innerHTML = "";
    let cols = 0, rows = 0;
    cols = Math.floor((gofContainer.clientWidth - 2*cellprops.padding) / cellprops.width);
    rows = Math.floor((gofContainer.clientHeight - 2*cellprops.padding) / cellprops.width);
    grid = {
        rows: rows,
        cols: cols
    };
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            createLifeCell(i, j, gofContainer);
        }
    }
}

const play = async () => {
    while (playing == true);
    playing = true;
    await initGof();
    await randomCellsStart(grid, 0.70);
    let loop = setInterval(() => {
        if (playing == false) {
            clearInterval(loop);
            return;
        } else {
            gof();
        }
    }, 1000);
}

window.addEventListener("load", play, false);
// window.addEventListener("resize", reset, false);