// Select color input element from the DOM
const colorPicker = document.getElementById("colorPicker");
// Select grid height and width inputs from the DOM
const gridHeight = document.getElementById("inputHeight");
const gridWidth = document.getElementById("inputWidth");
// Select canavas from the DOM
const grid = document.getElementById("pixelCanvas");

//call on cell clicked
function colorCell(event) {
    event.target.style.backgroundColor = colorPicker.value;
}

// Call on submit is clicked
function makeGrid() {
    //Remove any rows and columns if there is
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    // Create Rows
    for(let y = 0; y< gridHeight.value; y++) {
        let row = document.createElement("tr");
        // Create Cells 
        for(let i = 0; i < gridWidth.value; i++) {
            let cell = document.createElement("td");
            // Add Event Listener for cell
            cell.addEventListener("click",colorCell);
            // Add cell to a row
            row.appendChild(cell);
        }
        // Add row to the table
        grid.appendChild(row);
    }
    return false;    
}


