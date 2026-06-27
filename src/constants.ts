import { AppConfig } from "./types";
import { CMS_CONTENT } from "./config/cmsContent";

export const DEFAULT_CONFIG: AppConfig = {
  logoUrl: CMS_CONTENT.president.photoUrl,
  quienesSomosText: "",
  misionText: "",
  visionText: "",
  valoresText: "",
  directorWhatsApp: "",
  institutoResena: "",
  institutoProfesores: CMS_CONTENT.instituto.profesoresDefault,
  institutoLugares: CMS_CONTENT.instituto.lugaresDefault,
  heroBgUrl: CMS_CONTENT.hero.bgUrl,
  heroBgOpacity: CMS_CONTENT.hero.bgOpacity,
  presidentName: CMS_CONTENT.president.name,
  presidentPhoto: CMS_CONTENT.president.photoUrl,
  presidentMessage: CMS_CONTENT.president.message,
  juntaDirectiva: [],
  sections: {
    pastores: {
      title: CMS_CONTENT.sections.pastores.title,
      description: CMS_CONTENT.sections.pastores.description,
      icon: CMS_CONTENT.sections.pastores.icon
    },
    evangelismo: {
      title: CMS_CONTENT.sections.evangelismo.title,
      description: CMS_CONTENT.sections.evangelismo.description,
      icon: CMS_CONTENT.sections.evangelismo.icon
    },
    miembros: {
      title: CMS_CONTENT.sections.miembros.title,
      description: CMS_CONTENT.sections.miembros.description,
      icon: CMS_CONTENT.sections.miembros.icon
    },
    instituto: {
      title: CMS_CONTENT.sections.instituto.title,
      description: CMS_CONTENT.sections.instituto.description,
      icon: CMS_CONTENT.sections.instituto.icon
    }
  },
  allowedAdminEmails: ["richard29cal@gmail.com"],
  historyMilestones: [],
  heroTitle: CMS_CONTENT.hero.title,
  heroSubtitle: CMS_CONTENT.hero.subtitle,
  navInicioLabel: CMS_CONTENT.navigation.inicio,
  navGremioLabel: CMS_CONTENT.navigation.pastores,
  navEvangelismoLabel: CMS_CONTENT.navigation.evangelismo,
  navMiembrosLabel: CMS_CONTENT.navigation.miembros,
  navInstitutoLabel: CMS_CONTENT.navigation.instituto,
  navAdminLabel: CMS_CONTENT.navigation.admin,
  juntaTitle: CMS_CONTENT.juntaDirectiva.title,
  juntaDesc: CMS_CONTENT.juntaDirectiva.description,
  presidentSectionTitle: CMS_CONTENT.president.sectionTitle,
  evangelismoHistoria: CMS_CONTENT.evangelismo.historiaDefault,
  institutoDescripcion: CMS_CONTENT.instituto.descripcionDefault,
  imgbbApiKey: ""
};

