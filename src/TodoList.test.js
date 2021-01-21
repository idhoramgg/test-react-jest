import { render } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import TodoList from './TodoList';

const todos = [
    "Satu",
    "Dua",
    "Tiga"
];

describe('todolist', () => {
    it('should render with no list', () => {
        let component = renderer.create(<TodoList />);
        expect(component).toMatchSnapshot();
    });

    it('should render with list', () => {
        let component = renderer.create(<TodoList todos={todos}/>);
        expect(component).toMatchSnapshot()
    })

    it('sholud render with filtered list', () => {
        let keywords = ['sa', 'u', 't'];
        keywords.forEach(keyword => {
            const component = renderer.create(
                <TodoList todos={todos} keyword={keyword} />
            );
            expect(component).toMatchSnapshot()
        })
    })
});