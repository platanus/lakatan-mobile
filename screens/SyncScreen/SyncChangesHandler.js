const syncChangesHandler = (stepOneData, stepTwoChanges, users = []) => {
  const selectedData = stepOneData.filter((item) => item.selected);
  let futureUsers = users.map(user => user.attributes.email);
  //let futureUsers = ['fapablaza@uc.cl'];
  let futureTeams = ['General'];

  selectedData.forEach(item => {
    switch (item.model) {
    case 'User':
      switch (item.action) {
      case 'Add':
        futureUsers.push(item.attributes.email);
        break;
      case 'Delete':
        futureUsers = futureUsers.filter((email) => email !== item.attributes.email);
        break;
      default:
        console.log('Sync Changes Handler User Error');
      }
      break;

    case 'Team':
      switch (item.action) {
      case 'Add':
        futureTeams.push(item.attributes.name);
        break;
      case 'Delete':
        futureTeams = futureTeams.filter((name) => name !== item.attributes.name);
        break;
      default:
        console.log('Sync Changes Handler Team Error');
      }
      break;

    default:
      console.log('Sync Changes Handler Error');
    }
  });

  const stepTwoDataToShow = stepTwoChanges.filter((item) => {
    const userCheck = futureUsers.find(element => element === item.attributes.user.email);
    const teamCheck = futureTeams.find(element => element === item.attributes.team.name);
    if (!!userCheck && !!teamCheck) return item;
  });

  // console.log(stepTwoDataToShow)
  return stepTwoDataToShow;
};

export default syncChangesHandler;
