# Lev

#### 1. Initialize project

Run the install command in root, in /frontend and in /studio

```shell
npm install 
```

#### 2. Run Studio and Next.js app locally

Then in root, run the following to start dev:

```shell
npm run dev
```


### Working with content in Sanity > Next

In Studio:
- Add new or edit document schema
- Run `npm run extract-types`

In Frontend:
- Edit/add queries in /sanity/lib/queries.ts
- Run `npm run typegen`
- Edit output in components
- Add content types to types.ts / sitemap.ts (if needed)

### Domains

Frontend:
- https://lev-frontend.vercel.app/

Studio hos Sanity:
- https://lev-prod.sanity.studio/