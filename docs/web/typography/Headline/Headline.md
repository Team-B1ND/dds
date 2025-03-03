---
sidebar-position: 3
---

Typography를 위한 DDS Docs입니다. dds는 '도담도담'에 사용되는 모든 글꼴 asset을 관리합니다. Typography는 `DodamTypography`를 사용해서 불러올 수 있습니다.

Typography를 사용할 폴더에서 `style.ts`파일을 만들어 사용해주세요.

import Headline from '../Head/Headline';

<Headline type="Headline" size="Bold">Headline Bold</Headline>

```ts Headline"style.ts"
${DodamTypography.Headline.Bold}
```

<Headline type="Headline" size="Medium">Headline Medium</Headline>

```ts Headline"style.ts"
${DodamTypography.Headline.Medium}
```

<Headline type="Headline" size="Regular">Headline Regular</Headline>

```ts Headline"style.ts"
${DodamTypography.Headline.Regular}
```
