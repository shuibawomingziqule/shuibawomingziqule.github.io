// DOM Elements
const showImagesBtn = document.getElementById("showImagesBtn");
const galleryContainer = document.getElementById("galleryContainer");
const alertMeBtn = document.getElementById("alertMeBtn");
const hoverButton = document.getElementById("hoverButton");
const buttonCounter = document.getElementById("buttonCounter");
const counter = document.getElementById("counter");

// Image URLs
const imageUrls = [
    "https://plus.unsplash.com/premium_photo-1669673986444-3d8d63f74ab3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFycm90fGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFycm90fGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1534566991776-92e46728f72d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBhcnJvdHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1589792351116-53074a88aabe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhcnJvdHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1517101724602-c257fe568157?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHBhcnJvdHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1611477440693-a3902dbcc92e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHBhcnJvdHxlbnwwfHwwfHx8MA%3D%3D"
];

// Show images when button is clicked
showImagesBtn.addEventListener("click", function () {
    galleryContainer.innerHTML = ""; // Clear existing images
    imageUrls.forEach(url => {
        const img = document.createElement("img");
        img.src = url;
        img.alt = "Beautiful parrot";
        galleryContainer.appendChild(img);
    });
});

// Alert button functionality
alertMeBtn.addEventListener("click", function () {
    alert("Hello world!");
});

// Hover button functionality
hoverButton.addEventListener("mouseover", function () {
    hoverButton.style.backgroundColor = "#45a049";
});
hoverButton.addEventListener("mouseleave", function () {
    hoverButton.style.backgroundColor = "#4CAF50";
});

// Increment counter functionality
let count = 0;
buttonCounter.addEventListener("click", function () {
    count++;
    counter.textContent = count;

    // Change color based on even or odd count
    if (count % 2 === 0) {
        counter.style.color = "green";
    } else {
        counter.style.color = "red";
    }
});

hoverButton.onmouseover = function () {
    hoverButton.innerText = 'you hoverd me';
}

hoverButton.onmouseleave = function () {
    hoverButton.innerText = 'Hover over me!';
}
