---
sidebar-position: 1
---

Icon 위한 DDS Docs입니다. dds는 '도담도담'에 사용되는 모든 Icon asset을 관리합니다. Icon은 각 Icon의 이름을 통해서 컴포넌트 형태로 불러올 수 있습니다.
Icon을 통한 이벤트 발생을 유도할 시 부모태그를 만드시는걸 추천 드립니다.<br />
EX)

```bash title="index.tsx"
<ParantTag>
    <IconComponent />
</ParentTag>
```

Icon Docs에서는 Icon Component만 제공됩니다.
또한 모든 Icon Props는 Optional입니다.

import { Note } from "@b1nd/dds-web"

<Note color="#000" />

### Props

- size: number
- color: DodamTheme
- $pathStyle: CSSObject
- $svgStyle: CSSObject

```tsx title="index.tsx"
<Note />
```
