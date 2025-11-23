import 'dotenv/config';
import prisma from '../lib/prisma';

async function main() {
  console.log('Start seeding...');

  await prisma.project.createMany({
    data: [
      {
        title: 'Personal Portfolio',
        titleFa: 'پورتفولیوی شخصی',
        description: 'A modern personal portfolio built with Next.js',
        descriptionFa: 'یک پورتفولیوی شخصی مدرن با Next.js',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        order: 1,
      },
    ],
  });

  await prisma.skill.createMany({
    data: [
      { name: 'React', category: 'Frontend', level: 90, order: 1 },
      { name: 'Next.js', category: 'Frontend', level: 85, order: 2 },
      { name: 'TypeScript', category: 'Frontend', level: 80, order: 3 },
      { name: 'Node.js', category: 'Backend', level: 75, order: 4 },
    ],
  });

  await prisma.siteSettings.createMany({
    data: [
      { key: 'site_name', value: 'Amir Zalaghi' },
      { key: 'site_description', value: 'Personal Portfolio website' },
    ],
  });

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
