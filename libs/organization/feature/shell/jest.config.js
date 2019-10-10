module.exports = {
  name: 'organization-feature-shell',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/organization/feature/shell',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
