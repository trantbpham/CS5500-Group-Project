import { Socket } from 'socket.io-client';
import Player, { UserLocation } from './classes/Player';

export type CoveyEvent = 'playerMoved' | 'playerAdded' | 'playerRemoved';
export type CoveyCallback = (data: any) => void;

export type VideoRoom = {
  twilioID: string,
  id: string
};
export type UserProfile = {
  displayName: string,
  id: string
};
export type NearbyPlayers = {
  nearbyPlayers: Player[]
};
export type CoveyAppState = {
  sessionToken: string,
  userName: string,
  currentRoom: string,
  myPlayerID: string,
  players: Player[],
  currentLocation: UserLocation,
  nearbyPlayers: NearbyPlayers,
  emitMovement: (location: UserLocation) => void,
  socket: Socket | null,
};
