const actionTypeTextSetter = (step, item) => {
  switch (step) {
  case 'one':
    switch (item.model) {
    case 'User':
      switch (item.action) {
      case 'Add':
        return 'Nuevo usuario';
      case 'Delete':
        return 'Usuario eliminado';
      default:
        return 'Error Acción Usuario Paso 1';
      }
    case 'Team':
      switch (item.action) {
      case 'Add':
        return 'Nuevo equipo';
      case 'Delete':
        return 'Equipo eliminado';
      default:
        return 'Error Acción Equipo Paso 1';
      }
    default:
      return 'Error Modelo Paso 1';
    }

  case 'two':
    switch (item.action) {
    case 'Add':
      return 'Nuevo Miembro';
    case 'Delete':
      return 'Miembro Eliminado';
    default:
      return 'Error Acción Paso 2';
    }

  default:
    return 'Error';
  }
};

const actionNameTextSetter = (step, item) => {
  switch (step) {
  case 'one':
    return item.attributes.name;
  case 'two':
    switch (item.action) {
    case 'Add':
      return `${item.attributes.user.name} se ha unido a ${item.attributes.team.name}`;
    case 'Delete':
      return `${item.attributes.user.name} ha dejado ${item.attributes.team.name}`;
    default:
      return 'Error Acción Paso 2';
    }
  default:
    return 'Error';
  }
};

export { actionTypeTextSetter, actionNameTextSetter };
