import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import { claimServices } from "./claim.service";

const createClaim: RequestHandler = catchAsync(async (req, res) => {
  const user = req.user;
  const result = await claimServices.createClaimIntoDB(user, req.body);
  res.status(201).json({
    success: true,
    statusCode: 201,
    message: "Claim created successfully",
    data: result,
  });
});

const getAllClaims: RequestHandler = catchAsync(async (req, res) => {
  const result = await claimServices.getAllClaimsFromDB();
  res.status(201).json({
    success: true,
    statusCode: 200,
    message: "Claims retrieved successfully",
    data: result,
  });
});

const updateClaimStatus: RequestHandler = catchAsync(async (req, res) => {
  const { claimId } = req.params;
  const { status } = req.body;
  const result = await claimServices.updateClaimStatus(claimId, status);
  res.status(201).json({
    success: true,
    statusCode: 200,
    message: "Claim updated successfully",
    data: result,
  });
});

const getMyClaimItems: RequestHandler = catchAsync(async (req, res) => {
  const result = await claimServices.getMyClaimItemsFromDB(req.user);
  res.status(201).json({
    success: true,
    statusCode: 200,
    message: "My claim item retrieved successfully!",
    data: result,
  });
});

export const claimController = {
  createClaim,
  getAllClaims,
  updateClaimStatus,
  getMyClaimItems,
};
