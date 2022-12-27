const modal = document.getElementById('modal');
const modalContentCompletionSending = document.querySelector('.modal-content-completion-sending');
const modalContent = document.querySelector('.modal-content');
const buttonModal = document.getElementById('button-modal');
const buttonProjects = document.getElementById('button-projects');
const buttonModalSend = document.getElementById('button-modal-send');
const span = document.getElementsByClassName('close')[0];

buttonModalSend.onclick = function () {
   modalContentCompletionSending.style.display = "block";
   modalContent.style.display = "none";
};

buttonModal.onclick = function () {
   modal.style.display = "block";
};

span.onclick = function () {
   modal.style.display = "none";
};

buttonProjects.onclick = function () {
   modal.style.display = "none";
   modalContent.style.display = "block";
   modalContentCompletionSending.style.display = "none";
   document.forms[0].reset();
};


window.onclick = function (event) {
   if (event.target == modal) {
      modal.style.display = "none";
      document.forms[0].reset();
      modalContent.style.display = "block";
      modalContentCompletionSending.style.display = "none";
   };
};