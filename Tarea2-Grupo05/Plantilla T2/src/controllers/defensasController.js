import prisma from '../prismaClient.js';

const DefensasController = {

  async getDefensas(req, res) {
    try {
      const defensas = await prisma.defensas.findMany();
      res.json(defensas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getDefensaById(req, res) {
    try {
      const { id } = req.params;
      const defensa = await prisma.defensas.findUnique({
        where: { id: Number(id) },
      });
      if (defensa) {
        res.json(defensa);
      } else {
        res.status(404).json({ message: 'Defensa not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createDefensa(req, res) {
    try {
      const defensa = await prisma.defensas.create({
        data: req.body,
      });
      res.status(201).json(defensa);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateDefensa(req, res) {
    try {
      const { id } = req.params;
      const defensa = await prisma.defensas.update({
        where: { id: Number(id) },
        data: req.body,
      });
      if (defensa) {
        res.json(defensa);
      } else {
        res.status(404).json({ message: 'Defensa not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async deleteDefensa(req, res) {
    try {
      const { id } = req.params;
      const defensa = await prisma.defensas.delete({
        where: { id: Number(id) },
      });
      res.json(defensa);
    } catch (error) {
      if (error.code === 'P2014') {
        res.status(400).json({ error: 'Cannot delete Defensa with associated relations' });
      } else {
        res.status(500).json({ error: error.message });
      }
    }
  },
};

export default DefensasController;