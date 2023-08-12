# DBの型定義を自動生成する方法
以下のコマンドを実行していく
```ts
npm i supabase@">=1.8.1" --save-dev
```
```ts
npx supabase login
```
cliのURLからlogin tokenを作成する。トークンの名前はプロジェクトがわかるものであればOK

以下の雛形コマンドをプロジェクト用に書き換えていく。
```ts
npx supabase gen types typescript --project-id "$PROJECT_REF" --schema public > types/supabase.ts
```
project-idの部分はReference IDに置き換える。RIDはproject bordの設定からProject Setttingsで確認できる。
今回は以下のようなコマンドになった。
```ts
npx supabase gen types typescript --project-id ztrwuicuvdeuivvhkkce --schema public > types/supabase_db.ts
```
▼参考サイト  
https://supabase.com/docs/guides/api/rest/generating-types