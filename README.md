# skelton-nextjs-prisma-app

コレは個人の勉強用に作成したアプリの雛形です。

## 構成

- Next.js
- NextAuth.js
  - Google OAuth
- Prisma
  - Planet Scale

## 用意しているもの

### 画面

| ページ名       | パス           | 認証  |
|:-----------|:-------------|:----|
| トップページ     | `/`          | -   |
| ログイン画面     | `/login`     | -   |
| ダッシュボード画面  | `/dashboard` | ○   |
| サービスの状態を返す | `/api/stats` | -   | 
| プロフィールを返す  | `/api/me`    | ○   | 

### 認証状態に応じたルーティング

`/pages/_middleware.ts` 内にログイン状態で特定のページにアクセスした時にリダイレクトをする処理がいくつかあります。

## プロジェクトの作成

```shell
$npx create-next-app --example https://github.com/fukata/skelton-nextjs-prisma-app/tree/main sample-app
```

## 開発方法

### .env の作成

`.env` ファイルを `.env.sample` を参考に作成します。

### Planet Scaleのデータベース、ブランチを作成（初回のみ）

データベースを作成

```shell
$pscale database create sample-app --region ap-northeast
```

ブランチを作成（dev、shadow）

```shell
$pscale branch create sample-app dev
$pscale branch create sample-app shadow
```

### Planet Scaleを起動

２つのターミナルで下記のコマンドを実行します。

ターミナル１

```shell
$pscale connect sample-app dev --port 3309
```

ターミナル２

```shell
$pscale connect sample-app shadow --port 3310
```

### マイグレーション

```shell
$npx prisma migrate dev
```

### アプリを起動

```shell
$yarn dev
```

## Tips

### Prismaのログを見たい時

[Debugging (Reference) - Prisma Docs](https://www.prisma.io/docs/concepts/components/prisma-client/debugging)

```shell
$DEBUG="*" yarn dev
```
