const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({ log: ["query"] });

// prisma.brand.create({
//   data: {
//     name: "Cococo life",
//     logoUrl:"https://scontent-syd2-1.cdninstagram.com/v/t51.2885-19/s150x150/71174853_1235414673326679_1455648340275363840_n.jpg?tp=1&_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_ohc=JnVp6aH4X0cAX_pPd0U&ccb=7-4&oh=4376a0f13606d2621d9596007ec790e9&oe=60828842&_nc_sid=4f375e",
//     description: "Sustainable living 🌿 Sustainability & Zero Waste Blog 🤤 Vegan Recipes",
//     Category:
//   },
// });
async function run() {
  await prisma.campaign.create({
    data: {
      title: "Sustainable Summer",
      imageUrl:
        "https://instagram.fsyd6-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/75231099_126848368398615_7659284112876110944_n.jpg?_nc_ht=instagram.fsyd6-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=GVhKe0DK4rUAX85W08D&oh=a054526545b271033a175340e0d4a19f&oe=5F72AA7D",
      startDate: "2020-10-01T07:30:00.000Z",
      endDate: "2020-10-10T07:30:00.000Z",
      brief:
        "Take a picture with your favourite COCOCO product and upload it to Instagram before the end of the campaign.",
      description: "New range of sustainable products",
      Brand: {
        connect: {
          id: 1,
        },
      },
      Category: {
        connect: {
          id: 2,
        },
      },
    },
  });
}
run();

// data: {
//       brandId: {
//         connect: {
//           id: 1,
//         },
//       },
