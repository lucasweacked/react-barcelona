import "./App.css";

export default function App() {
  return (
    <>
      <header className="cabecalho">
        <section className="cabecalho__menu">
          <ul className="cabecalho__menu__link">
            <li className="cabecalho__menu__link__links">
              <a href="#">INÍCIO</a>
            </li>
            <li id="link1" className="cabecalho__menu__link__links">
              <a href="#">HISTÓRIA</a>
            </li>
            <li id="link2" className="cabecalho__menu__link__links">
              <a href="#">LA MASIA</a>
            </li>
          </ul>

          <img
            src="./img/fc-barcelona_logo.svg"
            alt="Logo Barcelona"
            className="cabecalho__menu__logo"
          />

          <ul className="cabecalho__menu__link">
            <li id="link3" className="cabecalho__menu__link__links">
              <a href="#">TITULOS</a>
            </li>
            <li id="link4" className="cabecalho__menu__link__links">
              <a href="#">LEGENDS</a>
            </li>
            <li id="link5" className="cabecalho__menu__link__links">
              <a href="#">PLANTEL</a>
            </li>
          </ul>
        </section>
      </header>

      <main className="principal">
        <section className="principal__conteudo">
          <h2 className="principal__conteudo__titulo">HISTÓRIA</h2>

          <section className="principal__conteudo__sobre">
            <p className="principal__conteudo__paragrafo">
              Fundado em 29 de novembro de 1899 por um grupo de visionários
              liderados por Hans Nils Jakob Gamper, o FC Barcelona surgiu com
              uma missão única: ser mais do que apenas um clube de futebol.
              Desde o início, o Barça representou o orgulho e a identidade
              catalã, tornando-se um símbolo de resistência cultural e um elo
              forte de união para a região da Catalunha. Em um período marcado
              por mudanças sociais e políticas, o clube se tornou uma força
              unificadora, promovendo valores como a diversidade, inclusão e
              autonomia cultural, elementos que continuam a ser fundamentais em
              sua essência até hoje.
            </p>

            <p className="principal__conteudo__paragrafo">
              Nos primeiros anos de sua trajetória, o Barcelona conquistou
              títulos regionais e ganhou destaque no cenário nacional. Em 1929,
              o clube venceu a primeira edição da La Liga, consolidando sua
              posição no futebol espanhol. Suas cores azul e grená, juntamente
              com o escudo que simboliza a Catalunha, tornaram-se ícones
              representativos da identidade catalã, marcando uma forte ligação
              entre o clube e a região. Essa associação cultural única
              contribuiu para sua relevância, não apenas como time, mas como um
              símbolo de resistência cultural diante das pressões políticas
              vindas de Madrid e da centralização espanhola.
            </p>

            <p className="principal__conteudo__paragrafo">
              O Barcelona viveu várias eras douradas ao longo de sua história,
              com destaque para as décadas de 1990 e início dos anos 2000. Sob a
              liderança de treinadores lendários como Johan Cruyff e Pep
              Guardiola, o clube não apenas alcançou sucessos esportivos, mas
              também redefiniu o conceito de futebol total, impondo um estilo de
              jogo icônico, onde o talento e o espírito coletivo prevaleciam.
              Durante esses anos, nomes como Ronaldinho, Xavi Hernández, Andrés
              Iniesta e Lionel Messi transcenderam o campo e se tornaram ícones
              globais, elevando o Barcelona ao status de um dos maiores clubes
              da história.
            </p>

            <p className="principal__conteudo__paragrafo">
              Além de suas conquistas esportivas, o Barcelona sempre desempenhou
              um papel crucial na defesa da cultura e identidade catalã. O lema
              'Més que un club' (Mais que um clube) reflete o compromisso do
              clube não apenas com o futebol, mas com a promoção da cultura
              catalã. Desde a defesa da língua e da identidade regional até o
              apoio a causas sociais e políticas, o Barça se mantém como um
              símbolo de resistência e autonomia, tanto dentro quanto fora do
              campo.
            </p>

            <p className="principal__conteudo__paragrafo">
              A rivalidade com o Real Madrid é um dos aspectos mais marcantes e
              emocionantes da história do futebol. Os clássicos entre o Barça e
              o Real não são apenas jogos de futebol, mas disputas que
              transcendem o esporte, simbolizando o confronto entre a identidade
              catalã e a centralização espanhola. Esses confrontos intensos
              representam muito mais do que vitórias e derrotas, eles estão
              enraizados nas questões culturais e políticas que definem a
              Catalunha como uma região com um forte desejo de independência e
              reconhecimento.
            </p>

            <p className="principal__conteudo__paragrafo">
              Hoje, o FC Barcelona é reconhecido globalmente por sua rica
              história, seu estilo de jogo inovador e sua profunda conexão com
              seus torcedores. Mesmo diante dos desafios modernos, como mudanças
              econômicas, políticas e esportivas, o clube mantém sua relevância
              como uma potência mundial. A paixão, tradição e inovação continuam
              sendo a base do legado do Barcelona, tornando-o mais do que apenas
              um clube — uma verdadeira instituição cultural e esportiva.
            </p>
          </section>
        </section>
      </main>

      <div className="faixa"></div>

      <section className="la_masia">
        <section className="la_masia__conteudo">
          <h2 className="la_masia__conteudo__titulo">LA MASIA</h2>

          <section className="la_masia__conteudo__sobre">
            <p className="la_masia__conteudo__paragrafo">
              La Masia é o renomado centro de formação de base do FC Barcelona,
              estabelecido em 1979, com o objetivo de cultivar jovens talentos e
              integrá-los ao time principal do clube. Desde sua criação, La
              Masia se destacou pela sua abordagem inovadora no desenvolvimento
              de jogadores, focando não apenas nas habilidades técnicas, mas
              também nos aspectos éticos, comportamentais e educacionais.
            </p>

            <p className="la_masia__conteudo__paragrafo">
              La Masia foi projetada para ser um local onde os jovens atletas
              pudessem se desenvolver em um ambiente familiar e acolhedor,
              promovendo os valores do clube, como respeito, humildade, trabalho
              em equipe e paixão pelo jogo. O centro se tornou uma das maiores
              referências no mundo da formação de jovens talentos.
            </p>

            <p className="la_masia__conteudo__paragrafo">
              A filosofia de La Masia é fortemente baseada no estilo de jogo
              conhecido como "tiki-taka", um jogo coletivo e dinâmico que
              enfatiza a posse da bola, controle e leitura de jogo. Os
              treinadores em La Masia incentivam a criatividade, a visão de jogo
              e a tomada de decisões rápidas, permitindo que os jogadores
              desenvolvam um futebol inteligente e bem-sucedido.
            </p>

            <p className="la_masia__conteudo__paragrafo">
              Ao longo dos anos, La Masia produziu uma série de jogadores
              icônicos que contribuíram significativamente para o sucesso do FC
              Barcelona e do futebol mundial. Alguns dos principais jogadores
              formados em La Masia incluem: Lionel Messi, Xavi Hernández, Andrés
              Iniesta, Sergio Busquets, Gerard Piqué e Cesc Fàbregas.
            </p>

            <p className="la_masia__conteudo__paragrafo">
              Além do desenvolvimento esportivo, La Masia também foca na
              formação acadêmica e social dos jogadores. Os atletas recebem
              educação formal para garantir que estejam bem preparados para a
              vida fora do futebol, promovendo um crescimento equilibrado entre
              o aspecto esportivo e pessoal.
            </p>

            <p className="la_masia__conteudo__paragrafo">
              La Masia continua a ser um pilar central para a sustentabilidade
              do FC Barcelona, não apenas fornecendo talentos excepcionais para
              o time principal, mas também ajudando a manter a identidade,
              filosofia e sucesso do clube ao longo dos anos. Seu legado
              permanece sendo uma referência no mundo do futebol para a formação
              de jovens atletas.
            </p>
          </section>
        </section>
      </section>
    </>
  );
}
