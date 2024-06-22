import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import { metaService } from "./meta.service";

const fetchDashboardMetaData: RequestHandler = catchAsync(async (req, res) => {
  const result = await metaService.fetchDashboardMetaDataFromDB();
  res.status(201).json({
    success: true,
    message: "Meta data retrieved successfully",
    data: result,
  });
});

export const MetaController = {
  fetchDashboardMetaData,
};
