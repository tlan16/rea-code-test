import searchResponse from '../../../service/searchResponse';
import * as schema from '../../../schema';
import { normalize } from 'normalizr';
import { PROPERTIES_FETCHED, ADD_TO_SAVED, REMOVE_FROM_SAVED } from '../actionTypes';

export const fetchSearchResponse = () => {
  return async(dispatch, getState) => {
     try{
     const responseData = await searchResponse.getSearchResponse();
     const response = normalize(responseData, schema.responseSchema);
     const entities = response.entities;
     const properties = entities.properties;
     const agencies = entities.agencies;
     const lists = response.result;
     dispatch({ 
       type: PROPERTIES_FETCHED,
       properties,
       lists,
       agencies
      })
    }catch(error){
      console.error(error);
    }
  }
}

export const addToSaved = (id) => (dispatch, getState) => {
     dispatch({
       type: ADD_TO_SAVED,
       id
     })
}

export const removeFromSaved = (id) => (dispatch, getState) => {
     dispatch({
       type: REMOVE_FROM_SAVED,
       id
     })
}