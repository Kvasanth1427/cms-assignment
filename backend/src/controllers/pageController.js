import Page from "../models/Page.js";

export const createPage = async (req, res) => {
  try {
    const { title, slug, content, status } = req.body;

    const page = await Page.create({
      title,
      slug,
      content,
      status,
      createdBy: req.admin.id,
    });

    return res.status(201).json({
      success: true,
      message: "Page created successfully",
      page,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getAllPages = async (req, res) => {
  try {
    const pages = await Page.find().populate("createdBy", "name email");

    return res.status(200).json({
      success: true,
      count: pages.length,
      pages,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getPageById = async (req, res) => {
  try {
    const page = await Page.findById(req.params.id).populate(
      "createdBy",
      "name email"
    );

    if (!page) {
      return res.status(404).json({
        success: false,
        message: "Page not found",
      });
    }

    return res.status(200).json({
      success: true,
      page,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const updatePage = async (req, res) => {
  try {
    const { title, slug, content, status } = req.body;

    const page = await Page.findByIdAndUpdate(
      req.params.id,
      {
        title,
        slug,
        content,
        status,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!page) {
      return res.status(404).json({
        success: false,
        message: "Page not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Page updated successfully",
      page,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const deletePage = async (req, res) => {
  try {
    const page = await Page.findByIdAndDelete(req.params.id);

    if (!page) {
      return res.status(404).json({
        success: false,
        message: "Page not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Page deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};