# LS MnM AI 분석 플랫폼 샘플

첨부 시안을 참고한 Next.js App Router + React + TypeScript + Tailwind CSS v4 퍼블리싱 기반입니다. LS MnM 로고는 텍스트 대체이며 공식 로고 파일로 교체해야 합니다.

## 시작

Node.js 20.9 이상에서 이 폴더를 열고 실행합니다.

```sh
npm install
npm run dev
```

- `/`: 분석 현황, 검색 및 상태·담당자 필터
- `/login`: 로그인 시안 (인증 없이 샘플로 이동)
- `/sessions/new`: 분석 정보 입력 및 데이터셋 선택
- `/sessions/sample`: 고정된 데이터 준비 시안

## 토큰 및 컴포넌트

`token.json`이 유일한 토큰 원본입니다. `$value`와 `{primitive.blue}` 형식의 참조를 지원하며 primitive → semantic → component 구조입니다. 색상은 첨부 시안에서 추정한 값이므로 공식 브랜드 가이드 확정 후 원본만 수정하세요.

`npm run tokens`로 `src/styles/tokens.css`를 생성합니다. 개발 서버와 빌드 시작 전에도 자동 생성됩니다. 개발 서버 실행 중 토큰을 변경하면 별도로 `npm run tokens`를 실행하세요. 생성 파일을 직접 수정하지 마세요. 미지원 값, 없는 참조, 순환 참조는 생성 중 오류를 발생시킵니다.

semantic 토큰은 Tailwind v4의 `@theme inline`과 연결됩니다. 예: `bg-primary`, `text-muted`, `border-border`, `rounded-panel`. 컴포넌트 토큰은 CSS 변수로 버튼·입력·카드에 적용됩니다.

`src/components/ui.tsx`: Button(primary/outline/ghost), Input, Select, Textarea, Field, Card, Badge, Alert. 네이티브 입력을 사용하며 label 연결, 필수값, disabled, 키보드 포커스를 제공합니다.

`src/components/platform.tsx`: Header, Stepper 및 샘플 화면. 후속 개발에서 화면별 파일로 분리하고 API 데이터 및 실제 컨텍스트를 연결할 수 있습니다.

## 구현 범위

검색·필터·폼 입력·필수 검증·체크박스·샘플 AI 응답을 제공합니다. 인증, SSO, AI API, 서버 저장, 실제 분석은 연결되지 않았습니다. 세션 폼은 페이지 내에서만 유지되고 다음 페이지에는 고정된 예시가 표시됩니다. 임시 저장 버튼은 미지원 안내를 표시합니다. 추이와 품질 점검 수치는 예시이며 실제 계산 결과가 아닙니다. 모든 목록 링크는 동일한 샘플로 연결됩니다.

## 사용자가 실행할 확인

```sh
npm run typecheck
npm run build
```

프로젝트 지침에 따라 설치·토큰 생성·빌드·타입 검사·브라우저 실행은 에이전트가 수행하지 않았습니다. 작은 화면에서 메뉴 줄바꿈, 3열 → 2열 → 1열 전환, 표 가로 스크롤과 키보드 이동을 확인하세요.

공식 설정 참고: [Next.js용 Tailwind 설치](https://tailwindcss.com/docs/installation/framework-guides/nextjs), [Tailwind 테마 변수](https://tailwindcss.com/docs/theme).
