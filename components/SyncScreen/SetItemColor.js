import itemStyles, {textContainer} from '../../styles/SyncScreen/ItemList';

const SetItemColor = (title, type, selected) => {
  switch (selected) {
    case true:
      if (title.includes('Nuevo') && type === 'item') return itemStyles.newItemContainer;
      if (title.includes('Nuevo') && type === 'title') return itemStyles.newTextItemTitle;
      if (title.includes('Nuevo') && type === 'description') return itemStyles.newTextItemDescription;
      if (title.includes('eliminado') && type === 'item') return itemStyles.eliminatedItemContainer;
      if (title.includes('eliminado') && type === 'title') return itemStyles.eliminatedTextItemTitle;
      if (title.includes('eliminado') && type === 'description') return itemStyles.eliminatedTextItemDescription;
      break;
    default:
      if (type === 'item') return itemStyles.notSelectedItemContainer;
      if (type === 'title') return itemStyles.notSelectedTextItemTitle;
      if (type === 'description') return itemStyles.notSelectedTextItemDescription;
  }
};

export default SetItemColor;
export { textContainer };
