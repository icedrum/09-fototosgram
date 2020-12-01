

export interface RespuestaPosts {
  ok: boolean;
  pagina: number;
  posts: Post[];
}

export interface Post {
  imgs?: any[];
  _id?: string;
  mensaje?: string;
  coords?: string;
  usuario?: Usuario;
  created?: string
}

export interface Usuario {
  avatar?: string;
  _id?: string;
  nombre?: string;
  email?: string;
}