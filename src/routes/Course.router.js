const router = require("express").Router();
const courseController = require("../controllers/Course.Controller");

router.post("/course", courseController.createCourse);
router.put("/course", courseController.updateCourse);
router.delete("/course/:id", courseController.deleteCourse);
router.get("/course/:id", courseController.getCourseById);
router.get("/course", courseController.getAllCourses);

module.exports = router;
