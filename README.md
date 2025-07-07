# Personal Portfolio Website

This is my personal portfolio website built using React and Material-UI. The site showcases my projects, skills, and experience in a modern, responsive, and visually appealing format.

**Live site:** [https://gitalexzhong.github.io/portfolio/](https://gitalexzhong.github.io/portfolio/)

## Features

- **Project Showcase:** Displays details about various projects, including GitHub links and live demos. Project data is now managed in a single file for easy updates.
- **Responsive Design:** Works seamlessly on both desktop and mobile devices.
- **Dark Mode Toggle:** Offers an engaging dark mode option for users who prefer it.
- **Contact Section:** Includes social links and a direct email contact (no email is shown to bots).
- **Optimized Codebase:** Project data and UI are separated for maintainability and scalability.

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **Material-UI (MUI)**: React UI framework for a polished, accessible UI.
- **Vercel/GitHub Pages**: For deploying the website to the cloud.

## Project Structure

- `src/components/` – All main UI components (Home, About, Projects, Contact, etc.)
- `src/data/projects.js` – Centralized, immutable project data for easy management
- `src/assets/` – Images and static assets

## Local Development

```sh
npm install
npm start
```

## Deployment

To deploy to GitHub Pages:

```sh
npm run deploy
```

Or deploy to Vercel for instant updates and previews.

---

Feel free to fork or use as a template for your own portfolio!
