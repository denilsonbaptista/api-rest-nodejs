import { expect, test } from 'vitest'

test('o usuário consegue criar uma nova transação', () => {
  // fazer a chmada HTTP p/ criar uma nova transação

  const responseStatusCode = 201

  expect(responseStatusCode).toEqual(201)
})
