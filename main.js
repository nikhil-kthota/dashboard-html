document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    const performanceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Performance',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

document.getElementById('showInputForm').addEventListener('click', function () {
    const userInputForm = document.getElementById('userInputForm');
    if (userInputForm.style.display === 'none') {
        userInputForm.style.display = 'block';
    } else {
        userInputForm.style.display = 'none';
    }
});

document.getElementById('updateChart').addEventListener('click', function () {
    const labelsInput = document.getElementById('labels').value;
    const dataInput = document.getElementById('data').value;

    const newLabels = labelsInput.split(',').map(label => label.trim());
    const newData = dataInput.split(',').map(data => parseFloat(data.trim()));

    const chartsContainer = document.getElementById('chartsContainer');


    const canvas = document.createElement('canvas');
    canvas.className = 'chart';
    chartsContainer.appendChild(canvas);


    const newChart = new Chart(canvas.getContext('2d'), {
        type: 'line',
        data: {
            labels: newLabels,
            datasets: [{
                label: 'User Chart',
                data: newData,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    document.getElementById('labels').value = '';
    document.getElementById('data').value = '';
});

});