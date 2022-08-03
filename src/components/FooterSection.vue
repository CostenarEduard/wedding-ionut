<template>
  <section class="footer-section">
    <div class="container">
      <div class="row">
        <img src="@/assets/images/branch.jpeg" alt="olive branch">
        <h3>Vă așteptăm cu drag!</h3>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  section {
    padding: 90px 30px;
    background: var(--color-background-white);
    .container .row {
      text-align: center;
      img {
        width: 90px;
        margin-bottom: 0;
        transition: 0.5s;
      }
      h3 {
        font-family: 'BeauRivage-Regular', cursive;
        font-size: 30px;
        color: var(--color-text-black);
        transition: 0.5s;
        line-height: 1;
        margin-bottom: 12px;
      }
      p {
        font-family: serif;
        font-size: 18px;
        font-style: italic;
        color: var(--color-text-strong-grey);
        margin: 0 0 20px;
      }
    }
  }
</style>