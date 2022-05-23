import Component from "core/Component";
import AddUserButton from "@components/AddUserButton";
import UserListItem from "@components/UserListItem";
import { USER_DATA, UserType } from "constant";

export default class App extends Component {

  setup () {
    this.state = {
      userList: USER_DATA
    }
  }

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
    const { userList, addRandomUser, removeUser } = this;
    const addUserButtonEl = this.targetEl.querySelector('[data-component="add-user-button"]')
    const userListWrapperEl = this.targetEl.querySelector('[data-component="user-list-wrapper"]')

    if (addUserButtonEl && userListWrapperEl) {
      new AddUserButton(addUserButtonEl, {
        addUser: addRandomUser.bind(this)
      });
      new UserListItem(userListWrapperEl, {
        userList,
        removeUser: removeUser.bind(this)
      });
    }
  }

  get userList (): UserType[] {
    const { userList } = this.state;
    return userList
  }

  addRandomUser () {
    const { userList } = this.state;
    const newId = Math.max(0, ...userList.map((user: UserType) => user.id)) + 1;
    const randomIndex = Math.floor(Math.random() * USER_DATA.length);
    const newRandomUser: UserType = { ...USER_DATA[randomIndex] };
    newRandomUser.id = newId;

    this.setState({
      userList: [
        ...userList,
        newRandomUser
      ]
    })
  }

  removeUser (targetUserId: number) {
    const userList = [ ...this.state.userList ];
    const targetUserIndex = userList.findIndex(user => user.id === targetUserId);
    userList.splice(targetUserIndex, 1);
    this.setState({ userList });
  }
}