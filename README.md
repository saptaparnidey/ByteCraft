# ByteCraft - Advanced Web-Based Code Utility Platform

ByteCraft is a feature-rich, web-based tool designed for developers to write, execute, format, and transform code seamlessly. It combines a robust Java editor with powerful utilities for JSON and XML manipulation, wrapped in a modern, customizable user interface.

## 🚀 Features

### 1. Java Code Editor

- **Real-time Compilation & Execution**: Write standard Java code and execute it instantly on the server.
- **Intelligent Editor**: Powered by Monaco Editor (VS Code's core) for syntax highlighting and smart indentations.
- **Safety Features**: Includes a default template with a clear warning to preserve the `Main` class entry point.

### 2. Smart Formatter

- **Multi-Format Support**: Dedicated tools for **JSON** and **XML**.
- **Beautify**: Formats minified or messy code into human-readable, indented structures.
- **Minify**: Compresses code by removing unnecessary whitespace for production usage.

### 3. Converter Tool

- **Bidirectional Conversion**: seamless conversion between **JSON and XML** formats.
- **Error Handling**: Provides clear feedback if the input format is invalid.

### 4. JOLT Processor

- **Advanced Transformation**: Perform complex JSON-to-JSON transformations using JOLT specifications.
- **Split-Pane Verification**: Dedicated view with side-by-side Input JSON and JOLT Spec editors for easy testing and debugging.

### 5. Premium UI/UX

- **Theme Engine**: A robust theming system with 9 distinct presets:
  - **Dark Modes**: Dark (Default), Oceanic, Dracula, Forest, Cyberpunk.
  - **Light Modes**: Light, Sunset, Lavender, Solarized Light.
  - **Dynamic Editor Theming**: The code editor background automatically adapts to match the selected UI theme.
- **Tabbed Navigation**: Clean separation of tools (Java, Formatter, Converter, JOLT).
- **Utility Tools**:
  - **Floating Actions**: Context-aware 'Copy to Clipboard' and 'Clear/Delete' buttons.
    - _Note: Delete/Clear is disabled in the Java Editor to prevent accidental code loss._
  - **Resizable Output**: Draggable bar to adjust the size of the output console.

## 🛠 Tech Stack

- **Frontend**: HTML5, Vanilla JavaScript, CSS3 (Custom Properties), Monaco Editor.
- **Backend**: Java 17+, Spring Boot 3.2.0.
- **Build Tool**: Maven.
- **Libraries**:
  - `jackson-databind` & `jackson-dataformat-xml` for parsing.
  - `jolt-core` for JSON transformations.

## 🏃‍♂️ How to Run

### Prerequisites

- **Java 17** or higher installed.
- **Maven** installed.

### Steps

1.  **Clone the repository**:

    ```bash
    git clone <repository-url>
    cd ByteCraft
    ```

2.  **Build the project**:

    ```bash
    mvn clean install
    ```

3.  **Run the application**:

    ```bash
    mvn spring-boot:run
    ```

4.  **Access the App**:
    Open your browser and navigate to:
    [http://localhost:8080](http://localhost:8080)

### 🖥️ Run as Desktop App (Electron)

ByteCraft can be run as a native desktop application using Electron.

> **Note**: You must have Node.js and npm installed.

1.  **Install Node Dependencies**:

    ```bash
    npm install
    ```

2.  **Start Development Mode**:
    This single command starts both the Spring Boot backend AND the Electron desktop app.
    ```bash
    npm run dev
    ```
    - It waits for the backend to be ready before launching the window.
    - Both processes run in the same terminal.

## 📝 Usage Guide

- **Java Editor**: Type your code in the main window and click **Run Code**. Ensure your main class is named `Main`.
- **Changing Tools**: Use the tabs at the top. For **Formatter** and **Converter**, hover over the tab to select the specific mode (e.g., "JSON to XML").
- **Changing Themes**: Click the **Round Icon** (Theme) button in the header and select your preferred look from the dropdown.
- **Copy/Clear**: Use the floating icons in the top-right of the editor. The trash icon clears the current editor (not available in Java mode).
