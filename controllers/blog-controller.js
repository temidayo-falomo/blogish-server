import Blog from "../models/Blog";

export const getAllBlogs = async (req, res) => {
  let blogs;

  try {
    blogs = await Blog.find();
  } catch (error) {
    console.log(error);
  }

  if (!blogs) {
    return res.status(404).json({ message: "No Blog Found" });
  }

  return res.status(200).json({ blogs: blogs });
};

export const addBlog = async (req, res) => {
  let blog;

  try {
    blog = new Blog({
      title: req.body.title,
      image: req.body.image,
      name: req.body.name,
      article: req.body.article,
      category: req.body.category,
    });

    await blog.save();
  } catch (error) {
    console.log(error);
  }

  if (!blog) {
    return res.status(404).json({ message: "Couldnt add Blog Post!" });
  }
  return res.status(200).json({ blog: blog });
};

export const getById = async (req, res) => {
  const blogId = req.params.id;

  let blog;

  try {
    blog = await Blog.findById(blogId);
  } catch (error) {
    console.log(error);
  }

  if (!blog) {
    res.status(404).json({ message: "Error" });
  }

  return res.status(200).json({blog });
};


