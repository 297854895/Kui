<template>
  <ul
    :class="`k-page-wrap k-page-wrap-${type} ${radius ? 'k-page-radius' : ''}`">
    <li
      class="k-page-item k-page-arrow"
      @click="onchange(current - 1)">
      <a
        :class="`k-page-item-a k-page-item-a-${current === 1 ? 'disable' : 'enable'} k-page-size-${size}`">
        <i class="iconkui icon-angleleft"></i>
      </a>
    </li><li
      class="k-page-item"
      v-for="(item, idx) in pageArr"
      @click="onchange(item.num)">
      <a
        v-if="typeof item.num === 'number'"
        :class="`k-page-item-a k-page-size-${size} ${item.num === current ? 'k-page-item-a-active' : 'k-page-item-a-enable'}`">
        {{ item.num }}
      </a><a
        v-else
        :class="`k-page-item-a k-page-more k-page-size-${size} ${item.num === current ? 'k-page-item-a-active' : 'k-page-item-a-enable'}`">
        <i class="iconkui icon-ellipsis k-page-ellipsis"></i>
        <i v-if="item.type === 'prev'" class="iconkui icon-angle-double-left k-page-more-icon" @click="more('prev')"></i>
        <i v-else class="iconkui icon-angledoubleright k-page-more-icon" @click="more('next')"></i>
      </a>
    </li><li
      class="k-page-item k-page-arrow"
      @click="onchange(current + 1)">
      <a
        :class="`k-page-item-a k-page-item-a-${current === Math.ceil(total / pageSize) ? 'disable' : 'enable'} k-page-size-${size}`">
        <i class="iconkui icon-angleright"></i>
      </a>
    </li>
  </ul>
</template>
<script>
  export default{
    name: 'k-page',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      options: {
        type: Object,
        default: () => {return {pageSize: 10, current: 1, total: 0};}
      },
      size: {
        type: String,
        default: 'normal'
      },
      radius: {
        type: Boolean,
        default: true
      },
      onChange: {
        type: Function
      }
    },
    data() {
      const pageArr = this.createPageArr(this.options);
      return {
        pageArr: pageArr,
        moreClick: false,
        ...this.options
      }
    },
    watch: {
      current(newValue) {
        if (this.moreClick) {
          setTimeout(() => {
            this.moreClick = false;
          }, 50);
        }
        this.pageArr = this.createPageArr({current: newValue, pageSize: this.pageSize, total: this.total});
        if (this.onChange && typeof this.onChange === 'function') {
          this.onChange(newValue);
        }
      }
    },
    methods: {
      onchange(page) {
        if (this.moreClick) return;
        if (page < 1 || page > Math.ceil(this.total / this.pageSize)) return;
        if (page === this.current) return;
        if (typeof page === 'number') {
          this.current = page;
        }
      },
      more(type) {
        this.moreClick = true;
        const totalPage = Math.ceil(this.total / this.pageSize);
        if (type === 'next') {
          if (this.current > totalPage - 5) {
            this.current = totalPage;
            return;
          }
          this.current += 5;
          return;
        }
        if (this.current - 5 <= 0) {
          this.current = 1;
          return;
        }
        this.current -= 5;
      },
      createPageArr(options) {
        const { pageSize, current, total } = options;
        let next = true;
        let prev = true;
        if (total <= pageSize) {
          next = false;
        }
        if (total <= 1) {
          prev = false;
        }
        const totalPage = !next ? 1 : Math.ceil(total / pageSize);
        const pageArr = [];
        const pageArrLength = totalPage > 7 ? 7 : totalPage;
        if (totalPage <= 7) {
          for (let num = 0; num < pageArrLength; num ++) {
            pageArr.push({num: num + 1});
          }
          return pageArr;
        }
        pageArr.push({num: 1});
        if (current >= 5) {
          pageArr.push({num: '...', type: 'prev'});
          if (current <= totalPage - 4) {
            for (let num = 0; num < 3; num ++) {
              pageArr.push({num: current - 1 + num});
            }
            pageArr.push({num: '...', type: 'next'});
          } else {
            for (let num = 0; num < 4; num ++) {
              pageArr.push({num: totalPage - 4 + num });
            }
          }
          pageArr.push({num: totalPage});
          return pageArr
        }
        for (let num = 0; num < 4; num ++) {
          pageArr.push({num: num + 2});
        }
        pageArr.push({num: '...', type: 'next'});
        pageArr.push({num: totalPage});
        return pageArr
      }
    }
  }
</script>
