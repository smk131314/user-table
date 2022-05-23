import Component from "core/Component";

export default class AddUserButton extends Component {
  template(): string {
    return `
    <button type="button" class="addButton">+</button>`
  }
}