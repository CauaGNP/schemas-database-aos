import type { Request, Response } from "express";
import { createFinancialGoalService, deleteFinancialGoalService, getAllFinalcialGoalsService, getFinancialGoalByIdService, updateFinancialGoalByIdService } from "../services/financialGoalService.js";
import { financialGoalDTO } from "../dto/financialGoalDTO.js";

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

const getFinancialGoalById = async (req :Request, res: Response) => {
    try {
         const { financialGoalId } = req.params;

        if(!financialGoalId){
            return res.status(400).send({
                message: "Please insert financial goal id"
            })
        }

        const financialGoalData = await getFinancialGoalByIdService(financialGoalId);

        if(!financialGoalData){
            return res.status(404).send({
                message: "Financial Goal not found",
            })
        }

        res.status(200).send({
            message: "Request sucessfully, financialGoal found",
            data: financialGoalData
        })
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: "Server Error",
            erro: error,
        });
    }
}

const createFinancialGoal = async (req: Request, res: Response) => {
    try {
        const parsedData = financialGoalDTO.parse(req.body)

        const financialGoalData = await createFinancialGoalService(parsedData);

        res.status(201).send({
            message: "Request sucessfully, financial goal created",
            data: financialGoalData
        })
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: "Server Error",
            erro: error,
        });
    }
}

const updateFinancialGoalById = async (req: Request, res: Response) => {
    try {
        const { financialGoalId } = req.params;

        if(!financialGoalId){
            return res.status(400).send({
                message: "Please insert financial goal id"
            })
        }

        const verifyExistFinancialGoalData = await getFinancialGoalByIdService(financialGoalId);

        if(!verifyExistFinancialGoalData){
            return res.status(404).send({
                message: "Financial Goal not found",
            })
        }

        await updateFinancialGoalByIdService(financialGoalId, req.body);

        res.status(204).send()

    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: "Server Error",
            erro: error,
        });
    }
}

const deleteFinancialGoalById = async (req: Request, res: Response) => {
    try {
        const { financialGoalId } = req.params;

        if(!financialGoalId){
            return res.status(400).send({
                message: "Please insert financial goal id"
            })
        }

        const verifyExistFinancialGoalData = await getFinancialGoalByIdService(financialGoalId);

        if(!verifyExistFinancialGoalData){
            return res.status(404).send({
                message: "Financial Goal not found",
            })
        }

        await deleteFinancialGoalService(financialGoalId);

        res.status(200).send({
            message: "Request sucessfully, financial goal deleted"
        })
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: "Server Error",
            erro: error,
        });
    }
}

export {
    getAllFinancialGoal,
    getFinancialGoalById,
    createFinancialGoal,
    updateFinancialGoalById,
    deleteFinancialGoalById,
}