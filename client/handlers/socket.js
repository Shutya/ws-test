import io from 'socket.io-client';
import {changeUsersCount, addNewMessageOnPage} from './html';
import {createChat} from '../components/chat';

const socket = io('http://localhost:8080');

export const addNewUser = (username) => {
  socket.emit('new user', username);
};

export const addNewMessage = (message) => {
  socket.emit('new message', message);
};

socket.on('login', (data) => {
  createChat();
  changeUsersCount(data.usersCount);
});

socket.on('user joined', (data) => {
  changeUsersCount(data.usersCount);
});

socket.on('user left', (data) => {
  changeUsersCount(data.usersCount);
});

socket.on('new message', (data) => {
  addNewMessageOnPage(data.username, data.message);
});
