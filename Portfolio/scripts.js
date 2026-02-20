
function showProject(num) {
    document.querySelectorAll('.project-content')
        .forEach(p => p.classList.remove('active'));

    document.querySelectorAll('.nav-link')
        .forEach(t => t.classList.remove('active'));

    document.getElementById(`project-${num}`).classList.add('active');
    document.querySelectorAll('.nav-link')[num - 1].classList.add('active');
}
