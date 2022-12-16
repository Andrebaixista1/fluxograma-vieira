import Options from "../Options";
import "./Menu.css";

const Menu = (props) => {
    const op = ['Mensagens Cartão Beneficio/Entrante','Saudação','Margem Disponível']
    const itens = ['Whatsapp','SMS']
  return (
    <section className="Menu">
      <form>
        {/* <header className="title">Fluxograma de Vendas em Massa</header> */}
        <Options item={op} op={itens}/>
      </form>
    </section>
  );
};

export default Menu;
