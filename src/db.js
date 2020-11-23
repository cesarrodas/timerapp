export const dbSave = (name, value) => {
  console.log("saving");
  console.log("is it saving? ");
  localStorage.setItem(name, value);
}

export const dbLoad = (name) => {
  return localStorage.getItem(name);
}

export const dbRemove = (name) => {
  localStorage.removeItem(name);
}