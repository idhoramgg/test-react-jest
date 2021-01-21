import App from './App';
import Header from './Header'

import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer'

describe('Component Testing', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<App/>)
  })

  test('matches the snapshot', () => {
    const tree = renderer.create(<App />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('render app component', () => {
    expect(wrapper.find('#hello').text()).toContain("Hello world")
  });

  // increment btn
  test('render button with increment', () => {
    expect(wrapper.find('#increment-btn').text()).toBe("Increment")
  })
  // decrement btn
  test('render button with decrement', () => {
    expect(wrapper.find('#decrement-btn').text()).toBe("Decrement")
  })

  test('render counter div', () => {
    expect(wrapper.find('#counter-value').text()).toBe("0")
  })

  // increment
  test('add value counter + 1', () => {
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("1")
  })
  test('decerease value counter - 1', () => {
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("1")
    wrapper.find('#decrement-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("0")
    wrapper.find('#decrement-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("0")
  })


})
