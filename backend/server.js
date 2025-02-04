const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const multer = require("multer");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;
const BLOGS_FILE = path.join(__dirname, "blogs.json");

// Enable CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve uploaded images statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, "uploads");
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// GET all blogs
app.get("/blogs", (req, res) => {
  const blogs = JSON.parse(fs.readFileSync(BLOGS_FILE, "utf8"));
  res.json(blogs);
});

// POST a new blog with an image
app.post("/blogs", upload.single("image"), (req, res) => {
  const { title, content, author, date } = req.body;
  const blogs = JSON.parse(fs.readFileSync(BLOGS_FILE, "utf8"));

  const newBlog = {
    id: blogs.length ? blogs[blogs.length - 1].id + 1 : 1,
    title,
    content,
    author,
    date,
    image: req.file ? `/uploads/${req.file.filename}` : null,
  };

  blogs.push(newBlog);
  fs.writeFileSync(BLOGS_FILE, JSON.stringify(blogs, null, 2));
  res.json(newBlog);
});

// PUT (Update) a blog
app.put("/blogs/:id", upload.single("image"), (req, res) => {
  const { id } = req.params;
  const { title, content, author, date } = req.body;
  let blogs = JSON.parse(fs.readFileSync(BLOGS_FILE, "utf8"));

  const index = blogs.findIndex((blog) => blog.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ error: "Blog not found" });
  }

  blogs[index] = {
    id: parseInt(id),
    title,
    content,
    author,
    date,
    image: req.file ? `/uploads/${req.file.filename}` : blogs[index].image,
  };

  fs.writeFileSync(BLOGS_FILE, JSON.stringify(blogs, null, 2));
  res.json(blogs[index]);
});

// DELETE a blog
app.delete("/blogs/:id", (req, res) => {
  const { id } = req.params;
  let blogs = JSON.parse(fs.readFileSync(BLOGS_FILE, "utf8"));
  const index = blogs.findIndex((blog) => blog.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ error: "Blog not found" });
  }

  const deletedBlog = blogs.splice(index, 1)[0];

  if (deletedBlog.image) {
    const filePath = path.join(__dirname, deletedBlog.image);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }

  fs.writeFileSync(BLOGS_FILE, JSON.stringify(blogs, null, 2));
  res.json(deletedBlog);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
