import { combineReducers } from 'redux'
import authreducer from './auth.reducers'
import userReducer from './user.reducer'
import postReducer from './post.reducer'
// import categoryReducer from './category.reducer'
// import productReducer from './product.reducer'
// import orderReducer from './orders.reducer'
const rootReducers = combineReducers({
  auth:authreducer,
  user:userReducer,
  posts:postReducer,
  // category:categoryReducer,
  // product:productReducer,
  // orders:orderReducer,
});
export default rootReducers;