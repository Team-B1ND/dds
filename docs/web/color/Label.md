---
sidebar-position: 2
---

Color를 위한 DDS Docs입니다. dds는 '도담도담'에 사용되는 모든 컬러 asset을 관리합니다. Color는 DodamTheme을 사용해서 불러올 수 있습니다.

Color를 사용할 폴더에서 `style.ts`파일을 만들어 사용해주세요.

import LabelNormal from './Heading/LabelNormal';

<LabelNormal />

```ts title="style.ts"
${({ them }) => theme.labelNormal}
```

import LabelStrong from './Heading/LabelStrong';

<LabelStrong />

```ts title="style.ts"
${({ theme }) => theme.labelStrong}
```

import LabelNeutral from './Heading/LabelNeutral';

<LabelNeutral />

```ts title="style.ts"
${({ theme }) => theme.labelNeutral}
```

import LabelAlternative from './Heading/LabelAlternative';

<LabelAlternative />

```ts title="style.ts"
${({ theme }) => theme.labelAlternative}
```

import LabelAssistive from './Heading/LabelAssistive';

<LabelAssistive />

```ts title="style.ts"
${({ theme }) => theme.labelAssistive}
```

import LabelDisable from './Heading/LabelDisable';

<LabelDisable />

```ts title="style.ts"
${({ theme }) => theme.labelDisable}
```
