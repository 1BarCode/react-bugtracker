import mongoose from "mongoose";
import Project from "../models/project.js";
import User from "../models/user.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find()
      .populate("projectManager")
      .populate("developers")
      .exec();

    res.status(202).json(projects);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getOneProject = async (req, res) => {
  try {
    const { id: _id } = req.params;

    const respProject = await Project.findById(_id)
      .populate("tickets")
      .populate("developers")
      .populate("projectManager")
      .exec();

    res.json(respProject);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createProject = async (req, res) => {
  const project = req.body;

  const newProject = new Project({
    ...project,
    creator: req.userId,
    projectManager: req.userId,
  });

  try {
    const resProject = await newProject.save();

    const user = await User.findById(req.userId);
    user.projects.push(resProject);
    await user.save();

    res.status(201).json(resProject);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateProject = async (req, res) => {
  const { id: _id } = req.params;
  const project = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).assignedDevelopers("No Project with that id");
  }

  try {
    const oldProject = await Project.findById(_id);
    oldProject.title = project.title;
    oldProject.description = project.description;
    oldProject.status = project.status;
    oldProject.projectManager = project.projectManager;

    const updatedProject = await oldProject.save();

    res.status(202).json(updatedProject);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
