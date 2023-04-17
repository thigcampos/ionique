import { html, LitElement } from  'lit-element';

export class BaseButton extends LitElement {
    render() {
        return html`
            <button class="base">${this.text}</button>
        `;
    }
    constructor(){
        super(); //calls the empty LitElement constructor
        this.text = "Ionique";
    }

    static properties = {
        text: {}
    }
}

customElements.define('base-button', BaseButton);