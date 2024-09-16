---
sidebar_position: 5
---

# Environment Setup

This tutorial will guide you through installing the necessary tools for a web programming environment. You’ll learn how to install the following:
- **Code Editor**: VS Code
- **Version Control**: Git
- **Node.js**: For JavaScript runtime
- **Browser**: Chrome with Developer Tools

---

## 1. Install Visual Studio Code (VS Code)
VS Code is a lightweight code editor with excellent support for web development. 

### Steps:
1. Go to the [VS Code website](https://code.visualstudio.com/).
2. Download the installer for your operating system (Windows, macOS, or Linux).
3. Follow the installation instructions:
    - On **Windows**: Open the downloaded `.exe` file and follow the installer.
    - On **macOS**: Open the `.dmg` file and drag VS Code to the `Applications` folder.
    - On **Linux**: Follow the package manager instructions on the website.
4. Launch **VS Code** after installation.

### Extensions to Install:
- **Live Server**: Enables real-time preview of your website.
    - Open VS Code, click on the Extensions icon (`⇧⌘X` or `Ctrl+Shift+X`), search for "Live Server" and install it.

---

## 2. Install Git (Version Control)
Git is essential for managing your code and collaborating with others. 

### Steps:
1. Visit the official [Git website](https://git-scm.com/).
2. Download the installer for your operating system.
3. Install Git:
    - On **Windows**: Follow the installer and use default options unless you need something specific.
    - On **macOS**: Open Terminal and run `brew install git` (if you have Homebrew installed) or download Git from the website.
    - On **Linux**: Use your package manager, e.g., `sudo apt-get install git` (Debian/Ubuntu) or `sudo dnf install git` (Fedora).
4. Verify installation by opening a terminal (or Command Prompt on Windows) and typing:
    ```bash
    git --version
    ```
    You should see the Git version number if it's installed correctly.

---

## 3. Install Node.js (JavaScript Runtime)
Node.js allows you to run JavaScript outside of the browser and install essential development tools.

### Steps:
1. Go to the [Node.js website](https://nodejs.org/).
2. Download the **LTS** version (recommended for most users).
3. Install Node.js:
    - On **Windows** and **macOS**: Follow the installer instructions.
    - On **Linux**: Use the package manager, e.g.,
      ```bash
      sudo apt install nodejs npm
      ```
4. Verify installation:
    - Open a terminal or Command Prompt and run:
      ```bash
      node --version
      ```
    - Then check npm (Node's package manager) with:
      ```bash
      npm --version
      ```

### NPM Packages for Web Development:
- **Install Webpack** (used to bundle and serve your code):
    ```bash
    npm install --global webpack webpack-cli
    ```

---

## 4. Install Google Chrome (for Testing & DevTools)
Chrome is a widely-used browser with powerful developer tools.

### Steps:
1. Go to the [Google Chrome website](https://www.google.com/chrome/).
2. Download the installer for your operating system.
3. Follow the installation instructions.
4. Launch **Chrome**.

### Open Developer Tools in Chrome:
- Right-click on any web page and select **Inspect**, or press `F12` (Windows) or `⌘ + Option + I` (Mac).

---

## 5. Optional: Install BrowserSync (for live reloading)
BrowserSync is a tool that automatically refreshes your browser when you make changes to your code.

### Steps:
1. Open a terminal and run:
    ```bash
    npm install -g browser-sync
    ```
2. Navigate to your project folder and run:
    ```bash
    browser-sync start --server --files "*.html, *.css, *.js"
    ```
3. This command starts a local server and refreshes your browser when files change.

---

## 6. Verify Your Setup
Now that you’ve installed the essential tools, let's verify that everything works.

### Steps:
1. Create a new folder for your project:
    ```bash
    mkdir my-web-project
    cd my-web-project
    ```
2. Create a simple `index.html` file:
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello World</title>
    </head>
    <body>
        <h1>Hello, World!</h1>
    </body>
    </html>
    ```
3. Open the folder in **VS Code** and launch **Live Server** (from the VS Code status bar).
4. Verify that your browser opens and displays "Hello, World!".

---

## 7. Set Up GitHub (Optional)
GitHub is a popular platform for hosting and sharing code. 

### Steps:
1. [Create a GitHub account](https://github.com/).
2. Configure Git to use GitHub:
    ```bash
    git config --global user.name "Your Name"
    git config --global user.email "your-email@example.com"
    ```
3. Create a new repository on GitHub and follow the instructions to push your local code.

---

## Conclusion
With these tools, you are ready to start developing web applications locally. Happy coding!
