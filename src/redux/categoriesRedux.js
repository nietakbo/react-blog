export const getCategories = (state) => state.category;

const createActionName = actionName => `app/categories/${actionName}`;

const categoriesReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  }
};
export default categoriesReducer;