import { useEffect, useState } from 'react';
import '../css/App.css';
import GamesCard from '../routes/gamesCard.jsx';

function App() {
    const [data, setData] = useState([]);
    const [cardAberto, setCardAberto] = useState(null);
    const [mostrarForm, setMostrarForm] = useState(false);

    // estados do formulário
    const [form, setForm] = useState({
        nome: "",
        genero: "",
        plataforma: "",
        preco: "",
        ano_lancamento: "",
        desenvolvedora: ""
    });

    const [formId, setFormId] = useState(null); // id do jogo que está sendo editado

    // FUNÇÃO PARA ABRIR/CERRAR CARD
    function toggleCard(id) {
        setCardAberto(cardAberto === id ? null : id);
    }

    // FUNÇÃO PARA ATUALIZAR FORMULÁRIO
    function adicionarNovoJogo(e) {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    }

    // FUNÇÃO PARA COLETAR JOGOS
    function getJogos() {
        fetch("http://localhost:8800/")
            .then(response => response.json())
            .then((data) => setData(data))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        getJogos();
    }, []);

    // DELETE
    function deleteJogos(id) {
        const confirmar = window.confirm("Tem certeza que deseja deletar este jogo?");
        if (!confirmar) return; 
        fetch(`http://localhost:8800/${id}`, { method: "DELETE" })
            .then(() => getJogos())
            .catch(err => console.error(err));
    }

    // ABRIR FORMULÁRIO PARA UPDATE
    function abrirFormularioUpdate(jogo) {
        setForm({
            nome: jogo.nome,
            genero: jogo.genero,
            plataforma: jogo.plataforma,
            preco: jogo.preco,
            ano_lancamento: jogo.ano_lancamento,
            desenvolvedora: jogo.desenvolvedora
        });
        setFormId(jogo.id);
        setMostrarForm(true);
    }

    // FUNÇÃO UNIFICADA PARA SALVAR (POST OU PUT)
    function salvarJogo(e) {
        e.preventDefault();

        const jogoParaEnviar = {
            ...form,
            preco: parseFloat(form.preco),
            ano_lancamento: parseInt(form.ano_lancamento)
        };

        if (formId) {
            // UPDATE
            fetch(`http://localhost:8800/${formId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(jogoParaEnviar)
            })
            .then(() => {
                getJogos();
                resetForm();
            })
            .catch(err => console.error(err));
        } else {
            // ADD
            fetch("http://localhost:8800/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(jogoParaEnviar)
            })
            .then(() => {
                getJogos();
                resetForm();
            })
            .catch(err => console.error(err));
        }
    }

    // RESETAR FORMULÁRIO
    function resetForm() {
        setForm({
            nome: "",
            genero: "",
            plataforma: "",
            preco: "",
            ano_lancamento: "",
            desenvolvedora: ""
        });
        setFormId(null);
        setMostrarForm(false);
    }

    return (
        <div className="container">
            <div className="titulo">
                <h1>Jogos</h1>
            </div>

            <div className="card">
                {!mostrarForm ? (
                    <div className="getJogos">
                        {data.map((jogo) => (
                            <GamesCard
                                key={jogo.id}
                                jogo={jogo}
                                toggleCard={toggleCard}
                                cardAberto={cardAberto}
                                deleteJogo={deleteJogos}
                                abrirFormularioUpdate={abrirFormularioUpdate} // passa a função para o card
                            />
                        ))}
                    </div>
                ) : (
                    <form className="form" onSubmit={salvarJogo}> 
                        <div className="sair">
                            <button
                                className="sair-button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    resetForm();
                                }}
                            >
                                Sair
                            </button>
                        </div>

                        <input name="nome" placeholder="Nome" value={form.nome} onChange={adicionarNovoJogo} />
                        <input name="genero" placeholder="Gênero" value={form.genero} onChange={adicionarNovoJogo} />
                        <input name="plataforma" placeholder="Plataforma" value={form.plataforma} onChange={adicionarNovoJogo} />
                        <input name="preco" placeholder="Preço" value={form.preco} onChange={adicionarNovoJogo} />
                        <input name="ano_lancamento" placeholder="Ano de lançamento" value={form.ano_lancamento} onChange={adicionarNovoJogo} />
                        <input name="desenvolvedora" placeholder="Desenvolvedora" value={form.desenvolvedora} onChange={adicionarNovoJogo} />

                        <button className="salvar" type="submit">
                            {formId ? "Atualizar" : "Salvar"}
                        </button>
                    </form>
                )}
            </div>

            <button className="button" onClick={() => setMostrarForm(!mostrarForm)}>
                {mostrarForm ? "Voltar" : "Adicionar jogos"}
            </button>

			roda pé 
			Hugo Fagundes Faria Santos 
        </div>
    );
}

export default App;