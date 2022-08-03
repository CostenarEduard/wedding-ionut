<template>
  <section id="where-and-when" class="organization-section">
    <div class="container">
      <div class="row">
        <div class="header-bottom">Detaliie Evenimentului</div>
        <div class="menu-container">
          <div class="card">
            <div class="img-container">
              <img src="@/assets/images/img-ionut-2.jpg" alt="Ceremony">
            </div>
            <div class="text-container">
              <h4>Cununia religioasa</h4>
              <p class="text"><span class="pin"></span>Biserica Ortodoxa Învierea Domnului -Mihai Eminescu- Calea Clujului, Nr. 202-204 Oradea</p>
              <p class="text"><span class="clock"></span>14:30</p>
            </div>
          </div>
          <div class="card">
            <div class="img-container">
              <img src="@/assets/images/Wedding-560x300.jpg" alt="Ceremony">
            </div>
            <div class="text-container">
              <h4>Petrecere de nuntă</h4>
              <p class="text"><span class="pin"></span>Calea Aradului, Nr. 91A, Oradea, în apropierea magazinului Dedeman</p>
              <p class="text"><span class="clock"></span>16:00</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <h5 id="confirmation-of-participation">Confirmare</h5>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .organization-section {
    padding: 60px 0 20px;
    background-color: var(--color-background-grey);
    .container .row {
      h5 {
        font-family: "BeauRivage-Regular", cursive;
        color: #63153a;
        font-size: 60px;
        text-align: center;
        line-height: 1;
        padding-top: 60px;
      }
      .header-bottom {
        font-family: serif;
        color: var(--color-text-light-black);
        font-size: 25px;
        letter-spacing: 1px;
        text-transform: uppercase;
        margin-bottom: 20px;
      }
      .menu-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
        .card {
          width: 100%;
          background-color: var(--color-background-white);
          box-shadow: rgb(0 0 0 / 10%) 0 4px 12px;
          display: flex;
          flex-direction: column;
          .img-container {
            max-height: 200px;
            height: 100%;
            max-width: 560px;
            overflow: hidden;
            flex: 1;
            img {
              &:first-child {
                object-position: 0px -135px;
              }
              &:last-child {
                object-position: center;
              }
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: transform .2s;
              &:hover {
                transform: scale(1.1);
              }
            }
          }
          .text-container {
            padding: 10px 20px 20px 20px;
            cursor: default;
            h4 {
              font-family: serif;
              color: var(--color-text-light-black);
              font-size: 18px;
              letter-spacing: 1px;
              text-transform: uppercase;
              text-align: center;
              margin-bottom: 10px;
            }
            .text {
              line-height: 1.8;
              color: var(--color-text-strong-grey);
              font-family: sans-serif;
              &:last-child {
                margin-top: 10px;
              }
              .pin  {
                margin: 0 5px 0 0;
                width: 15px;
                height: 15px;
                display: inline-block;
                background-image: url('@/assets/svg/map-pin.svg');
                background-repeat: no-repeat;
                background-size: cover;
                filter: invert(59%) sepia(67%) saturate(275%) hue-rotate(356deg) brightness(90%) contrast(94%);
              }
              .clock  {
                margin: 0 5px 0 1px;
                width: 15px;
                height: 15px;
                display: inline-block;
                background-image: url('@/assets/svg/clock.svg');
                background-repeat: no-repeat;
                background-size: cover;
                filter: invert(59%) sepia(67%) saturate(275%) hue-rotate(356deg) brightness(90%) contrast(94%);
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 550px) {
    .organization-section .container .row {
      text-align: center;
      margin: 0 20px;
      h5 {
        font-size: 40px;
        line-height: 1;
      }
      .menu-container {
        grid-template-columns: 1fr;
        text-align: center;
        grid-gap: 20px;
      }
    }
  }
</style>