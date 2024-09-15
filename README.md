# 🎶 Music Tutorial Website

A **Music Tutorial Website** built using **Next.js**, **Tailwind CSS**, and **TypeScript**. This platform allows users to explore a variety of music tutorials, view upcoming webinars, and efficiently navigate through tutorial pages using dynamic routes.

![Website Screenshot](https://github.com/SatyakiB7076/TextUtils-React/blob/main/Screenshot%202024-09-15%20203117.png)

## 🌟 Features

- **Upcoming Webinars**: Users can stay updated on the latest music webinars and register for them.
- **All Tutorials Page**: Explore all available music tutorials with easy-to-use navigation.
- **Dynamic Routing**: Fast and smooth transitions between different pages using Next.js routing.
- **Responsive Design**: Tailwind CSS ensures the website is fully responsive across devices.
- **TypeScript**: Guarantees type safety, improving the robustness and maintainability of the code.

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) - A powerful React framework for server-side rendering and static site generation.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for building fast, responsive UIs.
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript that enhances code quality and reliability.


## folder structure:
```bash
  |-- public/
  |-- src/
      |-- components/
          |-- Navbar.tsx
          |-- Footer.tsx
          |-- TutorialCard.tsx
      |-- pages/
          |-- index.tsx
          |-- webinars.tsx
          |-- tutorials.tsx
          |-- [tutorial].tsx
      |-- styles/
          |-- globals.css
  |-- tailwind.config.js
  |-- tsconfig.json
  |-- package.json
```
## 🎸 Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/SatyakiB7076/musictutorial_website_nextjs.git
   cd musictutorial_website_nextjs
   
2. **Install Dependencies**
    ```bash
    npm install
# or
    yarn install
    
3. **Run the Development Server**
    ```bash
    npm run dev
  # or
    yarn dev

**The website will be available at http://localhost:3000.**

##✨ Customization
You can customize different parts of the website:

Webinars Page: Update the data for upcoming webinars in /pages/webinars.tsx.
Tutorials Page: Modify the tutorial content inside /pages/tutorials.tsx.
Styles: Update the design by editing the Tailwind CSS styles in the /styles folder.





