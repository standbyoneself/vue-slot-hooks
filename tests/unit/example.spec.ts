import { mount } from '@vue/test-utils';

const Parent = {
  mounted() {
    console.log('Parent has mounted');
  },
  template: `
    <div>
      <p>I am a parent</p>
      <slot />
    </div>
  `,
};

const Child = {
  mounted() {
    console.log('Child has mounted');
  },
  template: '<p>I am a child</p>',
  // render() {
  //   return '<p>I am a child</p>';
  // },
};

describe('Parent', () => {
  it("doesn't call Child lifecycle hooks", () => {
    mount(Parent, {
      slots: {
        default: Child,
      },
    });
  });

  it('calls Child lifecycle hooks', () => {
    mount({
      components: { Parent, Child },
      template: `
        <Parent>
          <Child />
        </Parent>
      `,
    });
  });
});
