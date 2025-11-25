
export interface HomeProps {
    showFilters?: boolean
}

export default function Home({ showFilters = true }: HomeProps) {
    return (

        <div className="space-y-6">
            {/* HERO */}
            <section className="flex-1 px-4 py-4 sm:px-6 sm:py-6 flex items-center justify-center min-h-[30vh] px-2 text-center">
                <div className="
          w-full max-w-3xl
          rounded-[20px]
          border border-white/10
          bg-[rgba(255,255,255,0.06)]
          relative overflow-hidden p-6 sm:p-8
        ">
                    <div className="text-muted text-xs font-semibold uppercase tracking-[0.2em]">
                        Agenda &amp; Guia • Dourados/MS
                    </div>
                    <h1 className="mt-2 mb-4 text-2xl sm:text-3xl md:text-4xl font-extrabold">
                        Descubra o que rola na cidade e explore o melhor do turismo local.
                    </h1>
                    <p className="text-[0.95rem] sm:text-base text-[#cfe0fb] leading-relaxed">
                        Uma plataforma simples e poderosa para divulgar <strong>eventos</strong>, conhecer{" "}
                        <strong>pontos turísticos</strong> e cadastrar informações de{" "}
                        <strong>cidades da região</strong>. Visual inovador, rápido e acessível — agora em React.
                    </p>
                </div>
            </section>

            {/* BUSCA RÁPIDA (equivalente à filtros-wrap) */}
            {showFilters && (
                <section className="flex-1 px-4 py-4 sm:px-6 sm:py-6 rounded-[20px] border border-white/10 bg-[rgba(255,255,255,0.06)] p-4 sm:p-6">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">
                        Busca rápida
                    </div>

                    <div className="flex flex-col gap-4 md:flex-row">
                        <div className="flex-1 flex flex-col gap-1">
                            <label htmlFor="q" className="text-xs font-semibold text-muted uppercase">
                                Pesquisar
                            </label>
                            <input
                                id="q"
                                placeholder="Busque por título, local, categoria…"
                                className="
                  w-full rounded-xl border border-white/10
                  bg-[rgba(255,255,255,0.06)]
                  px-3 py-2 text-sm
                  focus:outline-none focus:ring-2 focus:ring-brand1
                "
                            />
                        </div>

                        <div className="flex-1 flex flex-col gap-1">
                            <label htmlFor="f-cat" className="text-xs font-semibold text-muted uppercase">
                                Categoria
                            </label>
                            <select
                                id="f-cat"
                                className="
                  w-full rounded-xl border border-white/10
                  bg-[rgba(255,255,255,0.06)]
                  px-3 py-2 text-sm
                  focus:outline-none focus:ring-2 focus:ring-brand1
                "
                            >
                                <option value="">Todas</option>
                                <option>Show</option>
                                <option>Esporte</option>
                                <option>Feira</option>
                                <option>Teatro</option>
                                <option>Gastronomia</option>
                            </select>
                        </div>

                        <div className="flex-1 flex flex-col gap-1">
                            <label htmlFor="f-data" className="text-xs font-semibold text-muted uppercase">
                                A partir de
                            </label>
                            <input
                                type="date"
                                id="f-data"
                                className="
                  w-full rounded-xl border border-white/10
                  bg-[rgba(255,255,255,0.06)]
                  px-3 py-2 text-sm
                  focus:outline-none focus:ring-2 focus:ring-brand1
                "
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-4">
                        <button
                            type="button"
                            className="
                px-4 py-2 rounded-xl border border-white/10
                bg-[rgba(255,255,255,0.06)]
                text-sm font-semibold
              "
                        >
                            Aplicar filtros
                        </button>
                        <button
                            type="button"
                            className="
                px-4 py-2 rounded-xl border border-white/10
                bg-[rgba(255,255,255,0.06)]
                text-sm font-semibold
              "
                        >
                            Limpar
                        </button>
                        <button
                            type="button"
                            className="
                px-4 py-2 rounded-xl border border-brand3/60
                bg-gradient-to-r from-brand1/30 to-brand3/30
                text-sm font-semibold
              "
                        >
                            + Novo evento
                        </button>
                    </div>
                </section>
            )}

            {/* SEÇÃO EVENTOS (equiv. #tab-eventos) */}
            <section aria-label="Lista de eventos" className="flex-1 px-4 py-4 sm:px-6 sm:py-6 space-y-3">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg sm:text-xl font-semibold">Eventos em destaque</h2>
                    <span className="text-xs text-muted">Em breve: dados reais e filtros</span>
                </div>
                <div
                    className="
            grid gap-4
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          "
                >
                    {/* Placeholder: depois a gente conecta com o módulo de eventos */}
                    <div className="rounded-[20px] border border-white/10 bg-[rgba(255,255,255,0.04)] p-4 text-sm text-muted">
                        Aqui vamos renderizar os cards de eventos usando componentes React (próxima etapa,
                        junto com a página Eventos).
                    </div>
                </div>
            </section>

            {/* SEÇÃO TURISMO (equiv. #tab-turismo) */}
            <section aria-label="Pontos turísticos" className="space-y-3">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg sm:text-xl font-semibold">Pontos turísticos</h2>
                    <span className="text-xs text-muted">Integração com a página Turismo</span>
                </div>

                <div className="grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
                    <div className="space-y-3">
                        <div className="rounded-[20px] border border-white/10 bg-[rgba(255,255,255,0.04)] p-4 text-sm text-muted">
                            Aqui entra o seletor de cidade + lista de pontos turísticos, que hoje você monta pelo
                            JavaScript da index. Vamos migrar essa lógica para React quando convertermos a página
                            de Turismo.
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="rounded-[20px] border border-white/10 bg-[rgba(255,255,255,0.04)] p-4">
                            <h3 className="font-semibold mb-1">Sobre</h3>
                            <p className="text-sm text-muted">
                                Cadastre e gerencie pontos turísticos de Dourados e adicione cidades da região para
                                ampliar o guia.
                            </p>
                        </div>
                        <div className="rounded-[20px] border border-white/10 bg-[rgba(255,255,255,0.04)] p-4">
                            <h3 className="font-semibold mb-1">Dica rápida</h3>
                            <p className="text-sm text-muted">
                                Clicando em um cartão, você vê os detalhes completos e pode editar as informações.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEÇÃO CIDADES (equiv. #tab-cidades) */}
            <section aria-label="Cidades da região" className="space-y-3">
                <h2 className="text-lg sm:text-xl font-semibold">Cidades da região</h2>
                <div className="rounded-[20px] border border-white/10 bg-[rgba(255,255,255,0.04)] p-4 text-sm text-muted">
                    Nesta área vamos listar as cidades cadastradas, com as mesmas ações da sua versão atual
                    (ver, editar, excluir), mas usando estado React ao invés de manipulação direta de DOM.
                </div>
            </section>

            {/* FOOTER */}
            <footer className="pt-6 mt-4 border-t border-white/10 text-center text-xs text-muted">
                Dourados+ • Projeto Inovador • Turma 2024.45.253 • Senac-MS.
            </footer>
        </div>
    );
}
