import { dynaApp } from '../service/kernel';

export function sessionObject(key, value) {
  const isKeyString = typeof key === 'string';
  if (!isKeyString) {
    console.error('sessionObject(key, value): key should be a string');
    return null;
  }
  const prefix = dynaApp().appIdentifier;
  const internalKey = `${prefix}:${key}`;
  if (!value) {
    return JSON.parse(sessionStorage.getItem(internalKey));
  }
  // const isValueObject = (typeof(prefix)==="object")
  sessionStorage.setItem(internalKey, JSON.stringify(value));
  return value;
}

