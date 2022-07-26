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
const successMessageElm = document.querySelector('.successMessJs');


let p1Success = `<div class="successMessage"><h2>Player One is Success</h2></div>`;
let p2Success = `<div class="successMessage"><h2>Player Two is Success</h2></div>`;
         
function succesP1(p1Success)
{
	let successMessage1 = p1Success;
    successMessageElm.insertAdjacentHTML('beforebegin',successMessage1);
}  				
function succesP2(p2Success)
{
	let successMessage2 = p2Success;
	successMessageElm.insertAdjacentHTML('beforebegin',successMessage2);
}



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


// data layer
let score = 0;
let p1Score = 0;
let p2Score = 0;
let trun = 'player1';
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
	console.log(successMessageElm.textContent = 'reset success message');

	if(document.querySelector('.successMessage'))
	{
		console.log('connected')
	}
	
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
		p1Score++;
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
		succesP1(p1Success)
       
        // as like as by default
        score = 0;
		p1Score = 0;
		p2Score = 0;

		// view layer
		mainScoreElm.textContent = score;
		p1ScoreElm.textContent = p1Score;
		p2ScoreElm.textContent = p2Score;

		p1_p2BtnDisableByDefault();
	}
}
p2BtnElm.addEventListener('click',(evt) => 
{
	if(trun === 'player2')
	{
		p2Score++;
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
		//success message
        succesP2(p2Success);
         // as like as by default
        score = 0;
		p1Score = 0;
		p2Score = 0;

		// view layer
		mainScoreElm.textContent = score;
		p1ScoreElm.textContent = p1Score;
		p2ScoreElm.textContent = p2Score

		p1_p2BtnDisableByDefault();
	}
}
