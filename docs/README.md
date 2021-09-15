jellyfin-sdk-typescript / [Modules](modules.md)

# jellyfin-sdk-typescript

A TypeScript SDK for Jellyfin.

> Warning: This project is under active development and is not ready for production use. API changes _will_ occur.

## Usage

```js
// Create a new instance of the SDK
const jellyfin = new Jellyfin();
const api = jellyfin.createApi(new Configuration({
    basePath: 'https://demo.jellyfin.org/stable'
}));

// Each API endpoint is exposed via a getter on the SDK instance using
// a shared Configuration and Axios instance. For example the /System APIs
// are available as api.systemApi.

// Fetch the public system info
const info = await api.systemApi.getPublicSystemInfo();
console.log('Info =>', info.data);

// Fetch the list of public users
const users = await api.userApi.getPublicUsers();
console.log('Users =>', users.data);

// A helper method for authentication has been added to the SDK because
// the default method exposed in the generated Axios client is rather
// cumbersome to use.
const auth = await api.authenticateUserByName({ Username: 'demo', Pw: '' });
console.log('Auth =>', auth.data);
```
