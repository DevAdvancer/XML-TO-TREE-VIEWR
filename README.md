# XML Tree Viewer

XML Tree Viewer is a React-based web application that allows users to visualize and edit XML content in real-time. It provides an interactive interface for viewing XML structure as a tree and editing XML content with syntax highlighting.

## Features

- Real-time XML parsing and tree visualization
- Syntax-highlighted XML editor
- Dark mode support
- File upload and download functionality
- Responsive design for various screen sizes

## Technologies Used

- React
- TypeScript
- CodeMirror for XML editing
- xml-js for XML parsing
- Lucide React for icons
- Tailwind CSS for styling

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/xml-tree-viewer.git
   cd xml-tree-viewer
   ```

2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

3. Start the development server:
   ```
   npm run dev
   ```
   or
   ```
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

## Usage

1. **Editing XML**: Use the left panel to edit your XML content. The editor provides syntax highlighting for easier editing.

2. **Viewing Tree Structure**: The right panel displays the tree structure of your XML content. It updates in real-time as you edit the XML.

3. **Dark Mode**: Toggle between light and dark modes using the sun/moon icon in the header.

4. **File Operations**:
   - Upload an XML file using the upload button (cloud icon) in the header.
   - Download the current XML content using the download button (arrow down icon) in the header.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [CodeMirror](https://codemirror.net/) for the excellent code editor
- [xml-js](https://github.com/nashwaan/xml-js) for XML parsing
- [Lucide](https://lucide.dev/) for the beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
