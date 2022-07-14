[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / NetworkConfiguration

# Interface: NetworkConfiguration

[generated-client](../modules/generated_client.md).NetworkConfiguration

Defines the Jellyfin.Networking.Configuration.NetworkConfiguration.

**`export`**

**`interface`** NetworkConfiguration

## Table of contents

### Properties

- [AutoDiscovery](generated_client.NetworkConfiguration.md#autodiscovery)
- [AutoDiscoveryTracing](generated_client.NetworkConfiguration.md#autodiscoverytracing)
- [BaseUrl](generated_client.NetworkConfiguration.md#baseurl)
- [CertificatePassword](generated_client.NetworkConfiguration.md#certificatepassword)
- [CertificatePath](generated_client.NetworkConfiguration.md#certificatepath)
- [EnableHttps](generated_client.NetworkConfiguration.md#enablehttps)
- [EnableIPV4](generated_client.NetworkConfiguration.md#enableipv4)
- [EnableIPV6](generated_client.NetworkConfiguration.md#enableipv6)
- [EnableMultiSocketBinding](generated_client.NetworkConfiguration.md#enablemultisocketbinding)
- [EnablePublishedServerUriByRequest](generated_client.NetworkConfiguration.md#enablepublishedserveruribyrequest)
- [EnableRemoteAccess](generated_client.NetworkConfiguration.md#enableremoteaccess)
- [EnableSSDPTracing](generated_client.NetworkConfiguration.md#enablessdptracing)
- [EnableUPnP](generated_client.NetworkConfiguration.md#enableupnp)
- [GatewayMonitorPeriod](generated_client.NetworkConfiguration.md#gatewaymonitorperiod)
- [HDHomerunPortRange](generated_client.NetworkConfiguration.md#hdhomerunportrange)
- [HttpServerPortNumber](generated_client.NetworkConfiguration.md#httpserverportnumber)
- [HttpsPortNumber](generated_client.NetworkConfiguration.md#httpsportnumber)
- [IgnoreVirtualInterfaces](generated_client.NetworkConfiguration.md#ignorevirtualinterfaces)
- [IsRemoteIPFilterBlacklist](generated_client.NetworkConfiguration.md#isremoteipfilterblacklist)
- [KnownProxies](generated_client.NetworkConfiguration.md#knownproxies)
- [LocalNetworkAddresses](generated_client.NetworkConfiguration.md#localnetworkaddresses)
- [LocalNetworkSubnets](generated_client.NetworkConfiguration.md#localnetworksubnets)
- [PublicHttpsPort](generated_client.NetworkConfiguration.md#publichttpsport)
- [PublicPort](generated_client.NetworkConfiguration.md#publicport)
- [PublishedServerUriBySubnet](generated_client.NetworkConfiguration.md#publishedserveruribysubnet)
- [RemoteIPFilter](generated_client.NetworkConfiguration.md#remoteipfilter)
- [RequireHttps](generated_client.NetworkConfiguration.md#requirehttps)
- [SSDPTracingFilter](generated_client.NetworkConfiguration.md#ssdptracingfilter)
- [TrustAllIP6Interfaces](generated_client.NetworkConfiguration.md#trustallip6interfaces)
- [UDPPortRange](generated_client.NetworkConfiguration.md#udpportrange)
- [UDPSendCount](generated_client.NetworkConfiguration.md#udpsendcount)
- [UDPSendDelay](generated_client.NetworkConfiguration.md#udpsenddelay)
- [UPnPCreateHttpPortMap](generated_client.NetworkConfiguration.md#upnpcreatehttpportmap)
- [VirtualInterfaceNames](generated_client.NetworkConfiguration.md#virtualinterfacenames)

## Properties

### AutoDiscovery

• `Optional` **AutoDiscovery**: `boolean`

Gets or sets a value indicating whether Autodiscovery is enabled.

**`memberof`** NetworkConfiguration

#### Defined in

[generated-client/models/network-configuration.ts:178](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/network-configuration.ts#L178)

___

### AutoDiscoveryTracing

• `Optional` **AutoDiscoveryTracing**: `boolean`

Gets or sets a value indicating whether Autodiscovery tracing is enabled.

**`memberof`** NetworkConfiguration

#### Defined in

[generated-client/models/network-configuration.ts:172](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/network-configuration.ts#L172)

___

### BaseUrl

• `Optional` **BaseUrl**: `string`

Gets or sets a value used to specify the URL prefix that your Jellyfin instance can be accessed at.

**`memberof`** NetworkConfiguration

#### Defined in

[generated-client/models/network-configuration.ts:46](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/network-configuration.ts#L46)

___

### CertificatePassword

• `Optional` **CertificatePassword**: `string`

Gets or sets the password required to access the X.509 certificate data in the file specified by Jellyfin.Networking.Configuration.NetworkConfiguration.CertificatePath.

**`memberof`** NetworkConfiguration

#### Defined in

[generated-client/models/network-configuration.ts:40](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/network-configuration.ts#L40)

___

### CertificatePath

• `Optional` **CertificatePath**: `string`

Gets or sets the filesystem path of an X.509 certificate to use for SSL.

**`memberof`** NetworkConfiguration

#### Defined in

[generated-client/models/network-configuration.ts:34](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/network-configuration.ts#L34)

___

### EnableHttps

• `Optional` **EnableHttps**: `boolean`

Gets or sets a value indicating whether to use HTTPS.

**`memberof`** NetworkConfiguration

#### Defined in

[generated-client/models/network-configuration.ts:70](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/network-configuration.ts#L70)

___

### EnableIPV4

• `Optional` **EnableIPV4**: `boolean`

Gets or sets a value indicating whether gets or sets IPV4 capability.

**`memberof`** NetworkConfiguration

#### Defined in

[generated-client/models/network-configuration.ts:100](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/network-configuration.ts#L100)

___

### EnableIPV6

• `Optional` **EnableIPV6**: `boolean`

Gets or sets a value indicating whether gets or sets IPV6 capability.

**`memberof`** NetworkConfiguration

#### Defined in

[generated-client/models/network-configuration.ts:94](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/network-configuration.ts#L94)

___

### EnableMultiSocketBinding

• `Optional` **EnableMultiSocketBinding**: `boolean`

Gets a value indicating whether multi-socket binding is available.

**`memberof`** NetworkConfiguration

#### Defined in

[generated-client/models/network-configuration.ts:148](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/network-configuration.ts#L148)

___

### EnablePublishedServerUriByRequest

• `Optional` **EnablePublishedServerUriByRequest**: `boolean`

Gets or sets a value indicating whether the published server uri is based on information in HTTP requests.

**`memberof`** NetworkConfiguration

#### Defined in

[generated-client/models/network-configuration.ts:226](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/network-configuration.ts#L226)

___

### EnableRemoteAccess

• `Optional` **EnableRemoteAccess**: `boolean`

Gets or sets a value indicating whether access outside of the LAN is permitted.

**`memberof`** NetworkConfiguration

#### Defined in

[generated-client/models/network-configuration.ts:202](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/network-configuration.ts#L202)

___

### EnableSSDPTracing

• `Optional` **EnableSSDPTracing**: `boolean`

Gets or sets a value indicating whether detailed SSDP logs are sent to the console/log.  \"Emby.Dlna\": \"Debug\" must be set in logging.default.json for this property to have any effect.

**`memberof`** NetworkConfiguration

#### Defined in

[generated-client/models/network-configuration.ts:106](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/network-configuration.ts#L106)

___

### EnableUPnP

• `Optional` **EnableUPnP**: `boolean`

Gets or sets a value indicating whether to enable automatic port forwarding.

**`memberof`** NetworkConfiguration

#### Defined in

[generated-client/models/network-configuration.ts:196](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/network-configuration.ts#L196)

___

### GatewayMonitorPeriod

• `Optional` **GatewayMonitorPeriod**: `number`

Gets or sets the time (in seconds) between the pings of SSDP gateway monitor.

**`memberof`** NetworkConfiguration

#### Defined in

[generated-client/models/network-configuration.ts:142](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/network-configuration.ts#L142)

___

### HDHomerunPortRange

• `Optional` **HDHomerunPortRange**: `string`

Gets or sets the ports that HDHomerun uses.

**`memberof`** NetworkConfiguration

#### Defined in

[generated-client/models/network-configuration.ts:160](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/network-configuration.ts#L160)

___

### HttpServerPortNumber

• `Optional` **HttpServerPortNumber**: `number`

Gets or sets the HTTP server port number.

**`memberof`** NetworkConfiguration

#### Defined in

[generated-client/models/network-configuration.ts:58](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/network-configuration.ts#L58)

___

### HttpsPortNumber

• `Optional` **HttpsPortNumber**: `number`

Gets or sets the HTTPS server port number.

**`memberof`** NetworkConfiguration

#### Defined in

[generated-client/models/network-configuration.ts:64](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/network-configuration.ts#L64)

___

### IgnoreVirtualInterfaces

• `Optional` **IgnoreVirtualInterfaces**: `boolean`

Gets or sets a value indicating whether address names that match Jellyfin.Networking.Configuration.NetworkConfiguration.VirtualInterfaceNames should be Ignore for the purposes of binding.

**`memberof`** NetworkConfiguration

#### Defined in

[generated-client/models/network-configuration.ts:130](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/network-configuration.ts#L130)

___

### IsRemoteIPFilterBlacklist

• `Optional` **IsRemoteIPFilterBlacklist**: `boolean`

Gets or sets a value indicating whether <seealso cref=\"P:Jellyfin.Networking.Configuration.NetworkConfiguration.RemoteIPFilter\" /> contains a blacklist or a whitelist. Default is a whitelist.

**`memberof`** NetworkConfiguration

#### Defined in

[generated-client/models/network-configuration.ts:190](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/network-configuration.ts#L190)

___

### KnownProxies

• `Optional` **KnownProxies**: `string`[]

Gets or sets the known proxies. If the proxy is a network, it\'s added to the KnownNetworks.

**`memberof`** NetworkConfiguration

#### Defined in

[generated-client/models/network-configuration.ts:220](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/network-configuration.ts#L220)

___

### LocalNetworkAddresses

• `Optional` **LocalNetworkAddresses**: `string`[]

Gets or sets the interface addresses which Jellyfin will bind to. If empty, all interfaces will be used.

**`memberof`** NetworkConfiguration

#### Defined in

[generated-client/models/network-configuration.ts:214](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/network-configuration.ts#L214)

___

### LocalNetworkSubnets

• `Optional` **LocalNetworkSubnets**: `string`[]

Gets or sets the subnets that are deemed to make up the LAN.

**`memberof`** NetworkConfiguration

#### Defined in

[generated-client/models/network-configuration.ts:208](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/network-configuration.ts#L208)

___

### PublicHttpsPort

• `Optional` **PublicHttpsPort**: `number`

Gets or sets the public HTTPS port.

**`memberof`** NetworkConfiguration

#### Defined in

[generated-client/models/network-configuration.ts:52](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/network-configuration.ts#L52)

___

### PublicPort

• `Optional` **PublicPort**: `number`

Gets or sets the public mapped port.

**`memberof`** NetworkConfiguration

#### Defined in

[generated-client/models/network-configuration.ts:76](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/network-configuration.ts#L76)

___

### PublishedServerUriBySubnet

• `Optional` **PublishedServerUriBySubnet**: `string`[]

Gets or sets the PublishedServerUriBySubnet  Gets or sets PublishedServerUri to advertise for specific subnets.

**`memberof`** NetworkConfiguration

#### Defined in

[generated-client/models/network-configuration.ts:166](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/network-configuration.ts#L166)

___

### RemoteIPFilter

• `Optional` **RemoteIPFilter**: `string`[]

Gets or sets the filter for remote IP connectivity. Used in conjuntion with <seealso cref=\"P:Jellyfin.Networking.Configuration.NetworkConfiguration.IsRemoteIPFilterBlacklist\" />.

**`memberof`** NetworkConfiguration

#### Defined in

[generated-client/models/network-configuration.ts:184](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/network-configuration.ts#L184)

___

### RequireHttps

• `Optional` **RequireHttps**: `boolean`

Gets or sets a value indicating whether the server should force connections over HTTPS.

**`memberof`** NetworkConfiguration

#### Defined in

[generated-client/models/network-configuration.ts:28](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/network-configuration.ts#L28)

___

### SSDPTracingFilter

• `Optional` **SSDPTracingFilter**: `string`

Gets or sets the SSDPTracingFilter  Gets or sets a value indicating whether an IP address is to be used to filter the detailed ssdp logs that are being sent to the console/log.  If the setting \"Emby.Dlna\": \"Debug\" msut be set in logging.default.json for this property to work.

**`memberof`** NetworkConfiguration

#### Defined in

[generated-client/models/network-configuration.ts:112](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/network-configuration.ts#L112)

___

### TrustAllIP6Interfaces

• `Optional` **TrustAllIP6Interfaces**: `boolean`

Gets or sets a value indicating whether all IPv6 interfaces should be treated as on the internal network.  Depending on the address range implemented ULA ranges might not be used.

**`memberof`** NetworkConfiguration

#### Defined in

[generated-client/models/network-configuration.ts:154](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/network-configuration.ts#L154)

___

### UDPPortRange

• `Optional` **UDPPortRange**: `string`

Gets or sets the UDPPortRange.

**`memberof`** NetworkConfiguration

#### Defined in

[generated-client/models/network-configuration.ts:88](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/network-configuration.ts#L88)

___

### UDPSendCount

• `Optional` **UDPSendCount**: `number`

Gets or sets the number of times SSDP UDP messages are sent.

**`memberof`** NetworkConfiguration

#### Defined in

[generated-client/models/network-configuration.ts:118](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/network-configuration.ts#L118)

___

### UDPSendDelay

• `Optional` **UDPSendDelay**: `number`

Gets or sets the delay between each groups of SSDP messages (in ms).

**`memberof`** NetworkConfiguration

#### Defined in

[generated-client/models/network-configuration.ts:124](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/network-configuration.ts#L124)

___

### UPnPCreateHttpPortMap

• `Optional` **UPnPCreateHttpPortMap**: `boolean`

Gets or sets a value indicating whether the http port should be mapped as part of UPnP automatic port forwarding.

**`memberof`** NetworkConfiguration

#### Defined in

[generated-client/models/network-configuration.ts:82](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/network-configuration.ts#L82)

___

### VirtualInterfaceNames

• `Optional` **VirtualInterfaceNames**: `string`

Gets or sets a value indicating the interfaces that should be ignored. The list can be comma separated. <seealso cref=\"P:Jellyfin.Networking.Configuration.NetworkConfiguration.IgnoreVirtualInterfaces\" />.

**`memberof`** NetworkConfiguration

#### Defined in

[generated-client/models/network-configuration.ts:136](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/network-configuration.ts#L136)
