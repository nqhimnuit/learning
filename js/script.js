function changeHeading() {
  let topHeading = document.getElementById("top-heading").innerHTML;
  if (topHeading === "Interactivity with Javascript") {
    return;
  }

  document.getElementById("top-heading").innerHTML += "script";

}

function toggleSideBar() {
  let sideBar = document.getElementById("side-bar-left");
  if (sideBar.style.display === "none") {
    sideBar.style.display = "block";
  }
  else {
    sideBar.style.display = "none";
  }
}

function upDate(previewPic) {
  const divPreview = document.getElementById("image");
  divPreview.style.backgroundImage = "url(" + previewPic.src + ")";
  divPreview.style.backgroundColor = "#CCEECC";
  divPreview.innerHTML = previewPic.alt;
  /* In this function you should
     1) change the url for the background image of the div with the id = "image"
     to the source file of the preview image

     2) Change the text  of the div with the id = "image"
     to the alt text of the preview image
     */
}

function unDo() {
  const divPreview = document.getElementById("image");
  divPreview.style.backgroundImage = "url('')";
  divPreview.style.backgroundColor = "#8e68ff";
  divPreview.innerHTML = "Hover over an image below to display here.";
  /* In this function you should
 1) Update the url for the background image of the div with the id = "image"
 back to the orginal-image.  You can use the css code to see what that original URL was

 2) Change the text  of the div with the id = "image"
 back to the original text.  You can use the html code to see what that original text was
 */

}
