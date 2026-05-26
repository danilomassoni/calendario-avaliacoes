const path = window.location.pathname;

// =========================
// INDEX.HTML
// =========================

if(path.includes("index.html") || path === "/"){

    carregarTurmas();

}

// =========================
// TURMA.HTML
// =========================

if(path.includes("turma.html")){

    carregarCalendario();

}

// =========================
// CARREGA TURMAS
// =========================

async function carregarTurmas(){

    const dados = provas;

    

    const turmas = [
        ...new Set(
            dados.map(item => item.turma)
        )
    ];

    turmas.sort();

    const container = document.getElementById(
        "turmasContainer"
    );

    turmas.forEach(turma => {

        const card = document.createElement("div");

        card.className = "card-turma";

        card.innerHTML = `
            <h2>${turma}</h2>
        `;

        card.onclick = () => {

            window.location.href =
                `turma.html?turma=${encodeURIComponent(turma)}`;

        };

        container.appendChild(card);

    });

}

// =========================
// CARREGA CALENDÁRIO
// =========================

async function carregarCalendario(){

    const params = new URLSearchParams(
        window.location.search
    );

    const turma = params.get("turma");

    document.getElementById(
        "tituloTurma"
    ).innerText = turma;

    const dados = provas;

    
    const provasTurma = dados.filter(
        item => item.turma === turma
    );

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

    meses.forEach((mes, index) => {

        const option = document.createElement(
            "option"
        );

        option.value = index;

        option.innerText = mes;

        select.appendChild(option);

    });

    select.addEventListener("change", () => {

        renderizarCalendario(
            provasTurma,
            parseInt(select.value)
        );
        renderizarListaMobile(
            provasTurma,
            parseInt(select.value)
        );

    });

    const mesAtual = new Date().getMonth();

    select.value = mesAtual;

    renderizarCalendario(
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
){

    const calendario = document.getElementById(
        "calendario"
    );

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

    diasSemana.forEach(dia => {

        const el = document.createElement("div");

        el.className = "dia-semana";

        el.innerText = dia;

        calendario.appendChild(el);

    });

    const ano = 2026;

    const primeiroDia = new Date(
        ano,
        mes,
        1
    ).getDay();

    const totalDias = new Date(
        ano,
        mes + 1,
        0
    ).getDate();

    // Espaços vazios
    for(let i = 0; i < primeiroDia; i++){

        const vazio = document.createElement("div");

        vazio.className = "dia vazio";

        calendario.appendChild(vazio);

    }

    // Dias
    for(let dia = 1; dia <= totalDias; dia++){

        const card = document.createElement("div");

        card.className = "dia";

        const numero = document.createElement("div");

        numero.className = "numero-dia";

        numero.innerText = dia;

        card.appendChild(numero);

        const provasDia = provas.filter(prova => {

            const data = new Date(prova.data);

            return (
                data.getMonth() === mes &&
                data.getDate() === dia
            );

        });

        provasDia.forEach(prova => {

            const provaEl = document.createElement(
                "div"
            );

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

function renderizarListaMobile(
    provas,
    mes
){

    const lista = document.getElementById(
        "listaMobile"
    );

    lista.innerHTML = "";

    const provasMes = provas.filter(prova => {

        const data = new Date(prova.data);

        return data.getMonth() === mes;

    });

    provasMes.sort((a,b) => {

        return new Date(a.data)
        - new Date(b.data);

    });

    provasMes.forEach(prova => {

        const data = new Date(prova.data);

        const dia = data.getDate();

        const item = document.createElement(
            "div"
        );

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

function acessarCalendario(){

    const rm = document
        .getElementById("rmInput")
        .value
        .trim();

    const aluno = alunos.find(
        item => item.rm === rm
    );

    if(!aluno){

        alert("RM não encontrado");

        return;

    }

    window.location.href =
        `turma.html?turma=${encodeURIComponent(aluno.turma)}`;

}