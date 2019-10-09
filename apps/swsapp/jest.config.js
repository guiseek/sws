module.exports = {
  name: 'swsapp',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/swsapp',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
