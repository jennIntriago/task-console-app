import colors from "colors";
import { guardarDB, leerDB } from "./helpers/guardarArchivo.js";
import {
  confirmar,
  inquirerMenu,
  leerInput,
  listadoTareasBorrar,
  pausa,
  mostrarListadoChecklist,
} from "./helpers/inquirer.js";
import { Tareas } from "./models/tareas.js";

const main = async () => {
  let opt = "";
  const tareas = new Tareas();
  const tareasDB = leerDB();
  if (tareasDB) {
    //cargar tareas

    tareas.cargarTareasFromArry(tareasDB);
  }
  // await pausa();

  do {
    //Imprimir el menu
    opt = await inquirerMenu();
    switch (opt) {
      case "1":
        //crear opcion
        const desc = await leerInput("Descripción: ");
        tareas.crearTarea(desc);
        break;
      case "2":
        //Listar opciones
        tareas.listadoCompleto();
        break;

      case "3":
        //Listar opciones
        tareas.listarPendientesCompletadas(true);
        break;

      case "4":
        //Listar opciones
        tareas.listarPendientesCompletadas(false);
        break;

      case "5":
        //Listar opciones
        const ids = await mostrarListadoChecklist(tareas.listadoArr);
        tareas.toggleCompletadas(ids);
        break;

      case "6":
        //borrar
        const id = await listadoTareasBorrar(tareas.listadoArr);
        if (id !== "0") {
          const ok = await confirmar("Are you sure?");
          if (ok) {
            tareas.borrarTarea(id);
            console.log("Tarea borrada correctamente");
          }
        }
        break;
    }

    //graba un arreglo con las tareas
    guardarDB(tareas.listadoArr);

    await pausa();
  } while (opt !== "0");
};

main();
