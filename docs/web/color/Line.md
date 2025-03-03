---
sidebar-position: 3
---

Color를 위한 DDS Docs입니다. dds는 '도담도담'에 사용되는 모든 컬러 asset을 관리합니다. Color는 DodamTheme을 사용해서 불러올 수 있습니다.

Color를 사용할 폴더에서 `style.ts`파일을 만들어 사용해주세요.

import LineNormal from './Heading/LineNormal';

<LineNormal />

```ts title="style.ts"

${({ theme }) => theme.lineNormal}
```

import LineNeutral from './Heading/LineNeutral';

<LineNeutral />

```ts title="style.ts"
${({ theme }) => theme.lineNeutral}
```

import LineAlternative from './Heading/LabelAlternative';

<LineAlternative />

```typescript title="style.ts"
${({ theme }) => theme.lineAlternative}
```
