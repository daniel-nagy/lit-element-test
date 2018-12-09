import { customElement, html, LitElement, property } from '@polymer/lit-element';

@customElement('my-app' as any)
class AppComponent extends LitElement {

  @property()
  test = 'world';

  render() {
    return html`<div>hello ${this.test}</div>`;
  }
}
