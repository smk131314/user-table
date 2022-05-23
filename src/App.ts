import Component from "core/Component";
import AddUserButton from "@components/AddUserButton";
import UserListItem from "@components/UserListItem";

export default class App extends Component {
  template(): string {
    return `
      <div class="userTableWrapper">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone number</th>
              <th>Date registered</th>
            </tr>
          </thead>
          <tr><td data-component="add-user-button"></td></tr>
          <tbody data-component="user-list-wrapper"></tbody>
        </table>
      </div>
    `
  }
  mounted(): void {
    const addUserButtonEl = this.targetEl.querySelector('[data-component="add-user-button"]')
    const userListWrapperEl = this.targetEl.querySelector('[data-component="user-list-wrapper"]')

    if (addUserButtonEl && userListWrapperEl) {
      new AddUserButton(addUserButtonEl);
      new UserListItem(userListWrapperEl);
    }
  }
}