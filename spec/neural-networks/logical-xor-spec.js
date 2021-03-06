describe('Logical XOR', () =>
{

  let lib = require('../../lib');

  let network = lib.create(2, 2, 1);
  network[0].weights = [
    [2, -2],
    [2, -2]
  ];
  network[1].biases = [-1,
    3
  ];
  network[1].weights = [
    [2],
    [2]
  ];
  network[2].biases = [-3];
  network[1].activate = 'htan';
  network[2].activate = 'heaviside';

  describe('first input 0', () =>
  {

    network[0].values[0] = 0;

    describe('second input 0', () =>
    {

      network[0].values[1] = 0;

      describe('run', () =>
      {

        let result = lib.runner(network);

        describe('output', () =>
        {

          it('is 1', () =>
          {

            expect(result[0])
              .toBe(0);

          });

        });

      });

    });

    describe('second input 1', () =>
    {

      network[0].values[1] = 1;

      describe('run', () =>
      {

        let result = lib.runner(network);

        describe('output', () =>
        {

          it('is 1', () =>
          {

            expect(result[0])
              .toBe(1);

          });

        });

      });

    });

  });

  describe('first input 1', () =>
  {

    network[0].values[0] = 1;

    describe('second input 0', () =>
    {

      network[0].values[1] = 0;

      describe('run', () =>
      {

        let result = lib.runner(network);

        describe('output', () =>
        {

          it('is 1', () =>
          {

            expect(result[0])
              .toBe(1);

          });

        });

      });

    });

    describe('second input 1', () =>
    {

      network[0].values[1] = 1;

      describe('run', () =>
      {

        let result = lib.runner(network);

        describe('output', () =>
        {

          it('is 1', () =>
          {

            expect(result[0])
              .toBe(0);

          });

        });

      });

    });

  });

});
