import Component from "core/Component";

export default class UserListItem extends Component {
  template(): string {
    const userList = [
      {
        name: 'Lucy Dua',
        profileUrl: 'https://picsum.photos/200/300',
        email: 'Lucy@emial.com',
        phone: '081 454 0666',
        date: 'Today'
      }, {
        name: 'Lucy Dua',
        profileUrl: 'https://picsum.photos/200/300',
        email: 'Lucy@emial.com',
        phone: '081 454 0666',
        date: 'Today'
      }, {
        name: 'Lucy Dua',
        profileUrl: 'https://picsum.photos/200/300',
        email: 'Lucy@emial.com',
        phone: '081 454 0666',
        date: 'Today'
      }, {
        name: 'Lucy Dua',
        profileUrl: 'https://picsum.photos/200/300',
        email: 'Lucy@emial.com',
        phone: '081 454 0666',
        date: 'Today'
      }
    ]

    return `
      ${userList.map(user => (
        `<tr class="userListItem">
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
}