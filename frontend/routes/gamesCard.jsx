import "../css/gamesCard.css";

function GamesCard({ jogo, toggleCard, cardAberto, deleteJogo, abrirFormularioUpdate }) {
    const aberto = cardAberto === jogo.id;

    return (
        <div
            className={`jogo ${aberto ? "ativo" : ""}`}
            onClick={() => toggleCard(jogo.id)}
        >
            {/* TOPO */}
            <div className="linha">
                <p className="nome">Nome: {jogo.nome}</p>

                {!aberto ? (
                    <p className="preco">Preço: {jogo.preco}</p>
                ) : (
                    <button
                        className="delete"
                        onClick={(e) => {
                            e.stopPropagation(); // evita fechar o card
                            const confirmar = window.confirm("Tem certeza que deseja deletar este jogo?");
                            if (confirmar) {
                                deleteJogo(jogo.id);
                            }
                        }}
                    >
                        Deletar ❌
                    </button>
                )}
            </div>

            {/* DETALHES */}
            {aberto && (
                <div className="detalhes">
                    <div className="linha">
                        <p className="label">
                            Gênero: <span className="valor">{jogo.genero || "Sem gênero"}</span>
                        </p>
                    </div>

                    <div className="linha">
                        <p className="label">
                            Plataforma: <span className="valor">{jogo.plataforma || "Não cadastrada"}</span>
                        </p>
                    </div>

                    <div className="linha">
                        <p className="label">
                        Ano de lançamento: <span className="valor">{jogo.ano_lancamento || "Não cadastrada"}</span>
                        </p>
                    </div>

                    <div className="linha">
                        <p className="label">
                            Desenvolvedora: <span className="valor">{jogo.desenvolvedora || "Não cadastrada"}</span>
                        </p>
                    </div>

                    <div className="linha preco-baixo">
                        <p className="label">
                            Preço: <span className="valor">{jogo.preco}</span>
                        </p>
                    </div>

                    <div className="button-update">
                        <button
                            className="update"
                            onClick={(e) => {
                                e.stopPropagation(); 
                                abrirFormularioUpdate(jogo); 
                            }}
                        >
                            Update ✏️
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default GamesCard;