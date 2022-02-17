document.addEventListener('DOMContentLoaded', function() {

    // Use buttons to toggle between people
    document.querySelector('#person1-btn').addEventListener('click', () => load_person1());
    document.querySelector('#person2-btn').addEventListener('click', () => load_person2());
    document.querySelector('#person3-btn').addEventListener('click', () => load_person3());

    // By default, load person1
    load_person1();
});

function load_person1() {

    // Show person1 and hide other people
    document.querySelector('#person2').style.display = 'none';
    document.querySelector('#person3').style.display = 'none';
    document.querySelector('#person1').style.display = 'flex';
}

function load_person2() {

    // Show person1 and hide other people
    document.querySelector('#person1').style.display = 'none';
    document.querySelector('#person3').style.display = 'none';
    document.querySelector('#person2').style.display = 'flex';
}

function load_person3() {

    // Show person1 and hide other people
    document.querySelector('#person1').style.display = 'none';
    document.querySelector('#person2').style.display = 'none';
    document.querySelector('#person3').style.display = 'flex';
}