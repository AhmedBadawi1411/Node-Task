const courseService = require("../services/course.service");

class CourseController {
  async createCourse(req, res) {
    const operationResult = await courseService.createCourse(req.body);
    res.status(operationResult.code).send(operationResult.data);
  }

  async updateCourse(req, res) {
    const operationResult = await courseService.updateCourse(req.body);
    res.status(operationResult.code).send(operationResult.data);
  }

  async deleteCourse(req, res) {
    const operationResult = await courseService.deleteCourse(req.params.id);
    res.status(operationResult.code).send(operationResult.data);
  }

  async getCourseById(req, res) {
    const operationResult = await courseService.getCourseById(req.params.id);
    res.status(operationResult.code).send(operationResult.data);
  }

  async getAllCourses(req, res) {
    const operationResult = await courseService.getAllCourses();
    res.status(operationResult.code).send(operationResult.data);
  }
}

module.exports = new CourseController();
