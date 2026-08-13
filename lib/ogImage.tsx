export const ogImageSize = { width: 1200, height: 630 };

const content: Record<string, { eyebrow: string; tagline: string }> = {
  pt: {
    eyebrow: "SOFTWARE · DADOS · IA · NEGÓCIOS",
    tagline: "Construindo na interseção entre Tecnologia, Dados, IA e Negócios.",
  },
  en: {
    eyebrow: "SOFTWARE · DATA · AI · BUSINESS",
    tagline: "Building at the intersection of Technology, Data, AI & Business.",
  },
  es: {
    eyebrow: "SOFTWARE · DATOS · IA · NEGOCIO",
    tagline: "Construyendo en la intersección entre Tecnología, Datos, IA y Negocio.",
  },
};

export function buildOgImageElement(locale: string) {
  const { eyebrow, tagline } = content[locale] ?? content.pt;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "80px",
        backgroundColor: "#08080a",
        backgroundImage:
          "radial-gradient(circle at 78% 22%, rgba(201,168,117,0.22), transparent 55%)",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 24,
          letterSpacing: 6,
          color: "#c9a875",
          fontWeight: 600,
        }}
      >
        {eyebrow}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            color: "#f3f2ef",
            fontWeight: 600,
            lineHeight: 1.15,
            maxWidth: 980,
          }}
        >
          {tagline}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 40, height: 2, backgroundColor: "#c9a875", display: "flex" }} />
          <div style={{ display: "flex", fontSize: 28, color: "#9c9ba3" }}>
            Vinícius Andrey Ribeiro Lima
          </div>
        </div>
      </div>
    </div>
  );
}
