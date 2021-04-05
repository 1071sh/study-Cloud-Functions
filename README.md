# Cloud Functions

## dotenv で環境設定

インストール

```
npm i dotenv
```

呼び出し側(index.js)

```
require('dotenv').config();

const value = process.env.VALUE;

console.log(value);
```

.env

```
# 環境変数を定義
VALUE = xxxxx
```
