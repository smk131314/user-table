export default class Component {
  targetEl: Element;
  props: any;
  state: any;

  constructor (targetEl: Element, props?: any) {
    this.targetEl = targetEl;
    this.props = props;
    this.setup();
    this.setEvent();
    this.render();
  }

  setup () {};
  mounted () {};
  template () { return '' };
  render () {
    this.targetEl.innerHTML = this.template();
    this.mounted();
  }
  setEvent () {}
  setState (newState: any) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
  addEvent (eventType: any, selector: any, callback: any) {
    const children: Element[] = [ ...this.targetEl.querySelectorAll(selector) as NodeListOf<Element>];
    const isTarget = (target: HTMLElement) => children.includes(target) || target.closest(selector);
    this.targetEl.addEventListener(eventType, event => {
      if (!isTarget(event.target)) return false;
      callback(event);
    })
  }
} 