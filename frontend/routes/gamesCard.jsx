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
                        <p className="label">Gênero: {jogo.genero || "Sem gênero"}</p>
                    </div>

                    <div className="linha">
                        <p className="label">Plataforma: {jogo.plataforma || "Não cadastrada"}</p>
                    </div>

                    <div className="linha">
                        <p className="label">Ano de lançamento: {jogo.ano_lancamento || "Não cadastrada"}</p>
                    </div>

                    <div className="linha">
                        <p className="label">Desenvolvedora: {jogo.desenvolvedora || "Não cadastrada"}</p>
                    </div>

                    <div className="linha preco-baixo">
                        <p className="label">Preço: {jogo.preco}</p>
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