<template>
  <span :class="`k-tree k-tree-${type === 'primary' ? 'primary' : 'default'} ${check === 'true' ? '' : 'k-tree-no-check'}`">
    <k-tree-child :checkChangeOutPut="checkChangeOutPut === 'tree' ? 'tree' : 'node'" :checkChange="checkChange ? checkChange : ''" :children="treeData" :treeRoot="this" :checkShow="check === 'true'" :treeNodeClick="treeNodeClick ? treeNodeClick : ''"></k-tree-child>
  </span>
</template>
<script>
  import childTem from './TreeChild.vue';

  export default{
    name: 'k-tree',
    components: {
      'k-tree-child': childTem
    },
    props: {
      tree: {
        type: Array,
        default: () => {
          return [];
        }
      },
      checkChange: {
        type: Function
      },
      type: {
        type: String,
        default: 'default'
      },
      check: {
        type: String,
        default: 'true'
      },
      treeNodeClick: {
        type: Function
      },
      checkChangeOutPut: {
        type: String,
        default: 'tree'
      }
    },
    data() {
      const treeD = this.handleTreeData(this.tree);
      return {
        treeData: treeD
      }
    },
    methods: {
      handleTreeData(data) {
        let forData = data.map((each) => {
          return this.recursionData(each);
        });
        return forData;
      },
      recursionData(data) {
        if (!data.childrenShow) {
          data.childrenShow = false;
        }
        if (!data.checked) {
          data.checked = false;
        }
        if (data.children && data.children.length > 0) {
          data.children.forEach((each) => {
            this.recursionData(each);
          });
        }
        return data;
      }
    }
  }
</script>
