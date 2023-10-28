const modal = document.getElementById('modal');
const img = document.querySelectorAll('.gallery-img');
const modalImg = document.getElementById('img01');
const span = document.getElementsByClassName('close')[0];

img.forEach(function(image) {
    image.onclick = function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
    }
});

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
