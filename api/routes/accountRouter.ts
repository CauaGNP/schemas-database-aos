import { Router } from "express";
import { createAccount, deleteAccountById, getAccountById, getAllAccounts, updateAccountById } from "../controllers/accountController.js";


const router = Router();

router.get("/", getAllAccounts);
router.get("/:financialGoalId", getAccountById);
router.post("/", createAccount);
router.put("/:financialGoalId", updateAccountById);
router.delete("/:financialGoalId", deleteAccountById);

export default router;