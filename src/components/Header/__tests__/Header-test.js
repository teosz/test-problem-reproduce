jest.dontMock('../Header');
jest.dontMock('../../../decorators/withStyles.js');
jest.setMock('../Header.css', {use: function noop() {}, unuse: function noop() {}});


import React from 'react';
import TestUtils from 'react-addons-test-utils';
const Header = require('../Header');

describe('Header', () => {
  it('shows', () => {
    const header = TestUtils.renderIntoDocument(
      <Header />
    );
    const headerNode = React.findDOMNode(header);
    expect(headerNode.textContent).toEqual('Header');
  });
});
