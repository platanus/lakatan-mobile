import itemStyles from '../../styles/SyncScreen/SyncItemList';

const itemStyleSetter = (selected, action) => {
  switch (selected) {
  case false:
    return itemStyles.unselectedItemContainer;
  default:
    switch (action) {
    case 'Add':
      return itemStyles.addItemContainer;
    case 'Delete':
      return itemStyles.deleteItemContainer;
    default:
      return itemStyles.unselectedItemContainer;
    }
  }
};

const actionTypeStyleSetter = (selected, action) => {
  switch (selected) {
  case false:
    return itemStyles.unselectedActionTypeText;
  default:
    switch (action) {
    case 'Add':
      return itemStyles.addActionTypeText;
    case 'Delete':
      return itemStyles.deleteActionTypeText;
    default:
      return itemStyles.unselectedActionTypeText;
    }
  }
};

const actionNameStyleSetter = (selected, action) => {
  switch (selected) {
  case false:
    return itemStyles.unselectedActionNameText;
  default:
    switch (action) {
    case 'Add':
      return itemStyles.addActionNameText;
    case 'Delete':
      return itemStyles.deleteActionNameText;
    default:
      return itemStyles.unselectedActionNameText;
    }
  }
};

export { itemStyleSetter, actionTypeStyleSetter, actionNameStyleSetter };
