const quizArray = [{
    question: 'How long is the first Harry Potter movie: Harry Potter and The Philosopher\'s Stone?',
    choice: ['1.5', '2.5', '3.5', '4.5'],
    answer: 1
}, {
    question: 'Which 1984 film featured a main character named Axel Foley?',
    choice: ['Indiana Jones', 'Star Wars', 'Beverly Hills Cop', 'The Terminator'],
    answer: 2
}, {
    question: 'Who was offered and turned down the part of Han Solo in the original Star Wars film?',
    choice: ['Sylvester Stallone', 'Al Pacino', 'Brad Pitt', 'Jack Black'],
    answer: 1
}, {
    question: 'Which American actor is associated with the line "Go ahead, make my day", which he delivered in 1983 film?',
    choice: ['Chuck Norris', 'Bruce Willis', 'Tom Cruise', 'Clint Eastwood'],
    answer: 3
}];

export function getRandomQuizzes(numberOfQuizzes){

    if(numberOfQuizzes < 1){
        throw "Invalid number of requested quizzes: " + n;
    }

    if(numberOfQuizzes > quizArray.length){
        throw "Too many quizzes";
    }

    const selection = Array(numberOfQuizzes);

    let i = 0;
    while (i < numberOfQuizzes) {

        const randomNumber = Math.floor(quizArray.length * Math.random());


        if(selection.includes(randomNumber)) {
            continue;
        }

        selection[i] = randomNumber;

        i++;
    }
    return Array.from(selection).map(e => quizArray[e]);

}