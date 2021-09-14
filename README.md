# jellyfin-sdk-typescript

## Usage

```js
// Create a new instance of the SDK
const jellyfin = new Jellyfin(new Configuration({
    basePath: 'https://demo.jellyfin.org/stable'
}));

// Each API endpoint is exposed via a getter on the SDK instance using
// a shared Configuration and Axios instance. For example the /System APIs
// are available as jellyfin.systemApi.

// Fetch the public system info
const info = await jellyfin.systemApi.getPublicSystemInfo();
console.log('Info =>', info.data);

// Fetch the list of public users
const users = await jellyfin.userApi.getPublicUsers();
console.log('Users =>', users.data);

// A helper method for authentication has been added to the SDK because
// the default method exposed in the generated Axios client is rather
// cumbersome to use.
const auth = await jellyfin.authenticateUserByName({ Username: 'demo', Pw: '' });
console.log('Auth =>', auth.data);
```
