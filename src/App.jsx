import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

// const Header = ({title = "Galería de Imágenes con React"}) => {
//   return (
//     <header className="principal-header">
//       <h1 className="title-header">{title}</h1>
//     </header>
//   );
// };


const App = (props) => {

  // const title = "Galería de Imágenes con React";
  return (
    <>
      <Header title="Galería de Imágenes con React">
      </Header>
      <div className="images-container">
        <Card cardTitle="Fotito" cardDesc="Descripción genérica" imgUrl="https://picsum.photos/200" textBtn="Click Aquí"></Card>
        <Card cardTitle="Fotito" cardDesc="Descripción genérica" imgUrl="https://picsum.photos/200" textBtn="Click Aquí"></Card>
        <Card cardTitle="Fotito" cardDesc="Descripción genérica" imgUrl="https://picsum.photos/200" textBtn="Click Aquí"></Card>
        <Card cardTitle="Fotito" cardDesc="Descripción genérica" imgUrl="https://picsum.photos/200" textBtn="Click Aquí"></Card>
        <Card cardTitle="Fotito" cardDesc="Descripción genérica" imgUrl="https://picsum.photos/200" textBtn="Click Aquí"></Card>
        

      </div>
      <Footer></Footer>
    
    </>
  );
};

export default App;