<script setup>
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n() // use as global scope
  const namePlaceholder = t('confirmationSection.form.namePlaceholder')
  const phonePlaceholder = t('confirmationSection.form.phonePlaceholder')
  const messagePlaceholder = t('confirmationSection.form.messagePlaceholder')
</script>

<template>
  <section id="confirmation-of-participation" class="confirmation-section">
    <div class="container">
      <div class="row">
        <div class="form-container">
          <div class="header-top">{{ t('confirmationSection.topHeader') }}</div>
          <div class="header-bottom">{{ t('confirmationSection.bottomHeader') }}</div>
          <form action="https://formsubmit.co/costenar.eduard@gmail.com" method="POST">
            <input type="text" name="name" :placeholder="namePlaceholder" required>
            <input type="text" name="phone" :placeholder="phonePlaceholder" required>
            <textarea name="message" rows="5" :placeholder="messagePlaceholder" required></textarea>
            <button type="submit">{{ t('confirmationSection.form.sendButton') }}</button>
          </form>
        </div>
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
        padding: 0 30px;
        .form-container {
          background-color: var(--color-background-white);
          max-width: 400px;
          margin: auto;
          width: 100%;
          padding: 30px;
          .header-top {
            font-family: "BeauRivage-Regular", cursive;
            font-size: 30px;
            color: var(--color-text-gold);
            text-align: center;
          }
          .header-bottom {
            text-align: center;
            max-width: 250px;
            margin: auto;
            font-family: serif;
            color: var(--color-text-light-black);
            font-size: 18px;
            line-height: 1.5;
          }
          form {
            display: flex;
            flex-direction: column;
            margin-top: 20px;
            input {
              margin-bottom: 15px;
              padding: 12px 15px;
              font-size: 15px;
              border: 1px solid var(--color-text-medium-grey);
            }
            textarea {
              margin-bottom: 15px;
              padding: 12px 15px;
              font-size: 15px;
              border: 1px solid var(--color-text-medium-grey);
              resize: vertical;
              font-family: sans-serif;
            }
            button {
              padding: 15px 30px;
              text-transform: uppercase;
              letter-spacing: 2px;
              margin: auto;
              border: 1px solid var(--color-background-gold);
              background-color: var(--color-background-gold);
              color: var(--color-text-white);
              transition: ease-in-out .15s;
              cursor: pointer;
              &:hover {
                color: var(--color-text-black);
                background-color: var(--color-background-white);
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .countdown-section .container {

    }
  }
</style>