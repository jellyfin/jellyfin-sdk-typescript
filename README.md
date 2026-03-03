<h1 align="center">jellyfin-sdk-typescript</h1>
<h3 align="center">Part of the <a href="https://jellyfin.org">Jellyfin Project</a></h3>

---

<p align="center">
<img alt="Logo Banner" src="https://raw.githubusercontent.com/jellyfin/jellyfin-ux/master/branding/SVG/banner-logo-solid.svg?sanitize=true"/>
<br/>
<br/>
<a href="https://github.com/jellyfin/jellyfin-sdk-typescript/blob/master/LICENSE"><img alt="MPL-2.0 license" src="https://img.shields.io/github/license/jellyfin/jellyfin-sdk-typescript"></a>
<a href="https://github.com/jellyfin/jellyfin-sdk-typescript/releases"><img alt="Current Release" src="https://img.shields.io/github/release/jellyfin/jellyfin-sdk-typescript.svg"/></a>
<a href="https://www.npmjs.com/package/@jellyfin/sdk"><img alt="npm" src="https://img.shields.io/npm/v/@jellyfin/sdk"></a>
<a href="https://sonarcloud.io/component_measures?metric=coverage&id=jellyfin_jellyfin-sdk-typescript">
<img alt="Sonar Coverage" src="https://img.shields.io/sonar/coverage/jellyfin_jellyfin-sdk-typescript/master?server=https%3A%2F%2Fsonarcloud.io">
</a>
</p>

A TypeScript SDK for Jellyfin.

> Warning: This project is under active development, so API changes may occur.

## Building Locally

If you want to build the SDK locally (for development, testing, or contributing), follow the steps below.

### 1. Replace `openapi.json` file

Obtain the correct `openapi.json` file from the Jellyfin server repository.

- If working with merged changes, you can download it from the [jellyfin api spec](https://api.jellyfin.org/openapi/jellyfin-openapi-stable.json).
- If working with unmerged branch changes, download the `openapi.json` artifact generated from that specific branch build.

Once you have the correct file, replace the existing `openapi.json` in this repository with the new one.

### 2. Build the project

You can now build the project by executing the following commands

    ```sh
    npm run fix-schema
    npm run build
    ```

This should then generate a compiled output in the `lib` folder

### 3. Use the local build in another project

You can reference your local build in another repository using `npm link`:

   ```sh
   npm link
   ```

Then, in the consuming project:

   ```sh
   npm link @jellyfin/sdk
   ```

This allows you to test changes to the SDK without publishing it to npm.

## Install

```sh
npm i --save @jellyfin/sdk
```

or

```sh
yarn add @jellyfin/sdk
```

### Supported Jellyfin Versions

|  SDK Version  | Jellyfin Version |
|:-------------:|:----------------:|
|    0.13.0     |     10.11.x      |
|    0.12.0     |     10.11.x      |
|    0.11.0     |     10.10.x      |
|    0.10.0     |      10.9.x      |
|     0.9.0     |      10.9.x      |
| 0.8.2 - 0.6.0 | 10.8.1 - 10.8.13 |
|     0.5.0     |      10.8.0      |
|    <0.5.0     |      10.7.x      |

> Note: Versions prior to 0.7.0 were published as `@thornbill/jellyfin-sdk`.

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

// Each API endpoint is represented by a class in the generated client.
// Helper utility functions are provided under `/lib/utils/api/` to create an
// instance of a specific Jellyfin API using the shared Configuration and Axios
// instance from the `api` object created above.

// For example, the SystemApi can be generated using the `getSystemApi`
// function in `/lib/utils/api/system-api`.

// Fetch the public system info
const info = await getSystemApi(api).getPublicSystemInfo();
console.log('Info =>', info.data);

// Fetch the list of public users
const users = await getUserApi(api).getPublicUsers();
console.log('Users =>', users.data);

// Login with a username and password.
const auth = await getUserApi(this).authenticateUserByName({ authenticateUserByName: { Username: 'demo', Pw: '' } });
console.log('Auth =>', auth.data);

// Authentication state is stored internally in the Api class, so now
// requests that require authentication can be made normally
const libraries = await getLibraryApi(api).getMediaFolders();
console.log('Libraries =>', libraries.data);

// Logout the current user.
await getSessionApi(api).reportSessionEnded();
```

## Significant Changes

[See the CHANGELOG](./CHANGELOG.md)

## Roadmap to 1.0

* [x] Use custom generator templates for API versions [#231](https://github.com/jellyfin/jellyfin-sdk-typescript/pull/231) (Currently uses sed to update the value could be improved.)
* [x] Automate OpenAPI spec updates using GitHub [#351](https://github.com/jellyfin/jellyfin-sdk-typescript/pull/351)
* [x] Create branch tracking unstable Jellyfin builds with automated builds [#354](https://github.com/jellyfin/jellyfin-sdk-typescript/pull/354)
* [x] Fix authentication header escaping [#564](https://github.com/jellyfin/jellyfin-sdk-typescript/pull/564)
* [ ] Add WebSocket API support
* [ ] Add example projects for different ecosystems [#186](https://github.com/jellyfin/jellyfin-sdk-typescript/issues/186)
* [ ] Add utility function for `getFile` [#164](https://github.com/jellyfin/jellyfin-sdk-typescript/issues/164)
* [ ] More complete device profile generation utilities
