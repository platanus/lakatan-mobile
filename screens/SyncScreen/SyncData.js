const stepOneChanges = [
  {
    action: 'Add',
    model: 'User',
    attributes: {
      name: 'Claudio Prieto',
      email: 'claudio@uc.cl',
    },
  },
  {
    action: 'Add',
    model: 'User',
    attributes: {
      id: 2,
      name: 'Francisca Hohlberg',
      email: 'francisca@uc.cl',
    },
  },
  {
    action: 'Add',
    model: 'Team',
    attributes: {
      name: 'Visibilidad',
      purpose: '',
      slack_id: 'C01CJFU7L3X',
    },
  },
  {
    action: 'Delete',
    model: 'Team',
    attributes: {
      id: 5,
      name: 'Entrevista',
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
        name: 'Claudio Prieto',
        email: 'claudio@uc.cl',
      },
      team: {
        name: 'Visibilidad',
        slack_id: 'C01CJFU7L3X' },
    },
  },
  {
    action: 'Add',
    model: 'Member',
    attributes: {
      user: {
        name: 'Francisca Hohlberg',
        email: 'francisca@uc.cl',
      },
      team: {
        name: 'Visibilidad',
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
        name: 'Felipe Apablaza',
        email: 'fapablaza@uc.cl',
      },
      team: {
        id: 24,
        name: 'General',
        slack_id: 'C01CESCMCP8',
      },
    },
  },
];

export { stepOneChanges, stepTwoChanges };
