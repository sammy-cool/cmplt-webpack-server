import _ from "lodash";

import "./index.css";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  //add the image to our existing div
  const myImage = new Image();
  myImage.src =
    "https://images.pexels.com/photos/9401979/pexels-photo-9401979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  element.appendChild(myImage);

  return element;
}

document.body.appendChild(component());
