#### => shadcn setup

```
npx shadcn@latest init

```

#### => prisma setup

```
npm install typescript tsx @types/node --save-dev
npm install prisma @types/pg --save-dev
npm install @prisma/client @prisma/adapter-pg pg dotenv

npx prisma
npx prisma init
```

#### => prisma/schema.prisma

```
generator client {
  provider = "prisma-client"
  output   = "../src/generated/prisma"
}
```

#### => prisma generate and db push

```
npx prisma generate
npx prisma db push
```

#### => lib/prisma.ts

```
import { PrismaClient } from '@/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prismaClientSingleton = () => {
  return new PrismaClient({ adapter });
};
declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export { prisma };
if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;

```

```
npx tsx --env-file=.env test.ts
```
