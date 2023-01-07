const toggle = () => {
    document.getElementById('nav').classList.toggle('navactive');
};
const btn = document.getElementById('apropo');

btn.addEventListener('click', function onClick(event) {
    const box = document.getElementById('nav');

    box.style.display = 'none';
    window.location.reload();

});