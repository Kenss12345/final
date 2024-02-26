import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderModule } from "./modules/header/header.module";
import { HeaderPromotionModule } from "./modules/header-promotion/header-promotion.module";
import { FooterModule } from "./modules/footer/footer.module";
import { HeaderMobileModule } from "./modules/header-mobile/header-mobile.module";
import { NewletterModule } from "./modules/newletter/newletter.module";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderModule, HeaderPromotionModule, FooterModule, HeaderMobileModule, NewletterModule]
})
export class AppComponent {
  title = 'final';
}

/*
interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();


interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();



interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();



interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();



interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();


interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();


interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();


interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();

interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();


interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();

interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();

interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();

interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();

interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();

interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();

interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();


interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();


interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();

interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();

interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();


interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();


interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();


interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();

interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();

interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();


interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();

interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();

interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();

interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();

interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();
interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();

interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();


interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();



interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();



interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();



interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();


interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();


interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();


interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();

interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();


interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();

interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();

interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();

interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();

interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();

interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();

interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();


interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();


interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();

interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();

interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();


interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();


interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();


interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();

interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();

interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();


interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();

interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();

interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();

interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();

interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();
interface Usuario {
  id: number;
  nombre: string;
  email: string;
}


interface Rol {
  id: number;
  nombre: string;
}


class UsuarioImplementacion implements Usuario {
  constructor(public id: number, public nombre: string, public email: string) {}
}


class RolImplementacion implements Rol {
  constructor(public id: number, public nombre: string) {}
}


class GestorUsuarios {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    console.log("Lista de usuarios:");
    this.usuarios.forEach(usuario => {
      console.log(`${usuario.id}: ${usuario.nombre} (${usuario.email})`);
    });
  }
}


const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(1, "Juan", "juan@example.com"));
gestorUsuarios.agregarUsuario(new UsuarioImplementacion(2, "María", "maria@example.com"));
gestorUsuarios.listarUsuarios();


class GestorRoles {
  private roles: Rol[] = [];

  agregarRol(rol: Rol) {
    this.roles.push(rol);
  }

  listarRoles() {
    console.log("Lista de roles:");
    this.roles.forEach(rol => {
      console.log(`${rol.id}: ${rol.nombre}`);
    });
  }
}


const gestorRoles = new GestorRoles();
gestorRoles.agregarRol(new RolImplementacion(1, "Admin"));
gestorRoles.agregarRol(new RolImplementacion(2, "Usuario"));
gestorRoles.listarRoles();
*/