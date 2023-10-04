import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for expect assertions
// import { getPage } from 'next-test-utils';
// import Pagef from '../pages'; // Adjust the import path as needed
expect(screen.getByText('Age: 22')).toBeInTheDocument();

expect(screen.getByText('Email: nirajanbhattarai12345@gmail.com')).toBeInTheDocument();
