// CREAZIONE DEI WEB COMPONENTS
import { XHeader } from "./XHEADER/XHeader.js";
customElements.define('x-header', XHeader);

import { XSidebar } from "./XSIDEBAR/XSidebar.js";
customElements.define('x-sidebar', XSidebar);

// LISTENER TOGGLE SIDEBAR
const header = document.querySelector('x-header');
const sidebar = document.querySelector('x-sidebar');

header.addEventListener('toggle-x-sidebar', () => {
    sidebar.classList.toggle('hidden');
});