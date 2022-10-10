import { Tarea } from "./tarea.js";

class Tareas {
  _listado = {};

  //asi se define un getter
  get listadoArr() {
    const listado = [];
    //extrae cada llave que se encuentre en un objeto
    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });
    return listado;
  }
  constructor() {
    this._listado = {};
  }

  cargarTareasFromArry(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
    console.log(tareas);
  }

  crearTarea(desc = "") {
    //aqui creo la nueva tarea
    const tarea = new Tarea(desc);
    //las [] significa que se hace referencia a una propieada del objeto
    this._listado[tarea.id] = tarea;
  }
}
export { Tareas };
