const stepOneChanges = [
  {
    action: 'Add',
    model: 'User',
    attributes: {
      name: 'cjprieto',
      email: 'cjprieto@uc.cl',
    },
  },
  {
    action: 'Delete',
    model: 'User',
    attributes: {
      id: 2,
      name: 'francisca hohlberg',
      email: 'fran_prueba@uc.cl',
    },
  },
  {
    action: 'Delete',
    model: 'User',
    attributes: {
      id: 6,
      name: 'Ejemplo',
      email: 'ej@ejemplo.com',
    },
  },
  {
    action: 'Add',
    model: 'Team',
    attributes: {
      name: 'random',
      purpose: '',
      slack_id: 'C01CJFU7L3X',
    },
  },
  {
    action: 'Delete',
    model: 'Team',
    attributes: {
      id: 5,
      name: 'EjemploEquipo',
      purpose: 'EjemploPropuesta',
    },
  },
];

const stepTwoChanges = [
  {
    action: 'Add',
    model: 'Member',
    attributes: {
      user: {
        name: 'cjprieto',
        email: 'cjprieto@uc.cl',
      },
      team: {
        name: 'random',
        slack_id: 'C01CJFU7L3X' },
    },
  },
  {
    action: 'Add',
    model: 'Member',
    attributes: {
      user: {
        name: 'FRANCISCA HOHLBERG RODRIGUEZ',
        email: 'fhohlberg@uc.cl',
      },
      team: {
        name: 'random',
        slack_id: 'C01CJFU7L3X',
      },
    },
  },
  {
    action: 'Add',
    model: 'Member',
    attributes: {
      user: {
        name: 'JAVIER TRAMON HIDALGO',
        email: 'jotramon@uc.cl',
      },
      team: {
        name: 'random',
        slack_id: 'C01CJFU7L3X',
      },
    },
  },
  {
    action: 'Delete',
    model: 'Member',
    attributes: {
      id: 45,
      user: {
        id: 16,
        name: 'Ignacio Madariaga',
        email: 'ignacio@uc.cl',
      },
      team: {
        id: 24,
        name: 'general',
        slack_id: 'C01CESCMCP8',
      },
    },
  },
];

export { stepOneChanges, stepTwoChanges };
