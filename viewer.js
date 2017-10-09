function updateView() {
    /* Update the view to show a box of the given dimensions. */
    // get the height and width
    var height = document.getElementById("height").value;
    var originalHeight = height;
    var width = document.getElementById("width").value;
    var originalWidth = width;

    // declare variables
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext("2d");

    // maximize the size of the rectangle to the max available space on the screen
    var potentialValue, ratioText;
    if (height > width) {
        potentialValue = (width * canvas.height) / height;

        // if the potential value is too large, use the other dimension to set the size of the rectangle
        if (potentialValue > canvas.width) {
            ratioText = "1:" + String(width / height);
            height = (height * canvas.width) / width;
            width = canvas.width;
        } else {
            ratioText = "1:" + String(height / width);
            width = potentialValue;
            height = canvas.height;
        }
    } else {
        potentialValue = (height * canvas.width) / width;

        // if the potential value is too large, use the other dimension to set the size of the rectangle
        if (potentialValue > canvas.height) {
            ratioText = "1:" + String(width / height);
            width = (width * canvas.height) / height;
            height = canvas.height;
        } else {
            ratioText = String(width / height) + ":1";
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

    // add text showing the ratio
    context.fillStyle="#ffffff";
    // context.font = "0.5em Arial";
    context.fillText(ratioText, 10, 10);
}