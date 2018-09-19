const User = require('../models').User;
const Follow = require('../models').Follow;
const Sequelize = require('sequelize')

module.exports = {
  create(req, res) {
    return User
      .create({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
      })
      .then(user => res.status(201).send())
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return User
      .all()
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return User
      .findById(req.params.userId, {
        attributes: {
          include: [[Sequelize.fn('COUNT', Sequelize.col('followers.id')), 'no_followers']]
        },
        include: [{
          model: Follow,
          as: 'followers',
        }],
        group: ['User.id', 'followers.id']
      })
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return res.status(200).send(user);
      })
      .catch(error => {console.log(error); res.status(400).send(error)});
  },
  update(req, res) {
    // only allow user to update his own profile
    if (req.user.id != req.params.userId) {
      return res.status(401).send({
        message: 'You do not have permission to do this',
      });
    }
    return User
    .findById(req.params.userId)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: 'User Not Found',
        });
      }
      return user
        .update({
          email: req.body.email || user.email,
          username: req.body.username || user.username,
          password: req.body.password || user.password,
          image_url: req.body.image_url || user.image_url,
        })
        .then(() => res.status(200).send(user))
        .catch((error) => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
  },
  destroy(req, res) {
    return User
      .findById(req.params.userId)
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return user
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
