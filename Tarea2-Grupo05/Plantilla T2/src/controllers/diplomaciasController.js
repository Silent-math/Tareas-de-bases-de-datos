import prisma from '../prismaClient.js';

const DiplomaciasController = {

  async getDiplomacias(req, res) {
    try {
      const diplomacias = await prisma.diplomacias.findMany();
      res.json(diplomacias);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getDiplomaciaById(req, res) {
    try {
      const { id_reino1, id_reino2 } = req.params;
      const diplomacia = await prisma.diplomacias.findMany({
        where: { 
          id_reino_1: Number(id_reino1),
          id_reino_2: Number(id_reino2),
        },
      });
      if (diplomacia.length > 0) {
        res.json(diplomacia);
      } else {
        res.status(404).json({ message: 'Diplomacia not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async createDiplomacia(req, res) {
    try {
      const diplomacia = await prisma.diplomacias.create({
        data: req.body,
      });
      res.status(201).json(diplomacia);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateDiplomacia(req, res) {
    try {
      const { id_reino1, id_reino2 } = req.params;
      const diplomacia = await prisma.diplomacias.update({
        where: { 
          id_reino_1_id_reino_2: {
            id_reino_1: Number(id_reino1),
            id_reino_2: Number(id_reino2),
          },
        },
        data: req.body,
      });
      if (diplomacia) {
        res.json(diplomacia);
      } else {
        res.status(404).json({ message: 'Diplomacia not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async deleteDiplomacia(req, res) {
    try {
        const { id_reino1, id_reino2 } = req.params;
        const diplomacia = await prisma.diplomacias.delete({
            where: { 
                id_reino_1_id_reino_2: {
                    id_reino_1: Number(id_reino1),
                    id_reino_2: Number(id_reino2),
                },
            },
        });
        res.json(diplomacia);
    } catch (error) {
        if (error.code === 'P2014') {
            res.status(400).json({ error: 'Cannot delete Diplomacia with associated relations' });
        } else {
            res.status(500).json({ error: error.message });
        }
    }
},
};

export default DiplomaciasController;