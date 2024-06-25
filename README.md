# Ownership Calculator

Ownership Calculator is a React application that calculates and displays the total ownership percentages for individuals based on hierarchical ownership structures. This application allows users to add companies or people with specified ownership percentages and calculates the total ownership for each person, accounting for nested ownership relationships.

## Features

- **Add Owners**: Add companies or people with specified ownership percentages.
- **Hierarchical Ownership Calculation**: Calculate ownership percentages recursively based on parent-child relationships.
- **Aggregated Ownership Display**: Display the total ownership percentages for individuals, combining percentages if an individual is listed multiple times.
- **User-friendly Interface**: Intuitive interface built with React and styled using Tailwind CSS.
- **Real-time Updates**: Ownership percentages are updated in real-time as users add or modify owners.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/kevinfiddick/Ownership-Calculator.git
   cd Ownership-Calculator
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the application:
   ```sh
   npm start
   ```

## Usage

1. Open the application in your browser (usually at `http://localhost:3000`).
2. Use the interface to add owners by specifying their name, type (company or person), ownership percentage, and parent ID if applicable.
3. The application will automatically calculate and display the total ownership percentages for individuals.

## Code Structure

- **`src`**: Contains the source code of the application.
  - **`components`**: Reusable Ownership Table.
  - **`forms`**: Reusable Owner Form.
  - **`icons`**: SVG Icons from [Github](https://octicons.github.com/)
  - **`inputs`**: Inputs used in the Owner Form.
  - **`utils`**: Utility functions for ownership calculations.
  - **`App.js`**: Main application component.
  - **`index.js`**: Entry point of the application.
  - **`styles`**: Tailwind CSS configuration.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under The Unlicense. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or suggestions, please open an issue in the repository or contact the repository owner.
