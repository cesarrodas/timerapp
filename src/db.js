export const dbSave = (name, value) => {
  console.log("saving");
  localStorage.setItem(name, value);
}

export const dbLoad = (name) => {
  return localStorage.getItem(name);
}

export const dbRemove = (name) => {
  localStorage.removeItem(name);
}