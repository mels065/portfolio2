const {
  TYPE_OF_PROJECT: {
    ANY,
    FRONT_END,
    BACK_END,
    FULL_STACK,
  },
} = require('../../constants');

export default () => (
  {
    state: {
      currentFilter: ANY,
    },
    reducers: {
      removeFilter() {
        return ANY;
      },
      filterFrontEnd() {
        return FRONT_END;
      },
      filterBackEnd() {
        return BACK_END;
      },
      filterFullStack() {
        return FULL_STACK;
      },
    },
  }
);
