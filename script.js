const path = window.location.pathname;

// =========================
// FUNÇÃO AUXILIAR
// =========================

function parseDate(str) {

    const [year, month, day] = str.split("-");

    return new Date(year, month - 1, day);

}

// =========================
// INDEX.HTML
// =========================

if (
    path.includes("index.html") ||
    path === "/" ||
    path.endsWith("/")
) {

    inicializarIndex();

}

// =========================
// TURMA.HTML
// =========================

if (path.includes("turma.html")) {

    carregarCalendario();

}

// =========================
// INICIALIZA INDEX
// =========================

function inicializarIndex() {

    const input = document.getElementById("rmInput");

    if (!input) return;

    // ENTER para acessar
    input.addEventListener("keypress", (e) => {

        if (e.key === "Enter") {

            acessarCalendario();

        }

    });

}

// =========================
// LOGIN RM
// =========================

function acessarCalendario() {

    const rm = document
        .getElementById("rmInput")
        .value
        .trim();

    if (!rm) {

        alert("Digite o RM");

        return;

    }

    const aluno = alunos.find(
        item => item.rm.trim() === rm
    );

    if (!aluno) {

        alert("RM não encontrado");

        return;

    }

    window.location.href =
        `turma.html?turma=${encodeURIComponent(aluno.turma)}`;

}

// =========================
// CARREGA CALENDÁRIO
// =========================

function carregarCalendario() {

    const params = new URLSearchParams(
        window.location.search
    );

    const turma = params.get("turma");

    if (!turma) {

        alert("Turma não encontrada");

        return;

    }

    const titulo = document.getElementById(
        "tituloTurma"
    );

    if (titulo) {

        titulo.innerText = turma;

    }

    // =========================
    // FILTRA EVENTOS
    // =========================

    const provasTurma = provas.filter(item => {

        // EVENTOS GERAIS
        if (
            item.turmas &&
            item.turmas.includes("*")
        ) {

            return true;

        }

        // MÚLTIPLAS TURMAS
        if (item.turmas) {

            return item.turmas.includes(turma);

        }

        // TURMA ÚNICA
        if (item.turma) {

            return item.turma === turma;

        }

        return false;

    });

    // =========================
    // MESES
    // =========================

    const meses = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ];

    const select = document.getElementById(
        "mesSelect"
    );

    select.innerHTML = "";

    meses.forEach((mes, index) => {

        const option =
            document.createElement("option");

        option.value = index;

        option.innerText = mes;

        select.appendChild(option);

    });

    // =========================
    // ALTERAÇÃO DE MÊS
    // =========================

    select.addEventListener("change", () => {

        const mesSelecionado =
            parseInt(select.value);

        renderizarCalendario(
            provasTurma,
            mesSelecionado
        );

        renderizarListaMobile(
            provasTurma,
            mesSelecionado
        );

    });

    // =========================
    // MÊS ATUAL
    // =========================

    const mesAtual =
        new Date().getMonth();

    select.value = mesAtual;

    renderizarCalendario(
        provasTurma,
        mesAtual
    );

    renderizarListaMobile(
        provasTurma,
        mesAtual
    );

}

// =========================
// RENDERIZA CALENDÁRIO
// =========================

function renderizarCalendario(
    provas,
    mes
) {

    const calendario =
        document.getElementById("calendario");

    if (!calendario) return;

    calendario.innerHTML = "";

    const diasSemana = [
        "Dom",
        "Seg",
        "Ter",
        "Qua",
        "Qui",
        "Sex",
        "Sáb"
    ];

    // =========================
    // CABEÇALHO
    // =========================

    diasSemana.forEach(dia => {

        const el =
            document.createElement("div");

        el.className = "dia-semana";

        el.innerText = dia;

        calendario.appendChild(el);

    });

    // =========================
    // DATAS
    // =========================

    const ano = 2026;

    const primeiroDia =
        new Date(ano, mes, 1).getDay();

    const totalDias =
        new Date(ano, mes + 1, 0).getDate();

    // =========================
    // ESPAÇOS VAZIOS
    // =========================

    for (let i = 0; i < primeiroDia; i++) {

        const vazio =
            document.createElement("div");

        vazio.className = "dia vazio";

        calendario.appendChild(vazio);

    }

    // =========================
    // DIAS
    // =========================

    for (let dia = 1; dia <= totalDias; dia++) {

        const card =
            document.createElement("div");

        card.className = "dia";

        const numero =
            document.createElement("div");

        numero.className = "numero-dia";

        numero.innerText = dia;

        card.appendChild(numero);

        // =========================
        // EVENTOS DO DIA
        // =========================

        const provasDia = provas.filter(prova => {

            const data =
                parseDate(prova.data);

            return (
                data.getMonth() === mes &&
                data.getDate() === dia
            );

        });

        // ORDENA EVENTOS
        provasDia.sort((a, b) => {

            return (
                parseDate(a.data) -
                parseDate(b.data)
            );

        });

        // =========================
        // RENDERIZA EVENTOS
        // =========================

        provasDia.forEach(prova => {

            const provaEl =
                document.createElement("div");

            provaEl.className = "prova";

            provaEl.innerHTML = `

                <div class="componente">
                    ${prova.componente}
                </div>

                <div class="professor">
                    ${prova.professor}
                </div>

            `;

            card.appendChild(provaEl);

        });

        calendario.appendChild(card);

    }

}

// =========================
// LISTA MOBILE
// =========================

function renderizarListaMobile(
    provas,
    mes
) {

    const lista =
        document.getElementById("listaMobile");

    if (!lista) return;

    lista.innerHTML = "";

    // =========================
    // FILTRA MÊS
    // =========================

    const provasMes = provas.filter(prova => {

        const data =
            parseDate(prova.data);

        return data.getMonth() === mes;

    });

    // =========================
    // ORDENA
    // =========================

    provasMes.sort((a, b) => {

        return (
            parseDate(a.data) -
            parseDate(b.data)
        );

    });

    // =========================
    // RENDERIZA
    // =========================

    provasMes.forEach(prova => {

        const data =
            parseDate(prova.data);

        const dia = data.getDate();

        const item =
            document.createElement("div");

        item.className = "item-lista";

        item.innerHTML = `

            <div class="item-data">

                Dia ${dia}

            </div>

            <div class="item-componente">

                ${prova.componente}

            </div>

            <div class="item-professor">

                ${prova.professor}

            </div>

        `;

        lista.appendChild(item);

    });

}