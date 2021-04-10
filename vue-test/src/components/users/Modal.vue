<template>
  <b-modal
    id="new-user-modal"
    title="Добавить сотрудника"
    @hidden="dropModal"
    @ok="submitForm"
  >
    <b-form>
      <b-form-group label="ФИО" label-for="new-user-name">
        <b-form-input
          id="new-user-name"
          v-model="form.name"
          type="text"
          placeholder="Иван Иванов Иванович"
        ></b-form-input>
        <b-form-invalid-feedback :state="errors.name">
          {{ errors.name }}
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-group label="Телефон" label-for="new-user-phone">
        <b-form-input
          id="new-user-phone"
          v-model="form.phone"
          type="number"
          placeholder="89991112233"
        ></b-form-input>
        <b-form-invalid-feedback :state="errors.phone">
          {{ errors.phone }}
        </b-form-invalid-feedback>
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

      this.form.name = '';
      this.form.phone = null;
      this.form.parentId = null;
    },
    checkForm() {
      this.errors = {};

      if (this.form.name && this.form.phone) {
        return true;
      }

      if (!this.checkName) {
        this.errors.name = 'Требуется ввести имя';
      }

      if (!this.checkPhone) {
        this.errors.phone = 'Требуется ввести телефон';
      }
    },
    checkPhone() {
      const re = /^((\+7|7|8)+([0-9]){10})$/;
      console.log(re.test(this.phone))
      return re.test(this.form.phone);
    },
    checkName() {
      const re = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
      console.log(re.test(this.name))
      return re.test(this.form.name);
    },
    submitForm() {
      this.checkForm();
      if (Object.keys(this.errors).length) return;
      this.$emit('saveUser', this.form);
    }
  },
};
</script>
