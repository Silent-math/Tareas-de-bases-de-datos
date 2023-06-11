import prisma from '../prismaClient.js';

const KartsController = {
    async getKarts(req, res) {
        try {
            const karts = await prisma.karts.findMany();
            res.json(karts);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getKartById(req, res) {
        try {
            const { id } = req.params;
            const kart = await prisma.karts.findUnique({ where: { id: Number(id) }});
            if (kart) {
                res.json(kart);
            } else {
                res.status(404).json({ message: 'Kart not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async createKart(req, res) {
        try {
            const kart = await prisma.karts.create({ data: req.body });
            res.status(201).json(kart);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async updateKart(req, res) {
        try {
            const { id } = req.params;
            const kart = await prisma.karts.update({
                where: { id: Number(id) },
                data: req.body,
            });
            if (kart) {
                res.json(kart);
            } else {
                res.status(404).json({ message: 'Kart not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async deleteKart(req, res) {
        try {
          const { id } = req.params;
          const kart = await prisma.karts.delete({
            where: { id: Number(id) },
          });
          res.json(kart);
        } catch (error) {
            if (error.code === 'P2014') {
                res.status(400).json({ error: 'Cannot delete Diplomacia with associated relations' });
          } else {
            res.status(500).json({ error: error.message });
          }
        }
      },
}

export default KartsController;