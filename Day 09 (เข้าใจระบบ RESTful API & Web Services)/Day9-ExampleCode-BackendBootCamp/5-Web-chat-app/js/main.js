document.addEventListener('DOMContentLoaded', function () {
	let ws = new WebSocket('ws://localhost:8080');

	let messages = document.getElementById('chat-messages');
	let input = document.getElementById('message-input');
	let button = document.getElementById('send-button');

	button.addEventListener('click', function () {
		let message = input.value;
		ws.send(message);
		input.value = '';
	});

	ws.onmessage = function (event) {
		let message = event.data;
		messages.innerHTML += '<div>' + message + '</div>';
	};
});
