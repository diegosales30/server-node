import { prisma } from './../src/lib/prisma';
async function seed() {
  await prisma.event.create({
    data: {
      id: 'd983dd3d-2c85-4104-a2ed-53cac749b7fa',
      title: 'Unite Summit',
      slug: 'unite-summit',
      details: 'Um event de Devs para Devs!',
      maximumAttendees: 120,
    }
  })
}

seed().then(() => {
  console.log('Data base seeded!');
  prisma.$disconnect() 
})

//npx prisma db seed