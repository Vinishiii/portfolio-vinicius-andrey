export const profile = {
  name: "Vinícius Andrey Ribeiro Lima",
  location: "Santo André, São Paulo, Brasil",
  email: "viniciusandrey16@gmail.com",
  phone: "+55 11 95276-2479",
  photo: "/images/profile/profile.jpg",
  education: [
    {
      degree: "Computer Science",
      institution: "UNIP",
      status: "in_progress",
      detail: "4º semestre",
    },
    {
      degree: "Software Engineering",
      institution: "UNICID",
      status: "in_progress",
      detail: "3º semestre",
    },
  ],
  languages: [
    { name: "Portuguese", level: "native" },
    { name: "English", level: "advanced" },
    { name: "Spanish", level: "advanced" },
  ],
  availability: "travel_relocation",
} as const;
