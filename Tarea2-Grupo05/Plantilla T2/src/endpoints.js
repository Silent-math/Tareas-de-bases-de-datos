import prisma from './prismaClient.js';

const endpoints = {
  async getTop5PersonajesConMasFuerza(req, res) {
    try {
      const personajes = await prisma.personajes.findMany({
        orderBy: { fuerza: 'desc' },
        take: 5,
      });
      res.json(personajes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getPersonajeConMasKarts(req, res) {
    try {
      const personajes = await prisma.personajes.findMany({
        include: {
          karts: true,
        },
      });
  
      const OrdenarPersonajes = personajes.sort((a, b) => b.karts.length - a.karts.length);
      const [personajeConMasKarts] = OrdenarPersonajes;
  
      if (personajeConMasKarts) {
        res.json({
          nombre: personajeConMasKarts.nombre,
          cantidad_karts: personajeConMasKarts.karts.length,
        });
      } else {
        res.status(404).json({ message: 'No personaje found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getCantidadHabitantes(req, res) {
    try {
      const { id } = req.params;
      const habitantes = await prisma.personaje_habita_reino.count({
        where: { id_reino: Number(id) },
      });
      res.json({ cantidad_habitantes: habitantes });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getGobernante(req, res) {
    try {
      const { id } = req.params;
      const gobernantes = id
        ? await prisma.personaje_habita_reino.findMany({
            where: { id_reino: Number(id), es_gobernante: true },
            include: { personajes: true },
          })
        : await prisma.personaje_habita_reino.findMany({
            where: { es_gobernante: true },
            include: { personajes: true },
          });
  
      const response = gobernantes.map(gobernante => ({
        id_reino: gobernante.id_reino,
        gobernante: gobernante.personajes.nombre,
      }));
  
      res.json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  
};

export default endpoints;