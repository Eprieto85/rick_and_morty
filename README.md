# Rick & Morty App

A full-featured React application that consumes the Rick and Morty REST API, featuring authentication, character browsing, search filters, and a responsive UI.

Live Demo: https://eprieto85.github.io/rick_and_morty/

---

## Features

- User Authentication - Login/Register system with session handling
- Character Search - Real-time search by name
- Advanced Filters - Filter by status, species, and gender
- Favorites - Add and manage your favorite characters
- Responsive Design - Works on desktop and mobile
- REST API Integration - Consumes Rick and Morty public API

## Built With

- React
- JavaScript (ES6+)
- CSS3 / SCSS
- HTML5
- GitHub Pages (deployment)

## Getting Started

### Prerequisites
- Node.js v14+
- npm or yarn

### Installation

```bash
git clone https://github.com/Eprieto85/rick_and_morty.git
cd rick_and_morty
npm install
npm start
```

The app will run at http://localhost:3000

## API Reference

This project uses the free Rick and Morty API (https://rickandmortyapi.com/documentation).

| Endpoint | Description |
|----------|-------------|
| GET /character | Get all characters |
| GET /character/?name=rick | Search by name |
| GET /character/?status=alive | Filter by status |

## Author

**Edisson Prieto Garavito**

- LinkedIn: https://www.linkedin.com/in/eprietog/
- Email: edissonprietog@gmail.com
- Available for freelance projects

## License

MIT License
