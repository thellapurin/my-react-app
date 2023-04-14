// aws-iot.js

import AWSIoT from 'aws-iot-device-sdk';

// Initialize AWS IoT Device SDK
const device = AWSIoT.device({
  keyPath: 'path/to/private/key',
  certPath: 'path/to/certificate',
  caPath: 'path/to/ca',
  clientId: 'yourClientId',
  host: 'yourIoTEndpoint',
});

export default device;
