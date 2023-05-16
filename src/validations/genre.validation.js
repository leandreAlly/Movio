import Joi from "joi";

const genreSchema = Joi.object({
  name: Joi.string().min(5).max(50).required(),
});

const genreValidation = async (req, res, next) => {
  const { error } = genreSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({
      error: error.details[0].message.replace(/[^a-zA-Z0-9 ]/g, ""),
    });
  }
  next();
};

export default genreValidation;
