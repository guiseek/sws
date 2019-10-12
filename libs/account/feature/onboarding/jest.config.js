module.exports = {
  name: 'account-feature-onboarding',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/account/feature/onboarding',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
