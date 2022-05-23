export default class Component {
  targetEl: Element;

  constructor (targetEl: Element) {
    this.targetEl = targetEl;
    this.setup();
    this.render();
  }

  setup () {};
  template () { return '' };
  render () {
    this.targetEl.innerHTML = this.template();
  }
} 