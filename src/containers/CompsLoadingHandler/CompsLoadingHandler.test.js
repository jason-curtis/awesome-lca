
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import CompsLoadingHandler from './CompsLoadingHandler';


describe('CompsLoadingHandler', () => {
    it('successfully renders when loading', () => {
        const props = {
            compExists: undefined,
            loading: true,
        };
        const renderer = TestUtils.createRenderer();
        renderer.render(<CompsLoadingHandler {...props} />);
        const result = renderer.getRenderOutput();
        expect(result).toBeTruthy();
    });
    it('successfully renders after loading', () => {
        const props = {
            compExists: true,
            loading: false,
        };
        const renderer = TestUtils.createRenderer();
        renderer.render(<CompsLoadingHandler {...props} />);
        const result = renderer.getRenderOutput();
        expect(result).toBeTruthy();
    });
});
