---
sidebar-position: 3
---

Button을 위한 DDS Docs입니다. Button Docs는 '도담도담'에 사용되늰 모든 Button Component를 관리힙니다. Button은 `<DodamSegmentedButton />`을 사용해서 볼러올 수 있습니다.

## Props

```plain
num: number;
type: ButtonType;
data: SegmentedBtnDataProps[];
width?: number;
height?: number;
onClick?: (text?: string) => void;
textColor?: keyof DodamTheme;
customBackbgroundColor?: keyof DodamTheme; primaryNormal, primarySecondary...
customBackbgroundWrapColor?: keyof DodamTheme;
```

import SegmentedButton from "./components/SegmentedButton"

## Two Items Segmented Button

<SegmentedButton num="2" type="inline" data={[{text: "Label", isAtv: "true"}, {text: "Label", isAtv: "false"}]} width={220} />

```tsx title="index.tsx"
<DodamSegmentedButton backgroundColorType='Assistive' />
```
