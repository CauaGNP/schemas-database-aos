import type { Request, Response } from "express";
import { getAllFinalcialGoalsService } from "../services/financialGoalService.js";

const getAllFinancialGoal = async (req: Request, res: Response) => {
    try {
        const financialGoalList = await getAllFinalcialGoalsService()

        res.status(200).send({
            message: "Request sucessfully",
            data: financialGoalList
        })
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: "Server Error",
            erro: error,
        });
    }
}
