function updateView() {
    /* Update the view to show a box of the given dimensions. */
    // get the height and width
    var height = document.getElementById("height").value;
    var width = document.getElementById("width").value;

    // declare variables
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext("2d");

    // simplify the terms (try using a simple method)
    var potentialValue;
    if (height > width) {
        potentialValue = (width * canvas.height) / height;

        // if the potential value is too large, use the other dimension to set the size of the rectangle
        if (potentialValue > canvas.width) {
            height = (height * canvas.width) / width;
            width = canvas.width;
        } else {
            width = potentialValue;
            height = canvas.height;
        }
    } else {
        potentialValue = (height * canvas.width) / width;

        // if the potential value is too large, use the other dimension to set the size of the rectangle
        if (potentialValue > canvas.height) {
            width = (width * canvas.height) / height;
            height = canvas.height;
        } else {
            height = potentialValue;
            width = canvas.width;
        }
    }

    // clear the current contents of the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // set the color of the rectangle
    context.fillStyle="#222222";

    // update the rectangle
    context.fillRect(0, 0, width, height);
}