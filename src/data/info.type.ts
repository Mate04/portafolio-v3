export type DataJSON = {
    descripcionPerfil: string;
    puesto: string;
    contacto: {
        ciudadPais: string;
        redesSociales: Array<{
            nombre: string;
            link: string;
        }>;
    };
    experienciasLaborales: ExperienciaLaboral;
    educacion: Array<{
        titulo: string;
        institucion: string;
        fechaDesde: string;
        fechaHasta: string;
        certificadoPDF: string;
    }>;
    habilidades: Array<{
        nombre: string;
        area: string;
    }>;
    idiomas: Array<{
        idioma: string;
        nivel: string;
    }>;
};

export type ExperienciaLaboral = Array<{
        empresa: string;
        cargo: string;
        fechaDesde: string;
        fechaHasta: string;
        descripcionPuesto: string;
        habilidades: Array<string>;
    }>