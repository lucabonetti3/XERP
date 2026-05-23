export class XHeader extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback (){
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <div id="xheader">
            <link rel="stylesheet" href="https://lucabonetti.altervista.org/XERP/CSS/XHeader.css"></link>
            <button id="toggle-xsidebar"><svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            <img id="logo-xerp" src="/XERP/XIMG/XERP.png">
            <button id="xlogin"><svg width="800px" height="800px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z" fill="#000000"/><path d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z" fill="#000000"/></svg></button>
        </div>

        `
        const toggleXSidebar= this.shadowRoot.getElementById('toggle-xsidebar');

        toggleXSidebar.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita che il click si propaghi ad altri elementi padri nell'header (qualsiasi elemento header)

            this.dispatchEvent(new CustomEvent('toggle-x-sidebar', {
                bubbles: true,
                composed: true
            }));
        });
                
    }
}