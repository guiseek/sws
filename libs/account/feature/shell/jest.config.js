module.exports = {
  name: 'account-feature-shell',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/account/feature/shell',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
