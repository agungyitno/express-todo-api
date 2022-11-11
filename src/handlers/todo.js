import todo from "../models/todo.js";

export default {
  get: async (req, res) => {
    await todo
      .findAll()
      .then((data) => {
        res.status(200);
        res.json({
          code: res.statusCode,
          status: "success",
          data: data,
        });
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  },

  getById: async (req, res) => {
    await todo
      .findByPk(req.params.id)
      .then((data) => {
        res.status(200);
        res.json({
          code: res.statusCode,
          status: "success",
          data: data,
        });
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  },

  create: async (req, res) => {
    await todo
      .create({ ...req.body })
      .then((data) => {
        res.status(201);
        res.json({
          code: res.statusCode,
          status: "success",
          data: data,
        });
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  },

  edit: async (req, res) => {
    await todo
      .update({ ...req.body }, { where: { id: req.params.id } })
      .then((data) => {
        res.status(200);
        res.json({
          code: 200,
          status: "success",
          data: data,
        });
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  },

  destroy: async (req, res) => {
    await todo
      .destroy({ where: { idz: req.params.id } })
      .then((data) => {
        res.status(204);
        res.send();
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  },
};
