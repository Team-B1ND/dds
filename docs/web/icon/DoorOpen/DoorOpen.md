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

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4 2C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2H4ZM5 4C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4H5Z" fill="black"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.25786 3.09934C3.62296 2.9299 3 3.40841 3 4.06553V19.1384C3 19.665 3.40831 20.1013 3.93369 20.1362L15.9337 20.9337C16.5108 20.972 17 20.5142 17 19.9359V7.26812C17 6.81514 16.6955 6.41874 16.2579 6.30194L4.25786 3.09934ZM15 15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13C14.4477 13 14 13.4477 14 14C14 14.5523 14.4477 15 15 15Z" fill="black"/>
</svg>

### Props

- size: number
- color: DodamTheme
- $pathStyle: CSSObject
- $svgStyle: CSSObject

```tsx title="index.tsx"
<DoorOpen />
```
