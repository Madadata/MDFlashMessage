import 'babel-polyfill';
import jsdom from 'mocha-jsdom';
import React from 'react';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import { shallow, mount } from 'enzyme';
import { createRenderer } from 'react-addons-test-utils';
import MDFlashMessage from 'src/MDFlashMessage';

expect.extend(expectJSX);

describe('MDFlashMessage', () => {

  jsdom();

  describe('empty props', () => {

    let wrapper;

    before(() => {
      wrapper = shallow(<MDFlashMessage />);
    })

    it('should have not props', () => {
      expect(Object.keys(wrapper.props()).length).toEqual(2);
    })

    it('should render x button, null message', () => {
      expect(wrapper.childAt(0).text()).toBe('x');
      expect(wrapper.childAt(1).text()).toNotExist();
    });

  });

  describe('with wrong props', () => {

    it('should render null if type is provided but not supported', () => {
      const wrapper = shallow(
        <MDFlashMessage
          type="wrongType"
        />
      );
      expect(wrapper.type()).toNotExist();
    })

    it('should render default if type is not provided', () => {
      const wrapper = shallow(<MDFlashMessage />);
      expect(wrapper.type()).toExist();
    })

  });

  describe('with right props', () => {

    it('should render given message', () => {
      const wrapper = shallow(<MDFlashMessage message="hello world" />);
      expect(wrapper.childAt(1).text()).toInclude('hello world');
    });

    it('should render null after given duration', async () => {
      const wrapper = mount(<MDFlashMessage timeout={1000} />);
      await setTimeout(() => {
        const hidden = wrapper.state().hidden;
        expect(hidden).toBe(true);
      }, 2000);
    });

  })

});
