/**
 * ARCHIVO DE CONFIGURACIÓN Y CONTENIDO EDITABLE (CMS BÁSICO)
 * 
 * Si deseas cambiar cualquier título, subtítulo o texto de la página web,
 * puedes modificar directamente los valores de este archivo.
 * Se actualizarán automáticamente en toda la aplicación.
 */

export const CMS_CONTENT = {
  // Configuración de la cabecera (Navbar)
  navigation: {
    inicio: "Inicio",
    pastores: "Gremio Pastoral",
    evangelismo: "Evangelismo y Misiones",
    miembros: "Miembros de la Federación",
    instituto: "Instituto Bíblico FIEP",
    admin: "Acceso Admin",
  },

  // Sección Principal (Hero Banner)
  hero: {
    title: "Federación de Iglesias Evangélicas Pentecostales",
    subtitle: "Comprometidos con la unidad, la sana doctrina y la evangelización del mundo.",
    bgUrl: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1600",
    bgOpacity: 35,
  },

  // Títulos y Subtítulos de las Secciones del Directorio / CMS
  sections: {
    pastores: {
      title: "Directorio del Gremio Pastoral",
      subtitle: "Pastores Ordenados",
      description: "Comprometidos con el avivamiento, la sana doctrina pentecostal y el pastoreo íntegro.",
      icon: "UserCheck",
    },
    evangelismo: {
      title: "Departamento de Evangelismo",
      subtitle: "Embajadores de Cristo",
      description: "Llevando el mensaje de salvación a cada rincón de la nación y apoyando el trabajo misionero.",
      icon: "Flame",
    },
    miembros: {
      title: "Membresía General",
      subtitle: "Cuerpo de Cristo",
      description: "Iglesias locales unidas en un mismo sentir, sirviendo con pasión bajo el pacto de amor.",
      icon: "Users2",
    },
    instituto: {
      title: "Instituto Teológico FIEP",
      subtitle: "Formación Ministerial",
      description: "Capacitación bíblica profunda para obreros de excelencia aprobados por el Espíritu Santo.",
      icon: "BookOpen",
    },
  },

  // Junta Directiva Nacional
  juntaDirectiva: {
    title: "Honorable Junta Directiva Nacional",
    description: "Líderes de testimonio intachable llamados a presidir y velar por el orden de nuestra federación.",
  },

  // Mensaje del Presidente
  president: {
    sectionTitle: "Mensaje de Nuestro Presidente Nacional",
    name: "Rev. Richard Cal",
    photoUrl: "https://i.postimg.cc/Hkw3jbLQ/Gemini-Generated-Image-l2ncmql2ncmql2nc.png",
    message: "Amados hermanos y ministros, nos encontramos en un tiempo crucial donde la unidad y la fidelidad a la Palabra de Dios son nuestro mayor estandarte. Sigamos adelante en la labor que se nos ha encomendado, sembrando el Evangelio con denuedo y pasión.",
  },

  // Sección de Evangelismo y Misiones
  evangelismo: {
    historiaTitle: "Trayectoria y Propósito del Departamento",
    historiaDefault: "El Departamento de Evangelismo y Misiones fue constituido con el claro propósito de avivar el fuego misionero, plantando nuevas congregaciones y respaldando a los obreros en las regiones más remotas.\n\nA través de campañas, conferencias y capacitación continua, impulsamos la proclamación de la sana doctrina pentecostal y el desarrollo comunitario integral.",
  },

  // Sección del Instituto Teológico
  instituto: {
    descripcionDefault: "Súmese a los cursos ministeriales y profundice en teología bíblica, homilía evangélica y misiones. El programa académico de la federación está diseñado para obreros que trazan fielmente la palabra de verdad.",
    profesoresDefault: "Rev. Dr. Carlos Mendoza (Teología y Dogmática) • Pr. Jacobo Castro (Exégesis y Hermenéutica) • Misionera María de la Paz Ruiz (Misionología).",
    lugaresDefault: "Sede Central de la Federación (Sábados de 8:00 AM a 1:00 PM) • Plataformas virtuales Online sincrónicas.",
  }
};
