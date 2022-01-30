# skelton-nextjs-prisma-app

コレはアプリの雛形です。

## 構成

- Next.js
- NextAuth.js
  - Google OAuth
- Prisma
- Planet Scale

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
