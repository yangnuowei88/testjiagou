# Sticky 悬浮

用来快速实现悬浮展示。

## 使用方式

按需加载引用方式：

```javascript
import { Sticky } from '@sddz/components';

export default {
  components: {
    Sticky
  }
};
```

## 代码演示

```html
/*vue*/
<desc>
  `s-sticky` 组件使用展示
</desc>

<template>
  <div>
    <s-sticky :z-index="10" class-name="sub-navbar">
      <el-dropdown trigger="click">
        <el-button plain style="width: 150px">
          Platform<i class="el-icon-caret-bottom el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown" class="no-border">
          <el-checkbox-group v-model="platforms" style="padding: 5px 15px">
            <el-checkbox
              v-for="item in platformsOptions"
              :key="item.key"
              :label="item.key"
            >
              {{ item.name }}
            </el-checkbox>
          </el-checkbox-group>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown trigger="click">
        <el-button plain>
          Link<i class="el-icon-caret-bottom el-icon--right"></i>
        </el-button>
        <el-dropdown-menu
          slot="dropdown"
          class="no-padding no-border"
          style="width: 300px"
        >
          <el-input v-model="url" placeholder="Please enter the content">
            <template slot="prepend"> Url </template>
          </el-input>
        </el-dropdown-menu>
      </el-dropdown>

      <div class="time-container">
        <el-date-picker
          v-model="time"
          type="datetime"
          format="yyyy-MM-dd HH:mm:ss"
          placeholder="Release time"
          style="width: 300px"
        />
      </div>

      <el-button style="margin-left: 10px" type="success"> publish </el-button>
    </s-sticky>

    <div class="components-container">
      <aside>Sticky header, 当页面滚动到预设的位置会吸附在顶部</aside>
      <div>这里是占位符</div>
      <div>这里是占位符</div>
      <div>这里是占位符</div>
      <div>这里是占位符</div>
      <div>这里是占位符</div>
      <div>这里是占位符</div>
      <div>这里是占位符</div>
      <div>这里是占位符</div>
      <div>这里是占位符</div>
      <div>这里是占位符</div>
      <div>这里是占位符</div>
      <div>这里是占位符</div>
      <div>这里是占位符</div>
      <s-sticky :sticky-top="150">
        <el-button type="primary"> Sticky Button</el-button>
      </s-sticky>
      <div>这里是占位符</div>
      <div>这里是占位符</div>
      <div>这里是占位符</div>
      <div>这里是占位符</div>
      <div>这里是占位符</div>
      <div>这里是占位符</div>
      <div>这里是占位符</div>
      <div>这里是占位符</div>
      <div>这里是占位符</div>
      <div>这里是占位符</div>
      <div>这里是占位符</div>
      <div>这里是占位符</div>
      <div>这里是占位符</div>
      <div>这里是占位符</div>
      <div>这里是占位符</div>
      <div>这里是占位符</div>
      <div>这里是占位符</div>
      <div>这里是占位符</div>
      <div>这里是占位符</div>
      <div>这里是占位符</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'StickyDemo',
    data() {
      return {
        time: '',
        url: '',
        platforms: ['a-platform'],
        platformsOptions: [
          { key: 'a-platform', name: 'platformA' },
          { key: 'b-platform', name: 'platformB' },
          { key: 'c-platform', name: 'platformC' }
        ],
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
        }
      };
    }
  };
</script>

<style scoped>
  .components-container div {
    margin: 10px;
  }

  .time-container {
    display: inline-block;
  }
  .sub-navbar {
    width: 100%;
    background: #20b6f9;
  }
</style>
```

## API

| 参数      | 说明                   | 类型   | 默认值 |
| --------- | ---------------------- | ------ | ------ |
| stickyTop | 距离顶部开始悬浮       | number | `0`    |
| zIndex    | 图层高度               | number | `1`    |
| appendTo  | 悬浮参照物，滚动的元素 | string | -      |
| className | 自定义 class           | string | -      |
