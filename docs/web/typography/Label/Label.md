---
sidebar-position: 5
---

Typography를 위한 DDS Docs입니다. dds는 '도담도담'에 사용되는 모든 글꼴 asset을 관리합니다. Typography는 `DodamTypography`를 사용해서 불러올 수 있습니다.

Typography를 사용할 폴더에서 `style.ts`파일을 만들어 사용해주세요.

import Label from '../Head/Label';

<Label type="Label" size="Bold">Label Bold</Label>

```ts Label"style.ts"
${DodamTypography.Label.Bold}
```

<Label type="Label" size="Medium">Label Medium</Label>

```ts Label"style.ts"
${DodamTypography.Label.Medium}
```

<Label type="Label" size="Regular">Label Regular</Label>

```ts Label"style.ts"
${DodamTypography.Label.Regular}
```
