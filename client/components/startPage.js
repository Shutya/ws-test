import { onJoinChat } from '../handlers/html';

export const createStartPage = () => {
  const markup = `
    <div>
        <h1>Websocket chat</h1>
        <div id="wrapper">
          Type name and join to chat.
          <input type="text" id="joinName">
          <input type="button" id="initialSubmit" value="Join Chat">
        </div>
    </div>`;
  const body = document.querySelector('body');
  body.innerHTML = markup;
  const joinChatSubmit = body.querySelector('#initialSubmit');
  joinChatSubmit.addEventListener('click', onJoinChat);
};
