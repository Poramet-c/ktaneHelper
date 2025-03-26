// Example module data with corresponding solver div IDs
const modules = [
    { name: "สายไฟ", icon: "🔌", solverId: "solver-wires" },
    { name: "ปุ่มใหญ่", icon: "🔘", solverId: "solver-button" },
    { name: "สัญลักษณ์", icon: "🔣", solverId: "solver-symbol" },
    { name: "ไซมอน", icon: "♦️", solverId: "solver-simon" },
    { name: "คำกำกวม", icon: "📚", solverId: "solver-words" },
    { name: "ความจำ", icon: "🧠", solverId: "solver-memory" },
    { name: "รหัสมอร์ส", icon: "🫥", solverId: "solver-morse" },
    { name: "สายไฟซับซ้อน", icon: "⛓️", solverId: "solver-complex" },
    { name: "อนุกรมสายไฟ", icon: "⛓️‍💥⛓️‍💥", solverId: "solver-series" },
    { name: "เขาวงกต", icon: "🟢", solverId: "solver-maze" },
    { name: "รหัสผ่าน", icon: "🗝️", solverId: "solver-password" },
    { name: "ลูกบิด", icon: "🎛️", solverId: "solver-rotate" }
];

const moduleGrid = document.getElementById("module-grid");
const solverContainer = document.getElementById("solver-container");

// Create module selection buttons
modules.forEach(module => {
    const div = document.createElement("div");
    div.classList.add("module");
    div.innerHTML = `<span>${module.icon}</span><br>${module.name}`;
    div.dataset.solverId = module.solverId;

    div.addEventListener("click", () => {
        div.classList.toggle("selected");
    });

    moduleGrid.appendChild(div);
});

// Show solvers for selected modules
document.getElementById("confirm-selection").addEventListener("click", () => {
    // Hide all solvers first
    document.querySelectorAll(".solver").forEach(solver => {
        solver.style.display = "none";
    });

    // Show only the solvers for selected modules
    document.querySelectorAll(".module.selected").forEach(mod => {
        const solverId = mod.dataset.solverId;
        document.getElementById(solverId).style.display = "grid";
    });
});

// const wireCountInput = document.getElementById("wire-count");
// const wireCountDisplay = document.getElementById("wire-count-display");

// Update the display when the slider is moved
// wireCountInput.addEventListener("input", () => {
//     wireCountDisplay.textContent = wireCountInput.value;
// });

// document.getElementById("submit-wire-count").addEventListener("click", () => {
//     const wireCount = wireCountInput.value;
//     console.log(`Number of wires: ${wireCount}`); // Store or process this value for the next steps
//     // Here you can add further logic based on the number of wires selected
// });

// document.getElementById("submit-wire-count").addEventListener("click", () => {
//     const wireCount = document.getElementById("wire-count").value;

//     if (wireCount === "3") {
//         document.getElementById("solver-wires-3").style.display = "block";
//     } else if (wireCount === "4") {
//         document.getElementById("solver-wires-4").style.display = "block";
//     } else if (wireCount === "5") {
//         document.getElementById("solver-wires-5").style.display = "block";
//     } else if (wireCount === "6") {
//         alert("Invalid number of wires");
//     }
// });

// Initialize tableRowIndices for each table to keep track of which row to color next
const tableRowIndices = {
    "red-wire-table": 0,
    "blue-wire-table": 0,
    "black-wire-table": 0
};

function colorNextRow(tableId) {
    const table = document.getElementById(tableId);
    if (!table) return;  // Ensure the table exists

    const rows = table.querySelectorAll("tbody tr");

    // for (let i = 0; i < rows.length; i++) {
    //     console.log(rows[i].classList);  // Remove the "clicked" class to reset the color
    // }

    // Get the current index of the next row to color
    let currentIndex = tableRowIndices[tableId];

    // If the index is within the number of rows, color the row
    if (currentIndex < rows.length) {
        rows[currentIndex].classList.add("clicked");  // Add the "clicked" class for the green tint
        tableRowIndices[tableId]++;  // Increment the index for the next call
    }
}

const tableRowIDs = [
    "red-wire-table",
    "blue-wire-table",
    "black-wire-table"
]

function resetTableRows() {
    for (const tableId of tableRowIDs) {
        const table = document.getElementById(tableId);
        const rows = table.querySelectorAll("tbody tr");
    
        // Reset each row by removing the "clicked" class
        rows.forEach(row => {
            row.classList.remove("clicked");
        });
    
        // Reset the index in tableRowIndices to start from the beginning
        tableRowIndices[tableId] = 0;
    }
}




  

