<!-- markdownlint-disable MD024 -->
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Changed

* Ensure `Authorization` header is sent for all requests ([#948](https://github.com/jellyfin/jellyfin-sdk-typescript/pull/948)).

### Deprecated

* Deprecate authentication helper methods in `Api` class ([#949](https://github.com/jellyfin/jellyfin-sdk-typescript/pull/948)). Updating the `accessToken` is now handled transparently.

## [0.12.0] - 2025-10-21

### Security

* Bumped axios peer dependency version ([#939](https://github.com/jellyfin/jellyfin-sdk-typescript/pull/939)). Note that this axios vulnerability only affected applications running in node.js.

### Added

* `getUri` utility method ([#867](https://github.com/jellyfin/jellyfin-sdk-typescript/pull/867)).

### Changed

* Updated minimum Jellyfin version to 10.10.0 ([#942](https://github.com/jellyfin/jellyfin-sdk-typescript/pull/942)).
* Updated OpenAPI spec for Jellyfin 10.11.0 ([#931](https://github.com/jellyfin/jellyfin-sdk-typescript/pull/931)).

### Removed

* Duplicate `ItemSortBy` enum ([#842](https://github.com/jellyfin/jellyfin-sdk-typescript/pull/842)).
* `addPlayedIndicator` from `ImageRequestParameters` ([#841](https://github.com/jellyfin/jellyfin-sdk-typescript/pull/841)).

## [0.11.0] - 2024-10-28

### Changed

* Updated OpenAPI spec for Jellyfin 10.10.0 ([#816](https://github.com/jellyfin/jellyfin-sdk-typescript/pull/816)).

### Removed

* Deprecated image url function ([#731](https://github.com/jellyfin/jellyfin-sdk-typescript/pull/731)).

## [0.10.0] - 2024-06-03

### Changed

* Update build target to ES2018 ([#712](https://github.com/jellyfin/jellyfin-sdk-typescript/pull/712)).

## [0.9.0] - 2024-05-14

### Changed

* Update OpenAPI spec for Jellyfin 10.9.1 ([#694](https://github.com/jellyfin/jellyfin-sdk-typescript/pull/694)).

## [0.8.2] - 2023-04-12

## [0.8.1] - 2023-03-31

## [0.8.0] - 2023-03-30

### Changed

* Fully target ES6/ES2015 ([#341](https://github.com/jellyfin/jellyfin-sdk-typescript/pull/341)).
* Axios major version upgrade ([#300](https://github.com/jellyfin/jellyfin-sdk-typescript/pull/300)).

## [0.7.0] - 2023-09-16

### Changed

* Rename package to @jellyfin/sdk ([#262](https://github.com/jellyfin/jellyfin-sdk-typescript/pull/262)).

## [0.6.0] - 2022-07-14

### Changed

* Update OpenAPI spec for Jellyfin 10.8.1 ([#208](https://github.com/jellyfin/jellyfin-sdk-typescript/pull/208)).

## [0.5.0] - 2022-06-17

### Changed

* Build directory is now `lib` instead of `dist`.
  Any imports used that were previously in `dist` will need updated ([#147](https://github.com/jellyfin/jellyfin-sdk-typescript/pull/147)).
* API classes are no longer exposed via getters.
  Instead you need to call a function passing the `Api` instance as a parameter.
  For example: `getSystemApi(api)`.
  While I do feel this is a slightly worse developer experience, it was a necessary change to support tree-shaking ([#149](https://github.com/jellyfin/jellyfin-sdk-typescript/pull/149)).
* `BaseItemKind` is now included in the generated client.
  Imports will need updated ([#187](https://github.com/jellyfin/jellyfin-sdk-typescript/pull/187)).

### Removed

* Duplicated exports were removed.
  Any imports may need updated if you referenced one of the duplicates ([#148](https://github.com/jellyfin/jellyfin-sdk-typescript/pull/148)).

## [0.4.1] - 2022-02-17

## [0.4.0] - 2022-02-17

## [0.3.1] - 2022-02-03

## [0.3.0] - 2021-10-18

## [0.2.0] - 2021-10-08

## [0.1.2] - 2021-09-19

## [0.1.1] - 2021-09-19

## [0.1.0] - 2021-09-19

[unreleased]: https://github.com/jellyfin/jellyfin-sdk-typescript/compare/v0.12.0...HEAD
[0.12.0]: https://github.com/jellyfin/jellyfin-sdk-typescript/compare/v0.11.0...v0.12.0
[0.11.0]: https://github.com/jellyfin/jellyfin-sdk-typescript/compare/v0.10.0...v0.11.0
[0.10.0]: https://github.com/jellyfin/jellyfin-sdk-typescript/compare/v0.9.0...v0.10.0
[0.9.0]: https://github.com/jellyfin/jellyfin-sdk-typescript/compare/v0.8.2...v0.9.0
[0.8.2]: https://github.com/jellyfin/jellyfin-sdk-typescript/compare/v0.8.1...v0.8.2
[0.8.1]: https://github.com/jellyfin/jellyfin-sdk-typescript/compare/v0.8.0...v0.8.1
[0.8.0]: https://github.com/jellyfin/jellyfin-sdk-typescript/compare/v0.7.0...v0.8.0
[0.7.0]: https://github.com/jellyfin/jellyfin-sdk-typescript/compare/v0.6.0...v0.7.0
[0.6.0]: https://github.com/jellyfin/jellyfin-sdk-typescript/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/jellyfin/jellyfin-sdk-typescript/compare/v0.4.1...v0.5.0
[0.4.1]: https://github.com/jellyfin/jellyfin-sdk-typescript/compare/v0.4.0...v0.4.1
[0.4.0]: https://github.com/jellyfin/jellyfin-sdk-typescript/compare/v0.3.1...v0.4.0
[0.3.1]: https://github.com/jellyfin/jellyfin-sdk-typescript/compare/v0.3.0...v0.3.1
[0.3.0]: https://github.com/jellyfin/jellyfin-sdk-typescript/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/jellyfin/jellyfin-sdk-typescript/compare/v0.1.2...v0.2.0
[0.1.2]: https://github.com/jellyfin/jellyfin-sdk-typescript/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/jellyfin/jellyfin-sdk-typescript/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/jellyfin/jellyfin-sdk-typescript/releases/tag/v0.1.0
