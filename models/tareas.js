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

  borrarTarea(id = "") {
    if (this._listado[id]) {
      //elimina un obj
      delete this._listado[id];
    }
  }

  cargarTareasFromArry(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
    // console.log(tareas);
  }

  crearTarea(desc = "") {
    //aqui creo la nueva tarea
    const tarea = new Tarea(desc);
    //las [] significa que se hace referencia a una propieada del objeto
    this._listado[tarea.id] = tarea;
  }

  listadoCompleto() {
    //Solucion del profe
    console.log();
    this.listadoArr.forEach((tarea, i) => {
      const idx = `${i + 1}`.green;
      const { desc, completadoEn } = tarea;
      const estado = completadoEn ? "Completada".green : "Pendiente".red;
      console.log(`${idx} ${desc} :: ${estado}`);
    });
  }

  listarPendientesCompletadas(completadas = true) {
    console.log();
    let contador = 0;
    this.listadoArr.forEach((tarea) => {
      const { desc, completadoEn } = tarea;
      const estado = completadoEn ? "Completada".green : "Pendiente".red;

      if (completadas) {
        if (completadoEn) {
          contador += 1;
          console.log(
            `${(contador + ".").toString().green} ${desc} :: ${
              completadoEn.green
            }`
          );
        }
      } else {
        if (!completadoEn) {
          contador += 1;
          console.log(
            `${(contador + ".").toString().green} ${desc} :: ${estado}`
          );
        }
      }
    });
  }

  toggleCompletadas(ids = []) {
    ids.forEach((id) => {
      const tarea = this._listado[id];
      if (!tarea.completadoEn) {
        tarea.completadoEn = new Date().toISOString();
      }
    });

    this.listadoArr.forEach((tarea) => {
      if (!ids.includes(tarea.id)) {
        this._listado[tarea.id].completadoEn = null;
      }
    });
  }
}
export { Tareas };
