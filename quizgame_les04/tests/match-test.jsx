import React from 'react';
import {shallow, mount} from 'enzyme';
import Match from '../src/match';


describe("match component conditional rendering game not started", () => {
    const driver = mount(<Match/>);
    it("renders startGame", () => {
        let startBtn = driver.find('#startBtn');
        expect(startBtn.length).toEqual(1);
    });

    it("should not render game", () => {
        let answerBtn = driver.find('.answerBtn');
        expect(answerBtn.length).toEqual(0);
    });

});

describe("match component conditional rendering game started", () => {
    const driver = mount(<Match/>);
    driver.setState({gameInProgress: true});

    it("should not render startGame", () => {
        let startBtn = driver.find('#startBtn');
        expect(startBtn.length).toEqual(0);
    });

    it("should render startGame", () => {
        let answerBtn = driver.find('.answerBtn');
        expect(answerBtn.length).toEqual(4);
        console.log(answerBtn.length);
    });
});

describe("game started", () => {
    let driver = mount(<Match/>);
    driver.setState({gameInProgress: true});

    it("should render question", () => {
        let question = driver.find('#question_title');
        expect(question.length).toEqual(1);
    });
});


describe("test alert answer", () => {
    const driver = mount(<Match/>);
    driver.setState({gameInProgress: true});

    let alertmsg = undefined;

    global.alert = (s) => {
        alertmsg = s
    };

    const alert = driver.find('.answerBtn').at(0);
    alert.simulate('click');

    expect(alertmsg).toBeDefined();
});