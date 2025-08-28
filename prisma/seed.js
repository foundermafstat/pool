/* eslint-disable no-console */
const { PrismaClient } = require("@prisma/client")
const bcrypt = require("bcryptjs")

const prisma = new PrismaClient()

async function main() {
  const email = process.env.SEED_ADMIN_EMAIL || "admin@example.com"
  const name = process.env.SEED_ADMIN_NAME || "Test Admin"
  const passwordPlain = process.env.SEED_ADMIN_PASSWORD || "Admin123!"

  const password = await bcrypt.hash(passwordPlain, 10)

  const user = await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      email,
      name,
      password,
      role: "ADMIN",
    },
    select: { id: true, email: true, role: true },
  })

  console.log("Seed: admin user ensured:", user)
  if (passwordPlain === "Admin123!") {
    console.log("WARNING: Using default password 'Admin123!'. Change it via the admin UI or set SEED_ADMIN_PASSWORD before seeding.")
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
