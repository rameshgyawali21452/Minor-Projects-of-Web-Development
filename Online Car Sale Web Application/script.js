document.addEventListener('DOMContentLoaded', function () {
    // Get all forms on the page
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        const inputs = form.querySelectorAll('input');
        const buttons = form.querySelectorAll('button');

        // Change background color to yellow when input is selected
        inputs.forEach(input => {
            input.addEventListener('focus', function () {
                this.style.backgroundColor = 'yellow';
            });

            // Change background color to white when input loses focus
            input.addEventListener('blur', function () {
                this.style.backgroundColor = 'white';
            });
        });

        // Change background color of button to light blue when mouse pointer moves onto a button
        buttons.forEach(button => {
            button.addEventListener('mouseover', function () {
                this.style.backgroundColor = 'lightblue';
            });

            button.addEventListener('mouseout', function () {
                this.style.backgroundColor = ''; // Reset to default
            });
        });

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const model = form.querySelector('#model').value.toLowerCase();
            const location = form.querySelector('#location').value.toLowerCase();

            // Sample data for demonstration
            const cars = [
                { make: 'Toyota', model: 'Camry', year: '2020', location: 'Sydney', price: '25000' },
                { make: 'Honda', model: 'Civic', year: '2019', location: 'Melbourne', price: '22000' },
                { make: 'Ford', model: 'Focus', year: '2018', location: 'Brisbane', price: '20000' },
                { make: 'BMW', model: 'X5', year: '2021', location: 'Perth', price: '60000' }
            ];

            const filteredCars = cars.filter(car => {
                const modelMatch = car.model.toLowerCase().includes(model);
                const locationMatch = car.location.toLowerCase().includes(location);
                
                return modelMatch && locationMatch;
            });

            displayResults(filteredCars, form);
        });
    });

    function displayResults(cars, form) {
        const resultsDiv = form.querySelector('.results');
        let html = '';

        if (cars.length === 0) {
            html = '<p>No cars found</p>';
        } else {
            html = '<ul>';
            cars.forEach(car => {
                html += `<li>${car.make} ${car.model}, ${car.year}, ${car.location}, ${car.price}</li>`;
            });
            html += '</ul>';
        }

        resultsDiv.innerHTML = html;
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const formInputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="password"]');
    const buttons = document.querySelectorAll('button');

    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.backgroundColor = 'yellow';
        });

        input.addEventListener('blur', () => {
            input.style.backgroundColor = 'white';
        });
    });

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#ADD8E6';
        });

        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = '#007BFF';
        });
    });
});
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const model = form.querySelector('#model').value.toLowerCase();
    const location = form.querySelector('#location').value.toLowerCase();

    // Sample data for demonstration
    const cars = [
        { make: 'Toyota', model: 'Camry', year: '2020', location: 'Sydney', price: '25000' },
        { make: 'Honda', model: 'Civic', year: '2019', location: 'Melbourne', price: '22000' },
        { make: 'Ford', model: 'Focus', year: '2018', location: 'Brisbane', price: '20000' },
        { make: 'BMW', model: 'X5', year: '2021', location: 'Perth', price: '60000' }
        // Add more cars here
    ];

    const filteredCars = cars.filter(car => {
        const modelMatch = car.model.toLowerCase().includes(model);
        const locationMatch = car.location.toLowerCase().includes(location);
        
        return modelMatch && locationMatch;
    });

    displayResults(filteredCars, form);
    displayReferenceCars();
});

function displayReferenceCars() {
    const referenceCars = [
        { make: 'Toyota', model: 'Corolla', year: '2019', location: 'Sydney', price: '18000' },
        { make: 'Honda', model: 'Accord', year: '2018', location: 'Melbourne', price: '19000' },
        { make: 'Ford', model: 'Mustang', year: '2020', location: 'Brisbane', price: '35000' },
        { make: 'BMW', model: '3 Series', year: '2021', location: 'Perth', price: '45000' }
        // Add more reference cars here
    ];

    const carList = document.querySelector('.reference-cars .car-list');
    let html = '<ul>';

    referenceCars.forEach(car => {
        html += `<li>${car.make} ${car.model}, ${car.year}, ${car.location}, ${car.price}</li>`;
    });

    html += '</ul>';
    carList.innerHTML = html;
}
