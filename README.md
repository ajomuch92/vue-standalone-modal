
# Vue Standalone Modal

A package to allow autoinject components to use as modals instead of use them into template.




## Installation

Install vue-standalone-modal with NPM

```bash
  npm install vue-standalone-modal
```

And use it into your main file

```javascript
import Vue from 'vue';

import VueStandAloneModal from 'vue-standalone-modal';

Vue.use(VueStandAloneModal);
```
## Example

When you want to use a component as modal, you usually do something this:

```html
<template>
    <div>
        ...
        <MyModalComponent :show="showModal" />
        ...
    </div>
</template>

<script>
import MyModalComponent from 'MyModalComponent.vue';

export default {
    name: 'App',
    components: {
        MyModalComponent
    },
    data: () => ({
        showModal: false,
    }),
};
</script>
```

But after installing this package, you can replace this code by this:

```html
<script>
import MyModalComponent from 'MyModalComponent.vue';

export default {
    name: 'App',
    methods: {
        showModal() {
            this.$showModal({
                parent: this, // required
                component: MyModalComponent, // required
                props: {
                    prop1: value1
                },
                events: {
                    event: (paylod) => {
                        
                    }
                },
                innerStyle: {}, // style to use inside the main container div
                innerClass: 'my-class', // to pass a class to use inside the main container
                showCloseButton: true // by default true. If false, your custom component needs its own style
            });
        }
    }
};
</script>
```

And avoiding to use your custom modal component into the template. See a full example [here](https://github.com/ajomuch92/vue-standalone-modal/tree/main/example)

**IT'S COMPATIBLE WITH ALL LIBRARIES AND COMPONENTS FOR VueJS v2**


## Author

- [@ajomuch92](https://www.github.com/ajomuch92)

Feel free to open a PR or create an issue to contribute to this package.

