const btn = document.querySelector('.btn');

btn.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent form submission

    // Change form background to red
    document.querySelector('#my-form').style.background = 'red';

    // Add bg-dark class to body
    document.body.classList.add('bg-dark');

    // Replace the last <li> with <h1>Hello</h1>
    const list = document.querySelector('.items');
    const lastItem = list.lastElementChild;
    const newHeading = document.createElement('h1');
    newHeading.textContent = 'Hello';
    list.replaceChild(newHeading, lastItem);

    // Bonus: change button background color
    btn.classList.add('clicked');
});
