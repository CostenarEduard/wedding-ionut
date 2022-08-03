<template>
  <div id="story" class="our-story">
    <div class="container">
      <div class="row">
        <p>Ne-au vegheat mereu pașii și ne-au fost alături părinții,</p>
        <div class="content">
          <p>Ioan și Corina</p>
          <p>Ovidiu și Simona</p>
        </div>
        <img src="@/assets/images/branch.jpeg" alt="olive branch">
        <p>Iar de acum înainte ne vor fi alături ca părinți spirituali, nașii noștri,</p>
        <div class="content">
          <p>Ionuț și Maria Chira</p>
          <p>Mădălin și Anca Mudura</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .our-story {
    padding: 60px 0;
    background-color: var(--color-background-white);
    .container {
      .row {
        display: flex;
        flex-direction: column;
        img {
          width: 200px;
          transition: 0.5s;
          margin: auto;
          padding: 15px 0;
        }
        p {
          text-align: center;
          font-size: 30px;
          font-family: "BeauRivage-Regular", cursive;
        }
        .content {
          display: flex;
          justify-content: space-around;
          padding-top: 20px;
          p {
            font-family: serif;
            font-weight: 500;
            font-size: 18px;
          }
        }
        .box {
          &:first-child {
            width: 40%;
            height: 100%;
            &:before {
              content: '';
              position: absolute;
              top: 30px;
              right: 0;
              left: 45px;
              bottom: 0;
              border: 10px solid var(--color-background-gold);
              box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
            }
            img {
              padding: 0 30px 25px 0;
              width: 100%;
              object-fit: cover;
              position: relative;
            }
          }
          &:last-child {
            width: 60%;
            padding-left: 20px;
            .header-bottom {
              font-family: serif;
              color: var(--color-text-light-black);
              font-size: 25px;
              letter-spacing: 1px;
              text-transform: uppercase;
              margin-bottom: 20px;
            }
            p {
              margin: 0 0 20px;
              line-height: 1.8;
              color: var(--color-text-strong-grey);
              font-family: sans-serif;
            }
          }
        }
      }
    }
  }

  @media (max-width: 600px) {
    .our-story .container .row {
      flex-direction: column;
      .box {
        &:first-child {
          width: 92%;
          margin: 0 20px 20px;
        }
        &:last-child {
          width: 100%;
          padding-top: 10px;
          padding-right: 20px;
        }
      }
    }
  }
</style>