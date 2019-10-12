module.exports = {
  name: 'account-feature-auth',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/account/feature/auth',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
