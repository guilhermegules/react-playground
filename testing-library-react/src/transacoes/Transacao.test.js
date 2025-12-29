import React from 'react';
import { render } from "@testing-library/react";

import Transacao from './Transacao';

describe('Transacao component', () => {
  it('should component snapshot keep unchanged', async () => {
    const { container } = render(<Transacao data="21/01/2022" tipo="saque" valor="20.00" />)

    await expect(container.firstChild).toMatchSnapshot()
  })
})