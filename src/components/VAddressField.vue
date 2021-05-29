<template>
  <v-menu v-bind="menuProps">
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="innerValue"
        v-bind="$attrs"
        type="text"
        autocomplete="false"
        hide-details
        v-on="on" />
    </template>
    <v-list>
      <template v-if="items.length > 0">
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="clickSelectItem(item)"
          @keydown.enter="clickSelectItem(item)">
          <v-list-item-title>
            <span
              v-for="(text, i) in textTemplate"
              :key="`${text}-${i}`"
              :class="{'font-bold': text === innerType}">
              <span
                v-if="i !== 0"
                class="mx-2">
                >
              </span>
              <span>
                {{ item[text] || '' }}
              </span>
            </span>
          </v-list-item-title>
        </v-list-item>
      </template>
      <v-list-item v-else>
        <v-list-item-title>No data</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { searchAddressByDistrict, searchAddressByAmphoe, searchAddressByProvince, searchAddressByZipcode } from 'thai-address-database'

export default {
  props: {
    value: {
      type: [String, Object],
      default: ''
    },
    type: {
      type: String,
      required: true,
      validator: (type) => [
        'sub-district',
        'district',
        'province',
        'postcode'
      ].some((t) => t === type)
    },
    rules: {
      type: [String, Object],
      default: null
    },
    menuProps: {
      type: Object,
      default: () => ({
        maxHeight: 304,
        offsetY: true,
        offsetOverflow: true,
        transition: false
      })
    }
  },
  data () {
    return {
      textTemplate: [
        'district',
        'amphoe',
        'province',
        'zipcode'
      ]
    }
  },
  computed: {
    innerValue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    },
    innerType () {
      switch (this.type) {
        case 'sub-district': return 'district'
        case 'district': return 'amphoe'
        case 'province': return 'province'
        case 'postcode': return 'zipcode'
        default: return null
      }
    },
    items () {
      if (this.innerValue) {
        switch (this.innerType) {
          case 'district': return searchAddressByDistrict(this.innerValue) || []
          case 'amphoe': return searchAddressByAmphoe(this.innerValue) || []
          case 'province': return searchAddressByProvince(this.innerValue) || []
          case 'zipcode': return searchAddressByZipcode(this.innerValue) || []
          default: return []
        }
      }
      return []
    }
  },
  methods: {
    clickSelectItem (item) {
      this.$emit('select', {
        subDistrict: item?.district || '',
        district: item?.amphoe || '',
        province: item?.province || '',
        postcode: item?.zipcode || ''
      })
    }
  }
}
</script>

<style scoped>
.font-bold {
  font-weight: 700;
}
</style>
