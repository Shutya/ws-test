import {addNewUser, addNewMessage} from './socket';

export const onJoinChat = () => {
  const username = document.querySelector('#joinName').value;
  addNewUser(username);
};

export const onSendMessage = () => {
  const message = document.querySelector('#message').value;
  addNewMessage(message);
}

export const changeUsersCount = (usersCount) => {
  const countArea = document.querySelector('#usersCount');
  if(countArea) {
    countArea.innerHTML = usersCount;
  }
};

export const addNewMessageOnPage = (username, message) => {
  const chatBox = document.querySelector('#chatBox');
  if (chatBox) {
    const msg = document.createElement('p');
    msg.innerHTML = `<strong>${username}:</strong> ${message}`;
    chatBox.appendChild(msg);
  }
}