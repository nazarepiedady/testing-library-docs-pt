---
id: ecosystem-testing-library-selector
title: testing-library-selector
---

A [`testing-library-selector`][gh] é uma biblioteca para `@testing-library` que oferece seletores reutilizáveis. Escrito em TypeScript:

```bash npm2yarn
npm install --save-dev testing-library-selector
```

```typescript
import {byLabelText, byRole, byTestId} from './selector'

// definir seletores reutilizáveis
const ui = {
  container: byTestId('my-container'),
  submitButton: byRole('button', {name: 'Submit'}),
  usernameInput: byLabelText('Username:'),

  // pode codificar o tipo de elemento de html mais específico
  passwordInput: byLabelText<HTMLInputElement>('Password:'),
}

// reutilizá-los no mesmo teste ou através de vários testes
// chamando .get(), .getAll(), find(), .findAll(), .query(), .queryAll()
it('example test', async () => {
  // por padrão os elementos serão consultados contra o ecrã
  await ui.submitButton.find()
  expect(ui.submitButton.query()).not.toBeInDocument()
  expect(ui.submitButton.get()).toBeInDocument()

  const containers = ui.container.getAll()
  expect(containers).toHaveLength(3)

  // fornecer um contentor como primeiro parâmetro
  // para consultar o elemento dentro deste contentor
  const username = ui.usernameInput.get(containers[0])
})
```

- [testing-library-selector na GitHub][gh]

[gh]: https://github.com/domasx2/testing-library-selector
