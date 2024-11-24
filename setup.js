import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';
import { fetch } from 'cross-fetch';

globalThis.fetch = fetch;

afterEach(() => {
  cleanup();
});