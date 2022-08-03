<template>
  <section class="confirmation-section">
    <div class="container">
      <div class="row">
        <h5>Vă rugăm să ne confirmați prezența până la data de 09.09.2022</h5>
      </div>
      <div class="row bottom">
        <h3>Ionuț - <a href="tel:0743528551">0743528551</a></h3>
        <h3>Camelia - <a href="tel:0742378886">0742378886</a></h3>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .confirmation-section {
    position: relative;
    .container {
      padding: 100px 0;
      background: url(/src/assets/images/form-bg-2996x2000.jpg) no-repeat scroll center;
      background-size: cover;
      .row {
        &.bottom {
          margin-top: 100px;
        }
        padding: 0 30px;
        h5 {
          font-family: "BeauRivage-Regular", cursive;
          color: var(--color-text-white);
          font-size: 60px;
          text-align: center;
          line-height: 1;
          text-shadow: 3px 1px 4px var(--color-text-black);
          padding-top: 10px;
        }
        h3 {
          margin-top: 20px;
          line-height: 1;
          font-size: 25px;
          font-weight: 500;
          text-align: center;
          color: var(--color-text-white);
          text-shadow: 3px 1px 4px var(--color-text-black);
          a {
            color: var(--color-text-white);
            text-shadow: 3px 1px 4px var(--color-text-black);
            cursor: pointer;
            text-decoration: none;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .confirmation-section  .container {
      padding: 50px 0;
      .row {
        h5 {
          font-size: 35px;
        }
        h3 {
          font-size: 20px;
        }
      }
    }
  }
</style>