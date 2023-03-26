---
id: ecosystem-rtl-simple-queries
title: rtl-simple-queries
---

A [`rtl-simple-queries`][gh] é uma biblioteca acompanhante para `React Testing Library` que fornece uma API de consulta alternativa:

```bash npm2yarn
npm install --save-dev rtl-simple-queries
```

```jsx
import {screen} from 'rtl-simple-queries'

screen.fetchByText(/text/, {allowEmpty: true, allowMultiple: false})
screen.fetchByText(/text/, {allowMultiple: false})
screen.fetchByText(/text/)

// assíncrono
await screen.fetchByTextAsync(/text/, {allowMultiple: true})
```

- [rtl-simple-queries na GitHub][gh]

[gh]: https://github.com/balavishnuvj/rtl-simple-queries
