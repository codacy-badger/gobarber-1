import User from '../models/User';

class UserController {
  async store(req, res) {
    if (await User.findOne({ where: { email: req.body.email } })) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const { id, name, email, provider } = await User.create(req.body); // Geralmente os dados vem no body
    return res.json({
      id,
      name,
      email,
      provider,
    });
  }

  async update(req, res) {
    return res.json({ ok: true });
  }

  async index(req, res) {
    const user = await User.findOne({ where: { email: req.params.email } });
    if (!user) {
      return res.status(400).json({ error: 'User not exists' });
    }

    const { id, name, email, provider } = user;
    return res.json({
      id,
      name,
      email,
      provider,
    });
  }
}

export default new UserController();
