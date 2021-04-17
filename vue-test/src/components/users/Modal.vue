<template>
  <b-modal
    id="new-user-modal"
    title="Добавить сотрудника"
    ref="newUserModal"
    hide-footer
    @hidden="dropModal"
  >
    <b-form>
      <b-form-group label="ФИО" label-for="new-user-name" class="modal__validated-form-group">
        <b-form-input
          id="new-user-name"
          :state="nameIsValid"
          v-model="form.name"
          @focus="clearInputErrors"
          @blur="validateName"
          name="name"
          autocomplete="off"
          type="text"
          placeholder="Иван Иванов Иванович"
        ></b-form-input>
        <span class="text-danger modal__error-message" v-if="errors.name">
          {{ errors.name }}
        </span>
      </b-form-group>
      <b-form-group label="Телефон" label-for="new-user-phone" class="modal__validated-form-group">
        <b-form-input
          id="new-user-phone"
          :state="phoneIsValid"
          v-model="form.phone"
          @focus="clearInputErrors"
          @blur="validatePhone"
          name="phone"
          autocomplete="off"
          type="text"
          placeholder="89991112233"
        ></b-form-input>
        <span class="text-danger modal__error-message" v-if="errors.phone">
          {{ errors.phone }}
        </span>
      </b-form-group>
      <b-form-group
        label="Руководитель"
        label-for="new-user-parent"
        v-if="parentOptions.length"
      >
        <b-form-select v-model="form.parentId" :options="parentOptions">
          <template #first>
            <b-form-select-option :value="null">Выберите руководителя</b-form-select-option>
          </template>
        </b-form-select>
      </b-form-group>
      
      <div class="text-right">
        <b-button class="mt-2 mr-2" variant="outline-success" inline-block type="submit" @click.prevent="submitForm">Создать</b-button>
        <b-button class="mt-2" variant="outline-danger" inline-block @click="dropModal">Отмена</b-button>
      </div>
    </b-form>
  </b-modal>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    parentOptions: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      errors: {},
      nameIsValid: null,
      phoneIsValid: null,
      form: {
        name: '',
        phone: '',
        parentId: null,
        childrenUsers: [],
      },
    };
  },
  methods: {
    dropModal() {
      this.$bvModal.hide('new-user-modal');

      this.errors = {};
      this.nameIsValid = null;
      this.phoneIsValid = null;
      this.$set(this.form, 'name', '');
      this.$set(this.form, 'phone', '');
      this.$set(this.form, 'parentId', null);
    },
    submitForm() {
      if (!this.formIsValid()) return;

      this.$emit('saveUser', this.form);
      this.dropModal();
    },
    formIsValid() {
      this.validateName()
      this.validatePhone()

      return !Object.keys(this.errors).length;
    },
    clearInputErrors(e) {
      this[`${e.target.name}IsValid`] = null;
      this.$delete(this.errors, e.target.name);
    },
    validateName() {
      if (!this.form.name.length) {
        this.$set(this.errors, 'name', 'Требуется ввести ФИО');
        this.nameIsValid = false;
        return;
      }

      if (this.form.name.length > 200) {
        this.$set(this.errors, 'name', 'ФИО не может быть длинее 200');
        this.nameIsValid = false;
        return;
      }
      
      this.nameIsValid = true;
    },
    validatePhone() {
      const re = /^((\+7|7|8)+([0-9]){10})$/;

      if (!this.form.phone.length) {
        this.$set(this.errors, 'phone', 'Требуется ввести телефон');
        this.phoneIsValid = false;
        return;
      }

      if (!re.test(this.form.phone)) {
        this.$set(this.errors, 'phone', 'Телефон введен некорректно');
        this.phoneIsValid = false;
        return;
      }
      
      this.phoneIsValid = true;
    },
  },
};
</script>

<style lang="scss">
.modal {
  &__validated-form-group {
    height: 90px;
  }

  &__error-message {
    font-size: 12px;
  }
}
</style>