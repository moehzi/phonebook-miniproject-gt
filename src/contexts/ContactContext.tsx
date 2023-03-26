import React, { createContext, Reducer, useReducer } from 'react';
import ContactList from '../types';

export const initialState: ContactList[] = [];

export interface ContactContextType {
  state: ContactList[];
  dispatch: React.Dispatch<FavoriteAction>;
}

// export const ContactDispatchContext = React.createContext(null);
export const ContactContext = createContext<ContactContextType>({
  state: initialState,
  dispatch: () => undefined,
});

interface ContactsProviderProps {
  children: React.ReactNode;
}

interface AddFavorite {
  type: 'ActionType.ADD_TO_FAVORITE';
  payload: ContactList;
}

export type FavoriteAction = AddFavorite;

export const favoriteReducer = (
  state: ContactList[],
  action: FavoriteAction
) => {
  switch (action.type) {
    case 'ActionType.ADD_TO_FAVORITE': {
      return [
        ...state,
        {
          id: action.payload.id,
          last_name: action.payload.last_name,
          first_name: action.payload.first_name,
          phones: action.payload.phones,
          created_at: action.payload.created_at,
        },
      ];
    }
    default:
      return state;
  }
};

export const ContactsProvider = ({ children }: ContactsProviderProps) => {
  const [state, dispatch] = useReducer<Reducer<ContactList[], FavoriteAction>>(
    favoriteReducer,
    initialState
  );

  return (
    <ContactContext.Provider value={{ state, dispatch }}>
      {children}
    </ContactContext.Provider>
  );
};
