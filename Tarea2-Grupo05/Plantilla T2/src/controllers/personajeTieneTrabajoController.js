import prisma from '../prismaClient.js';

const PersonajeTieneTrabajoController = {

  async getTrabajosTiene(req, res) {
    try {
      const trabajos = await prisma.personaje_tiene_trabajo.findMany();
      res.json(trabajos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getTrabajoByIdTiene(req, res) {
    try {
        const { id_trabajo, id_personaje } = req.params;
        const trabajo = await prisma.personaje_tiene_trabajo.findMany({
            where: { 
              id_trabajo: Number(id_trabajo),
              id_personaje: Number(id_personaje),
            },
        });
        if (trabajo.length > 0) {
            res.json(trabajo);
        } else {
            res.status(404).json({ message: 'Trabajo not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  },


  async createTrabajoTiene(req, res) {
    try {
      const trabajo = await prisma.personaje_tiene_trabajo.create({
        data: req.body,
      });
      res.status(201).json(trabajo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateTrabajoTiene(req, res) {
    try {
      const { id_personaje, id_trabajo } = req.params;
      const trabajo = await prisma.personaje_tiene_trabajo.update({
        where: { 
          id_trabajo_id_personaje: {
            id_trabajo: Number(id_trabajo),
            id_personaje: Number(id_personaje),
          },
        },
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

  async deleteTrabajoTiene(req, res) {
    try {
      const { id_personaje, id_trabajo } = req.params;
      const trabajo = await prisma.personaje_tiene_trabajo.delete({
        where: { 
          id_trabajo_id_personaje: {
            id_trabajo: Number(id_trabajo),
            id_personaje: Number(id_personaje),
          },
        },
      });
      res.json(trabajo);
    } catch (error) {
      if (error.code === 'P2014') {
        res.status(400).json({ error: 'Cannot delete Defensa with associated relations' });
      } else {
        res.status(500).json({ error: error.message });
      }
    }
  },
  
};

export default PersonajeTieneTrabajoController;