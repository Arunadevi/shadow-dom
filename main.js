customElements.define('fancy-tabs', class extends HTMLElement {
    constructor() {
      super(); // always call super() first in the constructor.
  
      // Attach a shadow root to <fancy-tabs>.
      const shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.innerHTML = `
        <style>
            #panels {
                box-shadow: 0 2px 2px rgba(0, 0, 0, .3);
                background: white;
            }
            #tabs {
                display: inline-flex;
            }
            :host(.pink) #tabs button {
                background: pink; /* color internal #tabs node when host has class="pink". */
              }
            :host-context(.darktheme) #panels{
                color: white;
                background: black;
              }
        </style> <!-- styles are scoped to fancy-tabs! -->
        <div id="tabs">
            <slot id="tabsSlot" name="title"></slot>
            <button slot="title">Title4</button>
        </div>
        <div id="panels">
            <section>content panel 1</section>
            <section>content panel 2</section>
            <section>content panel 3</section>
        </div>
      `;
    }
  });

customElements.define('better-button', class extends HTMLElement {
    constructor() {
        super(); // always call super() first in the constructor.

        // Attach a shadow root to <fancy-tabs>.
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
        <!-- the image and span are better-button's light DOM -->
        <img src="gear.svg" slot="icon">
        <span>Settings</span>
        `;
    }
});


customElements.define('name-badge', class extends HTMLElement {
    constructor() {
        super(); // always call super() first in the constructor.

        // Attach a shadow root to <fancy-tabs>.
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
        <h2>Eric Bidelman</h2>
        <span class="title">
            Digital Jedi, <span class="company">Google</span>
        </span>
        `;
    }
});