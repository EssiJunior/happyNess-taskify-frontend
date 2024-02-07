// # +====================================================================================+ #
// # |====================================  HappyNess  ===================================| #
// # |======================    taskify app - intergration test    =======================| #
// # |======================= Programmer: NDANG ESSI Pierre Junior =======================| #
// # +====================================================================================+ #

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TaskList from '../components/TaskList/TaskList';

test('renders greeting message', () => {
    render(<TaskList filter="all" tasks={[]}/>);
    expect(screen.getByText('All tasks')).toBeInTheDocument();
});