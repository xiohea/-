import { observable , action } from 'mobx-miniprogram'

export const store = observable({
  // 定义数据
  numA:1,
  numB:1,
  get sum(){
    return this.numA + this.numB
  },
  updataNumA:action(function(step){
    this.numA += step
  }),
  updataNumB:action(function(step){
    this.numB += step
  }),
})