---
sidebar-position: 1
---

PageIndicator를 위한 DDS Docs입니다. PageIndicator Docs는 '도담도담'에 사용되는 모든 PageIndicator Component를 관리합니다. PageIndicator는 `<PageIndicator />`를 사용해서 불러올 수 있습니다.

## Props

```plain
- buttonSize: ButtonSize ("Large)
- caseBy: Partial<Record<string, JSX.Element | null>>
- defaultComponent?: JSX.Element | null
- customStyle?: CSSObject
```

## PageIndicator

import { PageIndicator } from '@b1nd/dds-web'

<PageIndicator
  buttonSize="Large"
  caseBy={{
    Page1: <div>첫 번째</div>,
    Page2: <div>두 번째</div>,
    Page3: <div>세 번째</div>
  }}
  defaultComponent={<div>기본 컴포넌트</div>}
/>

```tsx title="index.tsx"
<PageIndicator
  buttonSize="Large"
  caseBy={{
    Page1: <div>첫 번째</div>,
    Page2: <div>두 번째</div>,
    Page3: <div>세 번째</div>
  }}
  defaultComponent={<div>기본 컴포넌트</div>}
/>
```
