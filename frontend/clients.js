/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║              CONFIGURACIÓN DE CLIENTES / USUARIOS               ║
 * ║                                                                  ║
 * ║  Para agregar un cliente nuevo:                                  ║
 * ║  1. Copia un bloque existente dentro del array CLIENTS           ║
 * ║  2. Cambia los valores (id, nombre, logo, color, usuarios)       ║
 * ║  3. Guarda y sube al repositorio git                             ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

const CLIENTS = [

  /* ─── CLIENTE DEMO ─── */
  {
    id:       "demo",
    nombre:   "Comestibles",
    logo:     "",
    color:    "#7c6af7",
    apiUrl:   "http://localhost:3000/api/9box",
    medicion: "demo1",

    usuarios: [
      { username: "admin",  password: "admin123", nombre: "Administrador", rol: "admin"  },
      { username: "viewer", password: "ver123",   nombre: "Usuario Visor", rol: "viewer" },
      { username: "comestibles", password: "comestibles",   nombre: "Comestibles", rol: "admin" }
    ]
  },

  /* ─── CLIENTE 2 (descomentar cuando tengas uno nuevo) ─── */
  /*
  {
    id:       "acme",
    nombre:   "Acme Corp Ltda",
    logo:     "",
    color:    "#0ea5e9",
    apiUrl:   "https://api.acme.com/api/9box",
    medicion: "Q1-2025",

    usuarios: [
      { username: "rrhh.acme", password: "Acme2025!", nombre: "Gestión Humana", rol: "admin" }
    ]
  },
  */

];

/* ══════════════════════════════════════════════
   STORAGE — usa localStorage para compatibilidad
   con file:// y servidores locales
   ══════════════════════════════════════════════ */
const SESSION_KEY = "9box_session_v2";

function saveSession(session) {
  try {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  } catch(e) {
    console.error("[9box] No se pudo guardar sesión:", e);
  }
}

function getSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const s = JSON.parse(raw);
    // Validar que tenga los campos mínimos
    if (!s || !s.username || !s.clientId) {
      localStorage.removeItem(SESSION_KEY);
      return null;
    }
    return s;
  } catch(e) {
    console.error("[9box] Error leyendo sesión:", e);
    localStorage.removeItem(SESSION_KEY);
    return null;
  }
}

function logout() {
  localStorage.removeItem(SESSION_KEY);
  // Limpiar caché de datos del empleado
  try { sessionStorage.removeItem("9box_empleados"); } catch(e) {}
  window.location.href = "login.html";
}

/**
 * Protege una página.
 * Retorna la sesión si existe, o redirige al login.
 * NO llama a esta función en login.html.
 */
function requireAuth() {
  const session = getSession();
  if (!session) {
    window.location.replace("login.html");
    return null;
  }
  return session;
}

/* ══════════════════════════════════════════════
   AUTENTICACIÓN
   ══════════════════════════════════════════════ */
function authenticate(username, password) {
  const user = (username || "").trim().toLowerCase();
  const pass = password || "";

  for (const client of CLIENTS) {
    const found = client.usuarios.find(
      u => (u.username || "").toLowerCase() === user && u.password === pass
    );
    if (found) {
      return {
        ok: true,
        session: {
          username:  found.username,
          nombre:    found.nombre,
          rol:       found.rol,
          clientId:  client.id,
          empresa:   client.nombre,
          logo:      client.logo   || "",
          color:     client.color  || "#7c6af7",
          apiUrl:    client.apiUrl || "http://localhost:3000/api/9box",
          medicion:  client.medicion || "",
          loginAt:   Date.now()
        }
      };
    }
  }
  return { ok: false, error: "Usuario o contraseña incorrectos" };
}
