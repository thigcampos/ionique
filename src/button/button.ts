import { html, LitElement } from  'lit-element';

export class BaseButton extends LitElement {
    render() {
        return html`
            <button class="base-btn">Base Button</button>
        `;
    }
}