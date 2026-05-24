export class XFooter extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback (){
        this.temaLS = localStorage.getItem('tema') ?? 'chiaro';

        if(this.temaLS === 'scuro'){
            document.documentElement.classList.add('dark-mode');
        } else{
            document.documentElement.classList.remove('dark-mode');
        }
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="https://lucabonetti.altervista.org/XERP/CSS/XFooter.css">
            <div class="pref-btn-container">
                <button id="open-popup-btn" class="pref-btn">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.6316 7.63137C15.2356 7.23535 15.0376 7.03735 14.9634 6.80902C14.8981 6.60817 14.8981 6.39183 14.9634 6.19098C15.0376 5.96265 15.2356 5.76465 15.6316 5.36863L18.47 2.53026C17.7168 2.18962 16.8806 2 16.0002 2C12.6865 2 10.0002 4.68629 10.0002 8C10.0002 8.49104 10.0592 8.9683 10.1705 9.42509C10.2896 9.91424 10.3492 10.1588 10.3387 10.3133C10.3276 10.4751 10.3035 10.5612 10.2289 10.7051C10.1576 10.8426 10.0211 10.9791 9.74804 11.2522L3.50023 17.5C2.6718 18.3284 2.6718 19.6716 3.50023 20.5C4.32865 21.3284 5.6718 21.3284 6.50023 20.5L12.748 14.2522C13.0211 13.9791 13.1576 13.8426 13.2951 13.7714C13.4391 13.6968 13.5251 13.6727 13.6869 13.6616C13.8414 13.651 14.086 13.7106 14.5751 13.8297C15.0319 13.941 15.5092 14 16.0002 14C19.3139 14 22.0002 11.3137 22.0002 8C22.0002 7.11959 21.8106 6.28347 21.47 5.53026L18.6316 8.36863C18.2356 8.76465 18.0376 8.96265 17.8092 9.03684C17.6084 9.1021 17.3921 9.1021 17.1912 9.03684C16.9629 8.96265 16.7649 8.76465 16.3689 8.36863L15.6316 7.63137Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </button>
            </div>

            <div id="popup-overlay" class="hidden"></div>
            <div id="popup-preferenze" class="hidden">
                <h3>PREFERENZE</h3>
                <div id="preferenza-tema">

                    <h4>TEMA</h4>
                    
                    <button id="tema-chiaro" class="tema-chiaro ${this.temaLS === 'chiaro' ? 'btn-active' : ''}">
                        <svg fill="black" width="800px" height="800px" viewBox="-5.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <title>light</title>
                            <path d="M11.875 6v2.469c0 0.844-0.375 1.25-1.156 1.25s-1.156-0.406-1.156-1.25v-2.469c0-0.813 0.375-1.219 1.156-1.219s1.156 0.406 1.156 1.219zM14.219 9.25l1.438-2.031c0.469-0.625 1.063-0.75 1.656-0.313s0.656 1 0.188 1.688l-1.438 2c-0.469 0.688-1.031 0.75-1.656 0.313-0.594-0.438-0.656-0.969-0.188-1.656zM5.781 7.25l1.469 2c0.469 0.688 0.406 1.219-0.219 1.656-0.594 0.469-1.156 0.375-1.625-0.313l-1.469-2c-0.469-0.688-0.406-1.219 0.219-1.656 0.594-0.469 1.156-0.375 1.625 0.313zM10.719 11.125c2.688 0 4.875 2.188 4.875 4.875 0 2.656-2.188 4.813-4.875 4.813s-4.875-2.156-4.875-4.813c0-2.688 2.188-4.875 4.875-4.875zM1.594 11.813l2.375 0.75c0.781 0.25 1.063 0.719 0.813 1.469-0.219 0.75-0.75 0.969-1.563 0.719l-2.313-0.75c-0.781-0.25-1.063-0.75-0.844-1.5 0.25-0.719 0.75-0.938 1.531-0.688zM17.5 12.563l2.344-0.75c0.813-0.25 1.313-0.031 1.531 0.688 0.25 0.75-0.031 1.25-0.844 1.469l-2.313 0.781c-0.781 0.25-1.281 0.031-1.531-0.719-0.219-0.75 0.031-1.219 0.813-1.469zM10.719 18.688c1.5 0 2.719-1.219 2.719-2.688 0-1.5-1.219-2.719-2.719-2.719s-2.688 1.219-2.688 2.719c0 1.469 1.188 2.688 2.688 2.688zM0.906 17.969l2.344-0.75c0.781-0.25 1.313-0.063 1.531 0.688 0.25 0.75-0.031 1.219-0.813 1.469l-2.375 0.781c-0.781 0.25-1.281 0.031-1.531-0.719-0.219-0.75 0.063-1.219 0.844-1.469zM18.219 17.219l2.344 0.75c0.781 0.25 1.063 0.719 0.813 1.469-0.219 0.75-0.719 0.969-1.531 0.719l-2.344-0.781c-0.813-0.25-1.031-0.719-0.813-1.469 0.25-0.75 0.75-0.938 1.531-0.688zM3.938 23.344l1.469-1.969c0.469-0.688 1.031-0.781 1.625-0.313 0.625 0.438 0.688 0.969 0.219 1.656l-1.469 1.969c-0.469 0.688-1.031 0.813-1.656 0.375-0.594-0.438-0.656-1.031-0.188-1.719zM16.063 21.375l1.438 1.969c0.469 0.688 0.406 1.281-0.188 1.719s-1.188 0.281-1.656-0.344l-1.438-2c-0.469-0.688-0.406-1.219 0.188-1.656 0.625-0.438 1.188-0.375 1.656 0.313zM11.875 23.469v2.469c0 0.844-0.375 1.25-1.156 1.25s-1.156-0.406-1.156-1.25v-2.469c0-0.844 0.375-1.25 1.156-1.25s1.156 0.406 1.156 1.25z"></path>
                        </svg>
                    CHIARO</button>

                    <button id="tema-scuro" class="tema-scuro ${this.temaLS === 'scuro' ? 'btn-active' : ''}">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.23129 2.24048C9.24338 1.78695 10.1202 2.81145 9.80357 3.70098C8.72924 6.71928 9.38932 10.1474 11.6193 12.3765C13.8606 14.617 17.3114 15.2755 20.3395 14.1819C21.2206 13.8637 22.2173 14.7319 21.7817 15.7199C21.7688 15.7491 21.7558 15.7782 21.7427 15.8074C20.9674 17.5266 19.7272 19.1434 18.1227 20.2274C16.4125 21.3828 14.3957 22.0001 12.3316 22.0001H12.3306C9.93035 21.9975 7.6057 21.1603 5.75517 19.6321C3.90463 18.1039 2.64345 15.9797 2.18793 13.6237C1.73241 11.2677 2.11094 8.82672 3.2586 6.71917C4.34658 4.72121 6.17608 3.16858 8.20153 2.25386L8.23129 2.24048Z" fill="currentColor"/>
                        </svg>
                    SCURO</button>
                </div>
                <div id="button-popup">
                    <button id="close-popup">Chiudi</button>
                    <button id="save-popup">Salva</button>
                </div>
            </div>
        `
        const popupBtn = this.shadowRoot.getElementById('open-popup-btn');

        const popupOverlay = this.shadowRoot.getElementById('popup-overlay');
        const popupContent = this.shadowRoot.getElementById('popup-preferenze');

        const temaChiaroBtn = this.shadowRoot.getElementById('tema-chiaro');
        const temaScuroBtn = this.shadowRoot.getElementById('tema-scuro');

        const chiudiBtn = this.shadowRoot.getElementById('close-popup');
        const salvaBtn = this.shadowRoot.getElementById('save-popup');

        // APRE IL POPUP
        popupBtn.addEventListener('click', () => {
            popupOverlay.classList.remove('hidden');
            popupContent.classList.remove('hidden');
        });

        // TASTO CHIUDI
        chiudiBtn.addEventListener('click', () => {
            popupOverlay.classList.add('hidden');
            popupContent.classList.add('hidden');
            if(temaChiaroBtn.classList.contains('btn-active') && localStorage.getItem('tema') === 'scuro'){
                temaChiaroBtn.classList.remove('btn-active');
                temaScuroBtn.classList.add('btn-active');
            } else{
                if(temaScuroBtn.classList.contains('btn-active') && localStorage.getItem('tema') === 'chiaro'){
                    temaChiaroBtn.classList.add('btn-active');
                    temaScuroBtn.classList.remove('btn-active');
                }
                
            }
        });

        // TASTO SALVA
        salvaBtn.addEventListener('click', () => {
            popupOverlay.classList.add('hidden');
            popupContent.classList.add('hidden');
            if(temaChiaroBtn.classList.contains('btn-active')){
                localStorage.setItem('tema', 'chiaro');
                document.documentElement.classList.remove('dark-mode');
            } else{
                localStorage.setItem('tema', 'scuro');
                document.documentElement.classList.add('dark-mode');
            }
        });

        // TEMA CHIARO
        temaChiaroBtn.addEventListener('click', () =>{
            temaChiaroBtn.classList.add('btn-active');
            temaScuroBtn.classList.remove('btn-active');
        });

        //TEMA SCURO
        temaScuroBtn.addEventListener('click', () =>{
            temaScuroBtn.classList.add('btn-active');
            temaChiaroBtn.classList.remove('btn-active');
        });
                
    }
}