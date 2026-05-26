const provas = [
  {
    "turma": "1EMA",
    "data": "2026-04-24",
    "professor": "Massoni",
    "componente": "nan"
  },
  {
    "turma": "1EMB",
    "data": "2026-04-29",
    "professor": "Massoni",
    "componente": "nan"
  },
  {
    "turma": "1EMC",
    "data": "2026-04-03",
    "professor": "Massoni",
    "componente": "nan"
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
    "turma": "2EMB",
    "data": "2026-04-24",
    "professor": "Massoni",
    "componente": "nan"
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
    "data": "2026-06-15",
    "professor": "Annie de Fátima Martins Morellil",
    "componente": "MATEMÁTICA"
  },
  {
    "turma": "3EFA",
    "data": "2026-06-16",
    "professor": "Annie de Fátima Martins Morelli",
    "componente": "LÍNGUA PORTUGUESA"
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
    "data": "2026-06-15",
    "professor": "Kamila Kelly Tagliaferro Pradela",
    "componente": "LÍNGUA PORTUGUESA"
  },
  {
    "turma": "3EFB",
    "data": "2026-06-16",
    "professor": "kamila Kelly Tagliaferro Pradela",
    "componente": "MATEMÁTICA"
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
    "turma": "4EFB",
    "data": "2026-04-08",
    "professor": "Zezinho",
    "componente": "PE"
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
    "turma": "5EFB",
    "data": "2026-05-25",
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
    "turma": "6EFA",
    "data": "2026-04-14",
    "professor": "DDSDS",
    "componente": "nan"
  },
  {
    "turma": "6EFA",
    "data": "2026-04-18",
    "professor": "Danilo",
    "componente": "nan"
  },
  {
    "turma": "6EFB",
    "data": "2026-04-20",
    "professor": "Danilo",
    "componente": "nan"
  },
  {
    "turma": "7EFA",
    "data": "2026-04-29",
    "professor": "Danilo",
    "componente": "nan"
  },
  {
    "turma": "8EFC",
    "data": "2026-04-30",
    "professor": "Danilo",
    "componente": "nan"
  },
  {
    "turma": "9EFB",
    "data": "2026-04-16",
    "professor": "DDSDS",
    "componente": "nan"
  },
  {
    "turma": "FASE IV A",
    "data": "2026-05-22",
    "professor": "Juan",
    "componente": "PROGRAMAÇÃO E ROBÓTICA"
  },
  {
    "turma": "FASE IV A",
    "data": "2026-05-22",
    "professor": "Danilo",
    "componente": "ARTES"
  },
  {
    "turma": "FASE IV A",
    "data": "2026-05-22",
    "professor": "Danilo",
    "componente": "ARTES"
  },
  {
    "turma": "FASE IV A",
    "data": "2026-05-22",
    "professor": "Danilo",
    "componente": "BIOLOGIA"
  },
  {
    "turma": "FASE IV A",
    "data": "2026-05-22",
    "professor": "Juan",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "FASE IV A",
    "data": "2026-05-22",
    "professor": "Danilo",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "FASE IV A",
    "data": "2026-05-22",
    "professor": "Juan",
    "componente": "EDUCAÇÃO FÍSICA"
  },
  {
    "turma": "FASE IV A",
    "data": "2026-05-22",
    "professor": "Joazinho",
    "componente": "ARTES"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-04-13",
    "professor": "DDSDS",
    "componente": "nan"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-04-13",
    "professor": "Danilo",
    "componente": "nan"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-04-14",
    "professor": "Massoni",
    "componente": "nan"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-04-14",
    "professor": "Zezinho",
    "componente": "PE"
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
    "professor": "kamila Kelly Tagliaferro Pradela",
    "componente": "MATEMÁTICA"
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
    "professor": "Kamila Kelly Tagliaferro Pradela",
    "componente": "LÍNGUA PORTUGUESA"
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
    "professor": "Annie de Fátima Martins Morellil",
    "componente": "MATEMÁTICA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-19",
    "professor": "Annie de Fátima Martins Morelli",
    "componente": "LÍNGUA PORTUGUESA"
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
    "professor": "Juan",
    "componente": "PROGRAMAÇÃO E ROBÓTICA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-21",
    "professor": "Danilo",
    "componente": "ARTES"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-21",
    "professor": "Danilo",
    "componente": "ARTES"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-21",
    "professor": "Danilo",
    "componente": "BIOLOGIA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-21",
    "professor": "Juan",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-21",
    "professor": "Danilo",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-21",
    "professor": "Juan",
    "componente": "EDUCAÇÃO FÍSICA"
  },
  {
    "turma": "HORA DE CONCLUSÃO",
    "data": "2026-05-21",
    "professor": "Joazinho",
    "componente": "ARTES"
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
    "turma": "HORA DE INÍCIO",
    "data": "2026-04-13",
    "professor": "DDSDS",
    "componente": "nan"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-04-13",
    "professor": "Danilo",
    "componente": "nan"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-04-14",
    "professor": "Massoni",
    "componente": "nan"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-04-14",
    "professor": "Zezinho",
    "componente": "PE"
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
    "professor": "kamila Kelly Tagliaferro Pradela",
    "componente": "MATEMÁTICA"
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
    "professor": "Kamila Kelly Tagliaferro Pradela",
    "componente": "LÍNGUA PORTUGUESA"
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
    "professor": "Annie de Fátima Martins Morellil",
    "componente": "MATEMÁTICA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-19",
    "professor": "Annie de Fátima Martins Morelli",
    "componente": "LÍNGUA PORTUGUESA"
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
    "professor": "Juan",
    "componente": "PROGRAMAÇÃO E ROBÓTICA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-21",
    "professor": "Danilo",
    "componente": "ARTES"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-21",
    "professor": "Danilo",
    "componente": "ARTES"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-21",
    "professor": "Danilo",
    "componente": "BIOLOGIA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-21",
    "professor": "Juan",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-21",
    "professor": "Danilo",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-21",
    "professor": "Juan",
    "componente": "EDUCAÇÃO FÍSICA"
  },
  {
    "turma": "HORA DE INÍCIO",
    "data": "2026-05-21",
    "professor": "Joazinho",
    "componente": "ARTES"
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
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "DDSDS",
    "componente": "nan"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Danilo",
    "componente": "nan"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Massoni",
    "componente": "nan"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Zezinho",
    "componente": "PE"
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
    "professor": "kamila Kelly Tagliaferro Pradela",
    "componente": "MATEMÁTICA"
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
    "professor": "Kamila Kelly Tagliaferro Pradela",
    "componente": "LÍNGUA PORTUGUESA"
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
    "professor": "Annie de Fátima Martins Morellil",
    "componente": "MATEMÁTICA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Annie de Fátima Martins Morelli",
    "componente": "LÍNGUA PORTUGUESA"
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
    "professor": "Juan",
    "componente": "PROGRAMAÇÃO E ROBÓTICA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Danilo",
    "componente": "ARTES"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Danilo",
    "componente": "ARTES"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Danilo",
    "componente": "BIOLOGIA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Juan",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Danilo",
    "componente": "CIÊNCIAS DA NATUREZA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Juan",
    "componente": "EDUCAÇÃO FÍSICA"
  },
  {
    "turma": "ID",
    "data": "1970-01-01",
    "professor": "Joazinho",
    "componente": "ARTES"
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
  }
];