start_btn.addEventListener('click', function () {
    info_box.classList.add('activeInfo');
});

exit_quiz.addEventListener('click', function () {
    info_box.classList.remove('activeInfo');
});

continue_btn.addEventListener('click', function () {
    info_box.classList.remove('activeInfo');
    quiz_box.classList.add('activeQuiz');
    loadQuestions(activeQuestion);
});

next_btn.addEventListener('click', function(){
    if(nextQ){
        next_btn.style.opacity = '0';
        if(activeQuestion == 4){
            next_btn.textContent = 'Finish';
        }

        if(activeQuestion < questions.length-1){
            activeQuestion++;
            loadQuestions(activeQuestion);
        }
        else{
            quiz_box.classList.remove('activeQuiz');
            result_box.classList.add('activeResult');
            score_text.textContent = points + ' / ' + questions.length;
        }  
    }
});

function startQuiz() {

    timeCount = setInterval(() => {
        timer_sec.textContent = timer;
        if (timer > 0) { 
            timer--;
            lineTimer +=36.6;
            time_line.style.width = lineTimer + 'px';
        } 
        else { 
            clearInterval(timeCount); 
            disableQuestions(activeQuestion);
            nextQ = true;
        }
    }, 1000);
}

function loadQuestions(q){
    reset();
    startQuiz();
    nextQ = false;

    let allOptions = questions[q].options;
    que_text.textContent = questions[q].question;
    option_list.innerHTML = '';

    for(let i=0; i<allOptions.length; i++){
        option_list.innerHTML +=`
            <div class="option" onclick="checkAnswer(${q}, ${i},this)">
                <span>${allOptions[i]}</span>
            </div>
        `;
    }
    total_que.textContent = questions[q].numb + '/' + questions.length + ' questions';
}

function checkAnswer(q, o, opt){
    clearInterval(timeCount);
    nextQ = true;
    next_btn.style.opacity = '1';

    for(let i=0; i<questions[q].options.length; i++){
        option_list.children[i].classList.add('disabled');
        if(questions[q].options[i] == questions[q].answer){
            option_list.children[i].classList.add('correct');
        } else {
            option_list.children[i].classList.add('incorrect');
        }
    }

    if(questions[q].answer == questions[q].options[o]){
        opt.classList.add('correct');
        points++;
    } else {
        opt.classList.add('incorrect')
    }
}

function reset(){ 
    timer = 15;
    timer_sec.textContent = '15';
    time_line.style.width = '0px';
    lineTimer = 0;
}

function disableQuestions(q){
    for(let i=0; i<questions[q].options.length; i++){
        option_list.children[i].classList.add('disabled');
        if(questions[q].options[i] == questions[q].answer){
            option_list.children[i].classList.add('correct');
        } else {
            option_list.children[i].classList.add('incorrect');

        }
    }
    next_btn.style.opacity = '1';
}

replayQuiz.addEventListener('click', function(){
    window.location.reload();
});