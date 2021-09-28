import express from "express";
import { address } from "../controllers/AddressController";
const router = express.Router();

router.get("/", address.getList);
router.put("/:id", address.update);
// router.put("/:id", address.update);
// router.delete("/:id", address.delete);

export { router as AddresRouter };
