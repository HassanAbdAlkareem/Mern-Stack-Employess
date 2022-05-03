const router = require("express").Router();
const Employee = require("../models/Employee");
const verfiy = require("../middleware/verfiyToken");
const upload = require("../middleware/uploadImage");

router.post("/", [verfiy, upload.single("imageEmployee")], async (req, res) => {
  try {
    const employee = new Employee({
      imageEmployee: req?.file?.originalname,
      ...req.body,
    });
    await employee.save();
    res.status(200).send(employee);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// get all
router.get("/", verfiy, async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).send(employees);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/:id", verfiy, async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    await employee.save();
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.put(
  "/:id",
  [verfiy, upload.single("imageEmployee")],
  async (req, res) => {
    try {
      const employee = await Employee.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            imageEmployee: req?.file?.originalname,
            ...req.body,
          },
        },
        { new: true }
      );
      res.status(200).send(employee);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
);
//
router.delete("/:id", verfiy, async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.status(200).send("emplory has been deleted ... ");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//
module.exports = router;
