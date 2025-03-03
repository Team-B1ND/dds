---
sidebar-position: 1
---

Typography를 위한 DDS Docs입니다. dds는 '도담도담'에 사용되는 모든 글꼴 asset을 관리합니다. Typography는 `DodamTypography`를 사용해서 불러올 수 있습니다.

Typography를 사용할 폴더에서 `style.ts`파일을 만들어 사용해주세요.

import Heading from '../Head/Heading';

<Heading type="Heading1" size="Bold">Heading1 Bold</Heading>

```ts Heading"style.ts"
${DodamTypography.Heading1.Bold}
```

<Heading type="Heading1" size="Medium">Heading1 Medium</Heading>

```ts Heading"style.ts"
${DodamTypography.Heading1.Medium}
```

<Heading type="Heading1" size="Regular">Heading1 Regular</Heading>

```ts Heading"style.ts"
${DodamTypography.Heading1.Regular}
```
