## Getting Started ( CODE EDITOR )

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have Node.js and npm installed. You can download them from [Node.js](https://nodejs.org/).

### Installing

1. **Clone the repository**

   ```
   git clone https://github.com/NileshDeshmukh09/Code-Editor.git
   ```

2. **Navigate to the project directory**

   ```
   cd Code-Editor
   ```

3. **Install dependencies**

   ```
   npm install
   ```

4. **Start the development server**

   ```
   npm run dev
   ```

5. **Testing**
   This project uses @testing-library/react for testing. To run tests:

   ```
   npm test
   ```

   Tests cover the following scenarios:

    Rendering: Verifies if the main App component renders correctly.
        CodeEditor Component:
        - Updates sourceCode state when typing.
        - Prevents text selection within the editor.
        - Applies syntax highlighting and validates highlighted tokens.

## Tests Covered

### Rendering

- Verifies if the main App component renders correctly.

### CodeEditor Component

- Updates `sourceCode` state when typing
- Prevents text selection within the editor
- Applies syntax highlighting and validates highlighted tokens
   
