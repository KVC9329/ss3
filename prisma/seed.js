async function main() {
    // Check if the user already exists by email
    const existingUser = await prisma.user.findUnique({
      where: { email: 'unique-email@example.com' }, // Adjust as needed
    });
  
    if (!existingUser) {
      // Create a new user only if they don't exist
      const user = await prisma.user.create({
        data: {
          clerkId: 'clerk-id-example',
          name: 'John Doe',
          email: 'unique-email@example.com', // Ensure this is unique
        },
      });
      console.log('Created user:', user);
    } else {
      console.log('User already exists:', existingUser);
    }
  }
  
  main()
    .catch((e) => {
      throw e;
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
  