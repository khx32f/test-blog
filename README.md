# 블로그 (정적 사이트)

Astro로 만든 정적 블로그. GitHub Pages에 호스팅 가능합니다.

## 기능

- ✅ 정적 HTML 빌드 → GitHub Pages 배포
- ✅ 마크다운으로 글 작성, 멋진 렌더링
- ✅ 메뉴: Home, About, Blog
- ✅ 월별 글 관리 (`content/blog/2025-01/`)
- ✅ 태그 & 카테고리 분류

## 개발

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
```

결과물은 `dist/` 폴더에 생성됩니다.

## 글 작성

`src/content/blog/YYYY-MM/` 폴더에 마크다운 파일을 추가하세요.

```yaml
---
title: "글 제목"
description: "요약"
pubDate: 2025-01-15
permalink: "2025-01/my-post"  # 선택: 없으면 파일 경로 사용
tags: ["태그1", "태그2"]
categories: ["카테고리"]
---
```

## GitHub Pages 배포

1. 저장소 Settings → Pages → Source: GitHub Actions
2. `astro.config.mjs`에서 `base`를 레포지토리 이름에 맞게 수정
   - 프로젝트 사이트: `base: '/29_blog'` (레포 이름)
   - 사용자 사이트: `base: '/'`

main 브랜치에 push하면 자동으로 배포됩니다.
