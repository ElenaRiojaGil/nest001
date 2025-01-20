import { Usuario } from "./usuario";

// Define la interfaz DAO para las operaciones.
export interface UsuarioDAO {
    obtenerTodos(): Promise<Usuario[]>; //
    obtenerPorId(id: number): Promise<Usuario | null>; //
    crear(usuario: Usuario): Promise<Usuario>; //
    actualizar(usuario: Usuario): Promise<Usuario>; //
    eliminar(id: number): Promise<void>; //
  }
