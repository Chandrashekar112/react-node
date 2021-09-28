import { Users, Address } from "../modules";
import { apiError, apiSuccess } from "../utilits/Errors";

export const address = {};

address.getList = async (req, res) => {
  try {
    const result = await Address.find({});
    console.log(result);
    return apiSuccess("Records Found", result, res);
  } catch (err) {
    apiError(res);
  }
};

address.update = async (req, res) => {
  const userId = req.params.id;
  try {
    await Address.updateOne({ userId: userId }, { $set: req.body });
    return apiSuccess("Successfully updated address!", "", res);
  } catch (err) {
    apiError(res);
  }
};
