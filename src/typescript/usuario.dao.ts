import { Usuario } from "./usuario";

// Define la interfaz DAO para las operaciones.
export interface UsuarioDAO {
    obtenerTodos(): Promise<Usuario[]>; // Promise = a Threads pero en typescript
    obtenerPorId(id: number): Promise<Usuario | null>; //
    crear(usuario: Usuario): Promise<Usuario>; //
    actualizar(usuario: Usuario): Promise<Usuario>; //
    eliminar(id: number): Promise<void>; //
  }
