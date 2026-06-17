import { prisma } from '@/lib/prisma';
import blogs from './quiz2/blog2Data2.json';

async function main() {
  await prisma.blog2_xx.deleteMany();
  for (const blog of blogs) {
    await prisma.blog2_xx.create({
      data: blog,
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
