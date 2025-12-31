# SDT Online News Portal

![GitHub last commit](https://img.shields.io/github/last-commit/sdtcombd/sdt-online-news-portal-html)
![GitHub license](https://img.shields.io/github/license/sdtcombd/sdt-online-news-portal-html)

This is a simple online news portal built with Tailwind CSS and Alpine.js. It features a responsive design and is optimized for performance.

## Features

- **Responsive Design**: Adapts seamlessly to various screen sizes, from mobile devices to large desktops.
- **Dark Mode Support**: Toggle between light and dark themes for a comfortable viewing experience.
- **Dynamic Content Loading**: Efficiently loads news articles and updates content without full page reloads.
- **User-Friendly Interface**: Intuitive navigation and clean layout for an optimal browsing experience.
- **Search Functionality**: Easily find specific news articles using the integrated search bar.
- **Category Filtering**: Browse news by different categories (e.g., Sports, Technology, Politics).

## Technologies Used

- Tailwind CSS
- Alpine.js
- HTML5
- JavaScript

## Installation

To get a local copy up and running, follow these simple steps.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/sdtcombd/sdt-online-news-portal-html.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd sdt-online-news-portal-html
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```

## Development

To start the development server and watch for changes:

```bash
npm run start
```

This command will compile Tailwind CSS and watch for changes in your HTML and CSS files. Open `src/index.html` in your browser to see the result.

## Building for Production

To build the project for production:

```bash
npm run build
```

This will generate a production-ready CSS file in the `dist` directory.

## Usage

- Browse through the latest news articles on the homepage.
- Click on any article to read more details on its dedicated page.
- Use the search functionality to find specific news items by keywords.
- Toggle dark mode using the theme switch for a personalized viewing experience.
- Explore news articles by different categories.

## Project Structure

```
sdt-online-news-portal-html/
├── src/
│   ├── assets/                 # Static assets like fonts and images
│   │   ├── fonts/
│   │   └── images/
│   ├── css/                    # CSS stylesheets
│   │   ├── custom-main.css
│   │   └── style.css
│   ├── img/                    # Images specific to content
│   │   └── logo/
│   │       └── logo.png
│   ├── js/                     # JavaScript files
│   │   └── main.js
│   └── index.html              # Main HTML file
├── .gitignore                  # Git ignore file
├── Home Page.jpg               # Screenshot of the home page
├── package-lock.json           # Node.js dependency lock file
├── package.json                # Node.js project metadata and scripts
├── postcss.config.js           # PostCSS configuration for Tailwind CSS
├── README.md                   # Project README file
└── tailwind.config.js          # Tailwind CSS configuration
```

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes and commit them (`git commit -m 'Add new feature'`).
4.  Push to the branch (`git push origin feature/your-feature-name`).
5.  Open a Pull Request.

Please ensure your code adheres to the existing style and includes appropriate documentation.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Screenshots

![Screenshot 1](Home%20Page.jpg)