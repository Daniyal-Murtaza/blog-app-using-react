# Blog App Using ReactJS

This project is a blog application built using ReactJS. The app demonstrates how to structure React components, apply CSS styling, and integrate Bootstrap for UI design. This `README.md` includes a detailed project description, steps to set up and run the application locally, and an overview of its structure.

---

## Project Description
In this project, we have created a blog application by first setting up a ReactJS project with the command:
```bash
npx create-react-app blog
```

We then created a `components` folder inside `src` to house our React components, styled each component using separate CSS files, and integrated them into the main `App.js` file. Styling for the application is handled using `Bootstrap` and custom CSS.

---

## Getting Started
### Prerequisites
Ensure you have the following installed on your system:
- Node.js (>=14.x.x)
- npm (>=6.x.x)

### Steps to Set Up the Application
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd blog
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

---

## How to Run Locally
1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000` to view the application.

---

## Project Structure
After setting up the project, the directory structure will look like this:
```
blog/
├── public/
├── src/
│   ├── components/
│   │   ├── BlogNav.js
│   │   ├── Posts.js
│   │   ├── Post1.js
│   │   ├── Post2.js
│   │   ├── Post3.js
│   │   └── Post4.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

---

## Dependencies
The project requires the following dependencies, which are listed in `package.json`:
```json
{
  "dependencies": {
    "react": "^18.x.x",
    "react-bootstrap": "^2.x.x",
    "bootstrap": "^5.x.x"
  }
}
```
To install dependencies manually, use:
```bash
npm i bootstrap
npm i react-bootstrap
```

---

Feel free to contribute to this project or suggest improvements. Happy coding!
