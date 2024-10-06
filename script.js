document.getElementById('hamburger-menu').addEventListener('click', function() {
  const nav = document.querySelector('.nav ul');
  nav.classList.toggle('show');
});




"use strict";

productScroll();

function productScroll() {
  let slider = document.getElementById("slider-shoes");
  let next = document.getElementsByClassName("pro-next");
  let prev = document.getElementsByClassName("pro-prev");
  let slide = document.getElementById("slide-shoes");
  let item = document.getElementById("slide-shoes");

  for (let i = 0; i < next.length; i++) {
    //refer elements by class name

    let position = 0; //slider postion

    prev[i].addEventListener("click", function() {
      //click previos button
      if (position > 0) {
        //avoid slide left beyond the first item
        position -= 1;
        translateX(position); //translate items
      }
    });

    next[i].addEventListener("click", function() {
      if (position >= 0 && position < hiddenItems()) {
        //avoid slide right beyond the last item
        position += 1;
        translateX(position); //translate items
      }
    });
  }

  function hiddenItems() {
    //get hidden items
    let items = getCount(item, false);
    let visibleItems = slider.offsetWidth / 210;
    return items - Math.ceil(visibleItems);
  }
}

function translateX(position) {
  //translate items
  slide.style.left = position * -210 + "px";
}

function getCount(parent, getChildrensChildren) {
  //count no of items
  let relevantChildren = 0;
  let children = parent.childNodes.length;
  for (let i = 0; i < children; i++) {
    if (parent.childNodes[i].nodeType != 3) {
      if (getChildrensChildren)
        relevantChildren += getCount(parent.childNodes[i], true);
      relevantChildren++;
    }
  }
  return relevantChildren;
}


// Define images for each color option
const colorImages = {
  yellow: "images/one-shoes.png",
  black: "images/two-shoes.png",
  blue: "images/three-shoes.png"
};

// Get the main product image element
const mainImage = document.querySelector('.left img');

// Get all color options
const colorOptions = document.querySelectorAll('ul li');

// Add click event listener to each color circle
colorOptions.forEach(option => {
  option.addEventListener('click', function() {
    const selectedColor = this.classList[0]; // Get the class name for the color (yellow, black, blue)
    
    // Change the product image based on the selected color
    if (colorImages[selectedColor]) {
      mainImage.src = colorImages[selectedColor];
    }
  });
});


// 4 column CDN


const counters = document.querySelectorAll('.count');
const speed = 400; // Adjust the speed of counting

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});


