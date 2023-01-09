export class FooBar {
  get foo() {
    return this.__foo;
  }

  get bar() {
    return this.__bar;
  }

  set foo(foo) {
    this.__foo = foo;
  }

  set bar(bar) {
    this.__bar = bar;
  }
}
