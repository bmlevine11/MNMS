// Saves options to localStorage.
function save_options() {
  var select = document.getElementById("Action");
  var action = select.children[select.selectedIndex].value;
  localStorage["action"] = action;

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "GOOD TO GO!!!";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var doing = localStorage["action"];
  if (!doing) {
    return;
  }
  var select = document.getElementById("Action");
  for (var i = 0; i < select.children.length; i++) {
    var child = select.children[i];
    if (child.value == doing) {
      child.selected = "true";
      break;
    }
  }
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);