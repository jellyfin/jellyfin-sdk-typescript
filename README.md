<h1 align="center">jellyfin-sdk-typescript</h1>

<p align="center">
<a href="https://github.com/thornbill/jellyfin-sdk-typescript/blob/master/LICENSE"><img alt="MPL-2.0 license" src="https://img.shields.io/github/license/thornbill/jellyfin-sdk-typescript"></a>
<a href="https://github.com/thornbill/jellyfin-sdk-typescript/releases"><img alt="Current Release" src="https://img.shields.io/github/release/thornbill/jellyfin-sdk-typescript.svg"/></a>
<a href="https://www.npmjs.com/package/@thornbill/jellyfin-sdk"><img alt="npm" src="https://img.shields.io/npm/v/@thornbill/jellyfin-sdk"></a>
<a href="https://codecov.io/gh/thornbill/jellyfin-sdk-typescript">
<img alt="Codecov" src="https://img.shields.io/codecov/c/github/thornbill/jellyfin-sdk-typescript?token=Wk8RS9tDnb">
</a>
</p>

A TypeScript SDK for Jellyfin.

> Warning: This project is under active development, so API changes may occur.

## Install

```sh
npm i --save @thornbill/jellyfin-sdk
```

or

```sh
yarn add @thornbill/jellyfin-sdk
```

### React Native

The generated Axios client used in this library depends on `URL` and `URLSearchParams` to be available on the global scope.
React Native only includes incomplete implementations for these classes, so a polyfill is required.
[React Native URL Polyfill](https://github.com/charpeni/react-native-url-polyfill) seems like a good solution for this.

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

// Find a valid server by trying to connect using common protocols and ports.
// Each server receives a score based on security, speed, and other criteria.
const servers = await jellyfin.discovery.getRecommendedServerCandidates('demo.jellyfin.org/stable');
// A utility function for finding the best result is available.
// If there is no "best" server, an error message should be displayed.
const best = jellyfin.discovery.findBestServer(servers);

// Create an API instance
const api = jellyfin.createApi(best.address);

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
const auth = await api.authenticateUserByName('demo', '');
console.log('Auth =>', auth.data);

// Authentication state is stored internally in the Api class, so now
// requests that require authentication can be made normally
const libraries = await api.libraryApi.getMediaFolders();
console.log('Libraries =>', libraries.data);

// A helper method for logging out the current user has been added to the
// SDK so the internal state is updated correctly.
await api.logout();
```

## Roadmap to 1.0

* [ ] More complete device profile generation utilities
* [ ] Use custom generator templates for API versions
* [ ] Automate OpenAPI spec updates using GitHub
  * [ ] Create branch tracking unstable Jellyfin builds
