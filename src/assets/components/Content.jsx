import { useEffect, useState } from "react";
import { useRef } from "react";
import "../styles/Content.css";
import Loader from "./Loader";

function Content(params) {

  // const [loading, setLoading] = useState(true);
  const argument = useRef();

  useEffect(() => {
      let tree = argument.current.querySelectorAll("li");
      const observer = new IntersectionObserver(entries => {
        entries.forEach((enter) => {
          if (enter.intersectionRatio >= 0.8) {
            enter.target.classList.add('active')
          }
        })
      }, {
        threshold: [0, 0.8, 1]
      })
      tree.forEach(element => {
        observer.observe(element)
      });
  }, [])

  return (
    <>
      <section className="content">
        <div className="topContent">
          <h1>Benefícios Principais:</h1>

          <ul className="argument" ref={argument}>
            <li>
              <i className="bi bi-alarm"></i>
              <span>
                <b>Flexibilidade de Horário: </b>Trabalhe quando e onde quiser, adequando o seu negócio aos seus compromissos e estilo de vida.
              </span>
            </li>
            <li>
              <i className="bi bi-bar-chart"></i>
              <span>
                <b>Potencial de Ganho Ilimitado: </b>
                Comissionamento generoso e incentivos por desempenho, permitindo que você ganhe conforme o seu esforço e dedicação.
              </span>
            </li>
            <li>
              <i className="bi bi-person-raised-hand"></i>
              <span>
                <b>Treinamento e Suporte Profissional: </b> Conte com o nosso suporte contínuo e treinamento especializado para alcançar o sucesso no seu negócio de marketing de redes.
              </span>
            </li>
          </ul>
        </div>

        {/* {loading?(<Loader position={"absolute"}/>): ("")} */}
      </section>

    </>
  );
}
export default Content;