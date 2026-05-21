export class XMenuNavigazione extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://lucabonetti.altervista.org/XERP/CSS/XMenuNavigazione.css"></link>
            <section class="grid-container">
                <a class="grid-nav-item-link" href="https://lucabonetti.altervista.org/XERP/"><div class="grid-nav-item">HOMEPAGE</div></a>
                <a class="grid-nav-item-link" href="https://lucabonetti.altervista.org/XERP/MAGAZZINO/"><div class="grid-nav-item">MAGAZZINO</div></a>
                <a class="grid-nav-item-link" href="https://lucabonetti.altervista.org/XERP/ORDINI/"><div class="grid-nav-item">ORDINI</div></a>
                <a class="grid-nav-item-link" href="https://lucabonetti.altervista.org/XERP/GESTIONE/"><div class="grid-nav-item">GESTIONE</div></a>
            </section>
        <button class="menu-button">MENU</button>
        `
        const xmenu = this.shadowRoot.querySelector('.grid-container');
        const button = this.shadowRoot.querySelector('.menu-button');
        button.addEventListener('click', ()=>{
            if(xmenu.classList.contains('hidden')){
                xmenu.classList.remove('hidden');
            }     
            else{
                xmenu.classList.add('hidden');
            }       
        })
    }  
}