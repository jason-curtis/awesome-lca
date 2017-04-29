import React from 'react';
import TestUtils from 'react-addons-test-utils';

import AmazonEmbedPage from './AmazonEmbedPage';


describe('AmazonEmbedPage', () => {
    it('successfully renders', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<AmazonEmbedPage />);
        const result = renderer.getRenderOutput();
        expect(result).toBeTruthy();
    });
});
