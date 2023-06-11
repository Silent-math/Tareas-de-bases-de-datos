import prisma from '../prismaClient.js';

const PersonajeHabitaReinoController = {
  async getHabita(req, res) {
    try {
      const habita = await prisma.personaje_habita_reino.findMany();
      res.json(habita);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getHabitaById(req, res) {
    try {
      const { id_personaje, id_reino } = req.params;
      const habita = await prisma.personaje_habita_reino.findUnique({
        where: { 
          id_personaje_id_reino: {
            id_personaje: Number(id_personaje),
            id_reino: Number(id_reino),
          },
        },
      });
      if (habita) {
        res.json(habita);
      } else {
        res.status(404).json({ message: 'Personaje_habita_reino not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createHabita(req, res) {
    try {
      const habita = await prisma.personaje_habita_reino.create({
        data: req.body,
      });
      res.status(201).json(habita);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateHabita(req, res) {
    try {
      const { id_personaje, id_reino } = req.params;
      const habita = await prisma.personaje_habita_reino.update({
        where: { 
          id_personaje_id_reino: {
            id_personaje: Number(id_personaje),
            id_reino: Number(id_reino),
          },
        },
        data: req.body,
      });
      if (habita) {
        res.json(habita);
      } else {
        res.status(404).json({ message: 'Habita not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async deleteHabita(req, res) {
    try {
      const { id_personaje, id_reino } = req.params;
      const habita = await prisma.personaje_habita_reino.delete({
        where: { 
          id_personaje_id_reino: {
            id_personaje: Number(id_personaje),
            id_reino: Number(id_reino),
          },
        },
      });
      res.json(habita);
    } catch (error) {
      if (error.code === 'P2014') {
        res.status(400).json({ error: 'Cannot delete Personaje_habita_reino with associated relations' });
      } else {
        res.status(500).json({ error: error.message });
      }
    }
  },
};

export default PersonajeHabitaReinoController;