import prisma from "../../shared/prisma";

const fetchDashboardMetaDataFromDB = async () => {
  const lostItemCount = await prisma.lostItem.count();
  const foundItemCount = await prisma.foundItem.count();
  const userCount = await prisma.user.count();
  const pendingClaimCount = await prisma.claim.count({
    where: {
      status: "PENDING",
    },
  });

  const meta = {
    lostItemCount,
    foundItemCount,
    userCount,
    pendingClaimCount,
  };

  return meta;
};

export const metaService = {
  fetchDashboardMetaDataFromDB,
};
