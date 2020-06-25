const {getRandomQuizzes } = require('../src/quizzes');

test("Test invalid numberentry", () => {
    expect(() => getRandomQuizzes(0)).toThrow();
    expect(() => getRandomQuizzes(500)).toThrow();
    expect(() => getRandomQuizzes(-1)).toThrow();
});

test("Test one quiz", () => {
    expect(() => getRandomQuizzes(1).toBe(1));
    expect(() => quizArray[0].question).toBeDefined();
    expect(() => quizArray[0].choice).toBeDefined();
    expect(() => quizArray[0].answer).toBeDefined();
});

test("Test get 2", () => {

    for(let i=0; i<100; i++) {
        const quizzes = getRandomQuizzes(2);

        expect(quizzes.length).toBe(2);
        expect(quizzes[0].question).not.toBe(quizzes[1].question);
    }
});