<template>
  <div :class="`k k-check-box k-check-box-${type === 'primary' ? 'primary' : 'default'} k-check-box-${checkType === 'mut' ? 'Mut' : 'Radio'}`">
    <span v-for="each in this.$data._checkData" class="k-check-box-check-wrap">
      <span @click="check(checkType, each.key)" :class="`k-check-box-check k-check-box-check-${checkType === 'radio' ? 'radio' : 'mut'}`">
        <div ref="checkEach" :class="`${each.checked ? 'k-check-box-check-mut-active' : ''}`" v-if="checkType === 'mut'"><i class="fa fa-check"></i></div>
        <div ref="checkEach" v-else :class="`k-check-box-radio-circle ${each.checked ? 'k-check-box-check-radio-active' : ''}`"></div>
      </span>{{each.name}}
    </span><span class="k-check-box-check-wrap" v-if="checkType === 'mut' && all === 'true'">
      <span @click="checkAll" class="k-check-box-check k-check-box-check-mut">
        <div :class="`${this.$data._All ? 'k-check-box-check-mut-active' : ''}`"><i class="fa fa-check"></i></div>
      </span>全选</span>
  </div>
</template>
<script>
  export default {
    name: 'k-check-box',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      checkType: {
        type: String,
        default: 'radio'
      },
      checkData: {
        type: Array,
        default: () => {
          return [];
        }
      },
      checkChange: {
        type: Function
      },
      all: {
        type: String,
        default: 'false'
      }
    },
    data() {
      return {
        _checkData: this.checkData,
        _All: false,
        Checked: ''
      }
    },
    watch: {
      Checked: function(newValue) {
        if (!this.checkChange || typeof(this.checkChange) !== 'function') return;
        if (!newValue) {
          this.checkChange(null);
          return;
        }
        if (!newValue.length) {
          //radio
          this.checkChange({
            key: newValue.key ? newValue.key : '',
            name: newValue.name ? newValue.name : ''
          });
        } else {
          const arr = [];
          newValue.forEach((each)=>{
            arr.push({
              key: each.key,
              name: each.name
            });
          })
          this.checkChange(arr);
        }
      }
    },
    methods: {
      check(action, key) {
        const newCheck = [];
        const checkedArr = [];
        let checkedLength = 0;
        let flag;
        this.$data._checkData.forEach((each, idx)=>{
          if (each.key === key) {
            each.checked = !each.checked;
          }else {
            if (action === 'radio') {
              each.checked = false;
            }
          }
          if (each.checked) {
            checkedLength += 1;
            if (action === 'radio') {
              this.$data.Checked = each;
            }
            if (action === 'mut') {
              checkedArr.push(each);
            }
            flag = true;
          }
          if (idx === this.$data._checkData.length - 1 && !flag) {
             this.$data.Checked = null;
          }
          newCheck.push(each);
        });
        if (checkedLength < this.$data._checkData.length) {
          this.$data._All = false;
        } else {
          this.$data._All = true;
        }
        this.$data._checkData = newCheck;
        if (action === 'mut') {
          if (checkedArr.length > 0) {
            this.$data.Checked = checkedArr;
          }
        }
      },
      checkAll() {
        const newCheck = [];
        this.$data._All = !this.$data._All;
        let checkedLength = 0;
        this.$data._checkData.forEach((each, idx)=>{
          if (this.$data._All) {
            each.checked = true;
          } else {
            each.checked = false;
          }
          newCheck.push(each);
        });
        this.$data._checkData = newCheck;
        if (this.$data._All) {
          this.$data.Checked = this.$data._checkData;
        } else {
          this.$data.Checked = '';
        }
      }
    }
  }
</script>
