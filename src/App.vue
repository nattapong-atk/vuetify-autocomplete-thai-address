<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12">
            <h1 class="text-center">
              VUETIFY AUTOCOMPLETE THAI ADDRESS
            </h1>
          </v-col>
        </v-row>
        <v-row class="mt-10">
          <v-col cols="6">
            <v-address-field
              v-model="addressForm.subDistrict"
              label="ตำบล"
              type="sub-district"
              @select="onSelectAddress($event)" />
          </v-col>
          <v-col :cols="6">
            <v-address-field
              v-model="addressForm.district"
              label="อำเภอ"
              type="district"
              @select="onSelectAddress($event)" />
          </v-col>
          <v-col :cols="6">
            <v-address-field
              v-model="addressForm.provice"
              label="จังหวัด"
              type="provice"
              @select="onSelectAddress($event)" />
          </v-col>
          <v-col :cols="6">
            <v-address-field
              v-model="addressForm.postcode"
              label="รหัสไปรษณีย์"
              type="postcode"
              @select="onSelectAddress($event)" />
          </v-col>
        </v-row>
        <v-row class="mt-15">
          <v-col cols="12">
            <v-card class="pa-6">
              <h3 class="mb-4">
                SHOW DATA
              </h3>
              <p> subDistrict : {{ addressForm.subDistrict }}</p>
              <p> district : {{ addressForm.district }}</p>
              <p> provice : {{ addressForm.provice }}</p>
              <p> postcode : {{ addressForm.postcode }}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import VAddressField from '@/components/VAddressField.vue'

export default {
  name: 'App',
  components: {
    VAddressField
  },
  data () {
    return {
      addressForm: {
        subDistrict: '',
        district: '',
        provice: '',
        postcode: ''
      }
    }
  },
  methods: {
    onSelectAddress (address) {
      this.addressForm.subDistrict = address?.subDistrict || ''
      this.addressForm.district = address?.district || ''
      this.addressForm.provice = address?.provice || ''
      this.addressForm.postcode = address?.postcode || ''
    }
  }
}
</script>
