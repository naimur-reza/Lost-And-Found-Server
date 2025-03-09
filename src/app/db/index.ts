import config from "../config";
import { UserRole } from "../constant/userRole";
import prisma from "../shared/prisma";
import { hashString } from "../utils/hashString";

export const seedSuperAdmin = async () => {
  const hashPassword = await hashString(config.super_admin_password!);

  const isSuperAdminExist = await prisma.user.findUnique({
    where: {
      email: config.super_admin_email,
    },
  });

  if (isSuperAdminExist) return;

  await prisma.user.create({
    data: {
      name: "Super Admin",
      email: config.super_admin_email as string,
      password: hashPassword,
      role: UserRole.Super_Admin,
    },
  });
};
