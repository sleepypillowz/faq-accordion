function toggleElementVisibility(elementId) {
  var element = document.getElementById(elementId);

  if (element.style.display === "none") {
    element.style.display = "inline-block";
  } else {
    element.style.display = "none";
  }
}

function toggleButtonIcon(iconId) {
  var icon = document.getElementById(iconId);
  if (icon.src.includes('icon-plus.svg')) {
      icon.src = '../assets/images/icon-minus.svg';
      console.log('open');
  } else {
      icon.src = '../assets/images/icon-plus.svg';
      console.log('closed');
  }
}
