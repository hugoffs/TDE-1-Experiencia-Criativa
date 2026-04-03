import express from "express";
import { getJogos, deleteJogo, addJogos, updateJogo } from "../controler/controler_jogos.js";

const router = express.Router();
router.get("/", getJogos);
router.delete("/:id", deleteJogo);
router.post("/", addJogos);
router.put("/:id", updateJogo);

export default router;

