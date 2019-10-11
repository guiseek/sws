module.exports = {
  name: 'account-shared-user',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/account/shared/user',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
