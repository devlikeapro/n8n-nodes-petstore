# @devlikeapro/n8n-nodes-petstore

![n8n logo](n8n.png)

Example (Template) project for [**Petstore OpenAPI spec**](https://petstore3.swagger.io/)
using [**devlikeapro/n8n-openapi-node**](https://github.com/devlikeapro/n8n-openapi-node)

# Run Petstore n8n node locally
Before start modifying the project, we kindly recommend
to run the Petstore locally.

# Modify Project
Now you're ready to start building your n8n community node!
1. Place your `openapi.json` in `nodes/{YourNode}`
2. Replace your icon in `icon.svg`
3. Rename all `Petstore` matches to `YourNode` 
4. Rename all `petstore` matches to `yournode`
5. Replace all `devlikeapro` to `{yourgithubname}`
6. Add your `NPM_TOKEN` in GitHub Actions
7. Push change
8. Create a new GitHub Release, `1.0.0` in your project
9. Install your node in n8n: `@{yourgithubname}/n8n-nodes-{yournode}`
