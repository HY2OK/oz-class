function getPost(req, res) {
  res.send('<div><h1>Post Title</h1><p>THis is a post</p></div>')
}

module.exports = { getPost }
