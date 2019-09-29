import Appointment from '../models/Appointment';
import User from '../models/User';

class ScheduleController {
  async index(req, res) {
    const checkProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });

    if (!checkProvider) {
      return res.status(401).json({ error: 'Not authorized' });
    }
  }
}

export default new ScheduleController();
