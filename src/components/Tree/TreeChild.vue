<template>
  <ul>
    <li v-for="(each, idx) in childrenData" :treeIdx="idx">
      <span class="k-tree-each">
        <span :class="`k-tree-arr k-tree-${each.childrenShow ? 'close' : 'on'}`" @click.stop="toggleTree(idx)">
          <i v-if="each.children && each.children.length > 0" class="fa fa-caret-right"></i>
        </span>
        <span v-if="checkShow" :class="`k-tree-check ${each.checked === 'all' || each.checked ? 'k-tree-check-active' : ''}`" :k-key="each.key" @click.stop="treeCheck(idx, each.children && each.children.length > 0)">
          <i :class="`fa ${each.checked === 'all' ? 'fa-minus' : (each.checked ? 'fa-check' : '')}`"></i>
        </span>
        <span @click.stop="nodeClick(each, idx)" :class="`${treeNodeClick ? 'k-tree-node-cursor' : ''}`">{{each.text}}</span>
      </span>
      <k-tree-child :checkChange="checkChange ? checkChange : ''" :treeNodeClick="treeNodeClick ? treeNodeClick : ''" :checkShow="checkShow" v-show="each.childrenShow" :treeRoot="treeRoot" v-if="each.children && each.children.length > 0" :children="each.children"></k-tree-child>
    </li>
  </ul>
</template>
<script>
  import childTem from './TreeChild.vue';
  export default{
    name: 'k-tree-child',
    components: {
      'k-tree-child': childTem
    },
    props: {
      children: {
        type: Array
      },
      treeRoot: {
        type: Object
      },
      checkShow: {
        type: Boolean
      },
      treeNodeClick: {
        type: [Function, String]
      },
      checkChange: {
        type: [Function, String]
      },
      checkChangeOutPut: {
        type: String
      }
    },
    mounted() {
      this.$on(`k-tree-parent-get-event-${this._uid}`, (data) => {
        if (data.total === 'empty') {
          this.$data.childrenData[data.idx].checked = false;
          this.emitStatus();
          return;
        }
        if (data.total) {
          this.$data.childrenData[data.idx].checked = true;
          this.emitStatus();
          return;
        }
        this.$data.childrenData[data.idx].checked = 'all';
        this.emitStatus();
      });
      this.$on(`k-tree-parent-get-check-${this._uid}`, (data) => {
        if (this.$parent.tree) {
          this.outPutCheck(this.parseVueData(this.filterCheck()));
          return;
        }
        const parentIndex = this.$el.parentNode.getAttribute('treeIdx');
        this.$parent.$emit(`k-tree-parent-get-check-${this.$parent._uid}`, {idx: parentIndex});
      });
    },
    data() {
      return {
        childrenData: this.children
      }
    },
    methods: {
      outPutCheck(data) {
        if (!this.checkChange || typeof(this.checkChange) !== 'function') return;
        this.checkChange(data);
      },
      recursionCheck(data) {
        const newChild = [];
        data.forEach((each) => {
          if (each.checked) {
            const newEach = each;
            if (newEach.children && newEach.children.length > 0) {
              newEach.children = this.recursionCheck(newEach.children);
            }
            newChild.push(newEach);
          }
        });
        return newChild;
      },
      filterCheck() {
        const filterData = this.$data.childrenData.map((each) => {
          return each;
        });
        return this.recursionCheck(filterData);
      },
      parseVueData(data) {
        if (data && typeof(data) === 'object') {
          return JSON.parse(JSON.stringify(data))
        }
      },
      checkedChange() {
        if (this.$parent.tree) {
          const checkArr = [];
          this.$data.childrenData.forEach((each) => {
            if (each.checked) {
              checkArr.push(each);
            }
          });
          if (checkArr.length > 0 ) {
            this.outPutCheck(this.parseVueData(checkArr));
            return;
          }
          this.outPutCheck(null);
          return;
        }
        const parentIndex = this.$el.parentNode.getAttribute('treeIdx');
        this.$parent.$emit(`k-tree-parent-get-check-${this.$parent._uid}`, {idx: parentIndex});
      },
      nodeClick(data, idx) {
        this.toggleTree(idx);
        if (!this.treeNodeClick || typeof(this.treeNodeClick) !== 'function') return;
        this.treeNodeClick(this.parseVueData(data));
      },
      emitStatus() {
        if (this.$parent.tree) return;
        const parentIndex = this.$el.parentNode.getAttribute('treeIdx');
        this.$parent.$emit(`k-tree-parent-get-event-${this.$parent._uid}`, {total: this.isAll(), idx: parentIndex});
      },
      recursionData(data, flag) {
        data = data.map((each) => {
          each.checked = flag;
          if (each.children && each.children.length > 0) {
            this.recursionData(each.children, flag);
          }
          return each;
        });
      },
      treeCheck(idx, hasChild) {
        if (!hasChild) {
          this.$data.childrenData[idx].checked = !this.$data.childrenData[idx].checked;
          this.emitStatus();
          if (this.checkChangeOutPut === 'tree') {
            this.checkedChange();
            return;
          }
          this.outPutCheck(this.parseVueData(this.$data.childrenData[idx]));
          return;
        }
        if (this.$data.childrenData[idx].checked === 'all' || !this.$data.childrenData[idx].checked) {
          this.$data.childrenData[idx].checked = true;
          this.recursionData(this.$data.childrenData[idx].children, true);
          this.emitStatus();
          if (this.checkChangeOutPut === 'tree') {
            this.checkedChange();
            return;
          }
          this.outPutCheck(this.parseVueData(this.$data.childrenData[idx]));
          return;
        }
        if (this.$data.childrenData[idx].checked) {
          this.$data.childrenData[idx].checked = false;
          this.recursionData(this.$data.childrenData[idx].children, false);
          this.emitStatus();
          if (this.checkChangeOutPut === 'tree') {
            this.checkedChange();
            return;
          }
          this.outPutCheck(this.parseVueData(this.$data.childrenData[idx]));
        }
      },
      toggleTree(idx) {
        this.$data.childrenData[idx].childrenShow = !this.$data.childrenData[idx].childrenShow;
      },
      isAll() {
        let flag = true;
        let emptyFlag = true;
        let allFlag = false;
        this.$data.childrenData.forEach((each) => {
          if (!each.checked) {
            flag = false;
          }
          if (each.checked) {
            emptyFlag = false;
          }
          if (each.checked === 'all') {
            allFlag = true;
          }
        });
        if (allFlag) {
          return false;
        }
        if (emptyFlag) {
          return 'empty'
        }
        return flag;
      }
    }
  }
</script>
