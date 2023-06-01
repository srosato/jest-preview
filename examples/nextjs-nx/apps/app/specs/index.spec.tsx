import React from 'react';
import {render} from '@testing-library/react';
import Index from '../pages/index';
import { debug } from "jest-preview";

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Index />);

    debug();

    expect(baseElement).toBeTruthy();
  });
});
