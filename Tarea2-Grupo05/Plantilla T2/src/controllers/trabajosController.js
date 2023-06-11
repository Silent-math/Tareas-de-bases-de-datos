import prisma from '../prismaClient.js';

const TrabajosController = {
  async getTrabajos(req, res) {
    try {
      const trabajos = await prisma.trabajos.findMany();
      res.json(trabajos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getTrabajoById(req, res) {
    try {
      const { id } = req.params;
      const trabajo = await prisma.trabajos.findUnique({
        where: { id: Number(id) },
      });
      if (trabajo) {
        res.json(trabajo);
      } else {
        res.status(404).json({ message: 'Trabajo not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createTrabajo(req, res) {
    try {
      const trabajo = await prisma.trabajos.create({
        data: req.body,
      });
      res.status(201).json(trabajo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateTrabajo(req, res) {
    try {
      const { id } = req.params;
      const trabajo = await prisma.trabajos.update({
        where: { id: Number(id) },
        data: req.body,
      });
      if (trabajo) {
        res.json(trabajo);
      } else {
        res.status(404).json({ message: 'Trabajo not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async deleteTrabajo(req, res) {
    try {
      const { id } = req.params;
      const trabajo = await prisma.trabajos.delete({
        where: { id: Number(id) },
      });
      res.json(trabajo);
    } catch (error) {
      if (error.code === 'P2014') {
        res.status(400).json({ error: 'Cannot delete Diplomacia with associated relations' });
      } else {
        res.status(500).json({ error: error.message });
      }
    }
  },
};

export default TrabajosController;