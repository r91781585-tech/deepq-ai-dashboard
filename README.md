# DeepQ-AI Dashboard - Full Stack Developer Intern Assignment

An interactive web application that displays World Bank data through dynamic charts and graphs using HTML, CSS, and JavaScript.

![Dashboard Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🚀 Live Demo

**GitHub Pages:** [https://r91781585-tech.github.io/deepq-ai-dashboard/](https://r91781585-tech.github.io/deepq-ai-dashboard/)

**Demo Credentials:**
- Username: `admin`
- Password: `admin123`

## 🌟 Features

### Dashboard Features
- **Interactive Charts**: Line charts, bar charts, and area charts using Chart.js
- **Dynamic Data**: Simulated World Bank data with realistic values
- **Filtering System**: Filter by countries, date ranges (2018-2022)
- **Responsive Design**: Mobile-friendly Bootstrap interface
- **Real-time Updates**: Charts update dynamically based on filters

### Authentication
- Simple login/logout functionality
- Protected dashboard access for authenticated users only
- Session persistence using localStorage

### Data Visualization
- **GDP Trends (Line Chart)**: Shows GDP over time for selected countries
- **Population Comparison (Bar Chart)**: Compares population across countries
- **CO2 Emissions (Area Chart)**: Environmental data visualization over time

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **UI Framework**: Bootstrap 5
- **Charts**: Chart.js
- **Data**: Simulated World Bank Open Data
- **Hosting**: GitHub Pages

## 📊 Data Source

**Simulated World Bank Open Data**
- **GDP (Current US$)**: NY.GDP.MKTP.CD
- **Population Total**: SP.POP.TOTL  
- **CO2 Emissions**: EN.ATM.CO2E.KT

**Countries Included:**
- United States (US)
- China (CN)
- India (IN)
- Germany (DE)
- Japan (JP)

**Time Range:** 2018-2022

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/r91781585-tech/deepq-ai-dashboard.git
   cd deepq-ai-dashboard
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   open index.html
   # Or use a local server
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

3. **Login with demo credentials**
   - Username: `admin`
   - Password: `admin123`

### GitHub Pages Deployment

The project is automatically deployed to GitHub Pages at:
`https://r91781585-tech.github.io/deepq-ai-dashboard/`

## 📁 Project Structure

```
deepq-ai-dashboard/
├── index.html              # Main HTML file
├── styles.css              # Custom CSS styles
├── script.js               # JavaScript functionality
└── README.md               # Project documentation
```

## 🎨 Features Implemented

### ✅ Core Features
- [x] Interactive dashboard with multiple chart types
- [x] Dynamic data visualization
- [x] Filtering system (countries, date ranges)
- [x] User authentication (login/logout)
- [x] Protected dashboard access
- [x] Responsive design
- [x] Professional UI/UX

### ✅ Technical Features
- [x] Chart.js integration for data visualization
- [x] Bootstrap 5 for responsive design
- [x] Local storage for session management
- [x] Event-driven JavaScript architecture
- [x] Mobile-friendly interface
- [x] Loading states and animations
- [x] Error handling

### ✅ Chart Types
- [x] **Line Chart**: GDP trends over time
- [x] **Bar Chart**: Population comparison
- [x] **Area Chart**: CO2 emissions with filled areas

## 🎯 Dashboard Functionality

### Authentication System
- Simple username/password authentication
- Session persistence across browser sessions
- Secure dashboard access control

### Data Filtering
- **Country Selection**: Multi-select dropdown for countries
- **Date Range**: Start and end year selection (2018-2022)
- **Real-time Updates**: Charts update instantly when filters change

### Interactive Charts
- **Responsive Design**: Charts adapt to screen size
- **Hover Effects**: Interactive tooltips on data points
- **Legend Controls**: Toggle data series visibility
- **Color Coding**: Consistent colors across all charts

## 🔧 Customization

### Adding New Countries
```javascript
// In script.js, add to sampleData object
const sampleData = {
    gdp: {
        'FR': { 2018: 2777535, 2019: 2715518, ... },
        // Add more countries
    }
};

// Add to countryNames
const countryNames = {
    'FR': 'France',
    // Add more country names
};
```

### Modifying Chart Styles
```css
/* In styles.css */
.card-header {
    background: linear-gradient(135deg, #your-color 0%, #your-color2 100%);
}
```

## 📱 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 🔒 Security Features

- Client-side authentication (demo purposes)
- Session management with localStorage
- Input validation for date ranges
- XSS protection through proper data handling

## 🚀 Deployment Options

### GitHub Pages (Current)
- Automatic deployment from main branch
- Custom domain support available
- HTTPS enabled by default

### Alternative Hosting
- **Netlify**: Drag and drop deployment
- **Vercel**: Git integration
- **Firebase Hosting**: Google Cloud integration
- **Surge.sh**: Simple static hosting

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is created for the DeepQ-AI Full Stack Developer Intern assignment.

## 👨‍💻 Developer

**Created by:** rvvvbb  
**GitHub:** [@r91781585-tech](https://github.com/r91781585-tech)  
**Assignment:** DeepQ-AI Full Stack Developer Intern Position  
**Completion Date:** September 9, 2025  

## 📞 Support

For any questions or issues, please create an issue in the GitHub repository.

---

**Assignment Details:**
- **Company:** DeepQ-AI
- **Position:** Full Stack Developer Intern
- **Technology Stack:** HTML, CSS, JavaScript
- **Framework:** Bootstrap 5, Chart.js