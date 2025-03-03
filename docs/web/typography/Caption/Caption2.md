---
sidebar-position: 2
---

Typography를 위한 DDS Docs입니다. dds는 '도담도담'에 사용되는 모든 글꼴 asset을 관리합니다. Typography는 `DodamTypography`를 사용해서 불러올 수 있습니다.

Typography를 사용할 폴더에서 `style.ts`파일을 만들어 사용해주세요.

import Caption from '../Head/Caption';

<Caption type="Caption2" size="Bold">Caption2 Bold</Caption>

```ts Caption"style.ts"
${DodamTypography.Caption2.Bold}
```

<Caption type="Caption2" size="Medium">Caption2 Medium</Caption>

```ts Caption"style.ts"
${DodamTypography.Caption2.Medium}
```

<Caption type="Caption2" size="Regular">Caption2 Regular</Caption>

```ts Caption"style.ts"
${DodamTypography.Caption2.Regular}
```
