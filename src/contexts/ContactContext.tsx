import React, { createContext, Reducer, useReducer } from 'react';
import { FavoriteContact } from '../types';

export const initialState: FavoriteContact[] = localStorage.getItem('favorites')
  ? JSON.parse(localStorage.getItem('favorites') || '')
  : [];

export enum ActionType {
  AddFavorite,
  DeleteFavorite,
  NewFavorite,
}

export interface ContactContextType {
  favorites: FavoriteContact[];
}

interface ContactDispatchContextType {
  dispatch: React.Dispatch<FavoriteAction>;
}

export const ContactDispatchContext =
  React.createContext<ContactDispatchContextType>({
    dispatch: () => undefined,
  });

export const ContactContext = createContext<ContactContextType>({
  favorites: initialState,
});

interface ContactsProviderProps {
  children: React.ReactNode;
}

interface AddFavorite {
  type: ActionType.AddFavorite;
  payload: FavoriteContact;
}

interface DeleteFavorite {
  type: ActionType.DeleteFavorite;
  payload: number;
}

interface NewFavorite {
  type: ActionType.NewFavorite;
  payload: FavoriteContact;
}

export type FavoriteAction = AddFavorite | DeleteFavorite | NewFavorite;

export const favoriteReducer = (
  favorites: FavoriteContact[],
  action: FavoriteAction
) => {
  switch (action.type) {
    case ActionType.AddFavorite: {
      localStorage.setItem(
        'favorites',
        JSON.stringify([...favorites, action.payload])
      );
      return [...favorites, action.payload];
    }
    case ActionType.NewFavorite: {
      const filterRemoved = favorites.filter(
        (data) => data.id !== action.payload.id
      );
      localStorage.setItem(
        'favorites',
        JSON.stringify([...filterRemoved, action.payload])
      );
      return [...filterRemoved, action.payload];
    }
    case ActionType.DeleteFavorite: {
      const filterRemoved = favorites.filter(
        (data) => data.id !== action.payload
      );
      localStorage.setItem('favorites', JSON.stringify(filterRemoved));
      return filterRemoved;
    }
    default:
      return favorites;
  }
};

export const addFavorite = (contacts: FavoriteContact): AddFavorite => ({
  type: ActionType.AddFavorite,
  payload: contacts,
});

export const deleteFavorite = (id: number): DeleteFavorite => ({
  type: ActionType.DeleteFavorite,
  payload: id,
});

export const newFavorite = (contact: FavoriteContact): NewFavorite => ({
  type: ActionType.NewFavorite,
  payload: contact,
});

export const ContactsProvider = ({ children }: ContactsProviderProps) => {
  const [favorites, dispatch] = useReducer<
    Reducer<FavoriteContact[], FavoriteAction>
  >(favoriteReducer, initialState);

  return (
    <ContactContext.Provider value={{ favorites }}>
      <ContactDispatchContext.Provider value={{ dispatch }}>
        {children}
      </ContactDispatchContext.Provider>
    </ContactContext.Provider>
  );
};
