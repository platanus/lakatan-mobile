const syncChangesHandler = (stepOneData, stepTwoChanges, users = [], teamList = []) => {
  const selectedData = stepOneData.filter((item) => item.selected);
  let futureUsers = users.map(user => user.attributes.email);
  let futureTeams = [];
  teamList.forEach(team => {
    if (!!team.id) futureTeams.push(parseInt(team.id, 10));
    if (!!team.attributes.slack_id) futureTeams.push(team.attributes.slack_id);
  });

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
        futureTeams.push(item.attributes.slack_id);
        break;
      case 'Delete':
        futureTeams = futureTeams.filter((id) => id !== item.attributes.slack_id);
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
    const teamCheck = futureTeams.find(element =>
      element === item.attributes.team.slack_id,
    );

    if (!!userCheck && !!teamCheck) return item;
  });

  return stepTwoDataToShow;
};

export default syncChangesHandler;
