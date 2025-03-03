---
sidebar-position: 1
---

Button을 위한 DDS Docs입니다. Button Docs는 '도담도담'에 사용되늰 모든 Button Component를 관리힙니다. Button은 `<DodamFilledButton />`을 사용해서 볼러올 수 있습니다.

## Props

```plain
text?: React.ReactNode;
children?: React.ReactNode;
textTheme?: keyof DodamTheme;
width?: number;
enabled?: boolean;
typography?: typographyType; ['Body1', 'Bold']
backgroundColorType?: BackgroundColorType; 'Primary' | 'Secondary' | 'Assisitive' | 'Negative'
size: ButtonSizeType;
padding?: CSSProperties['padding'];
onClick?: MouseEventHandler<HTMLButtonElement>;
customStyle?: CSSObject;
icon?: React.ReactNode;
attendants?: attendantsType;
```

## Pirmary Large Button

import { DodamFilledButton } from "@b1nd/dds-web"

### Enabled

<DodamFilledButton size="Large" customStyle={{backgroundColor: "#0083F0", color: "#fff"}} text="Button" width="100" />

### Disabled

<DodamFilledButton size="Large" customStyle={{backgroundColor: "#0083F0", color: "#fff"}} text="Button" width="100" enabled={false} />

## Primary Medium Button

### Enabled

<DodamFilledButton size="Medium" customStyle={{backgroundColor: "#0083F0", color: "#fff"}} text="Button" width="100"/>

### Disabled

<DodamFilledButton size="Medium" customStyle={{backgroundColor: "#0083F0", color: "#fff"}} text="Button" width="100" enabled={false}/>

## Primary Small Button

### Enabled

<DodamFilledButton size="Small" customStyle={{backgroundColor: "#0083F0", color: "#fff"}} text="Button" width="100"/>

### Disabled

<DodamFilledButton size="Small" customStyle={{backgroundColor: "#0083F0", color: "#fff"}} text="Button" width="100" enabled={false}/>
<br />

```tsx title="index.tsx"
<DodamFilledButton />
```
