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
          <td>
            <img src="${user.profileUrl}" alt='${user.name} profile' />
            <p>${user.name}</p>
          </td>
          <td>${user.email}</td>
          <td>${user.phone}</td>
          <td>${user.date}</td>
          <td>
            <button type="button" class="deleteButton">delete</button>
          </td>
        </tr>`
      ))}
    `
  }
}