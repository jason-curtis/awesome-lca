import React from 'react';
import TestUtils from 'react-addons-test-utils';

import LcaPage from './LcaPage';


describe('LcaPage', () => {
    it('successfully renders', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<LcaPage />);
        const result = renderer.getRenderOutput();
        expect(result).toBeTruthy();
    });
});
