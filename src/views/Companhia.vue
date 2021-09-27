<template>
  <div class="companhia">
    <b-container>
      <div>
        <!-- esquerda -->
        <b-row align-v="center" class="mt-5">
          <b-col
            order="1"
            class="d-flex justify-content-end pr-4 animate__animated animate__fadeInLeft"
            sm="6"
            md="6"
            lg="6"
            xl="6"
            ><h6 class="title ">O que é ISTO?</h6></b-col
          >
          <b-col
            order="2"
            class="d-flex justify-content-center pl-4 animate__animated animate__fadeInRight"
            sm="6"
            md="6"
            lg="6"
            xl="6"
            ><p>
              Sé há espectáculos que nascem de Companhias, esta Companhia nasceu
              de um espectáculo estreado em 11.11.11. A Ópera ISTO nasceu assim,
              sem querer, numa data afiada e é uma companhia essencialmente
              dedicada a criar espectáculos de ópera para o público
              infanto-juvenil e família. Paralelamente, realizamos workshops e
              oficinas criativas e performativas. A Companhia colabora
              estreitamente com o Serviço Educativo da Casa da Música.
            </p>
          </b-col>
        </b-row>
        <!-- direita -->
        <b-row align-v="center" class="mt-5">
          <b-col
            style="text-align: right;"
            order="1"
            class="d-flex justify-content-end pr-4 animate__animated animate__fadeInLeft animate__delay-1s"
            sm="12"
            md="6"
            lg="6"
            xl="6"
            ><ul>
              <li>
                <p>Serena Serenata (2021)</p>
              </li>
              <li>
                <p>O Olho Esquerdo de Júlio Verne (2020)</p>
              </li>
              <li>
                <p>O Pica-Pau Amarelo (2019)</p>
              </li>
              <li>
                <p>O Pica-Pau Amarelo (2019)</p>
              </li>
              <li>
                <p>To Be or Not to Britten (2017)</p>
              </li>
              <li>
                <p>A Rolha da Garrafa do Rei d’Aonde? (2016)</p>
              </li>
              <li>
                <p>Alibabá e as 40 Canções (2014)</p>
              </li>
              <li>
                <p>O que é uma Ária? (2012)</p>
              </li>
            </ul></b-col
          >
          <b-col
            order-md="1"
            class="d-flex justify-content-start pl-4 animate__animated animate__fadeInRight animate__delay-1s"
            sm="12"
            md="6"
            lg="6"
            xl="6"
            ><h6 class="title">O que criámos com ISTO…</h6></b-col
          >
        </b-row>
        <!-- esquerda -->
        <b-row align-v="center" class="mt-5">
          <b-col
            class="d-flex justify-content-end pr-4 animate__animated animate__fadeInLeft animate__delay-2s"
            ><h6 sm="12" md="6" lg="6" xl="6" class="title">
              Por onde temos passado com ISTO…
            </h6></b-col
          >
          <b-col
            class="d-flex justify-content-start pl-4 animate__animated animate__fadeInRight animate__delay-2s"
            style="text-align: left;"
            sm="12"
            md="6"
            lg="6"
            xl="6"
            ><p>
              Casa da Música, Porto; Casa da Artes de Famalicão; Teatro Almeida
              Garrett, Póvoa de Varzim; Auditório do CMC, Coimbra; Auditório de
              Perafita; Auditório Municipal de Arganil; Teatro Lethes, Faro;
              Auditório Municipal de Espinho; Biblioteca Municipal da Lousã;
              Teatro Nacional de São Carlos, Lisboa; Teatro das Figuras; Faro;
              Teatro Municipal da Póvoa de Varzim; Auditório Municipal de Tábua,
              Teatro Municipal de Vila Real; Quartel das Artes da Bairrada;
              Teatro Diogo de Bernardes, Ponte de Lima; Teatro José Lúcio da
              Silva, Leiria; Festival Internacional de Música de Sintra;
              Auditório Municipal de Gondomar.
            </p></b-col
          >
        </b-row>
        <!-- direita -->
        <b-row align-v="center" class="mt-5">
          <b-col
          style="text-align: right;"
            class="d-flex justify-content-center pr-4"
            order="1"
            sm="12"
            md="6"
            lg="6"
            xl="6"
            ><p>
              Ana Isabel Nogueira (figurinos e maquilhagem); Ana Paula Sousa
              (fundadora, directora de cena); Ângela Alves (soprano); Ângela
              Marques (actriz); Alexandre Reis (flautista); Associação Fio de
              Norte (formação); Carolina Magalhães (violinista); David Wyn Lloyd
              (violinista); Gabriel Neves (tenor); João Tiago Magalhães
              (fundador, pianista); José Lourenço (fundador, cantor, encenador);
              Lurdes Gomes (adereços) Mário João Alves (fundador, cantor,
              encenador); Meninos Cantores da Trofa (coro); Miguel Reis (tenor);
              Paula Cabral (figurinos); Paulina Sá Machado (soprano); Pedro
              Saraiva (fotografia e vídeo); Marta Figueroa (vídeo).
            </p></b-col
          >
          <b-col order-md="1" sm="12" md="6" lg="6" xl="6"
            ><h6 class="title d-flex justify-content-start pl-4">
              Quem faz disto ISTO…
            </h6></b-col
          >
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "companhia",
  components: {},
  data() {
    return {
      screenSize: 0,
    };
  },
  created() {
    this.screenSize = window.innerWidth;
  },
  //var w = window.innerWidth;
};
</script>

<style>
.companhia {
  margin-top: 15vh;
}

.animate__delay-2s {
  --animate-delay: 0.4s;
}
.animate__delay-1s {
  --animate-delay: 0.2s;
}
.title {
  font-weight: 400 !important;
  font-size: 1.5rem;
}
ul {
  padding: 0;
}
li {
  margin: 0;
  list-style-type: none;
}
li p {
  margin-bottom: 0.5vh;
}
</style>
