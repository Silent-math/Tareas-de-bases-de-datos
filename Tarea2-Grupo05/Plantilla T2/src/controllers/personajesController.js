import prisma from '../prismaClient.js';

const PersonajesController = {

    async getPersonajes(req, res) {
        try {
            const personajes = await prisma.personajes.findMany();
            res.json(personajes);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getPersonajeById(req, res) {
        try {
            const { id } = req.params;
            const personaje = await prisma.personajes.findUnique({ where: { id: Number(id) }});
            if (personaje) {
                res.json(personaje);
            } else {
                res.status(404).json({ message: 'Personaje not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async createPersonaje(req, res) {
        try {
            const personaje = await prisma.personajes.create({ data: req.body });
            res.status(201).json(personaje);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async updatePersonaje(req, res) {
        try {
            const { id } = req.params;
            const personaje = await prisma.personajes.update({
                where: { id: Number(id) },
                data: req.body,
            });
            if (personaje) {
                res.json(personaje);
            } else {
                res.status(404).json({ message: 'Personaje not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async deletePersonaje(req, res) {
        try {
          const { id } = req.params;
          const personaje = await prisma.personajes.delete({
            where: { id: Number(id) },
          });
          res.json(personaje);
        } catch (error) {
            if (error.code === 'P2014') {
                res.status(400).json({ error: 'Cannot delete Diplomacia with associated relations' });
          } else {
            res.status(500).json({ error: error.message });
          }
        }
      },
}
export default PersonajesController;
