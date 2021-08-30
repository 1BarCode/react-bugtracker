import express from "express";
import {
  //   getProjects,
  //   getOneProject,
  createProject,
  //   updateProject,
} from "../controllers/project.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// router.get("/", auth, getProjects);
// router.get("/:id", auth, getOneProject);
router.post("/", auth, createProject);
// router.patch("/:id", auth, updateProjects);
// router.delete("/:id", auth, deleteProject);

export default router;
