// Your code here.
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const cubes = document.querySelectorAll(".cube");

    let selectedCube = null;
    let offsetX = 0;
    let offsetY = 0;

    // Add event listeners to each cube
    cubes.forEach(cube => {
        cube.addEventListener("mousedown", (e) => {
            // Select the cube
            selectedCube = cube;

            // Calculate the offset between mouse position and cube position
            offsetX = e.clientX - cube.offsetLeft;
            offsetY = e.clientY - cube.offsetTop;

            // Change cursor to indicate dragging
            cube.style.cursor = "grabbing";
        });
    });

    // Handle mouse movement
    document.addEventListener("mousemove", (e) => {
        if (selectedCube) {
            // Calculate new position for the cube
            let newX = e.clientX - offsetX;
            let newY = e.clientY - offsetY;

            // Ensure the cube stays within the container boundaries
            const containerRect = container.getBoundingClientRect();
            const cubeWidth = selectedCube.offsetWidth;
            const cubeHeight = selectedCube.offsetHeight;

            newX = Math.max(containerRect.left, Math.min(newX, containerRect.right - cubeWidth));
            newY = Math.max(containerRect.top, Math.min(newY, containerRect.bottom - cubeHeight));

            // Update the cube's position
            selectedCube.style.left = `${newX - containerRect.left}px`;
            selectedCube.style.top = `${newY - containerRect.top}px`;
        }
    });

    // Handle mouse release
    document.addEventListener("mouseup", () => {
        if (selectedCube) {
            // Deselect the cube
            selectedCube.style.cursor = "grab";
            selectedCube = null;
        }
    });
});