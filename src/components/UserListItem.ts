import Component from "core/Component";
import { UserType } from "constant";

export default class UserListItem extends Component {
  
  template(): string {
    const { userList } = this.props;

    return `
      ${userList.map((user: UserType) => (
        `<tr class="userListItem" data-id="${user.id}">
          <td class="profileWrapper">
            <img src="${user.profileUrl}" alt='${user.name} profile' class="profileImage" />
            <p>${user.name}</p>
          </td>
          <td>${user.email}</td>
          <td>${user.phone}</td>
          <td>${user.date}</td>
          <td class="deleteButtonWrapper">
            <button type="button" class="deleteButton">
              <img src="/images/trash-can.svg" alt="trash can icon" />
            </button>
          </td>
        </tr>`
      )).join('')}
    `
  }

  setEvent(): void {
    const { removeUser } = this.props;

    this.addEvent('click', '.deleteButton', ({ target }: any) => {
      const targetId = Number(target.closest('[data-id').dataset.id)
      removeUser(targetId)
    })
  }
}