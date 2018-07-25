import {onSendMessage} from '../handlers/html';

export const createChat = () => {
  const markup = `
    <p>Users in room: <span id='usersCount'>0</span></p>
    <div id="chatBox">
    </div>
    <div>
        <textarea id="message"></textarea>
        <input type="button" value="send" id="sendMessage";">
    </div>`;
  const wrapper = document.querySelector('#wrapper');
  wrapper.innerHTML = markup;
  const sendMessage = wrapper.querySelector('#sendMessage');
  sendMessage.addEventListener('click', onSendMessage);
};
