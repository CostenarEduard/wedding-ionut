<template>
  <div class="date-section">
    <div class="container">
      <div class="row">
        <h5>Suntem nerăbdători să vă avem alături</h5>
        <h3>25.09.2022</h3>
      </div>
      <div class="row">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .date-section {
    position: relative;
    .container {
      min-height: 400px;
      background: url(/src/assets/images/img-ionut.jpg) no-repeat scroll center;
      background-size: cover;
      position: relative;
      .row {
        height: 300px;
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
          line-height: 1;
          font-size: 60px;
          font-weight: 500;
          text-align: center;
          color: var(--color-text-white);
          text-shadow: 3px 1px 4px var(--color-text-black);
        }
      }
    }
  }

  @media (max-width: 768px) {
    .date-section .container {
      min-height: 300px;
      .row {
        height: 150px;
        h5 {
          font-size: 40px;
          line-height: 1;
        }
        h3 {
          font-size: 32px;
        }
      }
    }
  }
</style>