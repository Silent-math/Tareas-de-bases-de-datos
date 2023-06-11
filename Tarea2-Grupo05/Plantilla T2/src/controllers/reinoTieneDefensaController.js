import prisma from '../prismaClient.js';

const ReinoTieneDefensaController = {
  async getDefensasTiene(req, res) {
    try {
      const defensas = await prisma.reino_tiene_defensa.findMany();
      res.json(defensas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getDefensaByIdTiene(req, res) {
    try {
      const { id_reino, id_defensa } = req.params;
      const defensa = await prisma.reino_tiene_defensa.findUnique({
        where: { 
          id_reino_id_defensa: {
            id_reino: Number(id_reino),
            id_defensa: Number(id_defensa),
          },
        },
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

  async createDefensaTiene(req, res) {
    try {
      const defensa = await prisma.reino_tiene_defensa.create({
        data: req.body,
      });
      res.status(201).json(defensa);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateDefensaTiene(req, res) {
    try {
      const { id_reino, id_defensa } = req.params;
      const defensa = await prisma.reino_tiene_defensa.update({
        where: { 
          id_reino_id_defensa: {
            id_reino: Number(id_reino),
            id_defensa: Number(id_defensa),
          },
        },
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

  async deleteDefensaTiene(req, res) {
    try {
      const { id_reino, id_defensa } = req.params;
      const defensa = await prisma.reino_tiene_defensa.delete({
        where: { 
          id_reino_id_defensa: {
            id_reino: Number(id_reino),
            id_defensa: Number(id_defensa),
          },
        },
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

export default ReinoTieneDefensaController;