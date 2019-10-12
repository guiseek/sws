module.exports = {
  name: 'organization-shared-company',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/organization/shared/company',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
