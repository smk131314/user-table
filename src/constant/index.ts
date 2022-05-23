export interface UserType {
  name: string;
  profileUrl: string;
  email: string;
  phone: string;
  date: string;
  id: number;
}

const USER_DATA: UserType[] = [
  {
    name: 'Lucy Dua',
    profileUrl: 'https://picsum.photos/200/300',
    email: 'Lucy@emial.com',
    phone: '081 454 0666',
    date: 'Today',
    id: 1,
  }, {
    name: 'Jamie Wolf',
    profileUrl: 'https://picsum.photos/200/300',
    email: 'Jamie@email.com',
    phone: '085 472 0628',
    date: '21 Feb’ 2020',
    id: 2,
  }, {
    name: 'Alex Walton',
    profileUrl: 'https://picsum.photos/200/300',
    email: 'Alex@email.com',
    phone: '081 407 0396',
    date: '21 Feb’ 2020',
    id: 3,
  }, {
    name: 'Imogen Heap',
    profileUrl: 'https://picsum.photos/200/300',
    email: 'Imogen@email.com',
    phone: '085 246 4578',
    date: '16 Jan’ 2019',
    id: 4
  }
]

export { USER_DATA }