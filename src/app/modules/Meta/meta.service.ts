import prisma from "../../shared/prisma";

const fetchDashboardMetaDataFromDB = async () => {
  const lostItemCount = await prisma.item.count({
    where: {
      type: "LOST_ITEM",
    },
  });
  const foundItemCount = await prisma.item.count({
    where: {
      type: "FOUND_ITEM",
    },
  });
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
