exports.getPosts = (req, res, next) => {
  res.status(200).json([
    {
      id: "1",
      title: "First Post",
      description: "This is the first post!",
    },
    {
      id: "2",
      title: "Second Post",
      description: "This is the second post!",
    },
  ]);
};

exports.createPost = (req, res, next) => {
  res.status(201).json([
    {
      message: "Post is created successfully!",
      data: req.body,
    },
  ]);
};
