import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

const App = () => {

  // const title = "Galería de Imágenes con React";
  return (
    <>
      <Header title="Galería de Imágenes con React">
      </Header>
      <div className="images-container">
        <Card cardTitle="Fotito Nro. 1" cardDesc="Descripción genérica fotito nro. 1" imgUrl="https://picsum.photos/200" textBtn="Click Aquí"></Card>
        <Card cardTitle="Fotito Nro. 2" cardDesc="Descripción genérica fotito nro. 2" imgUrl="https://picsum.photos/190" textBtn="Click Aquí"></Card>
        <Card cardTitle="Fotito Nro. 3" cardDesc="Descripción genérica fotito nro. 3" imgUrl="https://picsum.photos/195" textBtn="Click Aquí"></Card>
        <Card cardTitle="Fotito Nro. 4" cardDesc="Descripción genérica fotito nro. 4" imgUrl="https://picsum.photos/205" textBtn="Click Aquí"></Card>
      </div>
      <Footer></Footer>
    
    </>
  );
};

export default App;