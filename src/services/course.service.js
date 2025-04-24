const Course = require("../models/Course");

class CourseServices {
  async createCourse(courseData) {
    const { title, description, image, price, startDate, endDate } = courseData;

    if (!title || !description || !image || !price) {
      return {
        code: 400,
        data: {
          msg: "Some data is missing title, description, image and price required",
        },
      };
    }

    if (
      typeof title != "string" ||
      typeof description != "string" ||
      typeof price != "number"
    ) {
      return { code: 400, data: { msg: "Some data types is invalid" } };
    }

    try {
      const course = new Course({
        title,
        description,
        image,
        price,
        startDate,
        endDate,
      });

      await course.save();
      return {
        code: 201,
        data: {
          id: course._id,
          title: course.title,
          description: course.description,
          image: course.image,
          price: course.price,
          createdAt: course.createdAt,
          updatedAt: course.updatedAt,
        },
      };
    } catch (error) {
      console.log(
        "An error ocuured will creating course \n course.service.js \n ================== ",
        error.message
      );
      return { code: 500, data: { msg: error.message } };
    }
  }

  async updateCourse(courseData) {
    if (!courseData.id)
      return { code: 400, data: { msg: "Course id is required" } };

    try {
      const updated = await Course.findByIdAndUpdate(courseData.id, courseData);
      if (updated)
        return { code: 200, data: { msg: "Course Updated successfuly" } };
      return { code: 404, data: { msg: "Course Not Found" } };
    } catch (error) {
      console.log(
        "An error ocuured will updating course \n course.service.js \n ================== ",
        error.message
      );
      return { code: 500, data: { msg: error.message } };
    }
  }

  async deleteCourse(courseID) {
    try {
      const updated = await Course.findByIdAndDelete(courseID);
      if (updated)
        return { code: 200, data: { msg: "Course Deleted successfuly" } };
      return { code: 404, data: { msg: "Course Not Found" } };
    } catch (error) {
      console.log(
        "An error ocuured will deleting course \n course.service.js \n ================== ",
        error.message
      );
      return { code: 500, data: { msg: error.message } };
    }
  }

  async getCourseById(courseID) {
    try {
      const course = await Course.findById(courseID);
      if (course) return { code: 200, data: course };
      return { code: 404, data: { msg: "Course Not Found" } };
    } catch (error) {
      console.log(
        "An error ocuured will deleting course \n course.service.js \n ================== ",
        error.message
      );
      return { code: 500, data: { msg: error.message } };
    }
  }

  async getAllCourses() {
    try {
      const courses = await Course.find();
      return { code: 200, data: courses };
    } catch (error) {
      console.log(
        "An error ocuured will deleting course \n course.service.js \n ================== ",
        error.message
      );
      return { code: 500, data: { msg: error.message } };
    }
  }
}

module.exports = new CourseServices();
