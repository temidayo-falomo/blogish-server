"use strict";

var _express = _interopRequireDefault(require("express"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _cors = _interopRequireDefault(require("cors"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _blogRoutes = _interopRequireDefault(require("../routes/blog-routes.js"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
_dotenv.default.config();
const app = (0, _express.default)();
app.use(_express.default.json());
app.use((0, _cors.default)());
app.use("/api/blogs", _blogRoutes.default);
_mongoose.default
  .connect(
    "mongodb+srv://temidayo:x5dPc2tY1MCu3N5W@blogs-cluster.3vjq7.mongodb.net/blogish-proj?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(process.env.PORT || 5800);
  })
  .then(() => {
    console.log("Connected To Database.....");
  })
  .catch((err) => {
    console.log(err);
  });
