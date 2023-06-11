import express from 'express';
import PersonajesController from './controllers/personajesController.js';
import KartsController from './controllers/kartsController.js';
import PersonajeTieneTrabajoController from './controllers/personajeTieneTrabajoController.js';
import PersonajeHabitaReinoController from './controllers/personajeHabitaReinoController.js'; 
import TrabajosController from './controllers/trabajosController.js'; 
import ReinosController from './controllers/reinosController.js'; 
import DiplomaciasController from './controllers/diplomaciasController.js'; 
import DefensasController from './controllers/defensasController.js'; 
import ReinoTieneDefensaController from './controllers/reinoTieneDefensaController.js'; 
import Endpoints from './endpoints.js';
import morgan from 'morgan';

const ENV = process.env;
const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));

//Routes para personajes
app.get('/api/personajes', PersonajesController.getPersonajes)
app.get('/api/personajes/:id', PersonajesController.getPersonajeById)
app.post('/api/personajes', PersonajesController.createPersonaje)
app.put('/api/personajes/:id', PersonajesController.updatePersonaje)
app.delete('/api/personajes/:id', PersonajesController.deletePersonaje)

//Routes para tabla karts
app.get('/api/karts', KartsController.getKarts)
app.get('/api/karts/:id', KartsController.getKartById)
app.post('/api/karts', KartsController.createKart)
app.put('/api/karts/:id', KartsController.updateKart)
app.delete('/api/karts/:id', KartsController.deleteKart)

//Routes para tabla personaje_tiene_trabajo
app.get('/api/personaje_tiene_trabajo', PersonajeTieneTrabajoController.getTrabajosTiene)
app.get('/api/personaje_tiene_trabajo/:id_trabajo/:id_personaje', PersonajeTieneTrabajoController.getTrabajoByIdTiene)
app.post('/api/personaje_tiene_trabajo', PersonajeTieneTrabajoController.createTrabajoTiene)
app.put('/api/personaje_tiene_trabajo/:id_trabajo/:id_personaje', PersonajeTieneTrabajoController.updateTrabajoTiene);
app.delete('/api/personaje_tiene_trabajo/:id_trabajo/:id_personaje', PersonajeTieneTrabajoController.deleteTrabajoTiene);


//Routes para tabla personaje_habita_reino
app.get('/api/personaje_habita_reino', PersonajeHabitaReinoController.getHabita)
app.get('/api/personaje_habita_reino/:id_personaje/:id_reino', PersonajeHabitaReinoController.getHabitaById);
app.post('/api/personaje_habita_reino', PersonajeHabitaReinoController.createHabita);
app.put('/api/personaje_habita_reino/:id_personaje/:id_reino', PersonajeHabitaReinoController.updateHabita);
app.delete('/api/personaje_habita_reino/:id_personaje/:id_reino', PersonajeHabitaReinoController.deleteHabita);


//endpoints(Routes) para tabla trabajos
app.get('/api/trabajos', TrabajosController.getTrabajos)
app.get('/api/trabajos/:id', TrabajosController.getTrabajoById)
app.post('/api/trabajos', TrabajosController.createTrabajo)
app.put('/api/trabajos/:id', TrabajosController.updateTrabajo)
app.delete('/api/trabajos/:id', TrabajosController.deleteTrabajo)

//Routes para tabla reinos
app.get('/api/reinos', ReinosController.getReinos)
app.get('/api/reinos/:id', ReinosController.getReinoById)
app.post('/api/reinos', ReinosController.createReino)
app.put('/api/reinos/:id', ReinosController.updateReino)
app.delete('/api/reinos/:id', ReinosController.deleteReino)

//Routes para tabla diplomacias
app.get('/api/diplomacias', DiplomaciasController.getDiplomacias);
app.get('/api/diplomacias/:id_reino1/:id_reino2', DiplomaciasController.getDiplomaciaById);
app.post('/api/diplomacias', DiplomaciasController.createDiplomacia);
app.put('/api/diplomacias/:id_reino1/:id_reino2', DiplomaciasController.updateDiplomacia);
app.delete('/api/diplomacias/:id_reino1/:id_reino2', DiplomaciasController.deleteDiplomacia);

//Routes para tabla defensas
app.get('/api/defensas', DefensasController.getDefensas);
app.get('/api/defensas/:id', DefensasController.getDefensaById);
app.post('/api/defensas', DefensasController.createDefensa);
app.put('/api/defensas/:id', DefensasController.updateDefensa);
app.delete('/api/defensas/:id', DefensasController.deleteDefensa);

//Routes para tabla reino_tiene_defensa
app.get('/api/reino_tiene_defensa', ReinoTieneDefensaController.getDefensasTiene);
app.get('/api/reino_tiene_defensa/:id_reino/:id_defensa', ReinoTieneDefensaController.getDefensaByIdTiene);
app.post('/api/reino_tiene_defensa', ReinoTieneDefensaController.createDefensaTiene);
app.put('/api/reino_tiene_defensa/:id_reino/:id_defensa', ReinoTieneDefensaController.updateDefensaTiene);
app.delete('/api/reino_tiene_defensa/:id_reino/:id_defensa', ReinoTieneDefensaController.deleteDefensaTiene);

//Endpoints
app.get('/api/top5personajesConMasFuerza', Endpoints.getTop5PersonajesConMasFuerza);
app.get('/api/personajeConMasKarts',  Endpoints.getPersonajeConMasKarts);
app.get('/api/cantidadHabitantes/:id',  Endpoints.getCantidadHabitantes);
app.get('/api/gobernante/:id?',  Endpoints.getGobernante);
//==========================================================//
app.get('/', (req, res) => {
    res.json({ message: 'Hello World!!' });
})
//==========================================================//

// 404 not found route
app.use((_, res) => {
    res.status(404).json({ message: 'Not found Crack!' });
})

//Init server
app.listen(ENV.API_PORT, () => {
    console.log(`Server running on port ${ENV.API_PORT}`);
})