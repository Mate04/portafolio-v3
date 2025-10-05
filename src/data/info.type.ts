export type DataJSON = {
  nombre: string;
  descripcionPerfil: string;
  descripcionPerfilExtensa: string;
  puesto: string;
  contacto: {
    ciudadPais: string;
    redesSociales: SocialNetwork;
  };
  experienciasLaborales: ExperienciaLaboral;
  educacion: Education;
  habilidades: Skills;
  habilidadesBlandas: Array<string>;
  idiomas: Languaje;
};

export type ExperienciaLaboral = Array<{
  empresa: string;
  cargo: string;
  fechaDesde: string;
  fechaHasta: string;
  descripcionPuesto: string;
  descripcionPuestoExtensa: string;
  habilidades: Array<string>;
}>;

export type Languaje = Array<{
  idioma: string;
  nivel: string;
}>;

export type Education = Array<{
  titulo: string;
  institucion: string;
  fechaDesde: string;
  fechaHasta: string;
  certificadoPDF: string;
  descripcion?: string;
}>;

export type Skills = Array<{
  nombre: string;
  areas: Array<string>;
}>;

export type NameSocialNetwork = "Mail" | "GitHub" | "Linkedin" | "Discord"

export type SocialNetwork = Array<{
      nombre: NameSocialNetwork;
      link: string;
    }>;