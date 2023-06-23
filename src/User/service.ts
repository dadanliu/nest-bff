import { Injectable } from '@nestjs/common';

@Injectable()
export default class UserService {
  private userList = [
    { name: '2', phone: '133312312312' },
    { name: 'lau', phone: '133' },
  ];

  getList() {
    return this.userList;
  }

  getDetail(id) {
    console.log('getDetail', id, this.userList);
    return this.userList.find((v) => v.name === String(id));
  }

  add(userData) {
    this.userList.push(userData);
  }

  delete(id) {
    this.userList = this.userList.filter((v) => v.name !== id);
    console.log('this.userList', this.userList);
  }
}
