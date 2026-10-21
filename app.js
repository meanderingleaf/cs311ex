
console.log("Beginning fetch request...");

fetch("https://tle.ivanstanojevic.me/api/tle/25544")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.name);

        document.getElementById("ex").innerHTML = data.name;
    });

console.log("Post fetch.. invoke");