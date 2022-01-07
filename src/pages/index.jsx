import Head from "next/head";
import FooterEstaca from "../components/footerEstaca";
import EventCard from "../components/eventCard";
import NavBar from "../components/navbar";

export default function Home(props) {
  const eventos = props.calenderEventos.eventos
  
  return (
    <div>
      <Head>
        <title>Calendario Estaca Arapiraca</title>
        <meta
          name="description"
          content="Calendario de 2022 da estaca arapiraca"
        />
      </Head>
      <nav>
        <NavBar/>
      </nav>
      <main>
        <div className={"mx-auto bg-gray-700 py-2 min-h-screen"}>
          <div className={"flex flex-col gap-2 mx-auto items-center container"}>
            {
              eventos.map((evento,indice)=>{
                return(
                  <EventCard
                    key={evento.id}
                    dia={evento.dia}
                    mes={evento.mes}
                    hora={evento.hora}
                    evento={evento.evento}
                    descricao={evento.descricao}
                    organizacao={evento.organizacao}
                  />
                )
              })
            }
          </div>
        </div>
      </main>
      <FooterEstaca />
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(
    `https://calendario-estaca.vercel.app/api/eventos`
  );
  const data = await response.json();

  return {
    props: {
      calenderEventos: data,
    },
    revalidate: 60
  };
};
