import { renderToString } from 'react-dom/server';
import { LuCat } from "react-icons/lu"

// Function to convert a React component to an SVG string
function convertComponentToSVGString(component) {
  return `data:image/svg+xml;base64,${btoa(renderToString(component))}`;
}

// Function to change the website's favicon
function changeFavicon(svgString) {
  const link = document.createElement('link');
  const oldLinks = document.querySelectorAll('link[rel="shortcut icon"]');
  oldLinks.forEach(e => e.parentNode.removeChild(e));
  link.id = 'dynamic-favicon';
  link.rel = 'shortcut icon';
  link.href = svgString;
  document.head.appendChild(link);
}

// Convert the LuCat component to an SVG string
const luCatSVGString = convertComponentToSVGString(<LuCat />);

// Change the website's favicon to the LuCat icon
changeFavicon(luCatSVGString);
