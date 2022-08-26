import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import HarryPotterApp from '../../../container/src/components/HarryPotterApp';

test('renders context', () => {
   const component = render(<HarryPotterApp />)
   component.container.getElementsByClassName('mount');
})
