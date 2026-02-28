# my-app

Express.js + MongoDB 기반의 REST API 서버입니다.

## 기술 스택

- [Node.js](https://nodejs.org)
- [Express](https://expressjs.com)
- [MongoDB](https://www.mongodb.com) + [Mongoose](https://mongoosejs.com)
- [JWT](https://jwt.io) 인증
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js) 비밀번호 암호화
- [nodemon](https://nodemon.io)

## 설치

```bash
npm install
```

## 환경변수 설정

`.env.example`을 참고해서 `.env` 파일을 생성하세요.

```bash
cp .env.example .env
```

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/my-app
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=7d
```

## 실행

```bash
# 일반 실행
npm start

# 개발 모드 (파일 변경 시 자동 재시작)
npm run dev
```

## API 엔드포인트

### 인증 (Auth)
| 메서드 | 경로 | 설명 | 인증 필요 |
|--------|------|------|----------|
| POST | `/auth/register` | 회원가입 | ❌ |
| POST | `/auth/login` | 로그인 | ❌ |

### 사용자 (Users)
| 메서드 | 경로 | 설명 | 인증 필요 |
|--------|------|------|----------|
| GET | `/users` | 전체 조회 | ✅ |
| GET | `/users/:id` | 단일 조회 | ✅ |
| POST | `/users` | 생성 | ✅ |
| PUT | `/users/:id` | 수정 | ✅ |
| DELETE | `/users/:id` | 삭제 | ✅ |

### 아이템 (Items)
| 메서드 | 경로 | 설명 | 인증 필요 |
|--------|------|------|----------|
| GET | `/items` | 전체 조회 | ✅ |
| GET | `/items/:id` | 단일 조회 | ✅ |
| POST | `/items` | 생성 | ✅ |
| PUT | `/items/:id` | 수정 | ✅ |
| DELETE | `/items/:id` | 삭제 | ✅ |

## 인증 방법

로그인 후 발급받은 토큰을 헤더에 포함하세요.

```
Authorization: Bearer <토큰>
```

## 폴더 구조

```
my-app/
├── config/
│   └── db.js
├── middlewares/
│   ├── auth.js
│   └── logger.js
├── models/
│   ├── Item.js
│   └── User.js
├── routes/
│   ├── auth.js
│   ├── items.js
│   └── users.js
├── .env
├── .env.example
├── .gitignore
├── index.js
├── package.json
└── README.md
```
