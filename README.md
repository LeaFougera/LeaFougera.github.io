# Portfolio

Professional portfolio website built with React, Vite, and Framer Motion.

## Features

- Responsive design with elegant beige/cream color palette
- Smooth animations with Framer Motion
- Dynamic GitHub projects integration via API
- Multi-language CV download (French & English)
- Sections: Hero, About, Experience, Contact, Projects
- GitHub Pages hosting

## Tech Stack

- React 19
- Vite 8
- Framer Motion 12
- React Icons 5
- Axios
- CSS3 with custom properties

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will run on http://localhost:5173

### Build

```bash
npm run build
```

### Deploy

```bash
npm run deploy
```

This will build and deploy to GitHub Pages.

## Project Structure

```
src/
├── components/        # Reusable UI components
├── pages/            # Page sections (Hero, About, Experience, etc.)
├── hooks/            # Custom hooks (useGitHubProjects)
├── styles/           # Global styles and variables
└── App.jsx           # Main app component

public/
├── cv/               # CV files (FR & EN)
└── favicon.svg
```

## CV Files

Add your CV files to `public/cv/`:
- `CV_Fougera-Lempereur_EN.pdf`
- `CV_Fougera-Lempereur_FR.pdf`

## Customization

Edit the design variables in `src/styles/variables.css` to customize colors, typography, and spacing.

## License

MIT
