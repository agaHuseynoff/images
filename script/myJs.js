var questions = document.getElementsByClassName('questions');
var questionsLi = document.querySelectorAll('.questions li');
var select = document.getElementsByClassName('place-questions');
var imgCont = document.getElementsByClassName('img-cont');
var selecte = document.querySelectorAll('.answer span');
var arr = ['images/cat.jpeg', 'images/table.jpg', 'images/apple.jpg', 'images/dog.jpg', 'images/forest.jpeg', 'images/rabbit.jpg', 'images/lion.jpg', 'images/building.jpg', 'images/cheese-stick.jpg', 'images/hard-disk.jpeg', 'images/chair.jpg', 'images/fox.jpg', 'images/castle.jpg', 'images/cheese-burger.jpg', 'images/pizza.jpg'];

for (var i = 0; i < questionsLi.length; i++) {

	for (var y = 0; y < selecte.length; y++) {
		selecte[y].onclick = function () {
			var childElem = this.parentElement.children;
			for (var e = 0; e < childElem.length; e++) {
				childElem[e].onclick = undefined;
			}

			var motherCont = this.parentNode.parentNode;
			motherCont.style.backgroundColor = '#E0E0E0';
			var matchingImage = this.parentNode.parentElement.firstElementChild.lastElementChild.getAttribute('src');
			var liEl = document.createElement('img');
			if (matchingImage == arr[0] && this.textContent == 'cat') {
				liEl.src = 'images/tick.png';
				liEl.className = 'okey';
				this.appendChild(liEl);
			} else if (matchingImage == arr[1] && this.textContent == 'table') {
				liEl.src = 'images/tick.png';
				liEl.className = 'okey';
				this.appendChild(liEl);
			} else if (matchingImage == arr[2] && this.textContent == 'apple') {
				liEl.src = 'images/tick.png';
				liEl.className = 'okey';
				this.appendChild(liEl);
			} else if (matchingImage == arr[3] && this.textContent == 'dog') {
				liEl.src = 'images/tick.png';
				liEl.className = 'okey';
				this.appendChild(liEl);
			} else if (matchingImage == arr[4] && this.textContent == 'forest') {
				liEl.src = 'images/tick.png';
				liEl.className = 'okey';
				this.appendChild(liEl);
			} else if (matchingImage == arr[5] && this.textContent == 'rabbit') {
				liEl.src = 'images/tick.png';
				liEl.className = 'okey';
				this.appendChild(liEl);
			} else if (matchingImage == arr[6] && this.textContent == 'lion') {
				liEl.src = 'images/tick.png';
				liEl.className = 'okey';
				this.appendChild(liEl);
			} else if (matchingImage == arr[7] && this.textContent == 'building') {
				liEl.src = 'images/tick.png';
				liEl.className = 'okey';
				this.appendChild(liEl);
			} else if (matchingImage == arr[8] && this.textContent == 'cheese stick') {
				liEl.src = 'images/tick.png';
				liEl.className = 'okey';
				this.appendChild(liEl);
			} else if (matchingImage == arr[9] && this.textContent == 'hard disk') {
				liEl.src = 'images/tick.png';
				liEl.className = 'okey';
				this.appendChild(liEl);
			} else if (matchingImage == arr[10] && this.textContent == 'chair') {
				liEl.src = 'images/tick.png';
				liEl.className = 'okey';
				this.appendChild(liEl);
			} else if (matchingImage == arr[11] && this.textContent == 'fox') {
				liEl.src = 'images/tick.png';
				liEl.className = 'okey';
				this.appendChild(liEl);
			} else if (matchingImage == arr[12] && this.textContent == 'castle') {
				liEl.src = 'images/tick.png';
				liEl.className = 'okey';
				this.appendChild(liEl);
			} else if (matchingImage == arr[13] && this.textContent == 'cheese burger') {
				liEl.src = 'images/tick.png';
				liEl.className = 'okey';
				this.appendChild(liEl);
			} else if (matchingImage == arr[14] && this.textContent == 'pizza') {
				liEl.src = 'images/tick.png';
				liEl.className = 'okey';
				this.appendChild(liEl);
			} else {
				liEl.src = 'images/cross.png';
				liEl.className = 'non';
				this.appendChild(liEl);
			}


		} //end onclick


	}
}

var chechAnswers = document.getElementById('btn');
chechAnswers.onclick = function () {
	var p1 = document.querySelector('.count .correct');
	var p2 = document.querySelector('.count .wrong');
	var creete1 = document.createElement("span");
	var creete2 = document.createElement("span");
	var correctAnswer = document.querySelectorAll('.okey');
	var wrongAnser = document.querySelectorAll('.non');
	p1.appendChild(creete1);
	creete1.innerHTML = correctAnswer.length;

	p2.appendChild(creete2);
	creete2.innerHTML = wrongAnser.length;

	this.onclick = undefined;
	for (var i = 0; i < selecte.length; i++) {
		selecte[i].onclick = undefined;
	}

}


var refresh = document.getElementById('refresh');
refresh.onclick = function () {
	location.reload();
}
