function showInfo() {
    // Get values from input fields
    let make = document.getElementById("make").value;
    let model = document.getElementById("model").value;
    let year = document.getElementById("year").value;
    let color = document.getElementById("color").value;
    // Create an object with user input
    let vehicle = {
    make: make,
    model: model,
    year: year,
    color: color,
    description: function() {
    return `This is a ${this.year} ${this.make} ${this.model} in $
    {this.color} color.`;
    }
    };
    // Display the result
    document.getElementById("output").innerText = vehicle.description();
    }
    