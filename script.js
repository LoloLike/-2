let turn = 0;
let char = 'X';
let area = [
				['*','*','*'],
				['*','*','*'],
				['*','*','*']
								];


document.querySelector('table').onclick = function(){

	let cell = event.target;
	let column = cell.cellIndex;
	let row = cell.parentElement.rowIndex;

if (area[row][column] != 'X' && area[row][column] != 'O' ) {
	
	cell.innerHTML = char;
	turn++;
	if (turn % 2 == 0) {
		char = 'X';
	} else {
		char = 'O';
	}
}
	document.querySelector('.winner').innerHTML = 'Сейчас ходит: ' + char;


	// console.dir(cell)


	area[row][column] = char;


	if (char == 'X') {
			cell.style.backgroundColor = "red";
			cell.style.textAlign = 'center';
			cell.style.color = 'blue';
		} else {
			cell.style.backgroundColor = "lightgray";
			cell.style.color = 'black';
			cell.style.textAlign = 'center';
		};

	checkWinner();
	if (checkWinner() == 'X') {
			document.querySelector('.winner').innerHTML = 'Выиграли: О'
		}; 
	if (checkWinner() == 'O') {
			document.querySelector('.winner').innerHTML = 'Выиграли: Х'
		};
}
	



function checkWinner() {
	if (area[0][0] == 'X' && area[0][1] == 'X' && area[0][2] == 'X') {
		return 'X';
	};
	if (area[1][0] == 'X' && area[1][1] == 'X' && area[1][2] == 'X') {
		return 'X';
	};
	if (area[2][0] == 'X' && area[2][1] == 'X' && area[2][2] == 'X') {
		return 'X';
	};
	if (area[0][0] == 'X' && area[1][0] == 'X' && area[2][0] == 'X') {
		return 'X';
	};
	if (area[0][1] == 'X' && area[1][1] == 'X' && area[2][1] == 'X') {
		return 'X';
	};
	if (area[0][2] == 'X' && area[1][2] == 'X' && area[2][2] == 'X') {
		return 'X';
	};
	if (area[0][0] == 'X' && area[1][1] == 'X' && area[2][2] == 'X') {
		return 'X';
	};
	if (area[2][0] == 'X' && area[1][1] == 'X' && area[0][2] == 'X') {
		return 'X';
	};
	if (area[0][0] == 'O' && area[0][1] == 'O' && area[0][2] == 'O') {
		return 'O';
	};
	if (area[1][0] == 'O' && area[1][1] == 'O' && area[1][2] == 'O') {
		return 'O';
	};
	if (area[2][0] == 'O' && area[2][1] == 'O' && area[2][2] == 'O') {
		return 'O';
	};
	if (area[0][0] == 'O' && area[1][0] == 'O' && area[2][0] == 'O') {
		return 'O';
	};
	if (area[0][1] == 'O' && area[1][1] == 'O' && area[2][1] == 'O') {
		return 'O';
	};
	if (area[0][2] == 'O' && area[1][2] == 'O' && area[2][2] == 'O') {
		return 'O';
	};
	if (area[0][0] == 'O' && area[1][1] == 'O' && area[2][2] == 'O') {
		return 'O';
	};
	if (area[2][0] == 'O' && area[1][1] == 'O' && area[0][2] == 'O') {
		return 'O';
	};
};






document.querySelector('.reset').onclick = function() {

	area = [
				['*','*','*'],
				['*','*','*'],
				['*','*','*']
								];


	for (let i = 0; i < 9; i++) {
		document.querySelectorAll('td')[i].innerHTML = '';
		document.querySelectorAll('td')[i].style.backgroundColor = 'white';
	}

	document.querySelector('.winner').innerHTML = 'Сейчас ходит: ' + char;
}
