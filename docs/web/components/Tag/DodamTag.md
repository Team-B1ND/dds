---
sidebar-position: 1
---

import Tag from "./Tag"

DodamTag를 위한 DDS Docs입니다. DodamTag Docs는 '도담도담'에 사용되는 모든 DodamTag Component를 관리합니다. DodamTags는 `<DodamTag />`를 사용해서 불러올 수 있습니다.

## Props

```plain
- text: string
- color: TagColor
- onClick?: MouseEventHandler<HTMLDivElement>
- customStyle?: CSSObject
```

## Negative

<Tag
  color="red"
  text="Text"
/>

```tsx title="
<Tag color='red' text='Text' />
```

## Primary

<Tag
  color="blue"
  text="Text"
/>

```tsx title="
<Tag color='blue' text='Text' />
```

## Default

<Tag
  color="default"
  text="Text"
/>

```tsx title="
<Tag color='default' text='Text' />
```
