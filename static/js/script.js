document.querySelector('.close').onclick = function() {
    document.getElementById('resultModal').style.display = 'none';
    window.location.href = "/";
};

window.onclick = function(event) {
    const modal = document.getElementById('resultModal');
    if (event.target === modal) {
        modal.style.display = 'none';
        window.location.href = "/";
    }
};

window.onload = function() {
    const modal = document.getElementById('resultModal');
    const price = modal.dataset.price;
    const rent = modal.dataset.rent;

    if (price && rent) {
        modal.style.display = 'block';
    }
};
