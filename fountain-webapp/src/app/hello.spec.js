/* eslint-env jasmine */
var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Hello = require('./hello');

describe('hello component', function () {
  it('should render hello world', function () {
    var hello = TestUtils.renderIntoDocument(<Hello/>);
    var h1 = TestUtils.findRenderedDOMComponentWithTag(hello, 'h1');
    expect(h1.textContent).toEqual('Hello world!');
  });
});
