'use strict';

const inputBoxElm = document.querySelector('#inputElm');
const submitBtnElm = document.querySelector('.submitBtnElm');
const p1BtnElm = document.querySelector('.p1BtnElm');
const p2BtnElm = document.querySelector('.p2BtnElm');
const resetBtnElm = document.querySelector('.resetBtnElm');
// main score
const mainScoreElm = document.querySelector('.mainSscoreElm');
const p1ScoreElm = document.querySelector('#player1ScoreElm');
const p2ScoreElm = document.querySelector('#player2ScoreElm');
const errorMessageElm = document.querySelector('.errorMessages');
const successMessageElm = document.querySelector('.successMessage h2');

// default behavour start here
function p1_p2BtnDisableByDefault()
{
	p1BtnElm.setAttribute('disabled','disabled');
	p2BtnElm.setAttribute('disabled','disabled');
}
p1_p2BtnDisableByDefault();

function p1_p2BtnInableByDefault()
{
	p1BtnElm.removeAttribute('disabled');
	p2BtnElm.removeAttribute('disabled');
}
// clear function
function resetAllAfterSuccess()
{
	p1Score = 0;
	p2Score = 0;

	// view layer
	p1ScoreElm.textContent = p1Score;
	p2ScoreElm.textContent = p2Score;
}

// data layer
let score = 0;
let p1Score = 0;
let p2Score = 0;
let trun = 'player1';

// generate random integer 
//  1-winscore
function generateRandomInteger(max)
{
	return Math.ceil(Math.random() * max)
}

// view layer
mainScoreElm.textContent = score;
p1ScoreElm.textContent = p1Score;
p2ScoreElm.textContent = p2Score


submitBtnElm.addEventListener('click',(evt) => 
{
	evt.preventDefault();
	score = Number(inputBoxElm.value)
	// form validation start here
	const inputBoxScore = formValidation(score)
	if(inputBoxScore)
	{
		score = Number(inputBoxElm.value);
		mainScoreElm.textContent = score;
		p1_p2BtnInableByDefault();
		errorMessageElm.remove()
	}
	// clear all number after submit without main score
	resetAllAfterSuccess();
	// reset input box
	resetInputBox()
});
// reset button start here
resetBtnElm.addEventListener('click',(evt) => 
{
	// data layer
	score = 0;
	p1Score = 0;
	p2Score = 0;
	// view layer
	mainScoreElm.textContent = score;
	p1ScoreElm.textContent = p1Score;
	p2ScoreElm.textContent = p2Score;

	// remove error message
	errorMessageElm.remove();
	// success message remove
	   successMessageElm.textContent = '';
       successMessageElm.style.border = '';
       successMessageElm.style.background = '';
    // after clicking reset button then submit button will be inable
	submitBtnElm.removeAttribute('disabled');
	
});

// error message 
submitBtnElm.addEventListener('dblclick',(evt) => 
{
	errorMessageElm.textContent = 'Please fill up the input box';
	errorMessageElm.style.color = 'red';
	errorMessageElm.style.marginLeft = '71px';
})

function resetInputBox()
{
	inputBoxElm.value = '';
}
function formValidation(score)
{
	return score;
}
p1BtnElm.addEventListener('click',(evt) => 
{
	if(trun === 'player1')
	{
		p1Score = generateRandomInteger(score);
		p1ScoreElm.textContent = p1Score;
		p1BtnElm.setAttribute('disabled','disabled');
		p2BtnElm.removeAttribute('disabled');
		trun = 'player2';
	}
	p1SuccessMessage(p1Score)
})
function p1SuccessMessage(p1Score)
{
	if(p1Score === score)
	{
		// success message
	   successMessageElm.textContent = 'Player one is success';
       successMessageElm.style.border = '1px solid #bdbdbdbf';
       successMessageElm.style.background = '#efefef';
        
        // if p1 or p2 success
        submitBtnElm.setAttribute('disabled','disabled');
		p1_p2BtnDisableByDefault();
	}
}
p2BtnElm.addEventListener('click',(evt) => 
{
	if(trun === 'player2')
	{
		p2Score = generateRandomInteger(score);
		p2ScoreElm.textContent = p2Score;
		p2BtnElm.setAttribute('disabled','disabled');
		p1BtnElm.removeAttribute('disabled');
		trun = 'player1';
	}
	p2SuccessMessage(p2Score)
});

function p2SuccessMessage(p2Score)
{
	if(p2Score === score)
	{
		// success message
	   successMessageElm.textContent = 'Player two is success';
       successMessageElm.style.border = '1px solid #bdbdbdbf';
       successMessageElm.style.background = '#efefef';
         // if p1 or p2 success
        submitBtnElm.setAttribute('disabled','disabled');
		p1_p2BtnDisableByDefault();
	}
}
