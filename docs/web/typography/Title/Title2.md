---
sidebar-position: 2
---

Typography를 위한 DDS Docs입니다. dds는 '도담도담'에 사용되는 모든 글꼴 asset을 관리합니다. Typography는 `DodamTypography`를 사용해서 불러올 수 있습니다.

Typography를 사용할 폴더에서 `style.ts`파일을 만들어 사용해주세요.

import Title from '../Head/Title';

<Title type="Title2" size="Bold">Title2 Bold</Title>

```ts title"style.ts"
${DodamTypography.Title2.Bold}
```

<Title type="Title2" size="Medium">Title2 Medium</Title>

```ts title"style.ts"
${DodamTypography.Title2.Medium}
```

<Title type="Title2" size="Regular">Title2 Regular</Title>

```ts title"style.ts"
${DodamTypography.Title2.Regular}
```
