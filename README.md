<h1 align="center">jellyfin-sdk-typescript</h1>

<p align="center">
<a href="https://github.com/thornbill/jellyfin-sdk-typescript/blob/master/LICENSE"><img alt="MPL-2.0 license" src="https://img.shields.io/github/license/thornbill/jellyfin-sdk-typescript"></a>
<a href="https://github.com/thornbill/jellyfin-sdk-typescript/releases"><img alt="Current Release" src="https://img.shields.io/github/release/thornbill/jellyfin-sdk-typescript.svg"/></a>
<a href="https://codecov.io/gh/thornbill/jellyfin-sdk-typescript">
<img alt="Codecov" src="https://img.shields.io/codecov/c/github/thornbill/jellyfin-sdk-typescript?token=Wk8RS9tDnb">
</a>
</p>

A TypeScript SDK for Jellyfin.

> Warning: This project is under active development and is not ready for production use. API changes _will_ occur.

## Install

```sh
npm i --save @thornbill/jellyfin-sdk
```

or

```sh
yarn add @thornbill/jellyfin-sdk
```

## Usage

```js
// Create a new instance of the SDK
const jellyfin = new Jellyfin({
    clientInfo: {
        name: 'My Client Application',
        version: '1.0.0'
    },
    deviceInfo: {
        name: 'Device Name',
        id: 'unique-device-id'
    }
});
const api = jellyfin.createApi('https://demo.jellyfin.org/stable');

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

// Authentication state is stored internally in the Api class, so now
// requests that require authentication can be made normally
const libraries = await api.libraryApi.getMediaFolders();
console.log('Libraries =>', libraries.data);
```
