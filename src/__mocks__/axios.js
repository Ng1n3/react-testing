import { vi } from 'vitest';

const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: 'Laith',
          last: 'Harb',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/59.jpg',
        },
        login: {
          username: 'ThePhonyGOAT',
        },
      },
    ],
  },
};

export default {
  get: vi.fn().mockResolvedValue(mockResponse),
};
