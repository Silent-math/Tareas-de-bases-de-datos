import prisma from '../prismaClient.js';

const ReinosController = {

  async getReinos(req, res) {
    try {
      const reinos = await prisma.reinos.findMany();
      res.json(reinos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getReinoById(req, res) {
    try {
      const { id } = req.params;
      const reino = await prisma.reinos.findUnique({
        where: { id: Number(id) },
      });
      if (reino) {
        res.json(reino);
      } else {
        res.status(404).json({ message: 'Reino not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createReino(req, res) {
    try {
      const reino = await prisma.reinos.create({
        data: req.body,
      });
      res.status(201).json(reino);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateReino(req, res) {
    try {
      const { id } = req.params;
      const reino = await prisma.reinos.update({
        where: { id: Number(id) },
        data: req.body,
      });
      if (reino) {
        res.json(reino);
      } else {
        res.status(404).json({ message: 'Reino not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async deleteReino(req, res) {
    try {
      const { id } = req.params;
      const reino = await prisma.reinos.delete({
        where: { id: Number(id) },
      });
      res.json(reino);
    } catch (error) {
      if (error.code === 'P2014') {
        res.status(400).json({ error: 'Cannot delete Diplomacia with associated relations' });
      } else {
        res.status(500).json({ error: error.message });
      }
    }
  },
};

export default ReinosController;