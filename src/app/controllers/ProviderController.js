import User from '../models/User';

class ProviderController {
  async index(req, res) {
    const providers = await User.findAll({ where: { provider: true } });

    return res.status(200).json(providers);
  }
}

export default new ProviderController();
