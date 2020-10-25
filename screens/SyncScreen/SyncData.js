const syncData1 = [
  {
    action: 'Add',
    model: 'User',
    atributtes: {
      name: 'Ejemplo',
      email: 'ejemplo@ejemplo.com',
    },
  },
  {
    action: 'Delete',
    model: 'User',
    atributtes: {
      id: 1,
      name: 'Ejemplo1',
      email: 'ejemplo1@ejemplo.com',
    },
  },
  {
    action: 'Add',
    model: 'Team',
    atributtes: {
      name: 'EjemploEquipo',
      purpose: 'EjemploPropuesta',
      slack_id: 1,
    },
  },
];

const syncData2 = [
  {
    action: 'Add',
    model: 'Member',
    atributtes: {
      user: { user_id: undefined, user_name: 'Ejemplo Ejemplo', email: 'ejemplo@ejemplo.com' },
      team: { team_id: undefined, team_name: 'EjemploEquipo', slack_id: 1 },
    },
  },
  {
    action: 'Delete',
    model: 'Member',
    atributtes: {
      id: 1,
      user: { user_id: 1, user_name: 'Diego Andai' },
      team: { team_id: 1, team_name: 'Visibilidad' },
    },
  },
];

export { syncData1, syncData2 };
