import group from './group';
import mutation from './mutation';
import query from './query';

export default {
  ...query,
  ...mutation,
  ...group,
};
