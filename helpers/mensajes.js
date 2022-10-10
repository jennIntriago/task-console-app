import colors from "colors";

const mostrarMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log("=====================".green);
    console.log("SELECCIONE UNA OPCIÓN".green);
    console.log("=====================\n".green);

    console.log(`${"1.".green} Crear una tarea`);
    console.log(`${"2.".green} Listar tareas`);
    console.log(`${"3.".green} Listar tareas completadas`);
    console.log(`${"4.".green} Listar tareas pendientes`);
    console.log(`${"5.".green} Completar tarea(s)`);
    console.log(`${"6.".green} Borrar tarea`);
    console.log(`${"0.".green} Salir\n`);

    //readline es un paquete nativo de node, aqui preparamos la interface para recibir y mostrar datos por usuario
    const readline = require("readline").createInterface({
      // leer datos de usuario. stin para enviar y stdout para mostrar
      input: process.stdin,
      output: process.stdout,
    });
    //envia datos del usuario por consola y luego se cierra
    readline.question("Seleccione una opción: ", (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

const pausa = () => {
  return new Promise((resolve) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`\nPresione ${"ENTER".green} para continuar\n`, (opt) => {
      readline.close();
      resolve();
    });
  });
};

//De esta forma exportas funciones a otros files
export { mostrarMenu, pausa };
