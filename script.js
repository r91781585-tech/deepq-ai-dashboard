// DeepQ-AI Dashboard JavaScript

let isLoggedIn = false;
let gdpChart, populationChart, co2Chart;

// Sample data (simulating World Bank API responses)
const sampleData = {
    gdp: {
        'US': { 2018: 20544343, 2019: 21427700, 2020: 20953030, 2021: 23315080, 2022: 25462700 },
        'CN': { 2018: 13894820, 2019: 14342903, 2020: 14722731, 2021: 17734063, 2022: 17963171 },
        'IN': { 2018: 2713165, 2019: 2875142, 2020: 3176295, 2021: 3386397, 2022: 3737878 },
        'DE': { 2018: 3947620, 2019: 3845630, 2020: 3806060, 2021: 4259935, 2022: 4259935 },
        'JP': { 2018: 4971323, 2019: 5081770, 2020: 4975415, 2021: 4940878, 2022: 4301621 }
    },
    population: {
        'US': { 2018: 326687501, 2019: 328239523, 2020: 329484123, 2021: 331893745, 2022: 333287557 },
        'CN': { 2018: 1392730000, 2019: 1397715000, 2020: 1402112000, 2021: 1412360000, 2022: 1425887337 },
        'IN': { 2018: 1352617328, 2019: 1366417754, 2020: 1380004385, 2021: 1393409038, 2022: 1417173173 },
        'DE': { 2018: 82905782, 2019: 83092962, 2020: 83160871, 2021: 83196078, 2022: 83237124 },
        'JP': { 2018: 126529100, 2019: 126264931, 2020: 125836021, 2021: 125502000, 2022: 125124989 }
    },
    co2: {
        'US': { 2018: 5269.5, 2019: 5130.0, 2020: 4713.0, 2021: 4853.0, 2022: 4956.0 },
        'CN': { 2018: 10175.0, 2019: 10175.0, 2020: 10668.0, 2021: 11472.0, 2022: 11397.0 },
        'IN': { 2018: 2299.0, 2019: 2411.0, 2020: 2442.0, 2021: 2533.0, 2022: 2654.0 },
        'DE': { 2018: 796.0, 2019: 729.0, 2020: 644.0, 2021: 675.0, 2022: 665.0 },
        'JP': { 2018: 1108.0, 2019: 1081.0, 2020: 1027.0, 2021: 1061.0, 2022: 1037.0 }
    }
};

const countryNames = {
    'US': 'United States',
    'CN': 'China',
    'IN': 'India',
    'DE': 'Germany',
    'JP': 'Japan'
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Set up event listeners
    document.getElementById('loginBtn').addEventListener('click', showLoginModal);
    document.getElementById('logoutBtn').addEventListener('click', logout);
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    
    // Initialize country select
    initializeCountrySelect();
    
    // Check if user is already logged in (using localStorage for demo)
    if (localStorage.getItem('isLoggedIn') === 'true') {
        login();
    }
}

function showLoginModal() {
    const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
    loginModal.show();
}

function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple authentication (demo purposes)
    if (username === 'admin' && password === 'admin123') {
        login();
        const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
        loginModal.hide();
    } else {
        alert('Invalid credentials. Use admin/admin123');
    }
}

function login() {
    isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');
    
    // Update UI
    document.getElementById('loginBtn').classList.add('d-none');
    document.getElementById('logoutBtn').classList.remove('d-none');
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
    
    // Initialize charts
    initializeCharts();
}

function logout() {
    isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
    
    // Update UI
    document.getElementById('loginBtn').classList.remove('d-none');
    document.getElementById('logoutBtn').classList.add('d-none');
    document.getElementById('welcomeScreen').style.display = 'block';
    document.getElementById('dashboard').style.display = 'none';
    
    // Destroy charts
    if (gdpChart) gdpChart.destroy();
    if (populationChart) populationChart.destroy();
    if (co2Chart) co2Chart.destroy();
}

function initializeCountrySelect() {
    const select = document.getElementById('countrySelect');
    // Select first 3 countries by default
    select.options[0].selected = true;
    select.options[1].selected = true;
    select.options[2].selected = true;
}

function initializeCharts() {
    createGDPChart();
    createPopulationChart();
    createCO2Chart();
}

function getSelectedCountries() {
    const select = document.getElementById('countrySelect');
    const selected = [];
    for (let option of select.options) {
        if (option.selected) {
            selected.push(option.value);
        }
    }
    return selected.length > 0 ? selected : ['US', 'CN', 'IN'];
}

function getYearRange() {
    const startYear = parseInt(document.getElementById('startYear').value) || 2018;
    const endYear = parseInt(document.getElementById('endYear').value) || 2022;
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
        years.push(year);
    }
    return years;
}

function createGDPChart() {
    const ctx = document.getElementById('gdpChart').getContext('2d');
    const countries = getSelectedCountries();
    const years = getYearRange();
    
    const datasets = countries.map((country, index) => {
        const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'];
        return {
            label: countryNames[country],
            data: years.map(year => sampleData.gdp[country][year] / 1000000), // Convert to trillions
            borderColor: colors[index % colors.length],
            backgroundColor: colors[index % colors.length] + '20',
            fill: false,
            tension: 0.4
        };
    });
    
    if (gdpChart) gdpChart.destroy();
    
    gdpChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'GDP Trends (Trillions USD)'
                },
                legend: {
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'GDP (Trillions USD)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Year'
                    }
                }
            }
        }
    });
}

function createPopulationChart() {
    const ctx = document.getElementById('populationChart').getContext('2d');
    const countries = getSelectedCountries();
    const year = 2022; // Latest year for comparison
    
    const data = countries.map(country => sampleData.population[country][year] / 1000000); // Convert to millions
    const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'];
    
    if (populationChart) populationChart.destroy();
    
    populationChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: countries.map(country => countryNames[country]),
            datasets: [{
                label: 'Population (Millions)',
                data: data,
                backgroundColor: colors.slice(0, countries.length),
                borderColor: colors.slice(0, countries.length),
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Population Comparison 2022 (Millions)'
                },
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Population (Millions)'
                    }
                }
            }
        }
    });
}

function createCO2Chart() {
    const ctx = document.getElementById('co2Chart').getContext('2d');
    const countries = getSelectedCountries();
    const years = getYearRange();
    
    const datasets = countries.map((country, index) => {
        const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'];
        return {
            label: countryNames[country],
            data: years.map(year => sampleData.co2[country][year]),
            backgroundColor: colors[index % colors.length] + '40',
            borderColor: colors[index % colors.length],
            borderWidth: 2,
            fill: true,
            tension: 0.4
        };
    });
    
    if (co2Chart) co2Chart.destroy();
    
    co2Chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'CO2 Emissions (Million Metric Tons)'
                },
                legend: {
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'CO2 Emissions (Million Metric Tons)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Year'
                    }
                }
            },
            elements: {
                point: {
                    radius: 4,
                    hoverRadius: 6
                }
            }
        }
    });
}

function updateCharts() {
    if (!isLoggedIn) return;
    
    // Show loading state
    const updateBtn = document.querySelector('button[onclick="updateCharts()"]');
    const originalText = updateBtn.innerHTML;
    updateBtn.innerHTML = '<span class="loading"></span> Updating...';
    updateBtn.disabled = true;
    
    // Simulate API delay
    setTimeout(() => {
        createGDPChart();
        createPopulationChart();
        createCO2Chart();
        
        // Reset button
        updateBtn.innerHTML = originalText;
        updateBtn.disabled = false;
    }, 1000);
}

// Utility function to format numbers
function formatNumber(num) {
    return new Intl.NumberFormat().format(num);
}