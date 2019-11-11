import {
  SET_ACTIVE_STEP,
  SET_DITTO_NATURE,
  SET_DEPOSIT,
  SET_PLAYER
} from "./types";

export function setActiveStep(value) {
  return { type: SET_ACTIVE_STEP, value };
}

export function setDittoNature(value) {
  return { type: SET_DITTO_NATURE, value };
}

export function setDeposit(prop, value) {
  return { type: SET_DEPOSIT, value: { prop, value } };
}

export function setPlayer(prop, value) {
  return { type: SET_PLAYER, value: { prop, value } };
}
