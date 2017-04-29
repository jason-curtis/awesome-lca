import React from 'react';
import TestUtils from 'react-addons-test-utils';

export default function (component, componentName, props) {
    describe(componentName, () => {
        it('successfully renders', () => {
            const renderer = TestUtils.createRenderer();
            renderer.render(<component {...props} />);
            const result = renderer.getRenderOutput();
            expect(result).toBeTruthy();
        });
    });
}
