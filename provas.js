const provas = [
  {
    "turma": "1EFA",
    "data": "2026-06-08",
    "professor": "Danielle Gaglianone Semedo",
    "componente": "LÍNGUA INGLESA"
  },
  {
    "turma": "1EFA",
    "data": "2026-06-10",
    "professor": "Danielle Gaglianone Semedo dos Santos",
    "componente": "MATEMÁTICA"
  },
  {
    "turma": "1EFA",
    "data": "2026-06-15",
    "professor": "Danielle Gaglianone Semedo dos Santos",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "1EFA",
    "data": "2026-06-18",
    "professor": "Danielle Gaglianone Semedo dos Santos",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "1EFA",
    "data": "2026-06-18",
    "professor": "Danielle Gaglianone Semedo dos Santos",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "1EFA",
    "data": "2026-06-22",
    "professor": "Danielle Gaglianone Semedo dos Santos",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "1EFB",
    "data": "2026-06-08",
    "professor": "Adriana de Almeida Vieira",
    "componente": "MATEMÁTICA"
  },
  {
    "turma": "1EFB",
    "data": "2026-06-10",
    "professor": "Adriana de Almeida Vieira",
    "componente": "LÍNGUA PORTUGUESA"
  },
  {
    "turma": "1EFB",
    "data": "2026-06-15",
    "professor": "Adriana de Almeida Vieira",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "1EFB",
    "data": "2026-06-18",
    "professor": "Adriana de Almeida Vieira",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "1EFB",
    "data": "2026-06-22",
    "professor": "Adriana de Almeida Vieira",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "1EFB",
    "data": "2026-06-23",
    "professor": "Danielle Gaglianone Semedo",
    "componente": "LÍNGUA INGLESA"
  },
  {
    "turma": "2EFA",
    "data": "2026-05-26",
    "professor": "Célia Regina dos Santos",
    "componente": "LÍNGUA PORTUGUESA"
  },
  {
    "turma": "2EFA",
    "data": "2026-06-01",
    "professor": "Camila Godoi Hirata",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "2EFA",
    "data": "2026-06-09",
    "professor": "Camila Godoi Hirata",
    "componente": "MATEMÁTICA"
  },
  {
    "turma": "2EFA",
    "data": "2026-06-11",
    "professor": "Camila Godoi Hirata",
    "componente": "LÍNGUA PORTUGUESA"
  },
  {
    "turma": "2EFA",
    "data": "2026-06-15",
    "professor": "Camila Godoi Hirata",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "2EFA",
    "data": "2026-06-18",
    "professor": "Camila Godoi Hirata",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "2EFB",
    "data": "2026-05-28",
    "professor": "Célia Regina dos Santos",
    "componente": "MATEMÁTICA"
  },
  {
    "turma": "2EFB",
    "data": "2026-05-29",
    "professor": "Célia Regina dos Santos",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "2EFB",
    "data": "2026-06-01",
    "professor": "Célia Regina dos Santos",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "2EFB",
    "data": "2026-06-01",
    "professor": "Célia Regina dos Santos",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "3EFA",
    "data": "2026-06-12",
    "professor": "Annie de Fátima Martins Morelli",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "3EFA",
    "data": "2026-06-15",
    "professor": "Kamila Kelly Tagliaferro Pradela",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "3EFA",
    "data": "2026-06-18",
    "professor": "Annie de Fátima Martins Morelli",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "3EFA",
    "data": "2026-06-19",
    "professor": "Annie de Fátima Martins Morelli",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "3EFB",
    "data": "2026-06-12",
    "professor": "Kamila Kelly Tagliaferro Pradela",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "3EFB",
    "data": "2026-06-18",
    "professor": "Kamila Kelly Tagliaferro Pradela",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "3EFB",
    "data": "2026-06-19",
    "professor": "Kamila Kelly Tagliaferro Pradela",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "5EFA",
    "data": "2026-05-25",
    "professor": "Mônica Sperançolo",
    "componente": "MATEMÁTICA"
  },
  {
    "turma": "5EFA",
    "data": "2026-05-26",
    "professor": "Mônica Sperançolo",
    "componente": "LÍNGUA PORTUGUESA"
  },
  {
    "turma": "5EFA",
    "data": "2026-05-26",
    "professor": "Mônica Sperançolo",
    "componente": "MATEMÁTICA"
  },
  {
    "turma": "5EFA",
    "data": "2026-05-29",
    "professor": "Mônica Sperançolo",
    "componente": "LÍNGUA PORTUGUESA"
  },
  {
    "turma": "5EFA",
    "data": "2026-06-01",
    "professor": "Mônica Sperançolo",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "5EFA",
    "data": "2026-06-02",
    "professor": "Mônica Sperançolo",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "5EFA",
    "data": "2026-06-02",
    "professor": "Mônica Sperançolo",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "5EFA",
    "data": "2026-06-03",
    "professor": "Mônica Sperançolo",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "5EFA",
    "data": "2026-06-04",
    "professor": "Mônica Sperançolo",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "5EFA",
    "data": "2026-06-04",
    "professor": "Mônica Sperançolo",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "5EFA",
    "data": "2026-06-17",
    "professor": "Mônica Sperançolo",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "5EFA",
    "data": "2026-08-11",
    "professor": "Mônica Sperançolo",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "5EFB",
    "data": "2026-05-25",
    "professor": "Larissa Ribeiro Santos",
    "componente": "MATEMÁTICA"
  },
  {
    "turma": "5EFB",
    "data": "2026-05-26",
    "professor": "Larissa Ribeiro Santos",
    "componente": "MATEMÁTICA"
  },
  {
    "turma": "5EFB",
    "data": "2026-05-28",
    "professor": "Larissa Ribeiro Santos",
    "componente": "LÍNGUA PORTUGUESA"
  },
  {
    "turma": "5EFB",
    "data": "2026-06-01",
    "professor": "Larissa Ribeiro Santos",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "5EFB",
    "data": "2026-06-03",
    "professor": "Larissa Ribeiro Santos",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "5EFB",
    "data": "2026-06-08",
    "professor": "Larissa Ribeiro Santos",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "5EFB",
    "data": "2026-06-15",
    "professor": "Larissa Ribeiro Santos",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "5EFB",
    "data": "2026-06-17",
    "professor": "Larissa Ribeiro Santos",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "5EFB",
    "data": "2026-07-13",
    "professor": "Larissa Ribeiro Santos",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "5EFB",
    "data": "2026-08-10",
    "professor": "Larissa Ribeiro Santos",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-13",
    "professor": "Larissa Ribeiro Santos",
    "componente": "MATEMÁTICA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-13",
    "professor": "Larissa Ribeiro Santos",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-13",
    "professor": "Mônica Sperançolo",
    "componente": "MATEMÁTICA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-13",
    "professor": "Larissa Ribeiro Santos",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-13",
    "professor": "Larissa Ribeiro Santos",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-13",
    "professor": "Larissa Ribeiro Santos",
    "componente": "LÍNGUA PORTUGUESA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-13",
    "professor": "Mônica Sperançolo",
    "componente": "LÍNGUA PORTUGUESA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-13",
    "professor": "Mônica Sperançolo",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-13",
    "professor": "Mônica Sperançolo",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-13",
    "professor": "Mônica Sperançolo",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-13",
    "professor": "Mônica Sperançolo",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-13",
    "professor": "Mônica Sperançolo",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-19",
    "professor": "Kamila Kelly Tagliaferro Pradela",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-19",
    "professor": "Kamila Kelly Tagliaferro Pradela",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-19",
    "professor": "Kamila Kelly Tagliaferro Pradela",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-19",
    "professor": "Kamila Kelly Tagliaferro Pradela",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-19",
    "professor": "Annie de Fátima Martins Morelli",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-19",
    "professor": "Annie de Fátima Martins Morelli",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-19",
    "professor": "Annie de Fátima Martins Morelli",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-20",
    "professor": "Célia Regina dos Santos",
    "componente": "LÍNGUA PORTUGUESA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-20",
    "professor": "Célia Regina dos Santos",
    "componente": "MATEMÁTICA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-20",
    "professor": "Célia Regina dos Santos",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-20",
    "professor": "Célia Regina dos Santos",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-20",
    "professor": "Célia Regina dos Santos",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-21",
    "professor": "Camila Godoi Hirata",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-21",
    "professor": "Camila Godoi Hirata",
    "componente": "MATEMÁTICA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-21",
    "professor": "Camila Godoi Hirata",
    "componente": "LÍNGUA PORTUGUESA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-22",
    "professor": "Larissa Ribeiro Santos",
    "componente": "MATEMÁTICA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-22",
    "professor": "Mônica Sperançolo",
    "componente": "MATEMÁTICA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-22",
    "professor": "Mônica Sperançolo",
    "componente": "LÍNGUA PORTUGUESA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-23",
    "professor": "Larissa Ribeiro Santos",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-24",
    "professor": "Camila Godoi Hirata",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-24",
    "professor": "Camila Godoi Hirata",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-25",
    "professor": "Adriana de Almeida Vieira",
    "componente": "MATEMÁTICA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-25",
    "professor": "Adriana de Almeida Vieira",
    "componente": "LÍNGUA PORTUGUESA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-25",
    "professor": "Adriana de Almeida Vieira",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-25",
    "professor": "Adriana de Almeida Vieira",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-25",
    "professor": "Adriana de Almeida Vieira",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-26",
    "professor": "Danielle Gaglianone Semedo",
    "componente": "LÍNGUA INGLESA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-26",
    "professor": "Danielle Gaglianone Semedo dos Santos",
    "componente": "MATEMÁTICA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-26",
    "professor": "Danielle Gaglianone Semedo dos Santos",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-26",
    "professor": "Danielle Gaglianone Semedo dos Santos",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-26",
    "professor": "Danielle Gaglianone Semedo dos Santos",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-26",
    "professor": "Danielle Gaglianone Semedo dos Santos",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-27",
    "professor": "Larissa Ribeiro Santos",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-27",
    "professor": "Mônica Sperançolo",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-27",
    "professor": "Mônica Sperançolo",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-27",
    "professor": "Larissa Ribeiro Santos",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-27",
    "professor": "Larissa Ribeiro Santos",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-27",
    "professor": "Mônica Sperançolo",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-13",
    "professor": "Larissa Ribeiro Santos",
    "componente": "MATEMÁTICA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-13",
    "professor": "Larissa Ribeiro Santos",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-13",
    "professor": "Mônica Sperançolo",
    "componente": "MATEMÁTICA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-13",
    "professor": "Larissa Ribeiro Santos",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-13",
    "professor": "Larissa Ribeiro Santos",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-13",
    "professor": "Larissa Ribeiro Santos",
    "componente": "LÍNGUA PORTUGUESA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-13",
    "professor": "Mônica Sperançolo",
    "componente": "LÍNGUA PORTUGUESA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-13",
    "professor": "Mônica Sperançolo",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-13",
    "professor": "Mônica Sperançolo",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-13",
    "professor": "Mônica Sperançolo",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-13",
    "professor": "Mônica Sperançolo",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-13",
    "professor": "Mônica Sperançolo",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-19",
    "professor": "Kamila Kelly Tagliaferro Pradela",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-19",
    "professor": "Kamila Kelly Tagliaferro Pradela",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-19",
    "professor": "Kamila Kelly Tagliaferro Pradela",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-19",
    "professor": "Kamila Kelly Tagliaferro Pradela",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-19",
    "professor": "Annie de Fátima Martins Morelli",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-19",
    "professor": "Annie de Fátima Martins Morelli",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-19",
    "professor": "Annie de Fátima Martins Morelli",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-20",
    "professor": "Célia Regina dos Santos",
    "componente": "LÍNGUA PORTUGUESA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-20",
    "professor": "Célia Regina dos Santos",
    "componente": "MATEMÁTICA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-20",
    "professor": "Célia Regina dos Santos",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-20",
    "professor": "Célia Regina dos Santos",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-20",
    "professor": "Célia Regina dos Santos",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-21",
    "professor": "Camila Godoi Hirata",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-21",
    "professor": "Camila Godoi Hirata",
    "componente": "MATEMÁTICA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-21",
    "professor": "Camila Godoi Hirata",
    "componente": "LÍNGUA PORTUGUESA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-22",
    "professor": "Larissa Ribeiro Santos",
    "componente": "MATEMÁTICA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-22",
    "professor": "Mônica Sperançolo",
    "componente": "MATEMÁTICA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-22",
    "professor": "Mônica Sperançolo",
    "componente": "LÍNGUA PORTUGUESA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-23",
    "professor": "Larissa Ribeiro Santos",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-24",
    "professor": "Camila Godoi Hirata",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-24",
    "professor": "Camila Godoi Hirata",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-25",
    "professor": "Adriana de Almeida Vieira",
    "componente": "MATEMÁTICA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-25",
    "professor": "Adriana de Almeida Vieira",
    "componente": "LÍNGUA PORTUGUESA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-25",
    "professor": "Adriana de Almeida Vieira",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-25",
    "professor": "Adriana de Almeida Vieira",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-25",
    "professor": "Adriana de Almeida Vieira",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-26",
    "professor": "Danielle Gaglianone Semedo",
    "componente": "LÍNGUA INGLESA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-26",
    "professor": "Danielle Gaglianone Semedo dos Santos",
    "componente": "MATEMÁTICA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-26",
    "professor": "Danielle Gaglianone Semedo dos Santos",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-26",
    "professor": "Danielle Gaglianone Semedo dos Santos",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-26",
    "professor": "Danielle Gaglianone Semedo dos Santos",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-26",
    "professor": "Danielle Gaglianone Semedo dos Santos",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-27",
    "professor": "Larissa Ribeiro Santos",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-27",
    "professor": "Mônica Sperançolo",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-27",
    "professor": "Mônica Sperançolo",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-27",
    "professor": "Larissa Ribeiro Santos",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-27",
    "professor": "Larissa Ribeiro Santos",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-27",
    "professor": "Mônica Sperançolo",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Larissa Ribeiro Santos",
    "componente": "MATEMÁTICA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Larissa Ribeiro Santos",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Mônica Sperançolo",
    "componente": "MATEMÁTICA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Larissa Ribeiro Santos",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Larissa Ribeiro Santos",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Larissa Ribeiro Santos",
    "componente": "LÍNGUA PORTUGUESA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Mônica Sperançolo",
    "componente": "LÍNGUA PORTUGUESA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Mônica Sperançolo",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Mônica Sperançolo",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Mônica Sperançolo",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Mônica Sperançolo",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Mônica Sperançolo",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Kamila Kelly Tagliaferro Pradela",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Kamila Kelly Tagliaferro Pradela",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Kamila Kelly Tagliaferro Pradela",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Kamila Kelly Tagliaferro Pradela",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Annie de Fátima Martins Morelli",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Annie de Fátima Martins Morelli",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Annie de Fátima Martins Morelli",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Célia Regina dos Santos",
    "componente": "LÍNGUA PORTUGUESA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Célia Regina dos Santos",
    "componente": "MATEMÁTICA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Célia Regina dos Santos",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Célia Regina dos Santos",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Célia Regina dos Santos",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Camila Godoi Hirata",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Camila Godoi Hirata",
    "componente": "MATEMÁTICA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Camila Godoi Hirata",
    "componente": "LÍNGUA PORTUGUESA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Larissa Ribeiro Santos",
    "componente": "MATEMÁTICA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Mônica Sperançolo",
    "componente": "MATEMÁTICA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Mônica Sperançolo",
    "componente": "LÍNGUA PORTUGUESA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Larissa Ribeiro Santos",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Camila Godoi Hirata",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Camila Godoi Hirata",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Adriana de Almeida Vieira",
    "componente": "MATEMÁTICA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Adriana de Almeida Vieira",
    "componente": "LÍNGUA PORTUGUESA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Adriana de Almeida Vieira",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Adriana de Almeida Vieira",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Adriana de Almeida Vieira",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Danielle Gaglianone Semedo",
    "componente": "LÍNGUA INGLESA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Danielle Gaglianone Semedo dos Santos",
    "componente": "MATEMÁTICA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Danielle Gaglianone Semedo dos Santos",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Danielle Gaglianone Semedo dos Santos",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Danielle Gaglianone Semedo dos Santos",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Danielle Gaglianone Semedo dos Santos",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Larissa Ribeiro Santos",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Mônica Sperançolo",
    "componente": "GEOGRAFIA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Mônica Sperançolo",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Larissa Ribeiro Santos",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Larissa Ribeiro Santos",
    "componente": "HISTÓRIA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Mônica Sperançolo",
    "componente": "CIÊNCIAS DA NATUREZA"
  }
];