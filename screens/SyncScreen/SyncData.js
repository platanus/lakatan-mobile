const syncData1 = [
  { selected: true, title: 'Nuevo usuario', description: 'Diego Andai', key: '1' },
  { selected: true, title: 'Nuevo usuario', description: 'Andrés Matte', key: '2' },
  { selected: true, title: 'Usuario eliminado', description: 'Luis Fros', key: '3' },
  { selected: true, title: 'Nuevo equipo', description: 'Platanus', key: '4' },
  { selected: true, title: 'Equipo eliminado', description: 'Mobile', key: '5' },
];

const syncData2 = [
  { selected: true, title: 'Nuevo miembro', description: 'Diego pertenece a Platanus', key: '1' },
  { selected: true, title: 'Nuevo miembro', description: 'Diego pertenece a Backend', key: '2' },
  { selected: true, title: 'Nuevo miembro', description: 'Andres pertenece a Platanus', key: '3' },
  { selected: true, title: 'Nuevo miembro', description: 'Felipe pertenece a Frontend', key: '4' },
  { selected: true, title: 'Nuevo miembro', description: 'Javier pertenece a Platanus', key: '5' },
  { selected: true, title: 'Miembro eliminado', description: 'Claudio eliminado de Encargados', key: '6' },
];

const syncData3 = [
  { accion: 'agregar', modelo: 'User', atributos: { name: 'Diego Andai', email: 'diego@uc.cl' } },
  { accion: 'agregar', modelo: 'User', atributos: { name: 'Andrés Matte', email: 'andres@uc.cl' } },
  { accion: 'eliminar', modelo: 'User', atributos: { id: 1, name: 'Lionel Messi', email: 'lionel@uc.cl' } },
  { accion: 'agregar', modelo: 'Team', atributos: { slack_id: 1, name: 'Platanus', purpose: 'Desarrollo' } },
  { accion: 'eliminar', modelo: 'Team', atributos: { slack_id: 2, name: 'Mobile', purpose: 'Desarrollo mobile' } },
];

const syncData4 = [
  { accion: 'agregar', modelo: 'Member', atributos: { user: { user_name: 'Diego Andai', email: 'diego@uc.cl' }, team: { slack_id: 1, team_name: 'Platanus' } } },
  { accion: 'agregar', modelo: 'Member', atributos: { user: { user_name: 'Diego Andai', email: 'diego@uc.cl' }, team: { slack_id: 3, team_name: 'Backend' } } },
  { accion: 'agregar', modelo: 'Member', atributos: { user: { user_name: 'Andres Matte', email: 'andres@uc.cl' }, team: { slack_id: 1, team_name: 'Platanus' } } },
  { accion: 'agregar', modelo: 'Member', atributos: { user: { user_name: 'Felipe Apablaza', email: 'felipe@uc.cl' }, team: { slack_id: 4, team_name: 'Frontend' } } },
  { accion: 'agregar', modelo: 'Member', atributos: { user: { user_name: 'Javier Tramon', email: 'javier@uc.cl' }, team: { slack_id: 1, team_name: 'Platanus' } } },
  { accion: 'eliminar', modelo: 'Member', atributos: { user: { user_name: 'Claudio Prieto', email: 'claudio@uc.cl' }, team: { slack_id: 5, team_name: 'Encargados' } } },
];

export { syncData1, syncData2 };
