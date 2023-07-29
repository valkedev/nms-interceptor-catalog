/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from 'react';

import { THUMB_SIZES } from '@/config';

import type { InterceptorQuery, ShipData } from '@/types';

export interface CatalogSettings {
  thumbSize: keyof typeof THUMB_SIZES;
  showPrivate: boolean;
  onlyFavorites: boolean;
  favorites: string[];
}

export const defaultSettings: CatalogSettings = {
  thumbSize: 'b',
  showPrivate: false,
  onlyFavorites: false,
  favorites: [],
};

interface CatalogContext {
  settings: CatalogSettings;
  setSettings: (selection: CatalogSettings) => void;
  items: (ShipData & LokiObj)[];
  setItems: (items: (ShipData & LokiObj)[]) => void;
  intQuery: InterceptorQuery;
  setIntQuery: (query: InterceptorQuery) => void;
  mutate: () => void;
}

export const CatalogContext = createContext<CatalogContext>({
  settings: defaultSettings,
  setSettings: function (_selection: CatalogSettings): void {
    throw new Error('Function not implemented.');
  },
  items: [],
  setItems: function (_items: (ShipData & LokiObj)[]): void {
    throw new Error('Function not implemented.');
  },
  intQuery: {},
  setIntQuery: function (_query: InterceptorQuery): void {
    throw new Error('Function not implemented.');
  },
  mutate: function (): void {
    throw new Error('Function not implemented.');
  },
});