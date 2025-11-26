<h1>Random Password Generator 🔑</h1>

<h2>Overview</h2>

This project is a simple Random Password Generator built with HTML, CSS, and TypeScript.
It allows users to specify the desired password length and generates a secure random password containing lowercase letters, uppercase letters, numbers, and symbols.

<h3>The project demonstrates:</h3>

- DOM manipulation with TypeScript

- Type safety using explicit type annotations

- Styling with modern CSS

- Event-driven programming in the browser

<h2>Features</h2>

- Input field to specify password length (between 4 and 32 characters)

- Button to generate a random password instantly

- Output area to display the generated password

- Clean and responsive UI styled with CSS

- TypeScript version included for type safety and maintainability

<h2>Project Structure</h2>

<pre>
Password-Generator/
├── index.html        # Main HTML structure for the app
├── password.css      # Styling for layout, controls, and output
├── password.js       # Compiled JavaScript logic
├── password.ts       # TypeScript source code
├── README.md         # Project documentation
└── LICENSE           # MIT License file
</pre>

<h2>How It Works</h2>

- User enters the desired password length in the input field.

- On clicking the Generate button:

- The script combines lowercase, uppercase, numbers, and symbols into a character pool.

- A random character is selected repeatedly until the password reaches the chosen length.

- The generated password is displayed in the output area.

<h2>Running the Project</h2>

Clone the repository:

<pre>
git clone https://github.com/Basliel-Sisay/Password-Generator.git
</pre>

- Open index.html in your browser.

- The project runs entirely in the browser, no server setup required.

- If you want to edit the TypeScript file:
Use the TypeScript Playground or a local compiler (tsc) to transpile password.ts into password.js

<h2>Future Improvements</h2>

- Add checkboxes to include/exclude symbols, numbers, or uppercase letters.

- Implement a password strength indicator.

- Add a “Copy to Clipboard” button for convenience.

- Provide multiple password suggestions at once.

<h2>License</h2>

This project is licensed under the MIT License. You are free to use, modify, and distribute it.
