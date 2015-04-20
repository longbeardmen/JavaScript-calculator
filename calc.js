/*
	define clicks on calculator button
*/

window.onload = function (button) {

	var tr = document.getElementsByClassName('tr');
	for(var i = 0; i < tr.length; i++) {
		tr[i].addEventListener('click', calculatorBrains, false);
	}

	var plus = document.getElementById('plus');
		plus.addEventListener('click', calculatorBrains, false);

	var minus = document.getElementById('minus');
		minus.addEventListener('click', calculatorBrains, false);

	var multiply = document.getElementById('multiply');
		multiply.addEventListener('click', calculatorBrains, false);

	var divide = document.getElementById('divide');
		divide.addEventListener('click', calculatorBrains, false);
			
	var reset = document.getElementById('fresh');
		reset.addEventListener('click', calculatorBrains, false);

	var answr = document.getElementById('answr');
		answr.addEventListener('click', calculatorBrains, false);
};

/*
	define required variables for calculatorBrains()
	a - first variable
	b - second variable
	cur - current mathematical operator
	currnetElement - current entered symbol
	input - value in "sreen"
*/

var a = '',
	b = '',
	cur = '',
	curElement,
	input;

/*
	define calculatorBrains()
*/

function calculatorBrains (button) {

	/*
		define input and current entered symbol of cliked button
	*/

	input = document.getElementById('i');
	curElement = button.target;
	
	/*
		cheсk entered simbol
	*/

	if(/^\d+$/.test(curElement.firstChild.nodeValue)){
		input.value += curElement.firstChild.nodeValue;
		if(cur === ''){
			a = input.value;
		}
		if(cur !== '' && a !== ''){
			b += curElement.firstChild.nodeValue;
		}
	}else if(a !== '' && curElement.firstChild.nodeValue == '+'){
		console.log(cur);
		if(b !== ''){
			switch(cur){
				case 'plus':
					input.value = '';
					input.value += 1*a + 1*b;
					a = input.value;
					b = '';
					input.value += curElement.firstChild.nodeValue;
					break;
				case 'minus':
					input.value = '';
					input.value += 1*a - 1*b;
					a = input.value;
					b = '';
					input.value += curElement.firstChild.nodeValue;
					break;
				case 'multiply':
					input.value = '';
					input.value += (1*a) * (1*b);
					a = input.value;
					b = '';
					input.value += curElement.firstChild.nodeValue;
					break;
				case 'divide':
					if(1*b !== 0){
						input.value = '';
						input.value += (1*a) / (1*b);
						a = input.value;
						b = '';
						input.value += curElement.firstChild.nodeValue;
					}else{
						input.value = '';
						a = '';
						b = '';
						confirm('illegal dividing by 0!!!');
					}
					break;
			}
		}else{
			input.value += curElement.firstChild.nodeValue;
		}
		if(input.value !== '')
			cur = 'plus';
		else
			cur='';
	}else if(a !== '' && curElement.firstChild.nodeValue == '-'){
		console.log(cur);
		if(b !== ''){
			switch(cur){
				case 'plus':
					input.value = '';
					input.value += 1*a + 1*b;
					a = input.value;
					b = '';
					input.value += curElement.firstChild.nodeValue;
					break;
				case 'minus':
					input.value = '';
					input.value += 1*a - 1*b;
					a = input.value;
					b = '';
					input.value += curElement.firstChild.nodeValue;
					break;
				case 'multiply':
					input.value = '';
					input.value += (1*a) * (1*b);
					a = input.value;
					b = '';
					input.value += curElement.firstChild.nodeValue;
					break;
				case 'divide':
					if(1*b !== 0){
						input.value = '';
						input.value += (1*a) / (1*b);
						a = input.value;
						b = '';
						input.value += curElement.firstChild.nodeValue;
					}else{
						input.value = '';
						a = '';
						b = '';
						confirm('illegal dividing by 0!!!');
					}
					break;
			}
		}else{
			input.value += curElement.firstChild.nodeValue;
		}
		if(input.value !== '')
			cur = 'minus';
		else
			cur='';
	}else if(curElement.firstChild.nodeValue == '*'){
		console.log(cur);
		if(b !== ''){
			switch(cur){
				case 'plus':
					input.value = '';
					input.value += 1*a + 1*b;
					a = input.value;
					b = '';
					input.value += curElement.firstChild.nodeValue;
					break;
				case 'minus':
					input.value = '';
					input.value += 1*a - 1*b;
					a = input.value;
					b = '';
					input.value += curElement.firstChild.nodeValue;
					break;
				case 'multiply':
					input.value = '';
					input.value += (1*a) * (1*b);
					a = input.value;
					b = '';
					input.value += curElement.firstChild.nodeValue;
					break;
				case 'divide':
					if(1*b !== 0){
						input.value = '';
						input.value += (1*a) / (1*b);
						a = input.value;
						b = '';
						input.value += curElement.firstChild.nodeValue;
					}else{
						input.value = '';
						a = '';
						b = '';
						confirm('illegal dividing by 0!!!');
					}
					break;
			}
		}else
			input.value += curElement.firstChild.nodeValue;
		if(input.value !== '')
			cur = 'multiply';
		else
			cur='';
	}else if(curElement.firstChild.nodeValue == '/'){
		console.log(cur);
		if(b !==''){
			switch(cur){
				case 'plus':
					input.value = '';
					input.value += 1*a + 1*b;
					a = input.value;
					b = '';
					input.value += curElement.firstChild.nodeValue;
					break;
				case 'minus':
					input.value = '';
					input.value += 1*a - 1*b;
					a = input.value;
					b = '';
					input.value += curElement.firstChild.nodeValue;
					break;
				case 'multiply':
					input.value = '';
					input.value += (1*a) * (1*b);
					a = input.value;
					b = '';
					input.value += curElement.firstChild.nodeValue;
					break;
				case 'divide':
					if(1*b !== 0){
						input.value = '';
						input.value += (1*a) / (1*b);
						a = input.value;
						b = '';
						input.value += curElement.firstChild.nodeValue;
					}else{
						input.value = '';
						a = '';
						b = '';
						confirm('illegal dividing by 0!!!');
					}
					break;
			}
		}
		else
			input.value += curElement.firstChild.nodeValue;
		if(input.value !== '')
			cur = 'divide';
		else
			cur='';
	}else if(curElement.firstChild.nodeValue == '='){
		console.log(cur);
		switch(cur){
			case 'plus':
				input.value = '';
				input.value += 1*a + 1*b;
				a = input.value;
				b = '';
				cur = '';
				break;
			case 'minus':
				input.value = '';
				input.value += 1*a - 1*b;
				a = input.value;
				b = '';
				cur = '';
				break;
			case 'multiply':
				input.value = '';
				input.value += (1*a) * (1*b);
				a = input.value;
				b = '';
				cur = '';
				break;
			case 'divide':
				if(1*b !== 0){
					input.value = '';
					input.value += (1*a) / (1*b);
					a = input.value;
					cur = '';
					b = '';
				}else{
					cur = '';
					input.value = '';
					a = '';
					b = '';
					cur = '';
					confirm('illegal dividing by 0!!!');
				}
				break;
		}
	}else if(curElement.firstChild.nodeValue == 'reset'){
		input.value = '';
		a = '';
		b = '';
		cur = '';
	}
	console.log(a);
	console.log(b);
	console.log(cur);
}