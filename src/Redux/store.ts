import {configureStore} from '@reduxjs/toolkit';
import {UserInfo} from '../models';        //si el import esta dentro {} import el objeto q esta en la libreria, si no esta dentro de {} importa lo q en la libreria se esport por default
import {userSlice} from './states/user';  //tambien se puede reemp {UserSlice} x userSliceReducer

export interface AppStore{
    user:UserInfo;
}
export default configureStore<AppStore>({
    reducer: {
       user:userSlice.reducer,      //tambien se puede reemp UserSlice.reducer x userSliceReducer
    }
});