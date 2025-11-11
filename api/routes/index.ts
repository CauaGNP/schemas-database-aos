import account from "./accountRouter.js";
import auth from "./authenticationRouter.js";
import category from "./categoryRouter.js";
import financialGoal from "./financialGoalRouter.js";
import monthlyBudget from "./monthlyBudgetRoutes.js";
import transaction from "./transactionRouter.js";
import user from "./userRoutes.js";

export default {
  user,
  account,
  financialGoal,
  category,
  transaction,
  monthlyBudget,
  auth,
};
