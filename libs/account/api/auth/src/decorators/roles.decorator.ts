import { SetMetadata } from '@nestjs/common';

export const Role = (role: string) => SetMetadata('role', role);
// export const Roles = (...roles: string[]) => ReflectMetadata('roles', roles);
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);

export const FeatureActions = <P = any, S = any>(main: P = null, ...roles: S[]) => SetMetadata('roles', { main, roles });

// import { SetMetadata } from '@nestjs/common';

// export const Roles = (...args: string[]) => SetMetadata('roles', args);
