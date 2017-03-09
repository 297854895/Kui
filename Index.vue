<template>
  <div id="app">
    <!-- Button -->
    <!-- <k-button icon="fa fa-search" :disable="true">Search</k-button>
    <k-button
     :bindAttr="{
         id: 'id',
       }">123</k-button>
    <k-button icon="fa fa-search"></k-button>
    <k-button icon="fa fa-search" shape="circle" type="info"></k-button>
    <k-button icon="fa fa-chrome" size="mini">Admin</k-button>
    <k-button icon="fa fa-chrome" size="small">Admin</k-button>
    <k-button icon="fa fa-chrome">Admin</k-button>
    <k-button icon="fa fa-chrome" size="large">Admin</k-button>
    <div style="height: 20px;"></div>
    <k-button icon="fa fa-chrome">Admin</k-button>
    <k-button icon="fa fa-chrome" type="info">Admin</k-button>
    <k-button icon="fa fa-chrome" type="primary">Admin</k-button>
    <k-button icon="fa fa-chrome" type="success">Admin</k-button>
    <k-button icon="fa fa-chrome" type="warning">Admin</k-button>
    <k-button icon="fa fa-chrome" type="danger">Admin</k-button>
    <k-button icon="fa fa-chrome" type="dashed">Admin</k-button>
    <k-button icon="fa fa-chrome" type="ghost">Admin</k-button>
    <k-button type="text">Admin</k-button>
    <div style="height: 20px;"></div>
    <k-button icon="fa fa-chrome" type="danger" width="200px" size="large">Admin</k-button>
    <div style="height: 20px;"></div>
    <k-button :loading="buttonStat" @click="click" icon="fa fa-chrome">{{buttonLabel}}</k-button> -->
    <!-- DropDown -->
    <div style="height: 20px;"></div>
    <k-dropdown>
      <k-dropdown-item
       icon="fa fa-chrome">
       One___zxcccccccccccccccccccccccccccccccccccccccccccc</k-dropdown-item>
      <k-dropdown-item>One___</k-dropdown-item>
      <k-dropdown-item>One___</k-dropdown-item>
      <k-dropdown-item>One___</k-dropdown-item>
    </k-dropdown>
    <div style="height: 20px;"></div>
    <k-dropdown
      :oneMenu="true"
      type="success">
      <k-dropdown-item
       icon="fa fa-chrome">
       One___zxcccccccccccccccccccccccccccccccccccccccccccc</k-dropdown-item>
      <k-dropdown-item>One___</k-dropdown-item>
      <k-dropdown-item>One___</k-dropdown-item>
      <k-dropdown-item>One___</k-dropdown-item>
    </k-dropdown>
    <div style="height: 20px;"></div>
    <k-dropdown
      eventType="hover"
      buttonName="Hover">
      <k-dropdown-item>One___</k-dropdown-item>
      <k-dropdown-item>One___</k-dropdown-item>
      <k-dropdown-item>One___</k-dropdown-item>
      <k-dropdown-item>One___</k-dropdown-item>
    </k-dropdown>
    <div style="height: 20px;"></div>
    <k-dropdown type="text" eventType="hover">
      <k-dropdown-item>One___</k-dropdown-item>
      <k-dropdown-item>One___</k-dropdown-item>
      <k-dropdown-item>One___</k-dropdown-item>
      <k-dropdown-item>One___</k-dropdown-item>
    </k-dropdown>
    <!-- ButtonGroup -->
    <!-- <div style="height: 20px;"></div>
    <k-button-group>
      <k-button icon="fa fa-chrome">Left</k-button>
      <k-button icon="fa fa-chrome">Middle</k-button>
      <k-button icon="fa fa-chrome">Middle</k-button>
      <k-button icon="fa fa-heart"></k-button>
    </k-button-group>
    <div style="height: 20px;"></div>
    <k-button-group :radius="false">
      <k-button icon="fa fa-chrome">Left</k-button>
      <k-button icon="fa fa-chrome">Middle</k-button>
      <k-button icon="fa fa-chrome">Middle</k-button>
      <k-button icon="fa fa-heart"></k-button>
    </k-button-group>
    <div style="height: 20px;"></div>
    <k-button-group>
      <k-dropdown>
        <k-dropdown-item>One___</k-dropdown-item>
        <k-dropdown-item>One___</k-dropdown-item>
        <k-dropdown-item>One___</k-dropdown-item>
        <k-dropdown-item>One___</k-dropdown-item>
      </k-dropdown>
      <k-button icon="fa fa-chrome">Left</k-button>
      <k-button icon="fa fa-chrome">Middle</k-button>
      <k-dropdown>
        <k-dropdown-item>One___</k-dropdown-item>
        <k-dropdown-item>One___</k-dropdown-item>
        <k-dropdown-item>One___</k-dropdown-item>
        <k-dropdown-item>One___</k-dropdown-item>
      </k-dropdown>
      <k-button icon="fa fa-chrome">Middle</k-button>
      <k-button icon="fa fa-heart"></k-button>
      <k-dropdown>
        <k-dropdown-item>One___</k-dropdown-item>
        <k-dropdown-item>One___</k-dropdown-item>
        <k-dropdown-item>One___</k-dropdown-item>
        <k-dropdown-item>One___</k-dropdown-item>
      </k-dropdown>
    </k-button-group>
    <div style="height: 20px;"></div>
    <k-button-group :radius="false">
      <k-dropdown>
        <k-dropdown-item>One___</k-dropdown-item>
        <k-dropdown-item>One___</k-dropdown-item>
        <k-dropdown-item>One___</k-dropdown-item>
        <k-dropdown-item>One___</k-dropdown-item>
      </k-dropdown>
      <k-button icon="fa fa-chrome">Left</k-button>
      <k-button icon="fa fa-chrome">Middle</k-button>
      <k-dropdown>
        <k-dropdown-item>One___</k-dropdown-item>
        <k-dropdown-item>One___</k-dropdown-item>
        <k-dropdown-item>One___</k-dropdown-item>
        <k-dropdown-item>One___</k-dropdown-item>
      </k-dropdown>
      <k-button icon="fa fa-chrome">Middle</k-button>
      <k-button icon="fa fa-heart"></k-button>
      <k-dropdown>
        <k-dropdown-item>One___</k-dropdown-item>
        <k-dropdown-item>One___</k-dropdown-item>
        <k-dropdown-item>One___</k-dropdown-item>
        <k-dropdown-item>One___</k-dropdown-item>
      </k-dropdown>
    </k-button-group> -->
    <!-- Switch -->
    <!-- <k-switch
     :status="switchStat"
     @click="toggleSwitch"/>
    <k-switch
     :disable="true"/> -->
  </div>
</template>
<script>
  export default {
    data() {
      return {
        buttonStat: false,
        buttonLabel: 'Start Loading',
        switchStat: false
      }
    },
    methods: {
      click() {
        this.buttonStat = !this.buttonStat;
        if (this.buttonStat) {
          this.buttonLabel = 'Stop Loading';
          return;
        }
        this.buttonLabel = 'Start Loading';
      },
      toggleSwitch() {
        this.switchStat = !this.switchStat;
      }
    }
  }
</script>
<style>
  body{
    font-family:  "Lucida Grande", Lucida Sans Unicode, Hiragino Sans GB, WenQuanYi Micro Hei, Verdana, Aril, sans-serif;
    -webkit-font-smoothing: antialiased;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: 14px;
    margin: 0px;
    /*background: #eee;*/
    overflow: hidden;
    padding: 20px;
  }
</style>
