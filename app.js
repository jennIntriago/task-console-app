import colors from "colors";
import { guardarDB, leerDB } from "./helpers/guardarArchivo.js";
import { inquirerMenu, leerInput, pausa } from "./helpers/inquirer.js";
import { Tareas } from "./models/tareas.js";

const main = async () => {
  let opt = "";
  const tareas = new Tareas();
  const tareasDB = leerDB();
  if (tareasDB) {
    //cargar tareas

    tareas.cargarTareasFromArry(tareasDB);
  }
  await pausa();

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
        console.log(tareas.listadoArr);
        break;
    }

    //graba un arreglo con las tareas
    guardarDB(tareas.listadoArr);

    await pausa();
  } while (opt !== "0");
};

main();
