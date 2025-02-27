import { config } from '@keystone-6/core';
import { lists } from './schema';

export default config({
  db: {
    provider: 'sqlite',
    url: process.env.DATABASE_URL || 'file:./keystone-example.db',

    // when working in a monorepo environment you may want to output the prisma client elsewhere
    //   you can use .db.prismaClientPath to configure where that is
    prismaClientPath: 'node_modules/.myprisma/client',
  },
  lists,

  // when working in a monorepo environment you may want to output the types elsewhere
  //   you can use .types.path to configure where that is
  types: {
    path: 'my-types.ts',
  },
});
