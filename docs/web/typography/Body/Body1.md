---
sidebar-position: 1
---

Typography를 위한 DDS Docs입니다. dds는 '도담도담'에 사용되는 모든 글꼴 asset을 관리합니다. Typography는 `DodamTypography`를 사용해서 불러올 수 있습니다.

Typography를 사용할 폴더에서 `style.ts`파일을 만들어 사용해주세요.

import Body from '../Head/Body';

<Body type="Body1" size="Bold">Body1 Bold</Body>

```ts Body"style.ts"
${DodamTypography.Body1.Bold}
```

<Body type="Body1" size="Medium">Body1 Medium</Body>

```ts Body"style.ts"
${DodamTypography.Body1.Medium}
```

<Body type="Body1" size="Regular">Body1 Regular</Body>

```ts Body"style.ts"
${DodamTypography.Body1.Regular}
```
