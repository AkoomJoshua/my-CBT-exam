const startingMinutes = 2;
let time = startingMinutes * 60;

const countdownEl =document.getElementById('countdown');

setInterval (updateCountdown, 1000);

function updateCountdown(){
	const minutes = Math.floor (time / 60);
		let seconds = time % 60;

			seconds = seconds < 10 ? "0" + seconds : seconds; 
			
			countdownEl.innerHTML =	`${minutes}: ${seconds}` 
			time--;
}
		function resetTime(){
			if (pos++) {
				updateCountdown();
			}
		}

 var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;
 var questions = [
 		[ "Which of the following is the highest mountain in the world","Mountain Fuji","Mountain Everest","Mountain Kilimanjaro","Mountain Sinai","B" ],

 		[ "Who was the first democratic president of Nigeria","Ernest Shonekan","Olusegun Obansanjo","fredrick Lugard","Shehu Shagari","D" ],
 		[ "In what year was Nigeria almagmated","1960","1963","1914","1916","C" ],
 		[ "Who is the present Director-General of World Trade Oraganization (WTO)","Dora Akunyili","Ngozi Okon-Iweala","Zainab Ahmed","Alisson Maduekwe","B" ],
 		[ "Who is the present Minister of Foriegn Affairs","Geoffrey Onyeama","Zainab Ahmed","Abubakar Malami","Bashiru Salihu Magashi","A" ],
 		[ "Who is the present Minister of Special Duties and International Affairs ","Ramatu Tijani","Timiphe Sylva","Gbemisola Saraki","George Akume","D" ],
 		[ "Where is the origin of river Benue","Adamawa Plateau","Guinea Highland","Lake Victoria","Lake Tana","A" ],
 		[ "What is the offspring of a whale called","Calf","Kid","Cub","Whalin","A" ],
 		[ "Which of the following is the deepest River in the world","River Euphrates","River Mississippi","River Nile","Congo River","D" ],
 		[ "Who is the fastest athlete in world at present","Gareth Bale","Bolt Usain","Caeleb Dressel","Javier Sotomayor","B" ]
 ];
function _(x){
	return document.getElementById(x);
}
function renderQuestion() {
	test = _("test");
	if (pos >=questions.length) {
		var score = (correct*10)+ "%";
		//var totalScore = (questions.length*10)+"%";

		test.innerHTML = "<h2>You got "+score+" </h2>";
			//test.style.fontSize = "400px";
			//if (score < ) {}

				_("test_status").style.display ="none";
	}
	_("test_status").innerHTML ="Question" + (pos+1);
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	chD = questions[pos][4];
	test.innerHTML = "<h3>" +question+ "</h3>"; 
	test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='D'> "+chD+"<br><br>";
	test.innerHTML += "<button onclick='checkAnswer()'>Next </button>";
}
function checkAnswer(){
	choices = document.getElementsByName("choices");
	for (var i =0; i<choices.length; i++) {
		if(choices[i].checked){
			choice = choices[i].value;	
		}
	}
	if (choice == questions[pos][5]) {
		correct++;
	}

	pos++;
	renderQuestion();
	resetTime();
}
window.addEventListener("load", renderQuestion, false);