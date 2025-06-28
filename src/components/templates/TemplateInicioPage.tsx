import CinemaImg from '../../assets/Cinema.jpg';
const TemplateInicioPage = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      <img src={CinemaImg} alt="Frente do cinema" className="max-w-full h-auto" />
    </section>
  );
};

export default TemplateInicioPage;