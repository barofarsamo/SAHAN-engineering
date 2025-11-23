
import type { Discipline, Lesson } from './types';
import { civilEngineeringDiscipline } from './disciplines/civil';
import { aerospaceEngineeringDiscipline } from './disciplines/aerospace';
import { mechanicalEngineeringDiscipline } from './disciplines/mechanical';
import { electricalEngineeringDiscipline } from './disciplines/electrical';
import { computerEngineeringDiscipline } from './disciplines/computer';

export const disciplines: Discipline[] = [
  civilEngineeringDiscipline,
  aerospaceEngineeringDiscipline,
  mechanicalEngineeringDiscipline,
  electricalEngineeringDiscipline,
  computerEngineeringDiscipline
];
