const ctxTemperature = document.getElementById('temperatureChart').getContext('2d');
const ctxWindSpeed = document.getElementById('windSpeedChart').getContext('2d');

const temperatureChart = new Chart(ctxTemperature, {
    type: 'line',
    data: {
        labels: [], 
        datasets: [{
            label: 'Temperature (°C)',
            data: [],
            borderColor: 'rgba(255, 99, 132, 1)',
            fill: false
        }]
    },
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Tiempo'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Temperature (°C)'
                },
                beginAtZero: true
            }
        }
    }
});

const windSpeedChart = new Chart(ctxWindSpeed, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Wind Speed (km/h)',
            data: [],
            borderColor: 'rgba(75, 192, 192, 1)',
            fill: false
        }]
    },
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Tiempo'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Speed (km/h)'
                },
                beginAtZero: true
            }
        }
    }
});

// Generación de datos aleatorios
function generateRandomData() {
    const temperature = (Math.random() * 30).toFixed(2); // Simula temperatura entre 0 y 30 °C
    const windSpeed = (Math.random() * 20).toFixed(2); // Simula velocidad del viento entre 0 y 20 km/h
    const currentTime = new Date().toLocaleTimeString();

    // Actualiza las gráficas
    temperatureChart.data.labels.push(currentTime);
    temperatureChart.data.datasets[0].data.push(temperature);
    temperatureChart.update();

    windSpeedChart.data.labels.push(currentTime);
    windSpeedChart.data.datasets[0].data.push(windSpeed);
    windSpeedChart.update();

    // Actualiza los textos
    document.getElementById('temperature').textContent = `${temperature} °C`;
    document.getElementById('windSpeed').textContent = `${windSpeed} km/h`;
    document.getElementById('turbineStatus').textContent = "Activo"; // Simula el estado de la turbina
}

// Llama a la función cada 2 segundos
setInterval(generateRandomData, 2000);

document.getElementById('toggle-turbine').addEventListener('click', function() {
    // Simula el cambio de estado de la turbina
    const currentStatus = document.getElementById('turbineStatus').textContent === "Activo" ? "Inactivo" : "Activo";
    document.getElementById('turbineStatus').textContent = currentStatus;
});
